import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { headers } from 'next/headers';

// GET - Kullanıcının kendi satışlarını getir
export async function GET(request: Request) {
  try {
    // URL parametrelerini al
    const { searchParams } = new URL(request.url);
    const month = searchParams.get('month');
    const year = searchParams.get('year');
    
    console.log('GET /api/sales çağrıldı - month:', month, 'year:', year);
    
    // Header'dan kullanıcı ID'sini al
    const headersList = await headers();
    const userId = headersList.get('x-user-id');
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Kullanıcının rolünü ve yetkili markalarını al
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        authorizedBrands: {
          include: {
            brand: true
          }
        }
      }
    });
    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    // Rol bazlı filtreleme için kullanıcı ID'lerini belirle
    let authorizedUserIds = [userId]; // Varsayılan olarak sadece kendi ID'si
    
    if (user.role === 'SATIS_MUDURU') {
      // Satış Müdürü: Aynı markadaki Satış Danışmanlarının satışlarını da görebilir
      try {
         const userBrandIds = user.authorizedBrands?.map((ub: any) => ub.brandId) || [];
         
         if (userBrandIds.length > 0) {
           // Aynı markalara yetkili olan Satış Danışmanlarını bul
           const samebrandUsers = await prisma.userBrand.findMany({
             where: {
               brandId: {
                 in: userBrandIds
               }
             },
             include: {
               user: true
             }
           });
          
          authorizedUserIds = samebrandUsers
            .filter((ub: any) => ub.user.role === 'SATIS_DANISMANI' || ub.user.id === userId)
            .map((ub: any) => ub.user.id);
        }
      } catch (error) {
        console.log('UserBrand operations not available yet:', error);
        // UserBrand modeli henüz yoksa sadece kendi satışlarını göster
        authorizedUserIds = [userId];
      }
    }
    
    // Tarih filtreleme için where koşulunu hazırla
    let dateFilter = {};
    if (month && year) {
      // purchaseDate string formatında (YYYY-MM-DD) olduğu için string karşılaştırması yapıyoruz
      const yearStr = year.toString();
      const monthStr = month.toString().padStart(2, '0');
      const startDateStr = `${yearStr}-${monthStr}-01`;
      const endDay = new Date(parseInt(year), parseInt(month), 0).getDate();
      const endDateStr = `${yearStr}-${monthStr}-${endDay.toString().padStart(2, '0')}`;
      
      dateFilter = {
        purchaseDate: {
          gte: startDateStr,
          lte: endDateStr
        }
      };
    }
    
    // Kullanıcının eklediği satışları getir
    const sales = await prisma.sale.findMany({
      where: {
        createdBy: {
          in: authorizedUserIds
        },
        ...dateFilter
      },
      include: {
        customer: {
          select: {
            id: true,
            name: true,
            tcNo: true
          }
        },
        createdByUser: {
          select: {
            id: true,
            name: true,
            username: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    // Kurumsal satışları da getir
    const corporateSales = await prisma.corporateSale.findMany({
      where: {
        createdBy: {
          in: authorizedUserIds
        },
        ...dateFilter
      },
      include: {
        customer: {
          select: {
            id: true,
            name: true,
            taxNumber: true
          }
        },
        createdByUser: {
          select: {
            id: true,
            name: true,
            username: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    // Satışları birleştir ve frontend formatına çevir
    const allSales = [
      ...sales.map((sale: any) => ({
        id: sale.id,
        customerId: sale.customerId,
        customerName: sale.customer.name,
        customerType: 'individual' as const,
        identificationNumber: sale.customer.tcNo,
        model: sale.model,
        chassisNo: sale.chassisNo,
        engineNo: sale.engineNo,
        purchaseDate: sale.purchaseDate,
        salePrice: sale.salePrice,
        purchasePrice: sale.purchasePrice,
        contributionAmount: sale.contributionAmount,
        mtvCost: sale.mtvCost,
        licensePlateCost: sale.licensePlateCost,
        color: sale.color,
        packageId: sale.packageId,
        packageName: sale.packageName,
        date: sale.purchaseDate,
        createdAt: sale.createdAt // createdAt'i de ekle
      })),
      ...corporateSales.map((sale: any) => ({
        id: sale.id,
        customerId: sale.customerId,
        customerName: sale.customer.name,
        customerType: 'corporate' as const,
        identificationNumber: sale.customer.taxNumber,
        model: sale.model,
        chassisNo: sale.chassisNo,
        engineNo: sale.engineNo,
        purchaseDate: sale.purchaseDate,
        salePrice: sale.salePrice,
        purchasePrice: sale.purchasePrice,
        contributionAmount: sale.contributionAmount,
        mtvCost: sale.mtvCost,
        licensePlateCost: sale.licensePlateCost,
        color: sale.color,
        packageId: sale.packageId,
        packageName: sale.packageName,
        date: sale.purchaseDate,
        createdAt: sale.createdAt // createdAt'i de ekle
      }))
    ];
    
    // Tarihe ve saate göre sırala (yeniden eskiye doğru)
    // Önce purchaseDate'e göre, sonra createdAt'e göre sırala
    allSales.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      
      // Eğer tarihler aynıysa, createdAt'e göre sırala (saat bazında)
      if (dateA.getTime() === dateB.getTime()) {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
      
      // Tarih bazında sıralama (yeniden eskiye)
      return dateB.getTime() - dateA.getTime();
    });
    
    console.log('Returning sales data, count:', allSales.length);
    return NextResponse.json(allSales);
  } catch (error) {
    console.error('Error fetching sales:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Yeni satış ekle
export async function POST(request: Request) {
  try {
    // Middleware'den gelen kullanıcı ID'sini al
    const headersList = await headers();
    const userId = headersList.get('x-user-id');
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Kullanıcı kimliği bulunamadı' },
        { status: 401 }
      );
    }

    const data = await request.json();
    console.log('POST /api/sales - Gelen veri:', JSON.stringify(data, null, 2));
    
    const {
      customerId,
      customerType,
      model,
      chassisNo,
      engineNo,
      purchaseDate,
      salePrice,
      purchasePrice,
      contributionAmount,
      mtvCost,
      licensePlateCost,
      color,
      saleType,
      packageId,
      packageName,
      extraAmount,
      otvRate,
      kdvRate
    } = data;

    // Zorunlu alanları kontrol et
    console.log('Zorunlu alan kontrolü:', {
      customerId: !!customerId,
      customerType: !!customerType,
      model: !!model,
      chassisNo: !!chassisNo,
      engineNo: !!engineNo,
      purchaseDate: !!purchaseDate,
      salePrice: !!salePrice,
      purchasePrice: !!purchasePrice,
      color: !!color
    });
    
    if (!customerId || !customerType || !model || !chassisNo || !engineNo || !purchaseDate || !salePrice || !purchasePrice || !color) {
      const missingFields = [];
      if (!customerId) missingFields.push('customerId');
      if (!customerType) missingFields.push('customerType');
      if (!model) missingFields.push('model');
      if (!chassisNo) missingFields.push('chassisNo');
      if (!engineNo) missingFields.push('engineNo');
      if (!purchaseDate) missingFields.push('purchaseDate');
      if (!salePrice) missingFields.push('salePrice');
      if (!purchasePrice) missingFields.push('purchasePrice');
      if (!color) missingFields.push('color');
      
      console.log('Eksik alanlar:', missingFields);
      return NextResponse.json(
        { error: `Eksik alanlar: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    let newSale;
    
    if (customerType === 'individual') {
      // Bireysel müşteri satışı
      const customer = await prisma.customer.findFirst({
        where: {
          id: customerId,
          createdBy: userId
        }
      });
      
      if (!customer) {
        return NextResponse.json(
          { error: 'Müşteri bulunamadı veya erişim yetkiniz yok' },
          { status: 404 }
        );
      }
      
      newSale = await prisma.sale.create({
        data: {
          customerId,
          model,
          chassisNo,
          engineNo,
          purchaseDate,
          salePrice: parseFloat(salePrice),
          purchasePrice: parseFloat(purchasePrice),
          contributionAmount: parseFloat(contributionAmount || 0),
          mtvCost: parseFloat(mtvCost || 0),
          licensePlateCost: parseFloat(licensePlateCost || 0),
          color,
          saleType: saleType || null,
          packageId: packageId || null,
          packageName: packageName || null,
          extraAmount: extraAmount ? parseFloat(extraAmount) : null,
          otvRate: otvRate ? parseFloat(otvRate) : null,
          kdvRate: kdvRate ? parseFloat(kdvRate) : null,
          createdBy: userId
        },
        include: {
          customer: {
            select: {
              id: true,
              name: true,
              tcNo: true
            }
          }
        }
      });
    } else {
      // Kurumsal müşteri satışı
      const customer = await prisma.corporateCustomer.findFirst({
        where: {
          id: customerId,
          createdBy: userId
        }
      });
      
      if (!customer) {
        return NextResponse.json(
          { error: 'Kurumsal müşteri bulunamadı veya erişim yetkiniz yok' },
          { status: 404 }
        );
      }
      
      newSale = await prisma.corporateSale.create({
        data: {
          customerId,
          model,
          chassisNo,
          engineNo,
          purchaseDate,
          salePrice: parseFloat(salePrice),
          purchasePrice: parseFloat(purchasePrice),
          contributionAmount: parseFloat(contributionAmount || 0),
          mtvCost: parseFloat(mtvCost || 0),
          licensePlateCost: parseFloat(licensePlateCost || 0),
          color,
          saleType: saleType || null,
          packageId: packageId || null,
          packageName: packageName || null,
          extraAmount: extraAmount ? parseFloat(extraAmount) : null,
          otvRate: otvRate ? parseFloat(otvRate) : null,
          kdvRate: kdvRate ? parseFloat(kdvRate) : null,
          createdBy: userId
        },
        include: {
          customer: {
            select: {
              id: true,
              name: true,
              taxNumber: true
            }
          }
        }
      });
    }

    return NextResponse.json(newSale, { status: 201 });
  } catch (error) {
    console.error('Error creating sale:', error);
    return NextResponse.json(
      { error: 'Satış oluşturulurken bir hata oluştu' },
      { status: 500 }
    );
  }
}
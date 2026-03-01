import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { headers } from 'next/headers';

// GET - Kullanıcının kendi kurumsal müşterilerini getir
export async function GET(request: Request) {
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

    // URL'den arama parametrelerini al
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');

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

    // Vergi no ile arama yapılıyorsa tüm sistemdeki kurumsal müşterileri ara
    // Aksi halde rol bazlı filtreleme yap
    const whereClause: any = {};

    if (search) {
      // Vergi no ile arama yapılıyorsa tüm kurumsal müşterilerde ara
      whereClause.taxNumber = {
        contains: search,
        mode: 'insensitive'
      };
    } else {
      // Rol bazlı filtreleme
      if (user.role === 'SATIS_MUDURU') {
        // Satış Müdürü: Aynı markadaki Satış Danışmanlarının kurumsal müşterilerini de görebilir
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
            
            const authorizedUserIds = samebrandUsers
               .filter((ub: any) => ub.user.role === 'SATIS_DANISMANI' || ub.user.id === userId)
               .map((ub: any) => ub.user.id);
            
            whereClause.createdBy = {
              in: authorizedUserIds
            };
          } else {
            // Yetkili marka yoksa sadece kendi kurumsal müşterilerini göster
            whereClause.createdBy = userId;
          }
        } catch (error) {
          console.log('UserBrand operations not available yet:', error);
          // UserBrand modeli henüz yoksa sadece kendi kurumsal müşterilerini göster
          whereClause.createdBy = userId;
        }
      } else {
        // Diğer roller: Sadece kendi kurumsal müşterilerini görebilir
        whereClause.createdBy = userId;
      }
    }

    const corporateCustomers = await prisma.corporateCustomer.findMany({
      where: whereClause,
      include: {
        sales: true,
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

    return NextResponse.json(corporateCustomers);
  } catch (error) {
    console.error('Error fetching corporate customers:', error);
    return NextResponse.json(
      { error: 'Kurumsal müşteriler getirilirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

// POST - Yeni kurumsal müşteri ekle
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

    // Zorunlu alanları kontrol et
    console.log('Gelen veri:', data);
    if (!data.name || !data.taxNumber || !data.taxOffice || !data.phone) {
      console.log('Eksik alanlar:', {
        name: !data.name,
        taxNumber: !data.taxNumber,
        taxOffice: !data.taxOffice,
        phone: !data.phone
      });
      return NextResponse.json(
        { error: 'Firma adı, vergi numarası, vergi dairesi ve telefon alanları zorunludur' },
        { status: 400 }
      );
    }

    // Vergi no ile mükerrer kayıt kontrolü
    const existingCorporateCustomer = await prisma.corporateCustomer.findUnique({
      where: { taxNumber: data.taxNumber }
    });

    if (existingCorporateCustomer) {
      return NextResponse.json(
        { error: 'Bu vergi numarası ile kayıtlı kurumsal müşteri sistemde bulunmaktadır' },
        { status: 400 }
      );
    }

    // Bugünün tarihini al
    const today = new Date();
    const formattedDate = `${today.getDate().toString().padStart(2, '0')}.${(today.getMonth() + 1).toString().padStart(2, '0')}.${today.getFullYear()}`;

    // Yeni kurumsal müşteri oluştur
    const newCorporateCustomer = await prisma.corporateCustomer.create({
      data: {
        name: data.name,
        taxNumber: data.taxNumber,
        taxOffice: data.taxOffice,
        email: data.email.toLowerCase(),
        phone: data.phone,
        address: data.address,
        cityId: data.cityId,
        districtId: data.districtId,
        authorizedPerson: data.authorizedPerson || null,
        registerDate: formattedDate,
        createdBy: userId
      },
      include: {
        createdByUser: {
          select: {
            id: true,
            name: true,
            username: true
          }
        }
      }
    });

    return NextResponse.json(newCorporateCustomer, { status: 201 });
  } catch (error) {
    console.error('Error creating corporate customer:', error);
    return NextResponse.json(
      { error: 'Kurumsal müşteri oluşturulurken bir hata oluştu' },
      { status: 500 }
    );
  }
}
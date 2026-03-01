import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { headers } from 'next/headers';
import { customerSchema } from '../../../../lib/validation';
import { securityScanner } from '../../../../lib/security-validators';

// GET - Kullanıcının kendi müşterilerini getir
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const tcNo = searchParams.get('tcNoSearch');
    
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
    
    // TC Kimlik No ile arama yapılıyorsa tüm sistemdeki müşterileri ara
    // Aksi halde rol bazlı filtreleme yap
    const whereClause: any = {};
    
    if (tcNo) {
      // TC No ile arama yapılıyorsa tüm müşterilerde ara
      whereClause.tcNo = {
        contains: tcNo,
        mode: 'insensitive'
      };
    } else {
      // Rol bazlı filtreleme
      if (user.role === 'SATIS_MUDURU') {
        // Satış Müdürü: Aynı markadaki Satış Danışmanlarının müşterilerini de görebilir
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
            // Yetkili marka yoksa sadece kendi müşterilerini göster
            whereClause.createdBy = userId;
          }
        } catch (error) {
          console.log('UserBrand operations not available yet:', error);
          // UserBrand modeli henüz yoksa sadece kendi müşterilerini göster
          whereClause.createdBy = userId;
        }
      } else {
        // Diğer roller: Sadece kendi müşterilerini görebilir
        whereClause.createdBy = userId;
      }
    }
    
    const customers = await prisma.customer.findMany({
      where: whereClause,
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return NextResponse.json(customers);
  } catch (error) {
    console.error('Error fetching customers:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Yeni müşteri ekle
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

    // Güvenlik taraması - XSS ve SQL injection kontrolü
    const securityScan = securityScanner.scanForThreats(JSON.stringify(data));
    if (!securityScan.safe) {
      console.warn('Security threats detected:', securityScan.threats);
      return NextResponse.json(
        { error: 'Güvenlik tehdidi tespit edildi. Lütfen girdiğinizi kontrol edin.' },
        { status: 400 }
      );
    }

    // Zod validation
    const validation = customerSchema.safeParse(data);
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.issues.map(issue => issue.message).join(', ') },
        { status: 400 }
      );
    }

    const validatedData = validation.data;
    
    // Input sanitization
    const sanitizedData = {
      ...validatedData,
      name: securityScanner.sanitizeInput(validatedData.name),
      email: securityScanner.sanitizeInput(validatedData.email),
      phone: securityScanner.sanitizeInput(validatedData.phone),
      tcNo: securityScanner.sanitizeInput(validatedData.tcNo)
    };

    // TC kimlik no ile mükerrer kayıt kontrolü
    const existingCustomer = await prisma.customer.findUnique({
      where: { tcNo: sanitizedData.tcNo }
    });

    if (existingCustomer) {
      return NextResponse.json(
        { error: 'Bu TC kimlik numarası ile kayıtlı müşteri sistemde bulunmaktadır' },
        { status: 400 }
      );
    }

    // Bugünün tarihini al
    const today = new Date();
    const formattedDate = `${today.getDate().toString().padStart(2, '0')}.${(today.getMonth() + 1).toString().padStart(2, '0')}.${today.getFullYear()}`;

    // Yeni müşteri oluştur
    const newCustomer = await prisma.customer.create({
      data: {
        name: sanitizedData.name,
        email: sanitizedData.email,
        phone: sanitizedData.phone,
        tcNo: sanitizedData.tcNo,
        birthDate: validatedData.birthDate || null,
        occupation: validatedData.occupation || null,
        address: validatedData.address || null,
        cityId: validatedData.cityId || null,
        districtId: validatedData.districtId || null,
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

    return NextResponse.json(newCustomer, { status: 201 });
  } catch (error) {
    console.error('Error creating customer:', error);
    return NextResponse.json(
      { error: 'Müşteri oluşturulurken bir hata oluştu' },
      { status: 500 }
    );
  }
}
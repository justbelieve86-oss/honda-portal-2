import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';

// Zod şeması: Marka oluşturma isteği için
const BrandSchema = z.object({
  name: z.string({
    required_error: 'Marka adı gereklidir.',
    invalid_type_error: 'Marka adı metin tipinde olmalıdır.',
  }).min(1, { message: 'Marka adı boş olamaz.' }),
});

export async function GET(request: Request) {
  try {
    console.log('GET /api/brands çağrıldı');
    
    // Tüm markaları getir (kullanıcı yönetimi için)
    const allBrands = await prisma.brand.findMany({
      include: {
        models: {
          include: {
            packages: true
          }
        }
      }
    });
    
    console.log(`${allBrands.length} marka başarıyla getirildi`);
    return NextResponse.json(allBrands);
  } catch (error: any) {
    console.error('Markalar getirilirken hata oluştu:', error);
    console.error('Hata detayı (stack):', error.stack);
    
    return NextResponse.json(
      { error: 'Markalar getirilirken bir hata oluştu', details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  let body;
  try {
    body = await request.json();
  } catch (error) {
    console.error('İstek body JSON parse hatası:', error);
    return NextResponse.json({ error: 'Geçersiz JSON formatı' }, { status: 400 });
  }

  console.log('POST /api/brands çağrıldı');
  console.log('İstek body:', body);

  // Middleware'den gelen user ID'yi al
  const userId = request.headers.get('x-user-id');
  
  if (!userId) {
    return NextResponse.json(
      { error: 'Kullanıcı kimliği bulunamadı' },
      { status: 401 }
    );
  }

  // Zod ile girdi doğrulaması
  const validation = BrandSchema.safeParse(body);

  if (!validation.success) {
    console.log('Zod validasyon hatası:', validation.error.errors);
    return NextResponse.json(
      { error: 'Geçersiz girdi.', issues: validation.error.format() },
      { status: 400 }
    );
  }

  // Doğrulanmış veriyi al
  const { name } = validation.data;

  try {
    // Marka adı benzersiz mi kontrol et
    console.log(`'${name}' markasını veritabanında kontrol ediliyor...`);
    const existingBrand = await prisma.brand.findUnique({
      where: { name }
    });
    
    if (existingBrand) {
      console.log(`'${name}' markası zaten mevcut, id: ${existingBrand.id}`);
      return NextResponse.json(
        { error: 'Bu marka adı zaten kullanılıyor' },
        { status: 400 }
      );
    }
    
    // Transaction ile marka oluştur ve kullanıcı yetkisi ekle
    console.log(`'${name}' markası oluşturuluyor ve kullanıcı yetkisi ekleniyor...`);
    const result = await prisma.$transaction(async (tx) => {
      // Yeni marka oluştur
      const brand = await tx.brand.create({
        data: { name },
        include: {
          models: {
            include: {
              packages: true
            }
          }
        }
      });
      
      // Kullanıcı-marka ilişkisi oluştur
      await tx.userBrand.create({
        data: {
          userId: userId,
          brandId: brand.id
        }
      });
      
      return brand;
    });
    
    console.log(`'${name}' markası başarıyla oluşturuldu ve kullanıcı yetkisi eklendi, id: ${result.id}`);
    return NextResponse.json(result, { status: 201 });
  } catch (error: any) {
    console.error('Marka oluşturulurken veritabanı hatası oluştu:', error);
    console.error('Hata detayı (stack):', error.stack);
    
    // Veritabanı hatalarını ayıkla (özellikle unique constraint)
    if (error.code === 'P2002' && error.meta?.target?.includes('name')) {
        return NextResponse.json(
          { error: 'Bu marka adı zaten kullanılıyor (unique constraint)' },
          { status: 400 }
        );
    }
    
    return NextResponse.json(
      { error: 'Marka oluşturulurken bir sunucu hatası oluştu', details: error.message, code: error.code },
      { status: 500 }
    );
  }
}
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';
import { Role } from '@prisma/client';

// Temel kullanıcıların eklenmesi için seed API
export async function POST(request: Request) {
  try {
    console.log('Kullanıcı seed işlemi başlatılıyor...');
    
    // Veritabanını kontrol et - eğer kullanıcı varsa, yeni kullanıcı eklemeyi atla
    const existingUserCount = await prisma.user.count();
    console.log(`Mevcut kullanıcı sayısı: ${existingUserCount}`);
    
    // Örnek kullanıcılar
    const sampleUsers = [
      {
        username: 'admin',
        email: 'admin@kardelen-otomotiv.com',
        name: 'Admin Kullanıcı',
        password: await bcrypt.hash('admin123', 10),
        role: Role.ADMIN
      },
      {
        username: 'genelmudurum',
        email: 'gm@kardelen-otomotiv.com',
        name: 'Genel Müdür',
        password: await bcrypt.hash('genelmudurum123', 10),
        role: Role.GENEL_MUDUR
      },
      {
        username: 'satismudurum',
        email: 'sm@kardelen-otomotiv.com',
        name: 'Satış Müdürü',
        password: await bcrypt.hash('satismudurum123', 10),
        role: Role.SATIS_MUDURU
      },
      {
        username: 'satisdanisman',
        email: 'sd@kardelen-otomotiv.com',
        name: 'Satış Danışmanı',
        password: await bcrypt.hash('satisdanisman123', 10),
        role: Role.SATIS_DANISMANI
      },
      {
        username: 'musterihizmet',
        email: 'mh@kardelen-otomotiv.com',
        name: 'Müşteri Hizmetleri',
        password: await bcrypt.hash('musterihizmet123', 10),
        role: Role.MUSTERI_ILISKILERI
      }
    ];
    
    let createdCount = 0;
    
    // Kullanıcıları ekle - sadece örnek kullanıcılar için kullanıcı adı veya e-posta yoksa
    for (const userData of sampleUsers) {
      // Kullanıcı adı veya e-posta zaten var mı kontrol et
      const existingUser = await prisma.user.findFirst({
        where: {
          OR: [
            { username: userData.username },
            { email: userData.email },
          ],
        },
      });
      
      if (!existingUser) {
        await prisma.user.create({
          data: userData
        });
        createdCount++;
        console.log(`Kullanıcı oluşturuldu: ${userData.username}`);
      } else {
        console.log(`Kullanıcı zaten mevcut, atlanıyor: ${userData.username}`);
      }
    }
    
    return NextResponse.json({
      success: true,
      message: `Seed işlemi tamamlandı. ${createdCount} yeni kullanıcı oluşturuldu.`,
      existingUsers: existingUserCount,
      addedUsers: createdCount
    });
  } catch (error: any) {
    console.error('Seed işlemi sırasında hata:', error);
    return NextResponse.json(
      { 
        error: 'Örnek kullanıcılar oluşturulurken bir hata oluştu',
        message: error.message
      },
      { status: 500 }
    );
  }
}
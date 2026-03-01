import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';

// GET - Tüm kullanıcıları getir
export async function GET(request: Request) {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        username: true,
        name: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Kullanıcıların yetkili markalarını ayrı olarak getir
    const usersWithBrands = await Promise.all(
      users.map(async (user) => {
        try {
          const userBrands = await prisma.userBrand.findMany({
            where: { userId: user.id },
            include: { brand: true },
          });
          return {
            ...user,
            authorizedBrands: userBrands.map((ub: any) => ub.brand),
          };
        } catch (error) {
          // UserBrand tablosu henüz mevcut değilse boş array döndür
          return {
            ...user,
            authorizedBrands: [],
          };
        }
      })
    );

    return NextResponse.json(usersWithBrands);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Kullanıcılar getirilirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

// POST - Yeni kullanıcı ekle
export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Zorunlu alanları kontrol et
    if (!data.username || !data.email || !data.name || !data.password || !data.role) {
      return NextResponse.json(
        { error: 'Tüm alanların doldurulması zorunludur' },
        { status: 400 }
      );
    }

    // Kullanıcı adı veya e-posta zaten var mı kontrol et
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { username: data.username },
          { email: data.email },
        ],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Bu kullanıcı adı veya e-posta zaten kullanılıyor' },
        { status: 400 }
      );
    }

    // Şifreyi hashle
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Yeni kullanıcı oluştur
    const newUser = await prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        name: data.name,
        password: hashedPassword,
        role: data.role,
      },
      select: {
        id: true,
        username: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    // Marka yetkilendirmelerini ayrı olarak ekle
    let authorizedBrands: any[] = [];
    if (data.authorizedBrandIds && data.authorizedBrandIds.length > 0) {
      try {
        await prisma.userBrand.createMany({
          data: data.authorizedBrandIds.map((brandId: string) => ({
            userId: newUser.id,
            brandId: brandId,
          })),
        });

        // Kullanıcının yetkili markalarını getir
        const userBrands = await prisma.userBrand.findMany({
          where: { userId: newUser.id },
          include: { brand: true },
        });
        authorizedBrands = userBrands.map((ub: any) => ub.brand);
      } catch (error) {
        console.log('UserBrand operations not available yet:', error);
      }
    }

    const formattedUser = {
      ...newUser,
      authorizedBrands,
    };

    return NextResponse.json(formattedUser, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { error: 'Kullanıcı oluşturulurken bir hata oluştu' },
      { status: 500 }
    );
  }
}
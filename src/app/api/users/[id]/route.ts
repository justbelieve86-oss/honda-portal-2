import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';

// GET - Belirli bir kullanıcıyı getir
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const userId = params.id;

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        email: true,
        username: true,
        name: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        // Şifre dışarıya açılmıyor
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Kullanıcı bulunamadı' },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { error: 'Kullanıcı getirilirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

// PUT - Kullanıcı güncelle
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const userId = params.id;
    const data = await request.json();

    // Kullanıcının var olup olmadığını kontrol et
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Kullanıcı bulunamadı' },
        { status: 404 }
      );
    }

    // Kullanıcı adı veya e-posta için benzersizlik kontrolü
    if (data.username !== user.username || data.email !== user.email) {
      const existingUser = await prisma.user.findFirst({
        where: {
          OR: [
            { username: data.username, id: { not: userId } },
            { email: data.email, id: { not: userId } },
          ],
        },
      });

      if (existingUser) {
        return NextResponse.json(
          { error: 'Bu kullanıcı adı veya e-posta zaten kullanılıyor' },
          { status: 400 }
        );
      }
    }

    // Güncelleme nesnesini oluştur
    const updateData: any = {
      username: data.username,
      email: data.email,
      name: data.name,
      role: data.role,
    };

    // Şifre varsa hashle ve ekle
    if (data.password && data.password.trim() !== '') {
      updateData.password = await bcrypt.hash(data.password, 10);
    }

    // Kullanıcıyı güncelle
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: updateData,
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

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json(
      { error: 'Kullanıcı güncellenirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

// DELETE - Kullanıcı sil
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const userId = params.id;

    // Kullanıcının var olup olmadığını kontrol et
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Kullanıcı bulunamadı' },
        { status: 404 }
      );
    }

    // Admin kullanıcısı silinmeye çalışılıyorsa engelle
    if (user.role === 'ADMIN') {
      return NextResponse.json(
        { error: 'Admin kullanıcısı silinemez' },
        { status: 403 }
      );
    }

    // Kullanıcıyı sil
    await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    return NextResponse.json({ message: 'Kullanıcı başarıyla silindi' });
  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json(
      { error: 'Kullanıcı silinirken bir hata oluştu' },
      { status: 500 }
    );
  }
} 
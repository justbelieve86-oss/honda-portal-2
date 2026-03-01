import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import prisma from '@/lib/prisma';
import { changePasswordSchema, validateRequest } from '@/lib/validation';
import { verifyPassword, hashPassword } from '@/lib/security';

export async function POST(request: Request) {
  try {
    // Kullanıcı kimlik doğrulaması
    const headersList = await headers();
    const userId = headersList.get('x-user-id');
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Kullanıcı kimliği bulunamadı' },
        { status: 401 }
      );
    }

    const body = await request.json();
    
    // Zod validation
    const validation = validateRequest(changePasswordSchema, body);
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const { currentPassword, newPassword } = validation.data;

    // Kullanıcıyı veritabanından al
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Kullanıcı bulunamadı' },
        { status: 404 }
      );
    }

    // Mevcut şifreyi doğrula
    const isCurrentPasswordValid = await verifyPassword(currentPassword, user.password);
    
    if (!isCurrentPasswordValid) {
      return NextResponse.json(
        { error: 'Mevcut şifre yanlış' },
        { status: 400 }
      );
    }

    // Yeni şifrenin eskisiyle aynı olmamasını kontrol et
    const isSamePassword = await verifyPassword(newPassword, user.password);
    
    if (isSamePassword) {
      return NextResponse.json(
        { error: 'Yeni şifre mevcut şifre ile aynı olamaz' },
        { status: 400 }
      );
    }

    // Yeni şifreyi hash'le ve güncelle
    const hashedNewPassword = await hashPassword(newPassword);
    
    await prisma.user.update({
      where: { id: userId },
      data: { 
        password: hashedNewPassword,
        updatedAt: new Date()
      }
    });

    console.log(`Şifre değiştirildi: ${user.username}`);
    
    return NextResponse.json(
      { message: 'Şifre başarıyla değiştirildi' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Change password error:', error);
    return NextResponse.json(
      { error: 'Şifre değiştirme işlemi başarısız oldu. Lütfen daha sonra tekrar deneyin.' },
      { status: 500 }
    );
  }
}
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { headers } from 'next/headers';

// GET - Mevcut kullanıcının bilgilerini ve yetkili markalarını getir
export async function GET(request: Request) {
  try {
    // Header'dan kullanıcı ID'sini al
    const headersList = await headers();
    const userId = headersList.get('x-user-id');
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Kullanıcının bilgilerini ve yetkili markalarını getir
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        username: true,
        name: true,
        role: true,
        authorizedBrands: {
          include: {
            brand: {
              select: {
                id: true,
                name: true
              }
            }
          }
        }
      }
    });
    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    // Yetkili markaları düzenle
    const authorizedBrands = user.authorizedBrands.map((ub: any) => ub.brand);
    
    return NextResponse.json({
      ...user,
      authorizedBrands
    });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
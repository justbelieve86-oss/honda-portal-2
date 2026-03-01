import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { headers } from 'next/headers';

export async function POST(request: Request) {
  try {
    // Header'dan kullanıcı ID'sini al
    const headersList = await headers();
    const userId = headersList.get('x-user-id');
    
    if (!userId) {
      return NextResponse.json({ error: 'Yetkilendirme gerekli' }, { status: 401 });
    }

    const { customerId } = await request.json();

    if (!customerId) {
      return NextResponse.json({ error: 'Müşteri ID gerekli' }, { status: 400 });
    }

    // Müşteriyi kontrol et
    const customer = await prisma.customer.findUnique({
      where: { id: customerId }
    });

    if (!customer) {
      return NextResponse.json({ error: 'Müşteri bulunamadı' }, { status: 404 });
    }

    // Müşteriyi yeni danışmana transfer et
    const updatedCustomer = await prisma.customer.update({
      where: { id: customerId },
      data: {
        createdBy: userId,
        updatedAt: new Date()
      }
    });

    return NextResponse.json({
      message: 'Müşteri başarıyla devralındı',
      customer: updatedCustomer
    });

  } catch (error) {
    console.error('Müşteri devralma hatası:', error);
    return NextResponse.json(
      { error: 'Müşteri devralınırken bir hata oluştu' },
      { status: 500 }
    );
  }
}
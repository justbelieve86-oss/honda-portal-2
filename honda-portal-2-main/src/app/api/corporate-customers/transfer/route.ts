import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { headers } from 'next/headers';

// POST - Kurumsal müşteri devralma
export async function POST(request: Request) {
  try {
    const headersList = await headers();
    const userId = headersList.get('x-user-id');
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { customerId } = await request.json();

    if (!customerId) {
      return NextResponse.json({ error: 'Kurumsal müşteri ID gerekli' }, { status: 400 });
    }

    // Kurumsal müşteriyi kontrol et
    const customer = await prisma.corporateCustomer.findUnique({
      where: { id: customerId }
    });

    if (!customer) {
      return NextResponse.json({ error: 'Kurumsal müşteri bulunamadı' }, { status: 404 });
    }

    // Kurumsal müşteriyi devral
    const updatedCustomer = await prisma.corporateCustomer.update({
      where: { id: customerId },
      data: {
        createdBy: userId
      }
    });

    return NextResponse.json({ 
      message: 'Kurumsal müşteri başarıyla devralındı',
      customer: updatedCustomer 
    });
  } catch (error) {
    console.error('Error transferring corporate customer:', error);
    return NextResponse.json(
      { error: 'Kurumsal müşteri devralınırken bir hata oluştu' },
      { status: 500 }
    );
  }
}
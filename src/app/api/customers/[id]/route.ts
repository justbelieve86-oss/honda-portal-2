import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { headers } from 'next/headers';

const prisma = new PrismaClient();

// Müşteri güncelleme
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const headersList = await headers();
    const userId = headersList.get('x-user-id');
    
    if (!userId) {
      return NextResponse.json({ error: 'Kullanıcı kimliği bulunamadı' }, { status: 401 });
    }

    const { id } = params;
    const body = await request.json();
    const { name, email, phone, tcNo, birthDate, occupation, address, cityId, districtId } = body;

    // Önce müşterinin bu kullanıcıya ait olup olmadığını kontrol et
    const existingCustomer = await prisma.customer.findFirst({
      where: {
        id: id,
        createdBy: userId
      }
    });

    if (!existingCustomer) {
      return NextResponse.json({ error: 'Müşteri bulunamadı veya yetkiniz yok' }, { status: 404 });
    }

    // TC Kimlik No benzersizlik kontrolü (kendisi hariç)
    if (tcNo && tcNo !== existingCustomer.tcNo) {
      const duplicateTcNo = await prisma.customer.findFirst({
        where: {
          tcNo: tcNo,
          id: { not: id }
        }
      });

      if (duplicateTcNo) {
        return NextResponse.json({ error: 'Bu TC Kimlik No ile kayıtlı başka bir müşteri bulunmaktadır' }, { status: 400 });
      }
    }

    // Müşteriyi güncelle
    const updatedCustomer = await prisma.customer.update({
      where: { id: id },
      data: {
        name,
        email,
        phone,
        tcNo,
        birthDate,
        occupation,
        address,
        cityId,
        districtId,
        updatedAt: new Date()
      }
    });

    return NextResponse.json(updatedCustomer);
  } catch (error) {
    console.error('Müşteri güncelleme hatası:', error);
    return NextResponse.json({ error: 'Müşteri güncellenirken bir hata oluştu' }, { status: 500 });
  }
}

// Müşteri silme
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const headersList = await headers();
    const userId = headersList.get('x-user-id');
    
    if (!userId) {
      return NextResponse.json({ error: 'Kullanıcı kimliği bulunamadı' }, { status: 401 });
    }

    const { id } = params;

    // Önce müşterinin bu kullanıcıya ait olup olmadığını kontrol et
    const existingCustomer = await prisma.customer.findFirst({
      where: {
        id: id,
        createdBy: userId
      }
    });

    if (!existingCustomer) {
      return NextResponse.json({ error: 'Müşteri bulunamadı veya yetkiniz yok' }, { status: 404 });
    }

    // Müşteriyi sil
    await prisma.customer.delete({
      where: { id: id }
    });

    return NextResponse.json({ message: 'Müşteri başarıyla silindi' });
  } catch (error) {
    console.error('Müşteri silme hatası:', error);
    return NextResponse.json({ error: 'Müşteri silinirken bir hata oluştu' }, { status: 500 });
  }
}
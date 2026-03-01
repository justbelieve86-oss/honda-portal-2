import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { headers } from 'next/headers';

// PUT - Kurumsal müşteri güncelleme
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    const { id } = params;
    const body = await request.json();
    const {
      name,
      taxNumber,
      taxOffice,
      email,
      phone,
      address,
      cityId,
      districtId,
      authorizedPerson,
    } = body;

    // Kurumsal müşteriyi bul ve sahiplik kontrolü yap
    const existingCustomer = await prisma.corporateCustomer.findFirst({
      where: {
        id: id,
        createdBy: userId,
      },
    });

    if (!existingCustomer) {
      return NextResponse.json(
        { error: 'Kurumsal müşteri bulunamadı veya erişim yetkiniz yok' },
        { status: 404 }
      );
    }

    // Vergi numarası benzersizlik kontrolü (kendisi hariç)
    const duplicateCustomer = await prisma.corporateCustomer.findFirst({
      where: {
        taxNumber: taxNumber,
        createdBy: userId,
        NOT: {
          id: id,
        },
      },
    });

    if (duplicateCustomer) {
      return NextResponse.json(
        { error: 'Bu vergi numarası ile kayıtlı başka bir kurumsal müşteri mevcut' },
        { status: 400 }
      );
    }

    // Kurumsal müşteriyi güncelle
    const updatedCustomer = await prisma.corporateCustomer.update({
      where: {
        id: id,
      },
      data: {
        name,
        taxNumber,
        taxOffice,
        email,
        phone,
        address,
        cityId,
        districtId,
        authorizedPerson,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(updatedCustomer);
  } catch (error) {
    console.error('Kurumsal müşteri güncelleme hatası:', error);
    return NextResponse.json(
      { error: 'Kurumsal müşteri güncellenirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

// DELETE - Kurumsal müşteri silme
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    const { id } = params;

    // Kurumsal müşteriyi bul ve sahiplik kontrolü yap
    const existingCustomer = await prisma.corporateCustomer.findFirst({
      where: {
        id: id,
        createdBy: userId,
      },
    });

    if (!existingCustomer) {
      return NextResponse.json(
        { error: 'Kurumsal müşteri bulunamadı veya erişim yetkiniz yok' },
        { status: 404 }
      );
    }

    // Kurumsal müşteriyi sil
    await prisma.corporateCustomer.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({ message: 'Kurumsal müşteri başarıyla silindi' });
  } catch (error) {
    console.error('Kurumsal müşteri silme hatası:', error);
    return NextResponse.json(
      { error: 'Kurumsal müşteri silinirken bir hata oluştu' },
      { status: 500 }
    );
  }
}
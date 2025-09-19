import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { headers } from 'next/headers';

// PUT - Satış güncelleme
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
      customerType,
      model,
      chassisNo,
      engineNo,
      purchaseDate,
      salePrice,
      purchasePrice,
      contributionAmount,
      mtvCost,
      licensePlateCost,
      color,
      packageId,
      packageName
    } = body;

    let updatedSale;
    
    if (customerType === 'individual') {
      // Bireysel müşteri satışını bul ve sahiplik kontrolü yap
      const existingSale = await prisma.sale.findFirst({
        where: {
          id: id,
          createdBy: userId,
        },
      });

      if (!existingSale) {
        return NextResponse.json(
          { error: 'Satış bulunamadı veya erişim yetkiniz yok' },
          { status: 404 }
        );
      }

      // Satışı güncelle
      updatedSale = await prisma.sale.update({
        where: { id: id },
        data: {
          model,
          chassisNo,
          engineNo,
          purchaseDate,
          salePrice: parseFloat(salePrice),
          purchasePrice: parseFloat(purchasePrice),
          contributionAmount: parseFloat(contributionAmount || 0),
          mtvCost: parseFloat(mtvCost || 0),
          licensePlateCost: parseFloat(licensePlateCost || 0),
          color,
          packageId: packageId || null,
          packageName: packageName || null,
          updatedAt: new Date()
        },
        include: {
          customer: {
            select: {
              id: true,
              name: true,
              tcNo: true
            }
          }
        }
      });
    } else {
      // Kurumsal müşteri satışını bul ve sahiplik kontrolü yap
      const existingSale = await prisma.corporateSale.findFirst({
        where: {
          id: id,
          createdBy: userId,
        },
      });

      if (!existingSale) {
        return NextResponse.json(
          { error: 'Kurumsal satış bulunamadı veya erişim yetkiniz yok' },
          { status: 404 }
        );
      }

      // Kurumsal satışı güncelle
      updatedSale = await prisma.corporateSale.update({
        where: { id: id },
        data: {
          model,
          chassisNo,
          engineNo,
          purchaseDate,
          salePrice: parseFloat(salePrice),
          purchasePrice: parseFloat(purchasePrice),
          contributionAmount: parseFloat(contributionAmount || 0),
          mtvCost: parseFloat(mtvCost || 0),
          licensePlateCost: parseFloat(licensePlateCost || 0),
          color,
          packageId: packageId || null,
          packageName: packageName || null,
          updatedAt: new Date()
        },
        include: {
          customer: {
            select: {
              id: true,
              name: true,
              taxNumber: true
            }
          }
        }
      });
    }

    return NextResponse.json(updatedSale);
  } catch (error) {
    console.error('Satış güncelleme hatası:', error);
    return NextResponse.json(
      { error: 'Satış güncellenirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

// DELETE - Satış silme
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
    const { searchParams } = new URL(request.url);
    const customerType = searchParams.get('customerType');

    if (customerType === 'individual') {
      // Bireysel müşteri satışını bul ve sahiplik kontrolü yap
      const existingSale = await prisma.sale.findFirst({
        where: {
          id: id,
          createdBy: userId,
        },
      });

      if (!existingSale) {
        return NextResponse.json(
          { error: 'Satış bulunamadı veya erişim yetkiniz yok' },
          { status: 404 }
        );
      }

      // Satışı sil
      await prisma.sale.delete({
        where: {
          id: id,
        },
      });
    } else {
      // Kurumsal müşteri satışını bul ve sahiplik kontrolü yap
      const existingSale = await prisma.corporateSale.findFirst({
        where: {
          id: id,
          createdBy: userId,
        },
      });

      if (!existingSale) {
        return NextResponse.json(
          { error: 'Kurumsal satış bulunamadı veya erişim yetkiniz yok' },
          { status: 404 }
        );
      }

      // Kurumsal satışı sil
      await prisma.corporateSale.delete({
        where: {
          id: id,
        },
      });
    }

    return NextResponse.json({ message: 'Satış başarıyla silindi' });
  } catch (error) {
    console.error('Satış silme hatası:', error);
    return NextResponse.json(
      { error: 'Satış silinirken bir hata oluştu' },
      { status: 500 }
    );
  }
}
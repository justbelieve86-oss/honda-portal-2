import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// PUT - Bakım ürünü güncelle
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    const { name, description } = body;

    // Validasyon
    if (!name || name.trim() === '') {
      return NextResponse.json(
        { error: 'Ürün adı zorunludur' },
        { status: 400 }
      );
    }

    // Aynı isimde başka ürün var mı kontrol et (kendisi hariç)
    const existingProduct = await prisma.maintenanceProduct.findFirst({
      where: {
        name: name.trim(),
        NOT: { id },
      },
    });

    if (existingProduct) {
      return NextResponse.json(
        { error: 'Bu isimde bir bakım ürünü zaten mevcut' },
        { status: 400 }
      );
    }

    const product = await prisma.maintenanceProduct.update({
      where: { id },
      data: {
        name: name.trim(),
        description: description?.trim() || null,
      },
    });

    return NextResponse.json(product);
  } catch (error: any) {
    console.error('Bakım ürünü güncellenirken hata:', error);
    
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Bakım ürünü bulunamadı' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { error: 'Bakım ürünü güncellenirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

// DELETE - Bakım ürünü sil
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    await prisma.maintenanceProduct.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Bakım ürünü başarıyla silindi' });
  } catch (error: any) {
    console.error('Bakım ürünü silinirken hata:', error);
    
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Bakım ürünü bulunamadı' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { error: 'Bakım ürünü silinirken bir hata oluştu' },
      { status: 500 }
    );
  }
}
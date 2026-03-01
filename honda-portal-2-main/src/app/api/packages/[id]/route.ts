import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    // Paketi ID'ye göre getir
    const packageItem = await prisma.package.findUnique({
      where: { id },
      include: {
        model: {
          include: {
            brand: true
          }
        }
      }
    });
    
    if (!packageItem) {
      return NextResponse.json(
        { error: 'Paket bulunamadı' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(packageItem);
  } catch (error: any) {
    console.error('Paket detayı getirilirken hata oluştu:', error);
    return NextResponse.json(
      { error: 'Paket detayı getirilirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const body = await request.json();
    const { name, modelId, basePrice, otvRate, kdvRate, mtvAmount, plakaMasrafi } = body;
    
    // Paketin var olup olmadığını kontrol et
    const existingPackage = await prisma.package.findUnique({
      where: { id },
      include: {
        model: true
      }
    });
    
    if (!existingPackage) {
      return NextResponse.json(
        { error: 'Paket bulunamadı' },
        { status: 404 }
      );
    }
    
    // Model güncelleniyorsa, modelin var olup olmadığını kontrol et
    if (modelId && modelId !== existingPackage.modelId) {
      const model = await prisma.model.findUnique({
        where: { id: modelId }
      });
      
      if (!model) {
        return NextResponse.json(
          { error: 'Belirtilen model bulunamadı' },
          { status: 404 }
        );
      }
    }
    
    // Eğer model değişiyorsa veya isim değişiyorsa, aynı isimli başka bir paket var mı kontrol et
    if ((name && name !== existingPackage.name) || (modelId && modelId !== existingPackage.modelId)) {
      const nameConflict = await prisma.package.findFirst({
        where: {
          name: name || existingPackage.name,
          modelId: modelId || existingPackage.modelId,
          id: { not: id }
        }
      });
      
      if (nameConflict) {
        return NextResponse.json(
          { error: 'Bu modelde aynı isimli bir paket zaten mevcut' },
          { status: 400 }
        );
      }
    }
    
    // Paketi güncelle
    const updatedPackage = await prisma.package.update({
      where: { id },
      data: {
        ...(name !== undefined && { name }),
        ...(modelId !== undefined && { modelId }),
        ...(basePrice !== undefined && { basePrice: parseFloat(basePrice) }),
        ...(otvRate !== undefined && { otvRate: parseFloat(otvRate) }),
        ...(kdvRate !== undefined && { kdvRate: parseFloat(kdvRate) }),
        ...(mtvAmount !== undefined && { mtvAmount: parseFloat(mtvAmount) }),
        ...(plakaMasrafi !== undefined && { plakaMasrafi: parseFloat(plakaMasrafi) }),
      },
      include: {
        model: {
          include: {
            brand: true
          }
        }
      }
    });
    
    return NextResponse.json(updatedPackage);
  } catch (error: any) {
    console.error('Paket güncellenirken hata oluştu:', error);
    return NextResponse.json(
      { error: 'Paket güncellenirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    console.log(`DELETE isteği: /api/packages/${id}`);
    
    // Paketin var olup olmadığını kontrol et
    const existingPackage = await prisma.package.findUnique({
      where: { id },
      include: {
        model: {
          include: {
            brand: true
          }
        }
      }
    });
    
    if (!existingPackage) {
      console.log(`Paket bulunamadı: ${id}`);
      return NextResponse.json(
        { error: 'Paket bulunamadı' },
        { status: 404 }
      );
    }
    
    console.log(`Paket bulundu: ${existingPackage.name}, Model: ${existingPackage.model.name}, Marka: ${existingPackage.model.brand.name}`);
    
    try {
      // Paketi sil
      console.log(`Paket siliniyor: ${existingPackage.name}`);
      await prisma.package.delete({
        where: { id }
      });
      
      console.log(`Paket başarıyla silindi: ${existingPackage.name}`);
      return NextResponse.json(
        { message: 'Paket başarıyla silindi' },
        { status: 200 }
      );
    } catch (deleteError: any) {
      console.error('Paket silinirken doğrudan hata oluştu:', deleteError);
      console.error('Hata detayları:', deleteError.message);
      
      return NextResponse.json(
        { 
          error: 'Paket silinirken bir hata oluştu',
          details: deleteError.message
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Paket silme işleminde genel hata oluştu:', error);
    console.error('Hata stack:', error.stack);
    
    return NextResponse.json(
      { 
        error: 'Paket silinirken bir hata oluştu',
        details: error.message
      },
      { status: 500 }
    );
  }
} 
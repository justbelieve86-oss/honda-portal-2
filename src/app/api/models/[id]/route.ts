import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    // Modeli ID'ye göre getir
    const model = await prisma.model.findUnique({
      where: { id },
      include: {
        brand: true,
        packages: true
      }
    });
    
    if (!model) {
      return NextResponse.json(
        { error: 'Model bulunamadı' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(model);
  } catch (error: any) {
    console.error('Model detayı getirilirken hata oluştu:', error);
    return NextResponse.json(
      { error: 'Model detayı getirilirken bir hata oluştu' },
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
    const { name, brandId } = body;
    
    // Gerekli alanları kontrol et
    if (!name) {
      return NextResponse.json(
        { error: 'Model adı gereklidir' },
        { status: 400 }
      );
    }
    
    // Modelin var olup olmadığını kontrol et
    const existingModel = await prisma.model.findUnique({
      where: { id },
      include: { brand: true }
    });
    
    if (!existingModel) {
      return NextResponse.json(
        { error: 'Model bulunamadı' },
        { status: 404 }
      );
    }
    
    // Aynı markada aynı isimle başka bir model var mı kontrol et
    const nameConflict = await prisma.model.findFirst({
      where: {
        name,
        brandId: brandId || existingModel.brandId,
        id: { not: id }
      }
    });
    
    if (nameConflict) {
      return NextResponse.json(
        { error: 'Bu markada aynı isimli bir model zaten mevcut' },
        { status: 400 }
      );
    }
    
    // Modeli güncelle
    const updatedModel = await prisma.model.update({
      where: { id },
      data: {
        name,
        ...(brandId && { brandId })
      },
      include: { brand: true }
    });
    
    return NextResponse.json(updatedModel);
  } catch (error: any) {
    console.error('Model güncellenirken hata oluştu:', error);
    return NextResponse.json(
      { error: 'Model güncellenirken bir hata oluştu' },
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
    console.log(`DELETE isteği: /api/models/${id}`);
    
    // Modelin var olup olmadığını kontrol et
    const existingModel = await prisma.model.findUnique({
      where: { id }
    });
    
    if (!existingModel) {
      console.log(`Model bulunamadı: ${id}`);
      return NextResponse.json(
        { error: 'Model bulunamadı' },
        { status: 404 }
      );
    }
    
    console.log(`Model bulundu: ${existingModel.name}`);
    
    try {
      // Modeli sil (cascade ile ilişkili paketler de silinecek)
      console.log(`Model siliniyor: ${existingModel.name}`);
      await prisma.model.delete({
        where: { id }
      });
      
      console.log(`Model başarıyla silindi: ${existingModel.name}`);
      return NextResponse.json(
        { message: 'Model başarıyla silindi' },
        { status: 200 }
      );
    } catch (deleteError: any) {
      console.error('Model silinirken hata:', deleteError);
      console.error('Hata detayları:', deleteError.message);
      
      return NextResponse.json(
        { 
          error: 'Model silinirken bir hata oluştu',
          details: deleteError.message
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Model silme işleminde genel hata:', error);
    console.error('Hata stack:', error.stack);
    
    return NextResponse.json(
      { 
        error: 'Model silinirken bir hata oluştu',
        details: error.message
      },
      { status: 500 }
    );
  }
} 
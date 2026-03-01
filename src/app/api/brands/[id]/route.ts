import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    // Markayı ID'ye göre getir
    const brand = await prisma.brand.findUnique({
      where: { id },
      include: {
        models: {
          include: {
            packages: true
          }
        }
      }
    });
    
    if (!brand) {
      return NextResponse.json(
        { error: 'Marka bulunamadı' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(brand);
  } catch (error: any) {
    console.error('Marka detayı getirilirken hata oluştu:', error);
    return NextResponse.json(
      { error: 'Marka detayı getirilirken bir hata oluştu' },
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
    const { name } = body;
    
    // Gerekli alan kontrolü
    if (!name) {
      return NextResponse.json(
        { error: 'Marka adı gereklidir' },
        { status: 400 }
      );
    }
    
    // Markanın var olup olmadığını kontrol et
    const existingBrand = await prisma.brand.findUnique({
      where: { id }
    });
    
    if (!existingBrand) {
      return NextResponse.json(
        { error: 'Marka bulunamadı' },
        { status: 404 }
      );
    }
    
    // Aynı isimle başka bir marka var mı kontrol et
    const nameConflict = await prisma.brand.findUnique({
      where: { name }
    });
    
    if (nameConflict && nameConflict.id !== id) {
      return NextResponse.json(
        { error: 'Bu marka adı zaten kullanılıyor' },
        { status: 400 }
      );
    }
    
    // Markayı güncelle
    const updatedBrand = await prisma.brand.update({
      where: { id },
      data: { name }
    });
    
    return NextResponse.json(updatedBrand);
  } catch (error: any) {
    console.error('Marka güncellenirken hata oluştu:', error);
    return NextResponse.json(
      { error: 'Marka güncellenirken bir hata oluştu' },
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
    console.log(`DELETE isteği: /api/brands/${id}`);
    
    // Markanın var olup olmadığını kontrol et
    const existingBrand = await prisma.brand.findUnique({
      where: { id }
    });
    
    if (!existingBrand) {
      console.log(`Marka bulunamadı: ${id}`);
      return NextResponse.json(
        { error: 'Marka bulunamadı' },
        { status: 404 }
      );
    }
    
    console.log(`Marka bulundu: ${existingBrand.name}`);
    
    try {
      // Markayı sil (cascade ile ilişkili modeller ve paketler de silinecek)
      console.log(`Marka siliniyor: ${existingBrand.name}`);
      await prisma.brand.delete({
        where: { id }
      });
      
      console.log(`Marka başarıyla silindi: ${existingBrand.name}`);
      return NextResponse.json(
        { message: 'Marka başarıyla silindi' },
        { status: 200 }
      );
    } catch (deleteError: any) {
      console.error('Marka silinirken hata:', deleteError);
      console.error('Hata detayları:', deleteError.message);
      
      return NextResponse.json(
        { 
          error: 'Marka silinirken bir hata oluştu',
          details: deleteError.message
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Marka silme işleminde genel hata:', error);
    console.error('Hata stack:', error.stack);
    
    return NextResponse.json(
      { 
        error: 'Marka silinirken bir hata oluştu',
        details: error.message
      },
      { status: 500 }
    );
  }
} 
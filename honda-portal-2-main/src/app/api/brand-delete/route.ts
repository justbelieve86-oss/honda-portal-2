import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { brandId } = body;
    
    console.log(`Brand silme isteği alındı: ${brandId}`);
    
    if (!brandId) {
      console.log('Hata: brandId belirtilmedi');
      return NextResponse.json(
        { error: 'Marka ID belirtilmedi' },
        { status: 400 }
      );
    }
    
    // Markanın var olup olmadığını kontrol et
    const existingBrand = await prisma.brand.findUnique({
      where: { id: brandId }
    });
    
    if (!existingBrand) {
      console.log(`Marka bulunamadı: ${brandId}`);
      return NextResponse.json(
        { error: 'Marka bulunamadı' },
        { status: 404 }
      );
    }
    
    console.log(`Marka bulundu: ${existingBrand.name}`);
    
    try {
      // İlişkili paketleri sil
      const deletePackages = await prisma.package.deleteMany({
        where: {
          model: {
            brandId: brandId
          }
        }
      });
      
      console.log(`İlişkili ${deletePackages.count} paket silindi`);
      
      // İlişkili modelleri sil
      const deleteModels = await prisma.model.deleteMany({
        where: {
          brandId: brandId
        }
      });
      
      console.log(`İlişkili ${deleteModels.count} model silindi`);
      
      // Markayı sil
      await prisma.brand.delete({
        where: { id: brandId }
      });
      
      console.log(`Marka başarıyla silindi: ${existingBrand.name}`);
      return NextResponse.json(
        { success: true, message: 'Marka başarıyla silindi' },
        { status: 200 }
      );
    } catch (deleteError: any) {
      console.error('Marka silinirken hata:', deleteError);
      
      return NextResponse.json(
        { error: 'Marka silinirken bir hata oluştu', details: deleteError.message },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Brand silme genel hata:', error);
    
    return NextResponse.json(
      { error: 'Marka silinirken bir hata oluştu', details: error.message },
      { status: 500 }
    );
  }
} 
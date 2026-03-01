import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { modelId } = body;
    
    console.log(`Model silme isteği alındı: ${modelId}`);
    
    if (!modelId) {
      console.log('Hata: modelId belirtilmedi');
      return NextResponse.json(
        { error: 'Model ID belirtilmedi' },
        { status: 400 }
      );
    }
    
    // Modelin var olup olmadığını kontrol et
    const existingModel = await prisma.model.findUnique({
      where: { id: modelId }
    });
    
    if (!existingModel) {
      console.log(`Model bulunamadı: ${modelId}`);
      return NextResponse.json(
        { error: 'Model bulunamadı' },
        { status: 404 }
      );
    }
    
    console.log(`Model bulundu: ${existingModel.name}`);
    
    try {
      // İlişkili paketleri sil
      const deletePackages = await prisma.package.deleteMany({
        where: {
          modelId: modelId
        }
      });
      
      console.log(`İlişkili ${deletePackages.count} paket silindi`);
      
      // Modeli sil
      await prisma.model.delete({
        where: { id: modelId }
      });
      
      console.log(`Model başarıyla silindi: ${existingModel.name}`);
      return NextResponse.json(
        { success: true, message: 'Model başarıyla silindi' },
        { status: 200 }
      );
    } catch (deleteError: any) {
      console.error('Model silinirken hata:', deleteError);
      
      return NextResponse.json(
        { error: 'Model silinirken bir hata oluştu', details: deleteError.message },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Model silme genel hata:', error);
    
    return NextResponse.json(
      { error: 'Model silinirken bir hata oluştu', details: error.message },
      { status: 500 }
    );
  }
} 
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { packageId } = body;
    
    console.log(`Paket silme isteği alındı: ${packageId}`);
    
    if (!packageId) {
      console.log('Hata: packageId belirtilmedi');
      return NextResponse.json(
        { error: 'Paket ID belirtilmedi' },
        { status: 400 }
      );
    }
    
    // Paketin var olup olmadığını kontrol et
    const existingPackage = await prisma.package.findUnique({
      where: { id: packageId }
    });
    
    if (!existingPackage) {
      console.log(`Paket bulunamadı: ${packageId}`);
      return NextResponse.json(
        { error: 'Paket bulunamadı' },
        { status: 404 }
      );
    }
    
    console.log(`Paket bulundu: ${existingPackage.name}`);
    
    try {
      // Paketi sil
      await prisma.package.delete({
        where: { id: packageId }
      });
      
      console.log(`Paket başarıyla silindi: ${existingPackage.name}`);
      return NextResponse.json(
        { success: true, message: 'Paket başarıyla silindi' },
        { status: 200 }
      );
    } catch (deleteError: any) {
      console.error('Paket silinirken hata:', deleteError);
      
      return NextResponse.json(
        { error: 'Paket silinirken bir hata oluştu', details: deleteError.message },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Paket silme genel hata:', error);
    
    return NextResponse.json(
      { error: 'Paket silinirken bir hata oluştu', details: error.message },
      { status: 500 }
    );
  }
} 
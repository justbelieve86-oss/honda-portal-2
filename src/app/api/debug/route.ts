import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // Prisma'nın bağlandığını kontrol etmek için basit bir sorgu
    const brandsCount = await prisma.brand.count();
    const modelsCount = await prisma.model.count();
    const packagesCount = await prisma.package.count();
    
    return NextResponse.json({
      message: 'Debug API çalışıyor',
      databaseConnected: true,
      counts: {
        brands: brandsCount,
        models: modelsCount,
        packages: packagesCount
      }
    });
  } catch (error: any) {
    console.error('Debug API hatası:', error);
    return NextResponse.json({
      message: 'Debug API çalışıyor fakat veritabanı bağlantısında sorun var',
      databaseConnected: false,
      error: error.message
    }, { status: 500 });
  }
} 
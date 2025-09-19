import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const brandId = searchParams.get('brandId');
    
    let models;
    
    if (brandId) {
      // Belirli bir markaya ait modelleri getir
      models = await prisma.model.findMany({
        where: {
          brandId: brandId
        },
        include: {
          brand: true,
          packages: true
        }
      });
    } else {
      // Tüm modelleri getir
      models = await prisma.model.findMany({
        include: {
          brand: true,
          packages: true
        }
      });
    }
    
    return NextResponse.json(models);
  } catch (error: any) {
    console.error('Modeller getirilirken hata oluştu:', error);
    return NextResponse.json(
      { error: 'Modeller getirilirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, brandId } = body;
    
    // Gerekli alanları kontrol et
    if (!name || !brandId) {
      return NextResponse.json(
        { error: 'Model adı ve marka ID\'si gereklidir' },
        { status: 400 }
      );
    }
    
    // Markanın var olup olmadığını kontrol et
    const brand = await prisma.brand.findUnique({
      where: { id: brandId }
    });
    
    if (!brand) {
      return NextResponse.json(
        { error: 'Belirtilen marka bulunamadı' },
        { status: 404 }
      );
    }
    
    // Aynı markada aynı isimle model var mı kontrol et
    const existingModel = await prisma.model.findFirst({
      where: {
        name,
        brandId
      }
    });
    
    if (existingModel) {
      return NextResponse.json(
        { error: 'Bu markada aynı isimli bir model zaten mevcut' },
        { status: 400 }
      );
    }
    
    // Yeni model oluştur
    const model = await prisma.model.create({
      data: {
        name,
        brandId
      },
      include: {
        brand: true
      }
    });
    
    return NextResponse.json(model, { status: 201 });
  } catch (error: any) {
    console.error('Model oluşturulurken hata oluştu:', error);
    return NextResponse.json(
      { error: 'Model oluşturulurken bir hata oluştu' },
      { status: 500 }
    );
  }
}
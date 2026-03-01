import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const modelId = searchParams.get('modelId');
    
    let packages;
    
    if (modelId) {
      // Belirli bir modele ait paketleri getir
      packages = await prisma.package.findMany({
        where: {
          modelId: modelId
        },
        include: {
          model: {
            include: {
              brand: true
            }
          }
        }
      });
    } else {
      // Tüm paketleri getir
      packages = await prisma.package.findMany({
        include: {
          model: {
            include: {
              brand: true
            }
          }
        }
      });
    }
    
    return NextResponse.json(packages);
  } catch (error: any) {
    console.error('Paketler getirilirken hata oluştu:', error);
    return NextResponse.json(
      { error: 'Paketler getirilirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, modelId, mtvAmount, plakaMasrafi = 0 } = body;
    
    // Gerekli alanları kontrol et
    if (!name || !modelId || mtvAmount === undefined) {
      return NextResponse.json(
        { error: 'Paket adı, model ID ve MTV tutarı gereklidir' },
        { status: 400 }
      );
    }
    
    // Modelin var olup olmadığını kontrol et
    const model = await prisma.model.findUnique({
      where: { id: modelId },
      include: { brand: true }
    });
    
    if (!model) {
      return NextResponse.json(
        { error: 'Belirtilen model bulunamadı' },
        { status: 404 }
      );
    }
    
    // Aynı modelde aynı isimli paket var mı kontrol et
    const existingPackage = await prisma.package.findFirst({
      where: {
        name,
        modelId
      }
    });
    
    if (existingPackage) {
      return NextResponse.json(
        { error: 'Bu modelde aynı isimli bir paket zaten mevcut' },
        { status: 400 }
      );
    }
    
    // Yeni paket oluştur
    const packageItem = await prisma.package.create({
      data: {
        name,
        modelId,
        mtvAmount: parseFloat(mtvAmount),
        plakaMasrafi: parseFloat(plakaMasrafi)
      } as any,
      include: {
        model: {
          include: {
            brand: true
          }
        }
      }
    });
    
    return NextResponse.json(packageItem, { status: 201 });
  } catch (error: any) {
    console.error('Paket oluşturulurken hata oluştu:', error);
    return NextResponse.json(
      { error: 'Paket oluşturulurken bir hata oluştu' },
      { status: 500 }
    );
  }
}
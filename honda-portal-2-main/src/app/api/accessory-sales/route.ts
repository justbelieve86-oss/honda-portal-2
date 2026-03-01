import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Aksesuar satışlarını listele
export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id');
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const accessorySales = await prisma.accessorySale.findMany({
      include: {
        createdByUser: {
          select: {
            name: true,
            username: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    console.log('Aksesuar satışları bulundu:', accessorySales.length);
    console.log('İlk kayıt:', accessorySales[0]);

    return NextResponse.json(accessorySales);
  } catch (error) {
    console.error('Aksesuar satışları yüklenirken hata:', error);
    return NextResponse.json(
      { error: 'Aksesuar satışları yüklenemedi' },
      { status: 500 }
    );
  }
}

// POST - Yeni aksesuar satışı ekle
export async function POST(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id');
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    console.log('POST isteği alındı:', body);
    console.log('User ID:', userId);
    const {
      customerName,
      customerTcNo,
      vehicleBrand,
      vehicleModel,
      vehiclePackage,
      licensePlate,
      chassisNo,
      engineNo,
      accessoryName,
      accessoryPrice,
      saleDate,
      saleId
    } = body;

    // Gerekli alanları kontrol et
    if (!customerName || !vehicleBrand || !vehicleModel || 
        !accessoryName || !accessoryPrice) {
      return NextResponse.json(
        { error: 'Gerekli alanlar eksik' },
        { status: 400 }
      );
    }

    // Plaka VEYA (şasi ve motor no) kombinasyonu zorunlu
    if (!licensePlate && (!chassisNo || !engineNo)) {
      return NextResponse.json(
        { error: 'Plaka numarası VEYA şasi ve motor numarası gereklidir' },
        { status: 400 }
      );
    }

    const newAccessorySale = await prisma.accessorySale.create({
      data: {
        customerName,
        customerTcNo: customerTcNo || null,
        vehicleBrand,
        vehicleModel,
        vehiclePackage: vehiclePackage || '',
        chassisNo: chassisNo || null,
        engineNo: engineNo || null,
        accessoryName,
        accessoryPrice: parseFloat(accessoryPrice),
        saleDate: saleDate || new Date().toISOString().split('T')[0],
        ...(saleId && { saleId }),
        createdBy: userId
      },
      include: {
        createdByUser: {
          select: {
            name: true,
            username: true
          }
        }
      }
    });

    return NextResponse.json(newAccessorySale, { status: 201 });
  } catch (error) {
    console.error('Aksesuar satışı eklenirken hata:', error);
    return NextResponse.json(
      { error: 'Aksesuar satışı eklenemedi' },
      { status: 500 }
    );
  }
}

// PUT - Aksesuar satışını güncelle
export async function PUT(request: NextRequest) {
  try {
    // Header'dan kullanıcı ID'sini al
    const userId = request.headers.get('x-user-id');
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const {
      id,
      customerName,
      vehicleBrand,
      vehicleModel,
      vehiclePackage,
      licensePlate,
      chassisNo,
      engineNo,
      accessoryName,
      accessoryPrice,
      saleDate
    } = body;

    // Gerekli alanları kontrol et
    if (!id || !customerName || !vehicleBrand || !vehicleModel || 
        !accessoryName || !accessoryPrice) {
      return NextResponse.json(
        { error: 'Gerekli alanlar eksik' },
        { status: 400 }
      );
    }

    // Plaka VEYA (şasi ve motor no) kombinasyonu zorunlu
    if (!licensePlate && (!chassisNo || !engineNo)) {
      return NextResponse.json(
        { error: 'Plaka numarası VEYA şasi ve motor numarası gereklidir' },
        { status: 400 }
      );
    }

    // Mevcut kaydı kontrol et
    const existingSale = await prisma.accessorySale.findUnique({
      where: { id }
    });

    if (!existingSale) {
      return NextResponse.json(
        { error: 'Aksesuar satışı bulunamadı' },
        { status: 404 }
      );
    }

    // Güncelleme işlemi
    const updatedAccessorySale = await prisma.accessorySale.update({
      where: { id },
      data: {
        customerName,
        vehicleBrand,
        vehicleModel,
        vehiclePackage: vehiclePackage || '',
        chassisNo: chassisNo || null,
        engineNo: engineNo || null,
        accessoryName,
        accessoryPrice: parseFloat(accessoryPrice),
        saleDate: saleDate || new Date().toISOString().split('T')[0]
      },
      include: {
        createdByUser: {
          select: {
            name: true,
            username: true
          }
        }
      }
    });

    return NextResponse.json(updatedAccessorySale);
  } catch (error) {
    console.error('Aksesuar satışı güncellenirken hata:', error);
    return NextResponse.json(
      { error: 'Aksesuar satışı güncellenemedi' },
      { status: 500 }
    );
  }
}

// DELETE - Aksesuar satışını sil
export async function DELETE(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id');
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { id, saleId, accessoryName } = body;

    // ID ile silme (aksesuar satışları sayfasından)
    if (id) {
      const deletedAccessorySale = await prisma.accessorySale.delete({
        where: {
          id: id
        }
      });

      return NextResponse.json({ 
        message: 'Aksesuar satışı başarıyla silindi',
        deletedSale: deletedAccessorySale 
      });
    }

    // saleId ve accessoryName ile silme (araç satışları sayfasından)
    if (!saleId || !accessoryName) {
      return NextResponse.json(
        { error: 'id VEYA (saleId ve accessoryName) gereklidir' },
        { status: 400 }
      );
    }

    // Belirtilen saleId ve accessoryName ile eşleşen ilk kaydı sil (sadece bir tane silmek için)
    const whereCondition: any = {
      accessoryName: accessoryName
    };
    
    if (saleId) {
      whereCondition.saleId = saleId;
    } else {
      whereCondition.saleId = null;
    }
    
    const accessorySaleToDelete = await prisma.accessorySale.findFirst({
      where: whereCondition
    });

    if (!accessorySaleToDelete) {
      return NextResponse.json(
        { error: 'Silinecek aksesuar satışı bulunamadı' },
        { status: 404 }
      );
    }

    const deletedAccessorySale = await prisma.accessorySale.delete({
      where: {
        id: accessorySaleToDelete.id
      }
    });

    return NextResponse.json({ 
      message: 'Aksesuar satışı başarıyla silindi',
      deletedSale: deletedAccessorySale 
    });
  } catch (error) {
    console.error('Aksesuar satışı silinirken hata:', error);
    return NextResponse.json(
      { error: 'Aksesuar satışı silinemedi' },
      { status: 500 }
    );
  }
}
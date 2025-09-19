import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET - Tüm bakım ürünlerini getir
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';

    const skip = (page - 1) * limit;

    const where = search
      ? {
          OR: [
            { name: { contains: search, mode: 'insensitive' as const } },
            { description: { contains: search, mode: 'insensitive' as const } },
          ],
        }
      : {};

    const [products, total] = await Promise.all([
      prisma.maintenanceProduct.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.maintenanceProduct.count({ where }),
    ]);

    return NextResponse.json({
      products,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Bakım ürünleri getirilirken hata:', error);
    return NextResponse.json(
      { error: 'Bakım ürünleri getirilirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

// POST - Yeni bakım ürünü ekle
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, description } = body;

    // Validasyon
    if (!name || name.trim() === '') {
      return NextResponse.json(
        { error: 'Ürün adı zorunludur' },
        { status: 400 }
      );
    }

    // Aynı isimde ürün var mı kontrol et
    const existingProduct = await prisma.maintenanceProduct.findFirst({
      where: { name: name.trim() },
    });

    if (existingProduct) {
      return NextResponse.json(
        { error: 'Bu isimde bir bakım ürünü zaten mevcut' },
        { status: 400 }
      );
    }

    const product = await prisma.maintenanceProduct.create({
      data: {
        name: name.trim(),
        description: description?.trim() || null,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('Bakım ürünü eklenirken hata:', error);
    return NextResponse.json(
      { error: 'Bakım ürünü eklenirken bir hata oluştu' },
      { status: 500 }
    );
  }
}
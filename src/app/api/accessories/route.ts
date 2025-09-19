import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {

    const { searchParams } = new URL(request.url);
    const brandId = searchParams.get('brandId');
    const modelId = searchParams.get('modelId');

    const where: any = {};
    if (brandId) where.brandId = brandId;
    if (modelId) where.modelId = modelId;

    const accessories = await prisma.accessory.findMany({
      where,
      include: {
        brand: true,
        model: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(accessories);
  } catch (error) {
    console.error('Error fetching accessories:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {

    const body = await request.json();
    const { name, brandId, modelId } = body;

    if (!name || !brandId || !modelId) {
      return NextResponse.json(
        { error: 'Name, brandId, and modelId are required' },
        { status: 400 }
      );
    }

    // Check if brand exists
    const brand = await prisma.brand.findUnique({
      where: { id: brandId },
    });
    if (!brand) {
      return NextResponse.json(
        { error: 'Brand not found' },
        { status: 404 }
      );
    }

    // Check if model exists and belongs to the brand
    const model = await prisma.model.findFirst({
      where: {
        id: modelId,
        brandId: brandId,
      },
    });
    if (!model) {
      return NextResponse.json(
        { error: 'Model not found or does not belong to the specified brand' },
        { status: 404 }
      );
    }

    // Check if accessory already exists
    const existingAccessory = await prisma.accessory.findFirst({
      where: {
        name,
        brandId,
        modelId,
      },
    });
    if (existingAccessory) {
      return NextResponse.json(
        { error: 'Accessory with this name already exists for this brand and model' },
        { status: 409 }
      );
    }

    const accessory = await prisma.accessory.create({
      data: {
        name,
        brandId,
        modelId,
      },
      include: {
        brand: true,
        model: true,
      },
    });

    return NextResponse.json(accessory, { status: 201 });
  } catch (error) {
    console.error('Error creating accessory:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
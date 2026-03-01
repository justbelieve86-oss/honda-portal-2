import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const accessoryId = params.id;

    // Check if accessory exists
    const existingAccessory = await prisma.accessory.findUnique({
      where: { id: accessoryId },
    });

    if (!existingAccessory) {
      return NextResponse.json(
        { error: 'Accessory not found' },
        { status: 404 }
      );
    }

    // Delete the accessory
    await prisma.accessory.delete({
      where: { id: accessoryId },
    });

    return NextResponse.json(
      { message: 'Accessory deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting accessory:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const accessoryId = params.id;
    const body = await request.json();
    const { name, brandId, modelId } = body;

    if (!name || !brandId || !modelId) {
      return NextResponse.json(
        { error: 'Name, brandId, and modelId are required' },
        { status: 400 }
      );
    }

    // Check if accessory exists
    const existingAccessory = await prisma.accessory.findUnique({
      where: { id: accessoryId },
    });

    if (!existingAccessory) {
      return NextResponse.json(
        { error: 'Accessory not found' },
        { status: 404 }
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

    // Check if another accessory with the same name already exists for this brand and model
    const duplicateAccessory = await prisma.accessory.findFirst({
      where: {
        name,
        brandId,
        modelId,
        id: { not: accessoryId }, // Exclude current accessory
      },
    });
    if (duplicateAccessory) {
      return NextResponse.json(
        { error: 'Accessory with this name already exists for this brand and model' },
        { status: 409 }
      );
    }

    // Update the accessory
    const updatedAccessory = await prisma.accessory.update({
      where: { id: accessoryId },
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

    return NextResponse.json(updatedAccessory);
  } catch (error) {
    console.error('Error updating accessory:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // Veritabanından tüm rolleri getir
    const roles = await prisma.roleDefinition.findMany({
      orderBy: [
        { isSystem: 'desc' }, // Sistem rolleri önce
        { name: 'asc' }
      ]
    });

    // Frontend için uygun formata dönüştür
    const formattedRoles = roles.map((role: any) => ({
      id: role.id,
      key: role.name,
      name: role.displayName,
      description: role.description,
      permissions: role.permissions,
      deletable: !role.isSystem,
      isSystem: role.isSystem,
      createdAt: role.createdAt,
      updatedAt: role.updatedAt
    }));

    return NextResponse.json({ roles: formattedRoles });
  } catch (error) {
    console.error('Error fetching roles:', error);
    return NextResponse.json(
      { error: 'Roller alınırken hata oluştu' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    // CSRF token kontrolü
    const headersList = await headers();
    const csrfToken = headersList.get('x-csrf-token');
    
    if (!csrfToken) {
      return NextResponse.json(
        { error: 'CSRF token gereklidir' },
        { status: 403 }
      );
    }

    const { name, displayName, description, permissions } = await request.json();

    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: 'Rol adı gereklidir' },
        { status: 400 }
      );
    }

    if (!displayName || !displayName.trim()) {
      return NextResponse.json(
        { error: 'Rol görünen adı gereklidir' },
        { status: 400 }
      );
    }

    // Aynı isimde rol var mı kontrol et
    const existingRole = await prisma.roleDefinition.findUnique({
      where: { name }
    });

    if (existingRole) {
      return NextResponse.json(
        { error: 'Bu isimde bir rol zaten mevcut' },
        { status: 409 }
      );
    }

    // Yeni rol oluştur
    const newRole = await prisma.roleDefinition.create({
      data: {
        name,
        displayName,
        description: description || null,
        permissions: permissions || [],
        isSystem: false
      }
    });

    return NextResponse.json({
      message: 'Rol başarıyla oluşturuldu',
      role: {
        id: newRole.id,
        key: newRole.name,
        name: newRole.displayName,
        description: newRole.description,
        permissions: newRole.permissions,
        deletable: !newRole.isSystem,
        isSystem: newRole.isSystem,
        createdAt: newRole.createdAt,
        updatedAt: newRole.updatedAt
      }
    });
  } catch (error) {
    console.error('Error creating role:', error);
    return NextResponse.json(
      { error: 'Rol oluşturulurken hata oluştu' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    // CSRF token kontrolü
    const headersList = await headers();
    const csrfToken = headersList.get('x-csrf-token');
    
    if (!csrfToken) {
      return NextResponse.json(
        { error: 'CSRF token gereklidir' },
        { status: 403 }
      );
    }

    const { roleId } = await request.json();

    if (!roleId) {
      return NextResponse.json(
        { error: 'Rol ID gereklidir' },
        { status: 400 }
      );
    }

    // Rolü bul
    const role = await prisma.roleDefinition.findUnique({
      where: { id: roleId }
    });

    if (!role) {
      return NextResponse.json(
        { error: 'Rol bulunamadı' },
        { status: 404 }
      );
    }

    // Sistem rolü silinmeye çalışılıyor mu?
    if (role.isSystem) {
      return NextResponse.json(
        { error: 'Sistem rolleri silinemez' },
        { status: 403 }
      );
    }

    // Bu role sahip kullanıcı var mı kontrol et
    const usersWithRole = await prisma.user.findMany({
      where: { role: role.name }
    });

    if (usersWithRole.length > 0) {
      return NextResponse.json(
        { error: `Bu role sahip ${usersWithRole.length} kullanıcı bulunmaktadır. Önce bu kullanıcıların rollerini değiştirin.` },
        { status: 409 }
      );
    }

    // Rolü sil
    await prisma.roleDefinition.delete({
      where: { id: roleId }
    });

    return NextResponse.json({
      message: 'Rol başarıyla silindi'
    });
  } catch (error) {
    console.error('Error deleting role:', error);
    return NextResponse.json(
      { error: 'Rol silinirken hata oluştu' },
      { status: 500 }
    );
  }
}
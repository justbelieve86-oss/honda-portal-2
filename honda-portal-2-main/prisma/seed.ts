import prisma from '../lib/prisma';
import bcrypt from 'bcryptjs';

async function main() {
  try {
    console.log('🌱 Seeding database...');

    // Önce tüm verileri temizle (foreign key constraints nedeniyle sıralı silme)
    try {
      await prisma.customer.deleteMany({});
    } catch (e) { console.log('Customer table not found or empty'); }
    
    try {
      await prisma.corporateCustomer.deleteMany({});
    } catch (e) { console.log('CorporateCustomer table not found or empty'); }
    
    try {
      await prisma.sale.deleteMany({});
    } catch (e) { console.log('Sale table not found or empty'); }
    
    try {
      await prisma.accessorySale.deleteMany({});
    } catch (e) { console.log('AccessorySale table not found or empty'); }
    
    await prisma.user.deleteMany({});
    await prisma.roleDefinition.deleteMany({});
    await prisma.brand.deleteMany({});

    // Rolleri oluştur
    const adminRole = await prisma.roleDefinition.create({
      data: {
        name: 'ADMIN',
        displayName: 'Yönetici',
        description: 'Sistem yöneticisi',
        permissions: ['all'],
        isSystem: true
      }
    });

    const salesRole = await prisma.roleDefinition.create({
      data: {
        name: 'SATIS_DANISMANI',
        displayName: 'Satış Danışmanı',
        description: 'Satış danışmanı',
        permissions: ['sales:read', 'sales:write', 'customers:read', 'customers:write'],
        isSystem: false
      }
    });

    // Diğer rolleri de oluştur
    const roles = [
      { name: 'GENEL_MUDUR', displayName: 'Genel Müdür', description: 'Genel müdür rolü', permissions: ['all'] },
      { name: 'SATIS_MUDURU', displayName: 'Satış Müdürü', description: 'Satış müdürü rolü', permissions: ['sales:all', 'customers:all', 'reports:read'] },
      { name: 'SATIS_DESTEK_UZMANI', displayName: 'Satış Destek Uzmanı', description: 'Satış destek uzmanı rolü', permissions: ['sales:read', 'customers:read'] },
      { name: 'MUSTERI_ILISKILERI', displayName: 'Müşteri İlişkileri', description: 'Müşteri ilişkileri rolü', permissions: ['customers:all'] },
      { name: 'SIGORTA_BIRIMI', displayName: 'Sigorta Birimi', description: 'Sigorta birimi rolü', permissions: ['insurance:all'] }
    ];

    for (const role of roles) {
      await prisma.roleDefinition.create({
        data: {
          ...role,
          isSystem: false
        }
      });
    }

    // Markaları oluştur
    const honda = await prisma.brand.create({
      data: {
        name: 'Honda'
      }
    });

    // Admin kullanıcısını oluştur
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const adminUser = await prisma.user.create({
      data: {
        email: 'admin@honda.com',
        username: 'admin',
        password: hashedPassword,
        name: 'Admin User',
        role: 'ADMIN'
      }
    });

    console.log('✅ Database seeded successfully!');
    console.log('👤 Admin user created:', {
      username: adminUser.username,
      email: adminUser.email,
      password: 'admin123'
    });

  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
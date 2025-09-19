const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function backupDatabase() {
  try {
    console.log('Veritabanı yedekleme başlıyor...');
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupDir = path.join(__dirname, '..', 'backups');
    
    // Backup klasörünü oluştur
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    
    const backup = {
      timestamp,
      users: await prisma.user.findMany().catch(() => []),
      brands: await prisma.brand.findMany({
        include: {
          models: true
        }
      }).catch(() => []),
      packages: await prisma.package.findMany().catch(() => []),
      accessories: await prisma.accessory.findMany().catch(() => []),
      userBrands: await prisma.userBrand.findMany().catch(() => []),
      customers: await prisma.customer.findMany().catch(() => []),
      corporateCustomers: await prisma.corporateCustomer.findMany().catch(() => []),
      sales: await prisma.sale.findMany().catch(() => []),
      corporateSales: await prisma.corporateSale.findMany().catch(() => []),
      accessorySales: await prisma.accessorySale.findMany().catch(() => [])
    };
    
    // Başarılı olan tabloları logla
    const successfulTables = [];
    const failedTables = [];
    
    for (const [tableName, data] of Object.entries(backup)) {
      if (tableName === 'timestamp') continue;
      if (Array.isArray(data) && data.length >= 0) {
        successfulTables.push(`${tableName}: ${data.length} kayıt`);
      } else {
        failedTables.push(tableName);
      }
    }
    
    if (successfulTables.length > 0) {
      console.log('Başarıyla yedeklenen tablolar:');
      successfulTables.forEach(table => console.log(`- ${table}`));
    }
    
    if (failedTables.length > 0) {
      console.log('Yedeklenemeyen tablolar:');
      failedTables.forEach(table => console.log(`- ${table}`));
    }
    
    const backupFile = path.join(backupDir, `backup-${timestamp}.json`);
    fs.writeFileSync(backupFile, JSON.stringify(backup, null, 2));
    
    console.log(`Yedekleme tamamlandı: ${backupFile}`);
    console.log(`Yedeklenen veriler:`);
    console.log(`- ${backup.users.length} kullanıcı`);
    console.log(`- ${backup.brands.length} marka`);
    console.log(`- ${backup.accessories.length} aksesuar`);
    console.log(`- ${backup.userBrands.length} kullanıcı-marka yetkisi`);
    console.log(`- ${backup.customers.length} bireysel müşteri`);
    console.log(`- ${backup.corporateCustomers.length} kurumsal müşteri`);
    console.log(`- ${backup.sales.length} bireysel satış`);
    console.log(`- ${backup.corporateSales.length} kurumsal satış`);
    console.log(`- ${backup.accessorySales.length} aksesuar satışı`);
    
    return backupFile;
  } catch (error) {
    console.error('Yedekleme hatası:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

if (require.main === module) {
  backupDatabase().catch(console.error);
}

module.exports = { backupDatabase };
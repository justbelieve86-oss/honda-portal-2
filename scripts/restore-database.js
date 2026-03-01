const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function restoreDatabase(backupFile) {
  try {
    console.log(`Veritabanı geri yükleme başlıyor: ${backupFile}`);
    
    if (!fs.existsSync(backupFile)) {
      throw new Error(`Yedek dosyası bulunamadı: ${backupFile}`);
    }
    
    const backup = JSON.parse(fs.readFileSync(backupFile, 'utf8'));
    
    console.log('Mevcut veriler temizleniyor...');
    // Sıralı silme (foreign key constraints nedeniyle)
    await prisma.accessorySale.deleteMany();
    await prisma.corporateSale.deleteMany();
    await prisma.sale.deleteMany();
    await prisma.corporateCustomer.deleteMany();
    await prisma.customer.deleteMany();
    await prisma.userBrand.deleteMany();
    await prisma.accessory.deleteMany();
    await prisma.package.deleteMany();
    await prisma.model.deleteMany();
    await prisma.brand.deleteMany();
    await prisma.user.deleteMany();
    
    console.log('Kullanıcılar geri yükleniyor...');
    for (const user of backup.users) {
      await prisma.user.create({
        data: {
          id: user.id,
          email: user.email,
          username: user.username,
          password: user.password,
          name: user.name,
          role: user.role,
          createdAt: new Date(user.createdAt),
          updatedAt: new Date(user.updatedAt)
        }
      });
    }
    
    console.log('Markalar ve modeller geri yükleniyor...');
    for (const brand of backup.brands) {
      await prisma.brand.create({
        data: {
          id: brand.id,
          name: brand.name,
          createdAt: new Date(brand.createdAt),
          updatedAt: new Date(brand.updatedAt),
          models: {
            create: brand.models.map(model => ({
              id: model.id,
              name: model.name,
              createdAt: new Date(model.createdAt),
              updatedAt: new Date(model.updatedAt),
              packages: {
                create: model.packages.map(pkg => ({
                  id: pkg.id,
                  name: pkg.name,
                  basePrice: pkg.basePrice,
                  otvRate: pkg.otvRate,
                  kdvRate: pkg.kdvRate,
                  mtvAmount: pkg.mtvAmount,
                  plakaMasrafi: pkg.plakaMasrafi,
                  createdAt: new Date(pkg.createdAt),
                  updatedAt: new Date(pkg.updatedAt)
                }))
              }
            }))
          }
        }
      });
    }
    
    console.log('Aksesuarlar geri yükleniyor...');
    if (backup.accessories) {
      for (const accessory of backup.accessories) {
        await prisma.accessory.create({
          data: {
            id: accessory.id,
            name: accessory.name,
            brandId: accessory.brandId,
            modelId: accessory.modelId,
            createdAt: new Date(accessory.createdAt),
            updatedAt: new Date(accessory.updatedAt)
          }
        });
      }
    }

    console.log('Kullanıcı-marka yetkileri geri yükleniyor...');
    for (const userBrand of backup.userBrands) {
      await prisma.userBrand.create({
        data: {
          userId: userBrand.userId,
          brandId: userBrand.brandId
        }
      });
    }

    console.log('Bireysel müşteriler geri yükleniyor...');
    if (backup.customers) {
      for (const customer of backup.customers) {
        await prisma.customer.create({
          data: {
            id: customer.id,
            name: customer.name,
            email: customer.email,
            phone: customer.phone,
            tcNo: customer.tcNo,
            birthDate: customer.birthDate,
            occupation: customer.occupation,
            address: customer.address,
            cityId: customer.cityId,
            districtId: customer.districtId,
            status: customer.status,
            registerDate: customer.registerDate,
            createdBy: customer.createdBy,
            createdAt: new Date(customer.createdAt),
            updatedAt: new Date(customer.updatedAt)
          }
        });
      }
    }

    console.log('Kurumsal müşteriler geri yükleniyor...');
    if (backup.corporateCustomers) {
      for (const customer of backup.corporateCustomers) {
        await prisma.corporateCustomer.create({
          data: {
            id: customer.id,
            name: customer.name,
            taxNumber: customer.taxNumber,
            taxOffice: customer.taxOffice,
            email: customer.email,
            phone: customer.phone,
            address: customer.address,
            cityId: customer.cityId,
            districtId: customer.districtId,
            status: customer.status,
            registerDate: customer.registerDate,
            authorizedPerson: customer.authorizedPerson,
            createdBy: customer.createdBy,
            createdAt: new Date(customer.createdAt),
            updatedAt: new Date(customer.updatedAt)
          }
        });
      }
    }

    console.log('Bireysel satışlar geri yükleniyor...');
    if (backup.sales) {
      for (const sale of backup.sales) {
        await prisma.sale.create({
          data: {
            id: sale.id,
            customerId: sale.customerId,
            chassisNo: sale.chassisNo,
            engineNo: sale.engineNo,
            purchaseDate: sale.purchaseDate,
            salePrice: sale.salePrice,
            purchasePrice: sale.purchasePrice,
            contributionAmount: sale.contributionAmount,
            mtvCost: sale.mtvCost,
            licensePlateCost: sale.licensePlateCost,
            color: sale.color,
            packageId: sale.packageId,
            packageName: sale.packageName,
            createdBy: sale.createdBy,
            createdAt: new Date(sale.createdAt),
            updatedAt: new Date(sale.updatedAt)
          }
        });
      }
    }
    
    console.log('Kurumsal satışlar geri yükleniyor...');
    for (const sale of backup.corporateSales) {
      await prisma.corporateSale.create({
        data: {
          id: sale.id,
          customerName: sale.customerName,
          customerPhone: sale.customerPhone,
          customerEmail: sale.customerEmail,
          customerAddress: sale.customerAddress,
          vehicleBrand: sale.vehicleBrand,
          vehicleModel: sale.vehicleModel,
          vehicleYear: sale.vehicleYear,
          chassisNo: sale.chassisNo,
          engineNo: sale.engineNo,
          basePrice: sale.basePrice,
          otvCost: sale.otvCost,
          kdvCost: sale.kdvCost,
          mtvCost: sale.mtvCost,
          licensePlateCost: sale.licensePlateCost,
          color: sale.color,
          packageId: sale.packageId,
          packageName: sale.packageName,
          createdBy: sale.createdBy,
          createdAt: new Date(sale.createdAt),
          updatedAt: new Date(sale.updatedAt)
        }
      });
    }
    
    console.log('Aksesuar satışları geri yükleniyor...');
    for (const sale of backup.accessorySales) {
      await prisma.accessorySale.create({
        data: {
          id: sale.id,
          customerName: sale.customerName,
          vehicleBrand: sale.vehicleBrand,
          vehicleModel: sale.vehicleModel,
          vehiclePackage: sale.vehiclePackage,
          chassisNo: sale.chassisNo,
          engineNo: sale.engineNo,
          accessoryName: sale.accessoryName,
          accessoryPrice: sale.accessoryPrice,
          saleDate: sale.saleDate,
          createdBy: sale.createdBy,
          createdAt: new Date(sale.createdAt),
          updatedAt: new Date(sale.updatedAt)
        }
      });
    }
    
    console.log('Geri yükleme tamamlandı!');
    console.log(`Geri yüklenen veriler:`);
    console.log(`- ${backup.users.length} kullanıcı`);
    console.log(`- ${backup.brands.length} marka`);
    console.log(`- ${backup.accessories ? backup.accessories.length : 0} aksesuar`);
    console.log(`- ${backup.userBrands.length} kullanıcı-marka yetkisi`);
    console.log(`- ${backup.customers ? backup.customers.length : 0} bireysel müşteri`);
    console.log(`- ${backup.corporateCustomers ? backup.corporateCustomers.length : 0} kurumsal müşteri`);
    console.log(`- ${backup.sales ? backup.sales.length : 0} bireysel satış`);
    console.log(`- ${backup.corporateSales.length} kurumsal satış`);
    console.log(`- ${backup.accessorySales.length} aksesuar satışı`);
    
  } catch (error) {
    console.error('Geri yükleme hatası:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

if (require.main === module) {
  const backupFile = process.argv[2];
  if (!backupFile) {
    console.error('Kullanım: node restore-database.js <backup-file>');
    process.exit(1);
  }
  restoreDatabase(backupFile).catch(console.error);
}

module.exports = { restoreDatabase };
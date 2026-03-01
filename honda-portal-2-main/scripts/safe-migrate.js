const { exec } = require('child_process');
const { promisify } = require('util');
const { backupDatabase } = require('./backup-database');
const { restoreDatabase } = require('./restore-database');

const execAsync = promisify(exec);

async function safeMigrate() {
  let backupFile = null;
  
  try {
    console.log('🔄 Güvenli migration işlemi başlıyor...');
    
    // 1. Veritabanını yedekle
    console.log('\n📦 1. Veritabanı yedekleniyor...');
    backupFile = await backupDatabase();
    
    // 2. Migration'ları uygula
    console.log('\n🚀 2. Migrationlar uygulanıyor...');
    await execAsync('npx prisma migrate deploy');
    
    // 3. Prisma Client'ı yeniden oluştur
    console.log('\n⚙️  3. Prisma Client yeniden oluşturuluyor...');
    await execAsync('npx prisma generate');
    
    console.log('\n✅ Migration başarıyla tamamlandı!');
    console.log(`📁 Yedek dosyası: ${backupFile}`);
    console.log('\n💡 Eğer bir sorun yaşarsanız, şu komutla geri yükleyebilirsiniz:');
    console.log(`   node scripts/restore-database.js "${backupFile}"`);
    
  } catch (error) {
    console.error('\n❌ Migration sırasında hata oluştu:', error.message);
    
    if (backupFile) {
      console.log('\n🔄 Veritabanı otomatik olarak geri yükleniyor...');
      try {
        await restoreDatabase(backupFile);
        console.log('✅ Veritabanı başarıyla geri yüklendi.');
      } catch (restoreError) {
        console.error('❌ Geri yükleme hatası:', restoreError.message);
        console.log(`\n🔧 Manuel geri yükleme için:`);
        console.log(`   node scripts/restore-database.js "${backupFile}"`);
      }
    }
    
    throw error;
  }
}

if (require.main === module) {
  safeMigrate().catch((error) => {
    console.error('\n💥 İşlem başarısız:', error.message);
    process.exit(1);
  });
}

module.exports = { safeMigrate };
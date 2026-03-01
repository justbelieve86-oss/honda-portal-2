const { backupDatabase } = require('./backup-database');
const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

// Backup konfigürasyonu
const BACKUP_CONFIG = {
  // Günlük backup saati (24 saat formatında)
  dailyBackupTime: '02:00', // Gece 02:00
  // Haftalık backup günü ve saati (0=Pazar, 1=Pazartesi, ...)
  weeklyBackupDay: 0, // Pazar
  weeklyBackupTime: '03:00', // Gece 03:00
  // Aylık backup günü ve saati
  monthlyBackupDay: 1, // Ayın 1. günü
  monthlyBackupTime: '04:00', // Gece 04:00
  // Backup saklama süreleri (gün)
  retentionPolicy: {
    daily: 7,    // 7 günlük daily backup
    weekly: 30,  // 30 günlük weekly backup
    monthly: 365 // 365 günlük monthly backup
  }
};

class BackupScheduler {
  constructor() {
    this.backupDir = path.join(__dirname, '..', 'backups');
    this.logFile = path.join(this.backupDir, 'backup.log');
    this.isRunning = false;
  }

  // Log yazma fonksiyonu
  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    
    console.log(logMessage.trim());
    
    // Log dosyasına yaz
    if (!fs.existsSync(this.backupDir)) {
      fs.mkdirSync(this.backupDir, { recursive: true });
    }
    
    fs.appendFileSync(this.logFile, logMessage);
  }

  // Backup türüne göre dosya adı oluştur
  generateBackupFileName(type = 'manual') {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    return `backup-${type}-${timestamp}.json`;
  }

  // Backup gerçekleştir
  async performBackup(type = 'manual') {
    if (this.isRunning) {
      this.log('Backup zaten çalışıyor, yeni backup başlatılmadı', 'WARN');
      return null;
    }

    this.isRunning = true;
    
    try {
      this.log(`${type.toUpperCase()} backup başlatılıyor...`);
      
      const backupFile = await backupDatabase();
      
      // Backup dosyasını türüne göre yeniden adlandır
      const newFileName = this.generateBackupFileName(type);
      const newFilePath = path.join(this.backupDir, newFileName);
      
      if (fs.existsSync(backupFile)) {
        fs.renameSync(backupFile, newFilePath);
        this.log(`${type.toUpperCase()} backup başarıyla tamamlandı: ${newFileName}`);
        
        // Backup boyutunu log'la
        const stats = fs.statSync(newFilePath);
        const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
        this.log(`Backup dosya boyutu: ${fileSizeInMB} MB`);
        
        return newFilePath;
      } else {
        throw new Error('Backup dosyası oluşturulamadı');
      }
    } catch (error) {
      this.log(`${type.toUpperCase()} backup hatası: ${error.message}`, 'ERROR');
      throw error;
    } finally {
      this.isRunning = false;
    }
  }

  // Eski backup dosyalarını temizle
  async cleanupOldBackups() {
    try {
      this.log('Eski backup dosyaları temizleniyor...');
      
      const files = fs.readdirSync(this.backupDir)
        .filter(file => file.startsWith('backup-') && file.endsWith('.json'))
        .map(file => {
          const filePath = path.join(this.backupDir, file);
          const stats = fs.statSync(filePath);
          return {
            name: file,
            path: filePath,
            created: stats.birthtime,
            type: this.getBackupType(file)
          };
        })
        .sort((a, b) => b.created - a.created);

      let deletedCount = 0;
      const now = new Date();

      for (const file of files) {
        const ageInDays = (now - file.created) / (1000 * 60 * 60 * 24);
        const retentionDays = BACKUP_CONFIG.retentionPolicy[file.type] || BACKUP_CONFIG.retentionPolicy.daily;
        
        if (ageInDays > retentionDays) {
          fs.unlinkSync(file.path);
          this.log(`Eski backup dosyası silindi: ${file.name} (${Math.floor(ageInDays)} gün eski)`);
          deletedCount++;
        }
      }
      
      if (deletedCount === 0) {
        this.log('Silinecek eski backup dosyası bulunamadı');
      } else {
        this.log(`${deletedCount} eski backup dosyası temizlendi`);
      }
    } catch (error) {
      this.log(`Backup temizleme hatası: ${error.message}`, 'ERROR');
    }
  }

  // Backup türünü dosya adından çıkar
  getBackupType(fileName) {
    if (fileName.includes('-daily-')) return 'daily';
    if (fileName.includes('-weekly-')) return 'weekly';
    if (fileName.includes('-monthly-')) return 'monthly';
    return 'manual';
  }

  // Backup istatistiklerini göster
  getBackupStats() {
    try {
      const files = fs.readdirSync(this.backupDir)
        .filter(file => file.startsWith('backup-') && file.endsWith('.json'))
        .map(file => {
          const filePath = path.join(this.backupDir, file);
          const stats = fs.statSync(filePath);
          return {
            name: file,
            size: stats.size,
            created: stats.birthtime,
            type: this.getBackupType(file)
          };
        });

      const stats = {
        total: files.length,
        totalSize: files.reduce((sum, file) => sum + file.size, 0),
        byType: {
          daily: files.filter(f => f.type === 'daily').length,
          weekly: files.filter(f => f.type === 'weekly').length,
          monthly: files.filter(f => f.type === 'monthly').length,
          manual: files.filter(f => f.type === 'manual').length
        },
        oldest: files.length > 0 ? Math.min(...files.map(f => f.created)) : null,
        newest: files.length > 0 ? Math.max(...files.map(f => f.created)) : null
      };

      return stats;
    } catch (error) {
      this.log(`Backup istatistik hatası: ${error.message}`, 'ERROR');
      return null;
    }
  }

  // Scheduler'ı başlat
  start() {
    this.log('Backup scheduler başlatılıyor...');

    // Günlük backup (her gün saat 02:00)
    cron.schedule(`0 ${BACKUP_CONFIG.dailyBackupTime.split(':')[1]} ${BACKUP_CONFIG.dailyBackupTime.split(':')[0]} * * *`, async () => {
      await this.performBackup('daily');
      await this.cleanupOldBackups();
    });

    // Haftalık backup (her pazar saat 03:00)
    cron.schedule(`0 ${BACKUP_CONFIG.weeklyBackupTime.split(':')[1]} ${BACKUP_CONFIG.weeklyBackupTime.split(':')[0]} * * ${BACKUP_CONFIG.weeklyBackupDay}`, async () => {
      await this.performBackup('weekly');
    });

    // Aylık backup (her ayın 1. günü saat 04:00)
    cron.schedule(`0 ${BACKUP_CONFIG.monthlyBackupTime.split(':')[1]} ${BACKUP_CONFIG.monthlyBackupTime.split(':')[0]} ${BACKUP_CONFIG.monthlyBackupDay} * *`, async () => {
      await this.performBackup('monthly');
    });

    this.log('Backup scheduler başarıyla başlatıldı');
    this.log(`Günlük backup: Her gün ${BACKUP_CONFIG.dailyBackupTime}`);
    this.log(`Haftalık backup: Her ${['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'][BACKUP_CONFIG.weeklyBackupDay]} ${BACKUP_CONFIG.weeklyBackupTime}`);
    this.log(`Aylık backup: Her ayın ${BACKUP_CONFIG.monthlyBackupDay}. günü ${BACKUP_CONFIG.monthlyBackupTime}`);
  }

  // Scheduler'ı durdur
  stop() {
    this.log('Backup scheduler durduruluyor...');
    cron.destroy();
    this.log('Backup scheduler durduruldu');
  }
}

// CLI kullanımı
if (require.main === module) {
  const scheduler = new BackupScheduler();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      scheduler.start();
      // Process'i canlı tut
      process.on('SIGINT', () => {
        scheduler.log('SIGINT sinyali alındı, scheduler durduruluyor...');
        scheduler.stop();
        process.exit(0);
      });
      break;
      
    case 'backup':
      const type = process.argv[3] || 'manual';
      scheduler.performBackup(type)
        .then(filePath => {
          if (filePath) {
            console.log(`Backup tamamlandı: ${filePath}`);
          }
          process.exit(0);
        })
        .catch(error => {
          console.error('Backup hatası:', error.message);
          process.exit(1);
        });
      break;
      
    case 'cleanup':
      scheduler.cleanupOldBackups()
        .then(() => {
          console.log('Cleanup tamamlandı');
          process.exit(0);
        })
        .catch(error => {
          console.error('Cleanup hatası:', error.message);
          process.exit(1);
        });
      break;
      
    case 'stats':
      const stats = scheduler.getBackupStats();
      if (stats) {
        console.log('\n=== BACKUP İSTATİSTİKLERİ ===');
        console.log(`Toplam backup: ${stats.total}`);
        console.log(`Toplam boyut: ${(stats.totalSize / (1024 * 1024)).toFixed(2)} MB`);
        console.log(`Günlük: ${stats.byType.daily}`);
        console.log(`Haftalık: ${stats.byType.weekly}`);
        console.log(`Aylık: ${stats.byType.monthly}`);
        console.log(`Manuel: ${stats.byType.manual}`);
        if (stats.oldest) {
          console.log(`En eski: ${new Date(stats.oldest).toLocaleString('tr-TR')}`);
        }
        if (stats.newest) {
          console.log(`En yeni: ${new Date(stats.newest).toLocaleString('tr-TR')}`);
        }
      }
      process.exit(0);
      break;
      
    default:
      console.log('Kullanım:');
      console.log('  node backup-scheduler.js start     - Scheduler\'ı başlat');
      console.log('  node backup-scheduler.js backup [type] - Manuel backup (type: daily|weekly|monthly|manual)');
      console.log('  node backup-scheduler.js cleanup   - Eski backup\'ları temizle');
      console.log('  node backup-scheduler.js stats     - Backup istatistiklerini göster');
      process.exit(1);
  }
}

module.exports = { BackupScheduler, BACKUP_CONFIG };
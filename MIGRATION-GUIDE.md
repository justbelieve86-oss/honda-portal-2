# Güvenli Migration Rehberi

Bu rehber, veritabanı değişikliklerini güvenli bir şekilde yapmak için oluşturulmuştur.

## Sorun

Önceden yapılan migration işlemlerinde veriler kayboluyordu çünkü:
- Migration dosyaları tabloları tamamen yeniden oluşturuyordu
- Mevcut veriler yedeklenmiyordu
- Hata durumunda geri dönüş mekanizması yoktu

## Çözüm

Artık güvenli migration sistemi ile:
✅ Otomatik yedekleme
✅ Hata durumunda otomatik geri yükleme
✅ Mevcut verilerin korunması
✅ Detaylı loglama

## Kullanım

### 1. Güvenli Migration (Önerilen)
```bash
npm run prisma:migrate:safe
```

Bu komut:
1. Veritabanını otomatik yedekler
2. Migration'ları uygular
3. Prisma Client'ı yeniden oluşturur
4. Hata durumunda otomatik geri yükler

### 2. Manuel Yedekleme
```bash
npm run db:backup
```

### 3. Manuel Geri Yükleme
```bash
npm run db:restore backup-dosyasi.json
```

### 4. Seed (Güvenli)
```bash
npm run db:seed
```
Seed işlemi artık mevcut verileri korur.

## Yedek Dosyaları

Yedek dosyaları `backups/` klasöründe saklanır:
- Format: `backup-YYYY-MM-DDTHH-mm-ss-sssZ.json`
- İçerik: Tüm tablo verileri JSON formatında
- Otomatik timestamp ile adlandırılır

## Önemli Notlar

⚠️ **Artık `prisma migrate dev` kullanmayın!**
✅ **Bunun yerine `npm run prisma:migrate:safe` kullanın**

⚠️ **Migration öncesi mutlaka yedek alın**
✅ **Güvenli migration otomatik yedek alır**

⚠️ **Production'da extra dikkatli olun**
✅ **Test ortamında önce deneyin**

## Hata Durumları

Eğer migration sırasında hata oluşursa:
1. Sistem otomatik olarak geri yükleme yapar
2. Hata mesajı gösterilir
3. Manuel geri yükleme komutu önerilir

## Örnek Kullanım

```bash
# Şema değişikliği yaptınız
# Güvenli migration çalıştırın
npm run prisma:migrate:safe

# Çıktı:
# 🔄 Güvenli migration işlemi başlıyor...
# 📦 1. Veritabanı yedekleniyor...
# Yedekleme tamamlandı: /path/to/backup-2024-01-15T10-30-45-123Z.json
# 🚀 2. Migrationlar uygulanıyor...
# ⚙️  3. Prisma Client yeniden oluşturuluyor...
# ✅ Migration başarıyla tamamlandı!
```

## Dosya Yapısı

```
scripts/
├── backup-database.js    # Yedekleme scripti
├── restore-database.js   # Geri yükleme scripti
└── safe-migrate.js       # Güvenli migration scripti

backups/
└── backup-*.json         # Yedek dosyaları
```
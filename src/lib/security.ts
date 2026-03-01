import bcrypt from 'bcryptjs';
import { 
  SECURITY_POLICIES, 
  SecurityScanner, 
  InputValidator, 
  RateLimitStore,
  VALIDATION_PATTERNS 
} from './security-utils';

// Re-export policies for backward compatibility
export const PASSWORD_POLICY = SECURITY_POLICIES.password;
export const SESSION_POLICY = SECURITY_POLICIES.session;
export const RATE_LIMIT_POLICY = SECURITY_POLICIES.rateLimit;

/**
 * Şifre güvenlik kontrolü
 */
export function validatePasswordStrength(password: string): {
  isValid: boolean;
  errors: string[];
  score: number;
} {
  const errors: string[] = [];
  let score = 0;

  // Uzunluk kontrolü
  if (password.length < PASSWORD_POLICY.minLength) {
    errors.push(`Şifre en az ${PASSWORD_POLICY.minLength} karakter olmalıdır`);
  } else if (password.length >= PASSWORD_POLICY.minLength) {
    score += 1;
  }

  if (password.length > PASSWORD_POLICY.maxLength) {
    errors.push(`Şifre en fazla ${PASSWORD_POLICY.maxLength} karakter olabilir`);
  }

  // Büyük harf kontrolü
  if (PASSWORD_POLICY.requireUppercase && !/[A-Z]/.test(password)) {
    errors.push('Şifre en az bir büyük harf içermelidir');
  } else if (/[A-Z]/.test(password)) {
    score += 1;
  }

  // Küçük harf kontrolü
  if (PASSWORD_POLICY.requireLowercase && !/[a-z]/.test(password)) {
    errors.push('Şifre en az bir küçük harf içermelidir');
  } else if (/[a-z]/.test(password)) {
    score += 1;
  }

  // Rakam kontrolü
  if (PASSWORD_POLICY.requireNumbers && !/\d/.test(password)) {
    errors.push('Şifre en az bir rakam içermelidir');
  } else if (/\d/.test(password)) {
    score += 1;
  }

  // Özel karakter kontrolü
  if (PASSWORD_POLICY.requireSpecialChars) {
    const specialCharRegex = new RegExp(`[${PASSWORD_POLICY.specialChars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}]`);
    if (!specialCharRegex.test(password)) {
      errors.push(`Şifre en az bir özel karakter içermelidir (${PASSWORD_POLICY.specialChars})`);
    } else {
      score += 1;
    }
  }

  // Yaygın şifre kontrolü
  const commonPasswords = [
    '12345678', 'password', '123456789', 'qwerty', 'abc123',
    'password123', '123123123', 'admin', 'letmein', 'welcome'
  ];
  
  if (commonPasswords.includes(password.toLowerCase())) {
    errors.push('Bu şifre çok yaygın kullanılmaktadır, daha güvenli bir şifre seçiniz');
    score = Math.max(0, score - 2);
  }

  return {
    isValid: errors.length === 0,
    errors,
    score: Math.min(5, score), // Maksimum 5 puan
  };
}

/**
 * Güvenli şifre hash'leme
 */
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12; // Güvenlik için yüksek salt rounds
  return bcrypt.hash(password, saltRounds);
}

/**
 * Şifre doğrulama
 */
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

/**
 * Güvenli rastgele şifre üretimi
 */
export function generateSecurePassword(length: number = 12): string {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specialChars = PASSWORD_POLICY.specialChars;
  
  const allChars = uppercase + lowercase + numbers + specialChars;
  
  let password = '';
  
  // Her kategoriden en az bir karakter ekle
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += specialChars[Math.floor(Math.random() * specialChars.length)];
  
  // Kalan karakterleri rastgele ekle
  for (let i = 4; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  
  // Karakterleri karıştır
  return password.split('').sort(() => Math.random() - 0.5).join('');
}

/**
 * Input sanitization
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/[<>]/g, '') // XSS koruması için temel HTML tag'leri kaldır
    .replace(/['"]/g, '') // SQL injection koruması için tırnak işaretlerini kaldır
    .slice(0, 1000); // Maksimum uzunluk sınırı
}

/**
 * Email sanitization ve validation
 */
export function sanitizeEmail(email: string): string {
  if (typeof email !== 'string') return '';
  
  return email
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9@._-]/g, '') // Sadece geçerli email karakterleri
    .slice(0, 100); // Maksimum uzunluk sınırı
}

/**
 * TC Kimlik No validation
 */
export function validateTCNo(tcNo: string): boolean {
  if (typeof tcNo !== 'string' || tcNo.length !== 11) return false;
  
  // Sadece rakam kontrolü
  if (!/^\d{11}$/.test(tcNo)) return false;
  
  // İlk hane 0 olamaz
  if (tcNo[0] === '0') return false;
  
  // TC Kimlik No algoritması kontrolü
  const digits = tcNo.split('').map(Number);
  
  // İlk 10 hanenin toplamı
  const sum1 = digits.slice(0, 10).reduce((sum, digit) => sum + digit, 0);
  if (sum1 % 10 !== digits[10]) return false;
  
  // Tek ve çift hanelerin toplamı kontrolü
  const oddSum = digits[0] + digits[2] + digits[4] + digits[6] + digits[8];
  const evenSum = digits[1] + digits[3] + digits[5] + digits[7];
  
  if (((oddSum * 7) - evenSum) % 10 !== digits[9]) return false;
  
  return true;
}

/**
 * Telefon numarası sanitization
 */
export function sanitizePhoneNumber(phone: string): string {
  if (typeof phone !== 'string') return '';
  
  // Sadece rakam, boşluk, tire, parantez ve + işareti
  return phone
    .replace(/[^\d\s\-\+\(\)]/g, '')
    .trim()
    .slice(0, 20);
}

/**
 * Session timeout kontrolü
 */
export function isSessionExpired(lastActivity: Date): boolean {
  const now = new Date();
  const timeDiff = now.getTime() - lastActivity.getTime();
  return timeDiff > SESSION_POLICY.maxAge;
}

/**
 * Session uyarı zamanı kontrolü
 */
export function shouldShowSessionWarning(lastActivity: Date): boolean {
  const now = new Date();
  const timeDiff = now.getTime() - lastActivity.getTime();
  const remainingTime = SESSION_POLICY.maxAge - timeDiff;
  return remainingTime <= SESSION_POLICY.warningTime && remainingTime > 0;
}

// Use the unified RateLimitStore from security-utils
export const rateLimitStore = new RateLimitStore();
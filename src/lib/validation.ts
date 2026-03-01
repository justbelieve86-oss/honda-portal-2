import { z } from 'zod';
import { validatePasswordStrength, validateTCNo } from './security';

// Auth validation schemas
export const loginSchema = z.object({
  username: z.string()
    .min(1, 'Kullanıcı adı zorunludur')
    .max(100, 'Kullanıcı adı çok uzun')
    .trim(),
  password: z.string()
    .min(1, 'Şifre zorunludur')
    .max(200, 'Şifre çok uzun'),
  loginType: z.string().optional()
});

export const registerSchema = z.object({
  username: z.string()
    .min(3, 'Kullanıcı adı en az 3 karakter olmalıdır')
    .max(50, 'Kullanıcı adı en fazla 50 karakter olabilir')
    .regex(/^[a-zA-Z0-9_]+$/, 'Kullanıcı adı sadece harf, rakam ve alt çizgi içerebilir')
    .trim(),
  email: z.string()
    .email('Geçerli bir e-posta adresi giriniz')
    .max(100, 'E-posta adresi çok uzun')
    .trim()
    .toLowerCase(),
  password: z.string()
    .refine((password) => {
      const validation = validatePasswordStrength(password);
      return validation.isValid;
    }, (password) => {
      const validation = validatePasswordStrength(password);
      return { message: validation.errors.join(', ') };
    }),
  name: z.string()
    .min(2, 'İsim en az 2 karakter olmalıdır')
    .max(100, 'İsim çok uzun')
    .trim(),
  role: z.enum(['ADMIN', 'USER']).default('USER')
});

// Password change schema
export const changePasswordSchema = z.object({
  currentPassword: z.string()
    .min(1, 'Mevcut şifre zorunludur'),
  newPassword: z.string()
    .refine((password) => {
      const validation = validatePasswordStrength(password);
      return validation.isValid;
    }, (password) => {
      const validation = validatePasswordStrength(password);
      return { message: validation.errors.join(', ') };
    }),
  confirmPassword: z.string()
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Şifreler eşleşmiyor",
  path: ["confirmPassword"],
});

// Customer validation schemas
export const customerSchema = z.object({
  name: z.string()
    .min(2, 'İsim en az 2 karakter olmalıdır')
    .max(100, 'İsim çok uzun')
    .trim(),
  tcNo: z.string()
    .length(11, 'TC Kimlik No 11 haneli olmalıdır')
    .refine((tcNo) => validateTCNo(tcNo), 'Geçerli bir TC Kimlik No giriniz'),
  phone: z.string()
    .min(10, 'Telefon numarası en az 10 haneli olmalıdır')
    .max(15, 'Telefon numarası çok uzun')
    .regex(/^[\d\s\-\+\(\)]+$/, 'Geçerli bir telefon numarası giriniz'),
  email: z.string()
    .email('Geçerli bir e-posta adresi giriniz')
    .max(100, 'E-posta adresi çok uzun')
    .trim()
    .toLowerCase(),
  birthDate: z.string()
    .optional(),
  occupation: z.string()
    .max(100, 'Meslek bilgisi çok uzun')
    .optional(),
  address: z.string()
    .max(500, 'Adres çok uzun')
    .optional(),
  cityId: z.number()
    .int('Şehir ID geçerli bir sayı olmalıdır')
    .positive('Şehir seçimi zorunludur')
    .optional(),
  districtId: z.number()
    .int('İlçe ID geçerli bir sayı olmalıdır')
    .positive('İlçe seçimi zorunludur')
    .optional()
});

// Sale validation schemas
export const saleSchema = z.object({
  customerId: z.number()
    .int('Müşteri ID geçerli bir sayı olmalıdır')
    .positive('Müşteri seçimi zorunludur'),
  brandId: z.number()
    .int('Marka ID geçerli bir sayı olmalıdır')
    .positive('Marka seçimi zorunludur'),
  model: z.string()
    .min(1, 'Model bilgisi zorunludur')
    .max(100, 'Model adı çok uzun')
    .trim(),
  year: z.number()
    .int('Yıl geçerli bir sayı olmalıdır')
    .min(1900, 'Geçerli bir yıl giriniz')
    .max(new Date().getFullYear() + 1, 'Gelecek yıldan fazla olamaz'),
  price: z.number()
    .positive('Fiyat pozitif bir sayı olmalıdır')
    .max(10000000, 'Fiyat çok yüksek'),
  saleDate: z.string()
    .datetime('Geçerli bir tarih formatı giriniz')
    .optional(),
  notes: z.string()
    .max(1000, 'Notlar çok uzun')
    .optional()
});

// Brand validation schema
export const brandSchema = z.object({
  name: z.string()
    .min(1, 'Marka adı zorunludur')
    .max(50, 'Marka adı çok uzun')
    .trim()
});

// Generic ID validation
export const idSchema = z.object({
  id: z.string()
    .regex(/^\d+$/, 'Geçerli bir ID giriniz')
    .transform(val => parseInt(val, 10))
});

// Validation helper function
export function validateRequest<T>(schema: z.ZodSchema<T>, data: unknown): { success: true; data: T } | { success: false; error: string } {
  try {
    const validatedData = schema.parse(data);
    return { success: true, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessage = error.errors.map(err => err.message).join(', ');
      return { success: false, error: errorMessage };
    }
    return { success: false, error: 'Validation hatası oluştu' };
  }
}

// Middleware helper for API routes
export function withValidation<T>(schema: z.ZodSchema<T>) {
  return async (request: Request): Promise<{ success: true; data: T } | { success: false; response: Response }> => {
    try {
      const body = await request.json();
      const validation = validateRequest(schema, body);
      
      if (!validation.success) {
        return {
          success: false,
          response: new Response(
            JSON.stringify({ error: validation.error }),
            { 
              status: 400,
              headers: { 'Content-Type': 'application/json' }
            }
          )
        };
      }
      
      return { success: true, data: validation.data };
    } catch (error) {
      return {
        success: false,
        response: new Response(
          JSON.stringify({ error: 'Geçersiz JSON formatı' }),
          { 
            status: 400,
            headers: { 'Content-Type': 'application/json' }
          }
        )
      };
    }
  };
}
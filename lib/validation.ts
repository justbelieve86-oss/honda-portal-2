import { z } from 'zod';

// Login validation schema
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

// User registration schema
export const registerSchema = z.object({
  name: z.string().min(2, 'İsim en az 2 karakter olmalıdır'),
  email: z.string().email('Geçerli bir email adresi girin'),
  password: z.string().min(6, 'Şifre en az 6 karakter olmalıdır'),
  phone: z.string().optional(),
});

// Brand validation schema
export const brandSchema = z.object({
  name: z.string().min(1, 'Marka adı zorunludur'),
});

// Model validation schema
export const modelSchema = z.object({
  name: z.string().min(1, 'Model adı zorunludur'),
  brandId: z.string().min(1, 'Marka seçimi zorunludur'),
});

// Package validation schema
export const packageSchema = z.object({
  name: z.string().min(1, 'Paket adı zorunludur'),
  modelId: z.string().min(1, 'Model seçimi zorunludur'),
  mtvAmount: z.number().min(0, 'MTV tutarı 0 veya pozitif olmalıdır'),
  plakaMasrafi: z.number().min(0, 'Plaka masrafı 0 veya pozitif olmalıdır'),
});

// Accessory validation schema
export const accessorySchema = z.object({
  name: z.string().min(1, 'Aksesuar adı zorunludur'),
  brandId: z.string().min(1, 'Marka seçimi zorunludur'),
  modelId: z.string().min(1, 'Model seçimi zorunludur'),
});

// Maintenance product validation schema
export const maintenanceProductSchema = z.object({
  name: z.string().min(1, 'Ürün adı zorunludur'),
  description: z.string().optional(),
});

// Customer validation schema
export const customerSchema = z.object({
  name: z.string().min(2, 'İsim en az 2 karakter olmalıdır'),
  email: z.string().email('Geçerli bir email adresi girin').optional().or(z.literal('')),
  phone: z.string().min(10, 'Telefon numarası en az 10 karakter olmalıdır'),
  address: z.string().optional(),
  cityId: z.number().optional(),
  districtId: z.number().optional(),
  tcNo: z.string().optional(),
  birthDate: z.string().optional(),
  occupation: z.string().optional(),
});

// Vehicle validation schema
export const vehicleSchema = z.object({
  customerId: z.string().min(1, 'Müşteri seçimi zorunludur'),
  brandId: z.string().min(1, 'Marka seçimi zorunludur'),
  modelId: z.string().min(1, 'Model seçimi zorunludur'),
  packageId: z.string().min(1, 'Paket seçimi zorunludur'),
  licensePlate: z.string().min(1, 'Plaka zorunludur'),
  chassisNumber: z.string().min(1, 'Şasi numarası zorunludur'),
  engineNumber: z.string().min(1, 'Motor numarası zorunludur'),
  year: z.number().min(1900, 'Geçerli bir yıl girin').max(new Date().getFullYear() + 1),
  color: z.string().min(1, 'Renk zorunludur'),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type BrandInput = z.infer<typeof brandSchema>;
export type ModelInput = z.infer<typeof modelSchema>;
export type PackageInput = z.infer<typeof packageSchema>;
export type AccessoryInput = z.infer<typeof accessorySchema>;
export type MaintenanceProductInput = z.infer<typeof maintenanceProductSchema>;
export type CustomerInput = z.infer<typeof customerSchema>;
export type VehicleInput = z.infer<typeof vehicleSchema>;
import { NextRequest } from 'next/server';

// CSRF token oluşturma (Edge Runtime uyumlu)
export function generateCSRFToken(): string {
  // Edge Runtime'da crypto.randomBytes yerine Web Crypto API kullanıyoruz
  const array = new Uint8Array(32);
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    crypto.getRandomValues(array);
  } else {
    // Fallback for environments without crypto
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.floor(Math.random() * 256);
    }
  }
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

// CSRF token doğrulama
export function validateCSRFToken(token: string, sessionToken: string): boolean {
  if (!token || !sessionToken) {
    return false;
  }
  return token === sessionToken;
}

// CSRF koruması middleware fonksiyonu
export function csrfProtection(request: NextRequest): boolean {
  // GET, HEAD, OPTIONS istekleri için CSRF koruması gerekmiyor
  if (['GET', 'HEAD', 'OPTIONS'].includes(request.method)) {
    return true;
  }

  // POST, PUT, DELETE gibi state-changing istekler için CSRF token kontrolü
  const csrfToken = request.headers.get('x-csrf-token') || 
                   request.headers.get('csrf-token');
  
  const sessionToken = request.cookies.get('csrf-token')?.value;

  if (!csrfToken || !sessionToken) {
    return false;
  }

  return validateCSRFToken(csrfToken, sessionToken);
}

// CSRF token'ı cookie'ye set etme helper'ı
export function setCSRFTokenCookie(token: string) {
  return {
    name: 'csrf-token',
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as const,
    maxAge: 60 * 60 * 24 // 24 saat
  };
}
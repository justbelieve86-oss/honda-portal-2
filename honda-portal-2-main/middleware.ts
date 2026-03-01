import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { csrfProtection } from './lib/csrf';

console.log('🔥 Middleware file loaded');

// Güvenlik headers'ları
const securityHeaders = {
  // XSS koruması
  'X-XSS-Protection': '1; mode=block',
  // Content type sniffing koruması
  'X-Content-Type-Options': 'nosniff',
  // Clickjacking koruması
  'X-Frame-Options': 'DENY',
  // Referrer policy
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  // Permissions policy
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  // Content Security Policy - Daha güvenli
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'nonce-' 'strict-dynamic'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: https:",
    "font-src 'self' https://fonts.gstatic.com",
    "connect-src 'self'",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'"
  ].join('; ')
};

// Middleware fonksiyonu - her istek için çalışır
export function middleware(request: NextRequest) {
  // Mevcut istek yolunu al
  const { pathname } = request.nextUrl;
  
  // Sadece dashboard ve API yolları için çalış
  if (!pathname.startsWith('/dashboard') && !pathname.startsWith('/api/')) {
    return NextResponse.next();
  }
  
  console.log('🔥 Middleware running for path:', pathname, 'Method:', request.method);

  // Kullanıcı cookie'sini al
  const userCookie = request.cookies.get('user');
  let userData = null;
  
  if (userCookie?.value) {
    try {
      // Cookie değerini güvenli base64 decode et
      const base64Value = userCookie.value;
      const binaryString = atob(base64Value);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const decoder = new TextDecoder();
      const jsonString = decoder.decode(bytes);
      userData = JSON.parse(jsonString);
      console.log('User data parsed successfully with base64:', userData?.id);
    } catch (error) {
      console.error('Base64 parsing error:', error);
      console.log('Raw cookie value:', userCookie.value);
      // Eski format için fallback (URL decode)
      try {
        const decodedCookie = decodeURIComponent(userCookie.value);
        userData = JSON.parse(decodedCookie);
        console.log('Fallback URL decode successful:', userData?.id);
      } catch (secondError) {
        // Son çare olarak direkt parse
        try {
          userData = JSON.parse(userCookie.value);
          console.log('Direct parsing successful:', userData?.id);
        } catch (thirdError) {
          console.error('All parsing attempts failed:', thirdError);
        }
      }
    }
  }

  // API istekleri için kullanıcı ID'sini header'a ekle
  if (pathname.startsWith('/api/')) {
    console.log('API request detected:', pathname, 'User ID:', userData?.id);
    
    // CSRF token endpoint'i için özel işlem
    if (pathname === '/api/csrf-token') {
      const response = NextResponse.next();
      Object.entries(securityHeaders).forEach(([key, value]) => {
        response.headers.set(key, value);
      });
      return response;
    }
    
    // CSRF koruması (GET, HEAD, OPTIONS hariç)
    // Development ve production ortamında aktif
    if (!['GET', 'HEAD', 'OPTIONS'].includes(request.method)) {
      const csrfToken = request.headers.get('x-csrf-token') || request.headers.get('csrf-token');
      const sessionToken = request.cookies.get('csrf-token')?.value;
      console.log('CSRF Debug:', { csrfToken, sessionToken, method: request.method, path: pathname });
      
      const csrfValid = csrfProtection(request);
      if (!csrfValid) {
        console.log('CSRF validation failed: Invalid or missing CSRF token');
        return NextResponse.json(
          { error: 'Invalid or missing CSRF token' },
          { status: 403 }
        );
      }
    }
    
    const response = NextResponse.next();
    
    // Güvenlik headers'larını ekle
    Object.entries(securityHeaders).forEach(([key, value]) => {
      response.headers.set(key, value);
    });
    
    // CORS headers'larını ekle
    response.headers.set('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGINS || 'http://localhost:3000');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-user-id, x-csrf-token');
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    
    if (userData?.id) {
      response.headers.set('x-user-id', userData.id);
      console.log('Added user ID to headers:', userData.id);
    } else {
      console.log('No user data found for API request');
    }
    
    return response;
  }

  // Dashboard sayfalarını kontrol et
  if (pathname.startsWith('/dashboard')) {
    console.log('User cookie exists:', !!userCookie);
    
    if (userData) {
      const isAdmin = userData.role === 'ADMIN';
      console.log('User role from middleware:', userData.role, 'isAdmin:', isAdmin);
      
      // Admin kullanıcısı ana dashboard sayfasına gitmeye çalışıyorsa admin dashboarduna yönlendir
      if (isAdmin && pathname === '/dashboard') {
        console.log('Redirecting admin to admin dashboard');
        const response = NextResponse.redirect(new URL('/dashboard/admin', request.url));
        // Güvenlik headers'larını ekle
        Object.entries(securityHeaders).forEach(([key, value]) => {
          response.headers.set(key, value);
        });
        return response;
      }
      
      // Admin olmayan kullanıcı admin sayfalarına gitmeye çalışıyorsa normal dashboard'a yönlendir
      if (!isAdmin && (pathname === '/dashboard/admin' || pathname === '/dashboard/users' || pathname === '/dashboard/reports')) {
        console.log('Redirecting non-admin user to dashboard');
        const response = NextResponse.redirect(new URL('/dashboard', request.url));
        // Güvenlik headers'larını ekle
        Object.entries(securityHeaders).forEach(([key, value]) => {
          response.headers.set(key, value);
        });
        return response;
      }
    } else {
      console.log('No user cookie found in request');
      // Login sayfasına yönlendir
      const response = NextResponse.redirect(new URL('/login', request.url));
      // Güvenlik headers'larını ekle
      Object.entries(securityHeaders).forEach(([key, value]) => {
        response.headers.set(key, value);
      });
      return response;
    }
  }

  // Diğer tüm istekler için güvenlik headers ekle
  const response = NextResponse.next();
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  return response;
}

// Middleware'in çalışacağı sayfaları belirle
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
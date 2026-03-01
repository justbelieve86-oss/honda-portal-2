import { NextRequest, NextResponse } from 'next/server';
import { generateCSRFToken, setCSRFTokenCookie } from '../../../../lib/csrf';

export async function GET(request: NextRequest) {
  try {
    // Yeni CSRF token oluştur
    const csrfToken = generateCSRFToken();
    
    // Cookie ayarlarını hazırla
    const cookieOptions = setCSRFTokenCookie(csrfToken);
    
    // Response oluştur
    const response = NextResponse.json({
      csrfToken,
      success: true
    });
    
    // CSRF token'ı cookie olarak set et
    response.cookies.set(cookieOptions.name, cookieOptions.value, {
      httpOnly: cookieOptions.httpOnly,
      secure: cookieOptions.secure,
      sameSite: cookieOptions.sameSite,
      maxAge: cookieOptions.maxAge
    });
    
    return response;
  } catch (error) {
    console.error('CSRF token oluşturulurken hata:', error);
    return NextResponse.json(
      { error: 'CSRF token oluşturulamadı' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  // POST istekleri için de aynı işlemi yap
  return GET(request);
}
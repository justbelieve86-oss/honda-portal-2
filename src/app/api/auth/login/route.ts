import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { loginSchema } from '@/lib/validation';
import { verifyPassword, rateLimitStore, RATE_LIMIT_POLICY } from '../../../../../lib/security';

export async function POST(request: Request) {
  try {
    // Rate limiting kontrolü
    const clientIp = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';
    
    const rateLimitKey = `login:${clientIp}`;
    
    if (!rateLimitStore.isAllowed(rateLimitKey, RATE_LIMIT_POLICY.windowMs, RATE_LIMIT_POLICY.maxAttempts)) {
      const timeLeft = Math.ceil(RATE_LIMIT_POLICY.windowMs / 1000 / 60);
      return NextResponse.json(
        { error: `Çok fazla giriş denemesi. ${timeLeft} dakika sonra tekrar deneyin.` },
        { status: 429 }
      );
    }

    // Request body'yi al
    const body = await request.json();
    console.log('Request body:', body);
    
    // Zod validation
    const validation = loginSchema.safeParse(body);
    
    if (!validation.success) {
      console.log('Validation errors:', validation.error.errors);
      return NextResponse.json(
        { error: 'Geçersiz giriş bilgileri', details: validation.error.errors },
        { status: 400 }
      );
    }

    const { username, password, loginType } = validation.data;

    console.log(`Login attempt: ${username}, type: ${loginType}`);

    // Önce kullanıcı adı ile arama yap
    let user = await prisma.user.findUnique({
      where: { username: username }
    });
    
    console.log('User found:', user ? { id: user.id, username: user.username, role: user.role } : 'null');

    // Kullanıcı adı ile bulunamadıysa, e-posta ile dene
    if (!user) {
      try {
        // İkincil kontroller - email veya name ile arama
        const usersByAlternative = await prisma.user.findMany({
          where: { 
            OR: [
              { email: username },
              { name: username }
            ]
          },
          take: 1 // Sadece ilk sonucu al
        });
        
        if (usersByAlternative.length > 0) {
          user = usersByAlternative[0];
        }
      } catch (findError) {
        console.error("Error finding by alternative fields:", findError);
      }

      // Hala kullanıcı bulunamadıysa hata döndür
      if (!user) {
        console.log(`Kullanıcı bulunamadı: ${username}`);
        return NextResponse.json(
          { error: 'Kullanıcı bulunamadı' },
          { status: 401 }
        );
      }
    }

    // Şifre kontrolü
    const isValidPassword = await verifyPassword(password, user.password);

    if (!isValidPassword) {
      console.log(`Geçersiz şifre: ${username}`);
      return NextResponse.json(
        { error: 'Geçersiz şifre' },
        { status: 401 }
      );
    }

    // Başarılı giriş - rate limit sayacını sıfırla
    rateLimitStore.clear(rateLimitKey);

    // Admin girişi kontrolünü kaldırıyoruz, rol kontrolü frontend'de yapılacak

    // Password'ü response'dan çıkar
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _password, ...userWithoutPassword } = user;
    
    const roleKey = user.role || 'USER';
    const roleName = user.role === 'ADMIN' ? 'Yönetici' : 'Kullanıcı';
    
    console.log(`Başarılı giriş: ${username}, rol: ${roleKey}`);
    
    // Response için user objesini düzenle
    const responseUser = {
      ...userWithoutPassword,
      role: roleKey,
      roleName: roleName
    };
    
    return NextResponse.json(responseUser);
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Giriş işlemi başarısız oldu. Lütfen daha sonra tekrar deneyin.' },
      { status: 500 }
    );
  }
}
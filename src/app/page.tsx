'use client';

import React, { useState } from 'react';
import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';
import { UserIcon, LockIcon, LoadingIcon } from '@/app/components/icons';
import InputField from '@/app/components/ui/InputField';
import ErrorMessage from '@/app/components/ui/ErrorMessage';
import LoginHeader from '@/app/components/login/LoginHeader';

/**
 * Giriş sayfası - Kardelen Otomotiv Portal
 * Kullanıcı adı ve şifre ile kimlik doğrulama sağlar
 */
export default function LoginPage() {
  // State tanımlamaları
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  // loginType state'ini kaldırıyoruz, otomatik olarak belirlenecek
  
  // Hook'lar
  const { login } = useAuth();
  const router = useRouter();

  /**
   * Form gönderme işlemi
   * @param e - Form gönderme eventi
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      setError('Kullanıcı adı ve şifre alanları zorunludur.');
      return;
    }
    
    setError('');
    setIsLoggingIn(true);
    
    try {
      console.log('Login attempt:', { username });
      // Önce user olarak dene, eğer admin ise otomatik yönlendirilecek
      const userData = await login(username, password, 'user');
      
      console.log('Login success, user data:', userData);
      console.log('Redirecting based on role:', userData.role);
      
      // Kullanıcı rolüne göre yönlendirme
      if (userData.role === 'ADMIN') {
        console.log('Admin user, redirecting to /dashboard/admin');
        router.push('/dashboard/admin'); // Admin kullanıcıları için admin sayfasına yönlendir
      } else {
        console.log('Normal user, redirecting to /dashboard');
        router.push('/dashboard'); // Normal kullanıcılar için dashboard sayfasına yönlendir
      }
      
    } catch (err: any) {
      console.error('Full login error:', err);
      
      // Hata mesajını detaylandır
      if (err.message) {
        console.log('Error message:', err.message);
        
        if (err.message.includes('Kullanıcı bulunamadı')) {
          setError(`Kullanıcı adı bulunamadı. Lütfen bilgilerinizi kontrol edin.`);
        } else if (err.message.includes('Geçersiz şifre')) {
          setError('Şifre hatalı. Lütfen şifrenizi kontrol edin.');
        } else if (err.message.includes('admin yetkisi')) {
          setError('Bu hesap admin girişi için yetkili değil.');
        } else {
          setError(`Giriş hatası: ${err.message}`);
        }
      } else {
        setError('Giriş başarısız. Lütfen bilgilerinizi kontrol edin veya daha sonra tekrar deneyin.');
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-red-200">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          {/* Logo ve Başlık Alanı */}
          <LoginHeader />
          
          {/* Form Alanı */}
          <div className="p-8">


            <form onSubmit={handleSubmit}>
              {/* Kullanıcı Adı Alanı */}
              <InputField 
                id="username"
                type="text"
                placeholder="Kullanıcı adınız"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                label="Kullanıcı Adı"
                icon={<UserIcon />}
                autoComplete="username"
              />
              
              {/* Şifre Alanı */}
              <InputField 
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Şifre"
                icon={<LockIcon />}
                autoComplete="current-password"
              />

              {/* Hata Mesajı */}
              {error && <ErrorMessage message={error} />}

              {/* Giriş Butonu */}
              <button
                type="submit"
                disabled={isLoggingIn}
                className={`
                  w-full py-3 px-4 
                  bg-gradient-to-r from-red-600 to-red-700 
                  hover:from-red-700 hover:to-red-800 
                  text-white font-medium rounded-lg shadow-lg 
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 
                  transform transition-all duration-200 hover:scale-[1.02]
                  flex justify-center items-center
                  ${isLoggingIn ? 'opacity-70 cursor-not-allowed' : ''}
                `}
              >
                {isLoggingIn && (
                  <span className="mr-2">
                    <LoadingIcon />
                  </span>
                )}
                {isLoggingIn ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
              </button>
            </form>
            
            {/* Alt Bilgi */}
            <div className="mt-6 text-center text-sm text-gray-600">
              <p>© 2024 Kardelen Satış ve Stok Yönetim Sistemi</p>
            </div>
          </div>
        </div>
        </div>
      </main>
  );
}

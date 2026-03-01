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
        console.log('Admin user detected, redirecting to admin dashboard');
        router.push('/dashboard/admin');
      } else {
        console.log('Regular user detected, redirecting to dashboard');
        router.push('/dashboard');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err instanceof Error ? err.message : 'Giriş işlemi başarısız oldu.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <LoginHeader />
        
        {/* Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            {/* Kullanıcı Adı */}
            <InputField
              id="username"
              type="text"
              autoComplete="username"
              placeholder="Kullanıcı adı"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              label="Kullanıcı Adı"
              icon={<UserIcon />}
            />
            
            {/* Şifre */}
            <InputField
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Şifre"
              icon={<LockIcon />}
            />
          </div>

          {/* Hata Mesajı */}
          {error && (
            <ErrorMessage message={error} />
          )}

          {/* Giriş Butonu */}
          <div>
            <button
              type="submit"
              disabled={isLoggingIn}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {isLoggingIn ? (
                <>
                  <LoadingIcon />
                  <span className="ml-2">Giriş yapılıyor...</span>
                </>
              ) : (
                'Giriş Yap'
              )}
            </button>
          </div>

          {/* Bilgi Notu */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Giriş yapmakta sorun yaşıyorsanız sistem yöneticinize başvurun.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
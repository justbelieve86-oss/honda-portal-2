'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';

// Kullanıcı tipi tanımlama
interface User {
  id: string;
  username: string;
  email: string;
  name: string;
  role: string;
  avatar?: string; // Avatar URL'si (opsiyonel)
}

// Auth context tipi tanımlama
interface AuthContextType {
  user: User | null;
  login: (username: string, password: string, loginType: 'user' | 'admin') => Promise<User>;
  logout: () => void;
  loading: boolean;
}

// Context oluşturma
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Context Provider bileşeni
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Oturum bilgisini local storage'dan yükleme
  useEffect(() => {
    const loadUserFromStorage = () => {
      if (typeof window === 'undefined') return;
      
      try {
        // LocalStorage'dan kullanıcı verisi yükleme
        const storedUser = localStorage.getItem('user');
        
        if (storedUser) {
          console.log('User loaded from localStorage');
          setUser(JSON.parse(storedUser));
        } else {
          // LocalStorage'da yoksa cookie'den kullanıcı verisini alma
          const cookies = document.cookie.split(';');
          console.log('All cookies:', document.cookie);
          
          for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith('user=')) {
              try {
                const userCookieValue = cookie.substring('user='.length, cookie.length);
                if (userCookieValue) {
                  // Base64 güvenli decode et
                  const binaryString = atob(userCookieValue);
                  const bytes = new Uint8Array(binaryString.length);
                  for (let i = 0; i < binaryString.length; i++) {
                    bytes[i] = binaryString.charCodeAt(i);
                  }
                  const decoder = new TextDecoder();
                  const jsonString = decoder.decode(bytes);
                  const userData = JSON.parse(jsonString);
                  console.log('User loaded from cookie with base64');
                  console.log('User role from cookie:', userData.role);
                  setUser(userData);
                  // LocalStorage'a da kaydedelim
                  localStorage.setItem('user', JSON.stringify(userData));
                  break;
                }
              } catch (cookieError) {
                console.error('Base64 cookie parsing error:', cookieError);
                // Eski format için fallback
                try {
                  const userCookieEncoded = cookie.substring('user='.length, cookie.length);
                  const userCookie = decodeURIComponent(userCookieEncoded);
                  const userData = JSON.parse(userCookie);
                  console.log('User loaded from cookie with URL decode fallback');
                  setUser(userData);
                  localStorage.setItem('user', JSON.stringify(userData));
                  break;
                } catch (fallbackError) {
                  console.error('Fallback cookie parsing error:', fallbackError);
                }
              }
            }
          }
        }
      } catch (error) {
        console.error('Oturum bilgisi yüklenirken hata oluştu:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUserFromStorage();
  }, []);

  // Giriş işlemi - useCallback ile optimize edildi
  const login = useCallback(async (username: string, password: string, loginType: 'user' | 'admin'): Promise<User> => {
    try {
      // Önce CSRF token'ı al
      const csrfResponse = await fetch('/api/csrf-token');
      if (!csrfResponse.ok) {
        throw new Error('CSRF token alınamadı');
      }
      const { csrfToken } = await csrfResponse.json();
      
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-csrf-token': csrfToken
        },
        body: JSON.stringify({ username, password, loginType }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Login error status:', response.status);
        throw new Error(errorData.error || 'Giriş başarısız');
      }

      const userData = await response.json();
      setUser(userData);
      
      // LocalStorage'a kullanıcı bilgilerini kaydet
      localStorage.setItem('user', JSON.stringify(userData));
      
      // Cookie'ye kullanıcı bilgilerini kaydet (middleware için)
      try {
        // JSON string'i güvenli base64 encode edelim ki özel karakterler sorun çıkarmasın
        const jsonString = JSON.stringify(userData);
        // UTF-8 karakterleri için güvenli encoding
        const encoder = new TextEncoder();
        const data = encoder.encode(jsonString);
        const base64Value = btoa(String.fromCharCode(...data));
        
        document.cookie = `user=${base64Value}; path=/; max-age=86400; SameSite=Lax`;
        
        console.log('Set cookie with base64 encoding');
        console.log('User role from login response:', userData.role);
        
        // Cookie doğru şekilde ayarlandı mı kontrol edelim
        setTimeout(() => {
          console.log('Cookie check after timeout:', document.cookie);
          const hasCookie = document.cookie.includes('user=');
          console.log('Has cookie after timeout:', hasCookie);
        }, 100);
      } catch (cookieError) {
        console.error('Cookie set error:', cookieError);
      }
      
      return userData; // Kullanıcı bilgilerini döndür
    } catch (error) {
      console.error('Giriş sırasında hata:', error);
      throw error;
    }
  }, []);

  // Çıkış işlemi - useCallback ile optimize edildi
  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('user');
    
    // Cookie'yi temizle
    try {
      document.cookie = 'user=; path=/; max-age=0; SameSite=Lax';
      console.log('Cleared cookie on logout');
    } catch (cookieError) {
      console.error('Cookie clear error:', cookieError);
    }
    
    // Login sayfasına yönlendir
    router.push('/login');
  }, [router]);

  // Context value'yu memoize et
  const contextValue = useMemo(() => ({
    user,
    login,
    logout,
    loading
  }), [user, login, logout, loading]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook kullanımı için yardımcı fonksiyon
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth hook AuthProvider içinde kullanılmalıdır');
  }
  return context;
}
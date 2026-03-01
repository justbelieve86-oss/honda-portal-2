'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import DashboardLayout from '@/app/components/dashboard/DashboardLayout';
import LoadingSpinner from '@/app/components/ui/LoadingSpinner';

// StatsCard bileşeni için prop tipleri
interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change?: string;
  link: string;
}

// Basit StatsCard komponenti
function StatsCard({ title, value, icon, change, link }: StatsCardProps) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
            {icon}
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd>
                <div className="text-lg font-medium text-gray-900">
                  {value}
                  {change && <span className="ml-2 text-sm font-medium text-green-600">{change}</span>}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-5 py-3">
        <div className="text-sm">
          <a href={link} className="font-medium text-indigo-600 hover:text-indigo-500">
            Detayları Görüntüle
          </a>
        </div>
      </div>
    </div>
  );
}

// LoadingSpinner bileşeni kaldırıldı - artık import edilen versiyonu kullanacağız

// Simüle iconlar
const icons = {
  Cube: () => <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
  Currency: () => <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0-2.08.402 2.599 1M12 8v7m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  Users: () => <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  Bag: () => <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
};

/**
 * Dashboard Ana Sayfası
 * Kardelen Otomotiv Portal ana panelini gösterir
 */
export default function Dashboard() {
  const router = useRouter();
  const { user, loading, logout } = useAuth();
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Admin kullanıcısını admin dashboard'una yönlendir
  useEffect(() => {
    // Sayfa yüklendiğinde middleware yerine Client Side Routing kullanarak yönlendirme yapalım
    if (!loading) {
      console.log("Dashboard page loaded, user:", user?.role);
      
      if (!user) {
        console.log("No user found, redirecting to login");
        router.replace('/');
      } else if (user.role === 'ADMIN') {
        console.log("Admin user detected on dashboard page, redirecting to admin dashboard");
        setIsRedirecting(true);
        router.replace('/dashboard/admin');
      }
    }
  }, [loading, user, router]);

  // Loading durumunda veya yönlendirme yapıyorsa loading göster
  if (loading || isRedirecting || !user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <LoadingSpinner size="large" />
        <p className="text-gray-500 mt-4">
          {isRedirecting 
            ? 'Admin paneline yönlendiriliyorsunuz...' 
            : loading 
              ? 'Yükleniyor...' 
              : 'Giriş sayfasına yönlendiriliyorsunuz...'}
        </p>
      </div>
    );
  }

  // Normal kullanıcı için dashboard
  return (
    <DashboardLayout username={user.name} userRole={user.role} onLogout={logout}>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Hoş Geldiniz, {user.name}</h1>
          <p className="text-gray-600">Satış ve Stok Yönetim Sisteminize erişebilirsiniz.</p>
        </div>

        {/* İstatistik Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard 
            title="Stok Adedi" 
            value="845" 
            icon={<icons.Cube />} 
            change="+5%" 
            link="/dashboard/stock"
          />
          <StatsCard 
            title="Aylık Satış" 
            value="₺1.8M" 
            icon={<icons.Currency />} 
            change="+12%" 
            link="/dashboard/sales"
          />
          <StatsCard 
            title="Toplam Müşteri" 
            value="1,294" 
            icon={<icons.Users />} 
            change="+3%" 
            link="/dashboard/customers"
          />
          <StatsCard 
            title="Aylık Gelir" 
            value="₺450K" 
            icon={<icons.Bag />} 
            change="+8%" 
            link="/dashboard/finance"
          />
        </div>

        {/* Aktiviteler ve Hatırlatmalar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Son Aktiviteler */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Son Aktiviteler</h2>
            <div className="space-y-4">
              {['Yeni müşteri kaydı yapıldı', 'Stok güncellemesi tamamlandı', 'Araç satış raporu oluşturuldu', 'Müşteri bilgileri güncellendi'].map((activity, index) => (
                <div key={index} className="flex items-start pb-4 border-b border-gray-100">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-sm font-medium">{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700">{activity}</p>
                    <p className="text-gray-400 text-sm">{new Date().toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hatırlatmalar */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Hatırlatmalar</h2>
            <div className="space-y-4">
              {['Müşteri görüşmesi - 14:30', 'Stok kontrolü yapılacak', 'Haftalık rapor hazırlanacak', 'Tedarikçi ödemesi'].map((reminder, index) => (
                <div key={index} className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-indigo-500 mr-3"></div>
                    <p className="text-gray-700">{reminder}</p>
                  </div>
                  <button className="text-sm text-indigo-600 hover:text-indigo-800">Tamamlandı</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
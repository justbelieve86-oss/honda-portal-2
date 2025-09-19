'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import DashboardLayout from '@/app/components/dashboard/DashboardLayout';

export default function VehiclesPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  // Kullanıcı oturum açmamışsa login sayfasına yönlendir
  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
  }, [user, loading, router]);

  // Yükleme durumunda yükleniyor göster
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        <p className="ml-3 text-lg">Yükleniyor...</p>
      </div>
    );
  }

  // Kullanıcı yoksa boş sayfa döndür (useEffect zaten yönlendirme yapacak)
  if (!user) {
    return null;
  }

  return (
    <DashboardLayout username={user.name} onLogout={logout}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Araç Stok</h1>
          <p className="mt-1 text-sm text-gray-500">Mevcut araç envanteri</p>
        </div>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <div className="flex flex-wrap items-center justify-between">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Stok Listesi
              </h3>
              <div className="mt-4 sm:mt-0">
                <button type="button" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Yeni Araç Ekle
                </button>
              </div>
            </div>
          </div>
          <ul className="divide-y divide-gray-200">
            {[
              { id: 1, model: 'Honda Civic', year: 2023, color: 'Beyaz', status: 'Stokta', price: '₺825.000' },
              { id: 2, model: 'Honda CR-V', year: 2023, color: 'Siyah', status: 'Stokta', price: '₺1.240.000' },
              { id: 3, model: 'Honda Accord', year: 2023, color: 'Gri', status: 'Stokta', price: '₺1.050.000' },
              { id: 4, model: 'Honda City', year: 2023, color: 'Mavi', status: 'Stokta', price: '₺725.000' },
              { id: 5, model: 'Honda HR-V', year: 2023, color: 'Kırmızı', status: 'Stokta', price: '₺890.000' },
            ].map((vehicle) => (
              <li key={vehicle.id} className="hover:bg-gray-50">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600 truncate">
                      {vehicle.model} {vehicle.year}
                    </p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {vehicle.status}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h10a2 2 0 012 2v12a4 4 0 01-4 4H7zm0 0h8a1 1 0 100-2H7a1 1 0 100 2z" />
                        </svg>
                        {vehicle.color}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <p className="font-medium text-gray-900">{vehicle.price}</p>
                      <button className="ml-4 px-3 py-1 border border-gray-400 rounded-md text-xs text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Detaylar
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import DashboardLayout from '@/app/components/dashboard/DashboardLayout';

/**
 * Admin Ayarları Sayfası
 * Sadece admin rolüne sahip kullanıcılar için özel ayarlar sayfası
 */
export default function AdminSettingsPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('system');
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [logLevel, setLogLevel] = useState('INFO');

  // Kullanıcı oturum açmamışsa login sayfasına yönlendir
  // Kullanıcı admin değilse normal dashboard'a yönlendir
  useEffect(() => {
    if (!loading) {
      if (!user) {
        console.log('Admin Settings - No user found, redirecting to login');
        router.replace('/');
      } else if (user.role !== 'ADMIN') {
        console.log('Admin Settings - User is not admin, redirecting to normal dashboard');
        setIsRedirecting(true);
        router.replace('/dashboard');
      } else {
        console.log('Admin Settings - Admin user confirmed');
      }
    }
  }, [user, loading, router]);

  // Yükleme durumunda yükleniyor göster
  if (loading || isRedirecting || !user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        <p className="text-gray-500 mt-4">
          {isRedirecting 
            ? 'Normal panele yönlendiriliyorsunuz...' 
            : loading 
              ? 'Yükleniyor...' 
              : 'Giriş sayfasına yönlendiriliyorsunuz...'}
        </p>
      </div>
    );
  }

  // Admin değilse hiç render etme (useEffect zaten yönlendirme yapacak)
  if (user.role !== 'ADMIN') {
    return null;
  }

  return (
    <DashboardLayout username={user.name} userRole={user.role} onLogout={logout}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Yönetici Ayarları</h1>
          <p className="mt-1 text-sm text-gray-500">Sistem ve uygulama yapılandırma ayarları</p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6" aria-label="Tabs">
              {[
                { name: 'Sistem Yapılandırması', key: 'system' },
                { name: 'Kullanıcı Politikaları', key: 'policies' },
                { name: 'Veritabanı', key: 'database' },
                { name: 'Loglar', key: 'logs' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`${
                    activeTab === tab.key
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {activeTab === 'system' && (
            <div className="px-6 py-5 sm:p-6">
              <div className="space-y-8 divide-y divide-gray-200">
                <div>
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Sistem Yapılandırması</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Uygulama sistem ayarlarını yapılandırın
                    </p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="app-name" className="block text-sm font-medium text-gray-700">
                        Uygulama Adı
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="app-name"
                          id="app-name"
                          defaultValue="Kardelen Otomotiv Satış ve Stok Yönetim Sistemi"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="app-version" className="block text-sm font-medium text-gray-700">
                        Versiyon
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="app-version"
                          id="app-version"
                          defaultValue="1.0.0"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label htmlFor="maintenance-mode" className="block text-sm font-medium text-gray-700">
                        Bakım Modu
                      </label>
                      <div className="mt-1 flex items-center">
                        <input
                          id="maintenance-mode"
                          name="maintenance-mode"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-400 rounded"
                        />
                        <label htmlFor="maintenance-mode" className="ml-2 block text-sm text-gray-900">
                          Bakım modunu etkinleştir
                        </label>
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label htmlFor="session-timeout" className="block text-sm font-medium text-gray-700">
                        Oturum Zaman Aşımı (dakika)
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          name="session-timeout"
                          id="session-timeout"
                          min="5"
                          max="120"
                          defaultValue="30"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Sistem Performansı</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Uygulama performans ayarlarını yapılandırın
                    </p>
                  </div>
                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="cache-duration" className="block text-sm font-medium text-gray-700">
                        Önbellek Süresi (saniye)
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          name="cache-duration"
                          id="cache-duration"
                          defaultValue="3600"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="rate-limit" className="block text-sm font-medium text-gray-700">
                        API İstek Limiti (istek/dakika)
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          name="rate-limit"
                          id="rate-limit"
                          defaultValue="100"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-400 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    İptal
                  </button>
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Kaydet
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'policies' && (
            <div className="px-6 py-5 sm:p-6">
              <div className="space-y-8 divide-y divide-gray-200">
                <div>
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Kullanıcı Politikaları</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Kullanıcı hesapları için güvenlik politikalarını ayarlayın
                    </p>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Şifre Politikası
                      </label>
                      <div className="mt-1 space-y-2">
                        <div className="flex items-center">
                          <input
                            id="min-length"
                            name="min-length"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-400 rounded"
                          />
                          <label htmlFor="min-length" className="ml-2 block text-sm text-gray-900">
                            Minimum 8 karakter uzunluğu
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="special-char"
                            name="special-char"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-400 rounded"
                          />
                          <label htmlFor="special-char" className="ml-2 block text-sm text-gray-900">
                            En az 1 özel karakter 
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="uppercase"
                            name="uppercase"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-400 rounded"
                          />
                          <label htmlFor="uppercase" className="ml-2 block text-sm text-gray-900">
                            En az 1 büyük harf
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Hesap Kilitlenme Politikası
                      </label>
                      <div className="mt-1 space-y-2">
                        <div className="flex items-center">
                          <input
                            id="lock-after-attempts"
                            name="lock-after-attempts"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-400 rounded"
                          />
                          <div className="ml-2 flex items-center">
                            <label htmlFor="lock-after-attempts" className="block text-sm text-gray-900">
                              Arka arkaya
                            </label>
                            <input
                              type="number"
                              min="1"
                              max="10"
                              defaultValue="5"
                              className="mx-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-12 sm:text-sm border-gray-400 rounded-md"
                            />
                            <span className="text-sm text-gray-900">başarısız girişten sonra hesabı kilitle</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-400 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    İptal
                  </button>
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Kaydet
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'database' && (
            <div className="px-6 py-5 sm:p-6">
              <div className="space-y-8 divide-y divide-gray-200">
                <div>
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Veritabanı Yönetimi</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Veritabanı işlemleri ve bakım ayarları
                    </p>
                  </div>

                  <div className="mt-6 space-y-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700">Otomatik Yedekleme</h4>
                      <div className="mt-2 flex items-center">
                        <input
                          id="auto-backup"
                          name="auto-backup"
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-400 rounded"
                        />
                        <label htmlFor="auto-backup" className="ml-2 block text-sm text-gray-900">
                          Otomatik yedeklemeyi etkinleştir
                        </label>
                      </div>
                      <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="backup-interval" className="block text-sm font-medium text-gray-700">
                            Yedekleme Sıklığı
                          </label>
                          <select
                            id="backup-interval"
                            name="backup-interval"
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                          >
                            <option>Günlük</option>
                            <option>Haftalık</option>
                            <option>Aylık</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="retention-period" className="block text-sm font-medium text-gray-700">
                            Saklama Süresi
                          </label>
                          <select
                            id="retention-period"
                            name="retention-period"
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                          >
                            <option>7 gün</option>
                            <option>30 gün</option>
                            <option>90 gün</option>
                            <option>1 yıl</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700">Manuel İşlemler</h4>
                      <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                          </svg>
                          Manuel Yedekleme
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                          <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          Optimizasyon
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'logs' && (
            <div className="px-6 py-5 sm:p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Sistem Logları</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Sistem log kayıtları ve log ayarları
                  </p>
                </div>

                <div className="mt-4">
                  <label htmlFor="log-level" className="block text-sm font-medium text-gray-700">
                    Log Seviyesi
                  </label>
                  <select
                    id="log-level"
                    name="log-level"
                    value={logLevel}
                    onChange={(e) => setLogLevel(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option value="ERROR">ERROR</option>
                    <option value="WARN">WARN</option>
                    <option value="INFO">INFO</option>
                    <option value="DEBUG">DEBUG</option>
                    <option value="TRACE">TRACE</option>
                  </select>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-gray-700">Son Sistem Logları</h4>
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Logları İndir
                    </button>
                  </div>
                  <div className="mt-2 bg-gray-50 p-4 rounded-md h-64 overflow-auto font-mono text-xs">
                    <pre className="text-gray-600">
                      {`[2023-09-01 08:15:23] [INFO] Sistem başlatıldı
[2023-09-01 09:32:45] [INFO] Kullanıcı girişi başarılı: admin
[2023-09-01 10:45:12] [WARN] Yüksek CPU kullanımı tespit edildi: %85
[2023-09-01 12:10:33] [INFO] Veritabanı otomatik yedeklemesi başlatıldı
[2023-09-01 12:12:51] [INFO] Veritabanı yedeklemesi tamamlandı
[2023-09-01 14:23:09] [ERROR] API isteği başarısız: /api/users/validate - Timeout
[2023-09-01 15:30:22] [INFO] Sistem ayarları güncellendi
[2023-09-01 17:45:38] [INFO] Kullanıcı çıkış yaptı: admin
[2023-09-02 08:22:14] [INFO] Kullanıcı girişi başarılı: admin
[2023-09-02 09:10:27] [INFO] Yeni kullanıcı eklendi: test_user
[2023-09-02 11:20:45] [WARN] Disk alanı %85 doluluk oranına ulaştı
[2023-09-02 13:40:18] [INFO] Bakım modu aktif edildi`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-400 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    İptal
                  </button>
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Kaydet
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
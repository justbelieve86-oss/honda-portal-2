'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import DashboardLayout from '@/app/components/dashboard/DashboardLayout';

// Rapor tipi tanımlama
type ReportType = 'sales' | 'stock' | 'customer' | 'financial';

// Rapor format tipi
type ReportFormat = 'pdf' | 'excel' | 'csv';

// Rapor durumu
type ReportStatus = 'ready' | 'generating' | 'failed';

// Rapor nesnesi
interface Report {
  id: string;
  name: string;
  type: ReportType;
  format: ReportFormat;
  createdAt: string;
  status: ReportStatus;
  downloadUrl?: string;
}

/**
 * Raporlar Sayfası
 * Sadece admin rolüne sahip kullanıcılar erişebilir
 */
export default function ReportsPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [reports, setReports] = useState<Report[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [reportType, setReportType] = useState<ReportType>('sales');
  const [reportFormat, setReportFormat] = useState<ReportFormat>('pdf');
  const [reportName, setReportName] = useState('');
  const [dateRange, setDateRange] = useState({
    start: new Date().toISOString().split('T')[0],
    end: new Date().toISOString().split('T')[0]
  });

  // Kullanıcı oturum açmamışsa login sayfasına yönlendir
  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/');
      } else if (user.role !== 'ADMIN') {
        // Admin değilse normal dashboard'a yönlendir
        router.push('/dashboard');
      }
    }
  }, [user, loading, router]);

  // Demo rapor listesi (gerçek uygulamada API'den alınır)
  useEffect(() => {
    if (user && user.role === 'ADMIN') {
      // Demo veriler
      setReports([
        {
          id: '1',
          name: 'Nisan 2025 Satış Raporu',
          type: 'sales',
          format: 'pdf',
          createdAt: '2025-04-05T14:30:00Z',
          status: 'ready',
          downloadUrl: '#'
        },
        {
          id: '2',
          name: 'Q1 2025 Finansal Rapor',
          type: 'financial',
          format: 'excel',
          createdAt: '2025-04-02T09:15:00Z',
          status: 'ready',
          downloadUrl: '#'
        },
        {
          id: '3',
          name: 'Müşteri Demografisi',
          type: 'customer',
          format: 'pdf',
          createdAt: '2025-03-28T16:45:00Z',
          status: 'ready',
          downloadUrl: '#'
        }
      ]);
    }
  }, [user]);

  // Yükleme durumunda yükleniyor göster
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        <p className="ml-3 text-lg">Yükleniyor...</p>
      </div>
    );
  }

  // Kullanıcı yoksa veya admin değilse boş sayfa döndür (useEffect zaten yönlendirme yapacak)
  if (!user || user.role !== 'ADMIN') {
    return null;
  }

  // Rapor oluşturma
  const generateReport = () => {
    if (!reportName.trim()) {
      alert('Lütfen rapor adını girin.');
      return;
    }

    setIsGenerating(true);

    // Demo olarak 2 saniye sonra rapor oluşturuldu gösterelim
    setTimeout(() => {
      const newReport: Report = {
        id: `${reports.length + 1}`,
        name: reportName,
        type: reportType,
        format: reportFormat,
        createdAt: new Date().toISOString(),
        status: 'ready',
        downloadUrl: '#'
      };

      setReports([newReport, ...reports]);
      setIsGenerating(false);
      setReportName('');
    }, 2000);
  };

  // Rapor tipi gösterimini Türkçeleştir
  const getReportTypeDisplay = (type: ReportType) => {
    switch (type) {
      case 'sales': return 'Satış';
      case 'stock': return 'Stok';
      case 'customer': return 'Müşteri';
      case 'financial': return 'Finansal';
      default: return type;
    }
  };

  return (
    <DashboardLayout username={user.name} userRole={user.role} onLogout={logout}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Raporlar</h1>
          <p className="mt-1 text-sm text-gray-500">
            Sistem raporlarını oluşturun ve indirin
          </p>
        </div>

        {/* Rapor Oluşturma */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Yeni Rapor Oluştur
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Rapor türünü ve diğer parametreleri seçerek yeni bir rapor oluşturun.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="reportName" className="block text-sm font-medium text-gray-700">
                  Rapor Adı
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="reportName"
                    id="reportName"
                    value={reportName}
                    onChange={(e) => setReportName(e.target.value)}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md"
                    placeholder="Örn: Nisan 2025 Satış Raporu"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="reportType" className="block text-sm font-medium text-gray-700">
                  Rapor Türü
                </label>
                <div className="mt-1">
                  <select
                    id="reportType"
                    name="reportType"
                    value={reportType}
                    onChange={(e) => setReportType(e.target.value as ReportType)}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md"
                  >
                    <option value="sales">Satış Raporu</option>
                    <option value="stock">Stok Raporu</option>
                    <option value="customer">Müşteri Raporu</option>
                    <option value="financial">Finansal Rapor</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                  Başlangıç Tarihi
                </label>
                <div className="mt-1">
                  <input
                    type="date"
                    name="startDate"
                    id="startDate"
                    value={dateRange.start}
                    onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                  Bitiş Tarihi
                </label>
                <div className="mt-1">
                  <input
                    type="date"
                    name="endDate"
                    id="endDate"
                    value={dateRange.end}
                    onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="reportFormat" className="block text-sm font-medium text-gray-700">
                  Rapor Formatı
                </label>
                <div className="mt-1">
                  <select
                    id="reportFormat"
                    name="reportFormat"
                    value={reportFormat}
                    onChange={(e) => setReportFormat(e.target.value as ReportFormat)}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md"
                  >
                    <option value="pdf">PDF</option>
                    <option value="excel">Excel</option>
                    <option value="csv">CSV</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="button"
                onClick={generateReport}
                disabled={isGenerating}
                className={`inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isGenerating ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isGenerating ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Oluşturuluyor...
                  </>
                ) : (
                  <>
                    <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Rapor Oluştur
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Rapor Listesi */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Raporlar
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Oluşturulan raporlar ve indirme bağlantıları
            </p>
          </div>
          <div className="border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              {reports.length > 0 ? (
                reports.map((report) => (
                  <li key={report.id} className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <p className="text-sm font-medium text-indigo-600 truncate">
                          {report.name}
                        </p>
                        <div className="mt-2 flex">
                          <div className="flex items-center text-sm text-gray-500 mr-6">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            {getReportTypeDisplay(report.type)} Raporu
                          </div>
                          <div className="flex items-center text-sm text-gray-500 mr-6">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {new Date(report.createdAt).toLocaleDateString('tr-TR')}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            {report.format.toUpperCase()}
                          </div>
                        </div>
                      </div>
                      <div>
                        {report.status === 'ready' ? (
                          <a
                            href={report.downloadUrl}
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            <svg className="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            İndir
                          </a>
                        ) : report.status === 'generating' ? (
                          <span className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md bg-yellow-100 text-yellow-800">
                            <svg className="animate-spin -ml-0.5 mr-2 h-4 w-4 text-yellow-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Hazırlanıyor...
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md bg-red-100 text-red-800">
                            <svg className="-ml-0.5 mr-2 h-4 w-4 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Hata
                          </span>
                        )}
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <li className="px-4 py-6 sm:px-6 text-center text-gray-500 italic">
                  Henüz rapor oluşturulmamış.
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
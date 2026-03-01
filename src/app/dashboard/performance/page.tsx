'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { getPerformanceMetrics, getErrorLogs, clearMetrics } from '../../hooks/usePerformanceMonitor';
import { getErrorBoundaryLogs, clearErrorBoundaryLogs } from '../../components/ErrorBoundary';

interface PerformanceMetrics {
  renderTime: number;
  componentName: string;
  timestamp: number;
}

interface ErrorInfo {
  error: Error;
  componentName: string;
  timestamp: number;
  userAgent: string;
}

const PerformanceDashboard = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics[]>([]);
  const [errors, setErrors] = useState<ErrorInfo[]>([]);
  const [boundaryErrors, setBoundaryErrors] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'performance' | 'errors' | 'boundary'>('performance');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setMetrics(getPerformanceMetrics());
    setErrors(getErrorLogs());
    setBoundaryErrors(getErrorBoundaryLogs());
  };

  const performanceStats = useMemo(() => {
    if (metrics.length === 0) return null;

    const renderTimes = metrics.map(m => m.renderTime);
    const avgRenderTime = renderTimes.reduce((a, b) => a + b, 0) / renderTimes.length;
    const maxRenderTime = Math.max(...renderTimes);
    const minRenderTime = Math.min(...renderTimes);
    const slowRenders = renderTimes.filter(time => time > 100).length;

    const componentStats = metrics.reduce((acc, metric) => {
      if (!acc[metric.componentName]) {
        acc[metric.componentName] = {
          count: 0,
          totalTime: 0,
          maxTime: 0
        };
      }
      acc[metric.componentName].count++;
      acc[metric.componentName].totalTime += metric.renderTime;
      acc[metric.componentName].maxTime = Math.max(acc[metric.componentName].maxTime, metric.renderTime);
      return acc;
    }, {} as Record<string, { count: number; totalTime: number; maxTime: number }>);

    return {
      avgRenderTime,
      maxRenderTime,
      minRenderTime,
      slowRenders,
      componentStats
    };
  }, [metrics]);

  const handleClearMetrics = () => {
    clearMetrics();
    loadData();
  };

  const handleClearBoundaryLogs = () => {
    clearErrorBoundaryLogs();
    loadData();
  };

  const formatTime = (time: number) => `${time.toFixed(2)}ms`;
  const formatDate = (timestamp: number) => new Date(timestamp).toLocaleString('tr-TR');

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Performans Dashboard</h1>
        <p className="text-gray-600">Uygulama performansı ve hata izleme</p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'performance', label: 'Performans', count: metrics.length },
            { id: 'errors', label: 'Hatalar', count: errors.length },
            { id: 'boundary', label: 'Boundary Hataları', count: boundaryErrors.length }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-400'
              }`}
            >
              {tab.label}
              {tab.count > 0 && (
                <span className="ml-2 bg-gray-100 text-gray-900 py-0.5 px-2 rounded-full text-xs">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Performance Tab */}
      {activeTab === 'performance' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Performans Metrikleri</h2>
            <button
              onClick={handleClearMetrics}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Metrikleri Temizle
            </button>
          </div>

          {performanceStats ? (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg shadow border">
                  <h3 className="text-sm font-medium text-gray-500">Ortalama Render</h3>
                  <p className="text-2xl font-bold text-gray-900">{formatTime(performanceStats.avgRenderTime)}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border">
                  <h3 className="text-sm font-medium text-gray-500">En Yavaş Render</h3>
                  <p className="text-2xl font-bold text-red-600">{formatTime(performanceStats.maxRenderTime)}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border">
                  <h3 className="text-sm font-medium text-gray-500">En Hızlı Render</h3>
                  <p className="text-2xl font-bold text-green-600">{formatTime(performanceStats.minRenderTime)}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border">
                  <h3 className="text-sm font-medium text-gray-500">Yavaş Render'lar</h3>
                  <p className="text-2xl font-bold text-orange-600">{performanceStats.slowRenders}</p>
                </div>
              </div>

              {/* Component Stats */}
              <div className="bg-white rounded-lg shadow border">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Bileşen Performansı</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Bileşen
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Render Sayısı
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Ortalama Süre
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            En Yavaş
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {Object.entries(performanceStats.componentStats).map(([name, stats]) => (
                          <tr key={name}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {stats.count}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {formatTime(stats.totalTime / stats.count)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <span className={stats.maxTime > 100 ? 'text-red-600 font-medium' : ''}>
                                {formatTime(stats.maxTime)}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">Henüz performans verisi bulunmuyor.</p>
            </div>
          )}
        </div>
      )}

      {/* Errors Tab */}
      {activeTab === 'errors' && (
        <div className="space-y-6">
          <h2 className="text-lg font-semibold">Uygulama Hataları</h2>
          {errors.length > 0 ? (
            <div className="bg-white rounded-lg shadow border">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tarih
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Bileşen
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Hata
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {errors.map((error, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(error.timestamp)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {error.componentName}
                        </td>
                        <td className="px-6 py-4 text-sm text-red-600">
                          {error.error.message}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">Henüz hata kaydı bulunmuyor.</p>
            </div>
          )}
        </div>
      )}

      {/* Boundary Errors Tab */}
      {activeTab === 'boundary' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Error Boundary Hataları</h2>
            <button
              onClick={handleClearBoundaryLogs}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Logları Temizle
            </button>
          </div>
          {boundaryErrors.length > 0 ? (
            <div className="space-y-4">
              {boundaryErrors.map((error, index) => (
                <div key={index} className="bg-white rounded-lg shadow border p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-medium text-red-600">{error.error.name}</h3>
                    <span className="text-sm text-gray-500">{formatDate(new Date(error.timestamp).getTime())}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{error.error.message}</p>
                  <div className="text-sm text-gray-500">
                    <p><strong>URL:</strong> {error.url}</p>
                    <p><strong>User Agent:</strong> {error.userAgent}</p>
                  </div>
                  {error.error.stack && (
                    <details className="mt-4">
                      <summary className="cursor-pointer text-sm font-medium text-gray-700">
                        Stack Trace
                      </summary>
                      <pre className="mt-2 text-xs bg-gray-50 p-3 rounded overflow-x-auto">
                        {error.error.stack}
                      </pre>
                    </details>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">Henüz boundary hatası bulunmuyor.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PerformanceDashboard;
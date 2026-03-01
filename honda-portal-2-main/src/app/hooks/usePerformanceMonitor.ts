import { useEffect, useCallback, useRef } from 'react';

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

export const usePerformanceMonitor = (componentName: string) => {
  const renderStartTime = useRef<number>(0);
  const mountTime = useRef<number>(0);

  // Render performansını ölçme
  const startRenderMeasure = useCallback(() => {
    renderStartTime.current = performance.now();
  }, []);

  const endRenderMeasure = useCallback(() => {
    if (renderStartTime.current > 0) {
      const renderTime = performance.now() - renderStartTime.current;
      
      // Performans metriklerini kaydet
      const metrics: PerformanceMetrics = {
        renderTime,
        componentName,
        timestamp: Date.now()
      };

      // Console'da logla (production'da kaldırılabilir)
      if (process.env.NODE_ENV === 'development') {
        console.log(`🚀 ${componentName} render time: ${renderTime.toFixed(2)}ms`);
      }

      // Yavaş render uyarısı (100ms üzeri)
      if (renderTime > 100) {
        console.warn(`⚠️ Slow render detected in ${componentName}: ${renderTime.toFixed(2)}ms`);
      }

      // Local storage'a kaydet (analytics için)
      try {
        const existingMetrics = JSON.parse(localStorage.getItem('performance_metrics') || '[]');
        existingMetrics.push(metrics);
        
        // Son 100 metriği tut
        if (existingMetrics.length > 100) {
          existingMetrics.splice(0, existingMetrics.length - 100);
        }
        
        localStorage.setItem('performance_metrics', JSON.stringify(existingMetrics));
      } catch (error) {
        console.error('Performance metrics storage error:', error);
      }

      renderStartTime.current = 0;
    }
  }, [componentName]);

  // Hata yakalama ve loglama
  const logError = useCallback((error: Error, errorInfo?: any) => {
    const errorData: ErrorInfo = {
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack || ''
      } as Error,
      componentName,
      timestamp: Date.now(),
      userAgent: navigator.userAgent
    };

    // Console'da logla
    console.error(`❌ Error in ${componentName}:`, error, errorInfo);

    // Local storage'a kaydet
    try {
      const existingErrors = JSON.parse(localStorage.getItem('error_logs') || '[]');
      existingErrors.push(errorData);
      
      // Son 50 hatayı tut
      if (existingErrors.length > 50) {
        existingErrors.splice(0, existingErrors.length - 50);
      }
      
      localStorage.setItem('error_logs', JSON.stringify(existingErrors));
    } catch (storageError) {
      console.error('Error logging storage error:', storageError);
    }

    // Production'da hata raporlama servisi entegrasyonu yapılabilir
    // örn: Sentry, LogRocket, etc.
  }, [componentName]);

  // Component mount time ölçümü
  useEffect(() => {
    mountTime.current = performance.now();
    
    return () => {
      const unmountTime = performance.now();
      const totalMountTime = unmountTime - mountTime.current;
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`📊 ${componentName} total mount time: ${totalMountTime.toFixed(2)}ms`);
      }
    };
  }, [componentName]);

  // Memory usage monitoring
  const checkMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      const memInfo = (performance as any).memory;
      const memoryUsage = {
        used: Math.round(memInfo.usedJSHeapSize / 1048576), // MB
        total: Math.round(memInfo.totalJSHeapSize / 1048576), // MB
        limit: Math.round(memInfo.jsHeapSizeLimit / 1048576) // MB
      };

      if (process.env.NODE_ENV === 'development') {
        console.log(`💾 Memory usage in ${componentName}:`, memoryUsage);
      }

      // Memory leak uyarısı
      if (memoryUsage.used > memoryUsage.limit * 0.8) {
        console.warn(`⚠️ High memory usage detected: ${memoryUsage.used}MB`);
      }

      return memoryUsage;
    }
    return null;
  }, [componentName]);

  return {
    startRenderMeasure,
    endRenderMeasure,
    logError,
    checkMemoryUsage
  };
};

// Performance metrikleri alma utility fonksiyonu
export const getPerformanceMetrics = (): PerformanceMetrics[] => {
  try {
    return JSON.parse(localStorage.getItem('performance_metrics') || '[]');
  } catch {
    return [];
  }
};

// Hata logları alma utility fonksiyonu
export const getErrorLogs = (): ErrorInfo[] => {
  try {
    return JSON.parse(localStorage.getItem('error_logs') || '[]');
  } catch {
    return [];
  }
};

// Metrikleri temizleme utility fonksiyonu
export const clearMetrics = () => {
  localStorage.removeItem('performance_metrics');
  localStorage.removeItem('error_logs');
};
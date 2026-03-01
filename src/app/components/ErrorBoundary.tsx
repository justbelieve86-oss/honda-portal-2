'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { handleClientError } from '@/lib/error-handler';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId: string;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorId: '' };
  }

  static getDerivedStateFromError(error: Error): State {
    // State'i güncelle böylece bir sonraki render'da fallback UI gösterilsin
    return {
      hasError: true,
      error,
      errorId: crypto.randomUUID()
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Hata detaylarını state'e kaydet
    this.setState({
      error,
      errorInfo
    });

    // Log error using our enhanced error handler
    handleClientError(error, errorInfo);

    // Parent component'e hata bildir
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Hata raporlama servisi entegrasyonu
    this.logErrorToService(error, errorInfo);
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Local storage'a kaydet
      const errorLog = {
        error: {
          name: error.name,
          message: error.message,
          stack: error.stack
        },
        errorInfo: {
          componentStack: errorInfo.componentStack
        },
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
      };

      const existingLogs = JSON.parse(localStorage.getItem('error_boundary_logs') || '[]');
      existingLogs.push(errorLog);
      
      // Son 20 hatayı tut
      if (existingLogs.length > 20) {
        existingLogs.splice(0, existingLogs.length - 20);
      }
      
      localStorage.setItem('error_boundary_logs', JSON.stringify(existingLogs));
    } catch (storageError) {
      console.error('Error logging failed:', storageError);
    }
  };

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined, errorId: '' });
  };

  private handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI varsa onu göster
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
              <svg
                className="w-6 h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium text-gray-900">
                Bir şeyler ters gitti
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Beklenmeyen bir hata oluştu. Lütfen sayfayı yenileyin veya tekrar deneyin.
              </p>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-4 text-left">
                  <summary className="cursor-pointer text-sm font-medium text-gray-700">
                    Hata Detayları (Geliştirme Modu)
                  </summary>
                  <div className="mt-2 p-3 bg-gray-100 rounded text-xs font-mono text-gray-800 overflow-auto max-h-32">
                    <p><strong>Hata ID:</strong> {this.state.errorId}</p>
                    <p><strong>Mesaj:</strong> {this.state.error.message}</p>
                    {this.state.error.stack && (
                      <pre className="mt-2 whitespace-pre-wrap">{this.state.error.stack}</pre>
                    )}
                  </div>
                </details>
              )}
            </div>

            <div className="mt-6 flex space-x-3">
              <button
                onClick={this.handleRetry}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Tekrar Dene
              </button>
              <button
                onClick={this.handleReload}
                className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Sayfayı Yenile
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

// Error boundary loglarını alma utility fonksiyonu
export const getErrorBoundaryLogs = () => {
  try {
    return JSON.parse(localStorage.getItem('error_boundary_logs') || '[]');
  } catch {
    return [];
  }
};

// Error boundary loglarını temizleme
export const clearErrorBoundaryLogs = () => {
  localStorage.removeItem('error_boundary_logs');
};
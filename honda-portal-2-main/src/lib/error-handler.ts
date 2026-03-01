import { ErrorInfo } from 'react';

// Error types
export interface ClientError {
  name: string;
  message: string;
  stack?: string;
  timestamp: string;
  url: string;
  userAgent: string;
  userId?: string;
  sessionId?: string;
}

export interface ErrorContext {
  componentStack?: string;
  errorBoundary?: boolean;
  props?: Record<string, any>;
  state?: Record<string, any>;
}

// Error severity levels
export enum ErrorSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}

// Client-side error handler
export function handleClientError(
  error: Error,
  errorInfo?: ErrorInfo,
  context?: ErrorContext
): void {
  const clientError: ClientError = {
    name: error.name,
    message: error.message,
    stack: error.stack,
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : '',
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
  };

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.group('🚨 Client Error Detected');
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
    console.error('Context:', context);
    console.groupEnd();
  }

  // Store error in localStorage for debugging
  try {
    const errorLog = {
      ...clientError,
      errorInfo: errorInfo ? {
        componentStack: errorInfo.componentStack
      } : undefined,
      context
    };

    const existingErrors = JSON.parse(
      localStorage.getItem('client_errors') || '[]'
    );
    existingErrors.push(errorLog);

    // Keep only last 50 errors
    if (existingErrors.length > 50) {
      existingErrors.splice(0, existingErrors.length - 50);
    }

    localStorage.setItem('client_errors', JSON.stringify(existingErrors));
  } catch (storageError) {
    console.error('Failed to store error in localStorage:', storageError);
  }

  // Send error to monitoring service (if configured)
  if (process.env.NODE_ENV === 'production') {
    sendErrorToMonitoring(clientError, errorInfo, context);
  }
}

// Send error to external monitoring service
function sendErrorToMonitoring(
  error: ClientError,
  errorInfo?: ErrorInfo,
  context?: ErrorContext
): void {
  // This would integrate with services like Sentry, LogRocket, etc.
  // For now, we'll just log it
  console.log('Error would be sent to monitoring service:', {
    error,
    errorInfo,
    context
  });

  // Example Sentry integration:
  // if (window.Sentry) {
  //   window.Sentry.captureException(new Error(error.message), {
  //     tags: {
  //       component: context?.componentStack?.split('\n')[1]?.trim()
  //     },
  //     extra: {
  //       errorInfo,
  //       context
  //     }
  //   });
  // }
}

// Get stored client errors
export function getClientErrors(): ClientError[] {
  try {
    return JSON.parse(localStorage.getItem('client_errors') || '[]');
  } catch {
    return [];
  }
}

// Clear stored client errors
export function clearClientErrors(): void {
  localStorage.removeItem('client_errors');
}

// Determine error severity
export function getErrorSeverity(error: Error): ErrorSeverity {
  const message = error.message.toLowerCase();
  const name = error.name.toLowerCase();

  // Critical errors
  if (
    name.includes('syntaxerror') ||
    name.includes('referenceerror') ||
    message.includes('network error') ||
    message.includes('failed to fetch')
  ) {
    return ErrorSeverity.CRITICAL;
  }

  // High severity errors
  if (
    name.includes('typeerror') ||
    message.includes('permission denied') ||
    message.includes('unauthorized')
  ) {
    return ErrorSeverity.HIGH;
  }

  // Medium severity errors
  if (
    message.includes('validation') ||
    message.includes('invalid')
  ) {
    return ErrorSeverity.MEDIUM;
  }

  // Default to low severity
  return ErrorSeverity.LOW;
}

// Global error handler setup
export function setupGlobalErrorHandling(): void {
  if (typeof window === 'undefined') return;

  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    const error = new Error(event.reason?.message || 'Unhandled Promise Rejection');
    error.name = 'UnhandledPromiseRejection';
    error.stack = event.reason?.stack;
    
    handleClientError(error, undefined, {
      errorBoundary: false,
      props: { reason: event.reason }
    });
  });

  // Handle global JavaScript errors
  window.addEventListener('error', (event) => {
    const error = new Error(event.message);
    error.name = event.error?.name || 'GlobalError';
    error.stack = event.error?.stack;
    
    handleClientError(error, undefined, {
      errorBoundary: false,
      props: {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
      }
    });
  });
}

// Initialize error handling when module is imported
if (typeof window !== 'undefined') {
  setupGlobalErrorHandling();
}
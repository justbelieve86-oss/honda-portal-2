// Error handling utilities for client-side errors

export interface ClientError {
  message: string;
  stack?: string;
  componentStack?: string;
  timestamp: Date;
  userAgent?: string;
  url?: string;
}

export const handleClientError = (error: Error, errorInfo?: any): void => {
  const clientError: ClientError = {
    message: error.message,
    stack: error.stack,
    componentStack: errorInfo?.componentStack,
    timestamp: new Date(),
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
    url: typeof window !== 'undefined' ? window.location.href : undefined,
  };

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Client Error:', clientError);
  }

  // In production, you might want to send this to a logging service
  // Example: sendToLoggingService(clientError);
};

export const logError = (message: string, error?: Error): void => {
  const errorLog = {
    message,
    error: error ? {
      message: error.message,
      stack: error.stack,
    } : undefined,
    timestamp: new Date(),
  };

  if (process.env.NODE_ENV === 'development') {
    console.error('Error Log:', errorLog);
  }
};
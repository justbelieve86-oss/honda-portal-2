import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../ErrorBoundary';
import { ReactNode } from 'react';
import { vi } from 'vitest';

// Mock console.error to avoid noise in test output
const originalError = console.error;

interface ThrowErrorProps {
  shouldThrow?: boolean;
  children?: ReactNode;
}

const ThrowError = ({ shouldThrow = false }: ThrowErrorProps) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
};

beforeAll(() => {
  console.error = vi.fn();
});

afterAll(() => {
  console.error = originalError;
});

describe('ErrorBoundary', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render children when there is no error', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText('No error')).toBeInTheDocument();
  });

  it('should render error UI when there is an error', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText(/Bir şeyler ters gitti/i)).toBeInTheDocument();
    expect(screen.getByText(/Beklenmeyen bir hata oluştu/i)).toBeInTheDocument();
  });

  it('should log error details when an error occurs', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(console.error).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith('ErrorBoundary caught an error:', expect.any(Error), expect.any(Object));
  });
});
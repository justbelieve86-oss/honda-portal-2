import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

/**
 * Yükleme durumlarını göstermek için dönen spinner bileşeni
 * @param size - Spinner boyutu: small, medium veya large
 * @param color - Spinner rengi (varsayılan: purple-500)
 */
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium',
  color = 'purple-500' 
}) => {
  const sizeClass = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  }[size];

  return (
    <div 
      className={`animate-spin rounded-full ${sizeClass} border-t-2 border-b-2 border-${color}`}
      aria-label="Yükleniyor"
    />
  );
};

export default LoadingSpinner; 
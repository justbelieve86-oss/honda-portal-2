import React from 'react';
import { ErrorIcon } from '../icons';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="bg-red-50 text-red-500 p-3 rounded-lg mb-6 text-sm">
    <div className="flex items-center">
      <ErrorIcon />
      <span>{message}</span>
    </div>
  </div>
);

export default ErrorMessage; 
import React from 'react';
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { AuthProvider } from './context/AuthContext';
import ErrorBoundary from './components/ErrorBoundary';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Kardelen Otomotiv Portal - Satış ve Stok Yönetimi",
    description: "Kardelen Otomotiv bayileri için satış ve stok yönetim sistemi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <ErrorBoundary>
          <AuthProvider children={children} />
        </ErrorBoundary>
      </body>
    </html>
  );
}

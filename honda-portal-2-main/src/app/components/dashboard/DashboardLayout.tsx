import React, { useState, memo, Suspense } from 'react';
import dynamic from 'next/dynamic';
import LoadingSpinner from '../ui/LoadingSpinner';

// Lazy load components for better performance
const Sidebar = dynamic(() => import('./Sidebar'), {
  loading: () => <div className="w-64 bg-gray-800 h-full animate-pulse" />,
  ssr: false
});

const Navbar = dynamic(() => import('./Navbar'), {
  loading: () => <div className="h-16 bg-white border-b animate-pulse" />,
  ssr: false
});

interface DashboardLayoutProps {
  children: React.ReactNode;
  username: string;
  userRole?: string; // Kullanıcı rolü (ADMIN veya USER)
  onLogout: () => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = memo(({
  children,
  username,
  userRole,
  onLogout,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <Suspense fallback={<div className="w-64 bg-gray-800 h-full animate-pulse" />}>
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} userRole={userRole} />
      </Suspense>

      {/* Ana içerik */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        {/* Navbar */}
        <Suspense fallback={<div className="h-16 bg-white border-b animate-pulse" />}>
          <Navbar
            username={username}
            userRole={userRole}
            onLogout={onLogout}
            toggleSidebar={toggleSidebar}
          />
        </Suspense>

        {/* İçerik Alanı */}
        <main className="flex-1 relative overflow-y-auto focus:outline-none p-2">
          <Suspense fallback={<LoadingSpinner size="large" />}>
            {children}
          </Suspense>
        </main>
      </div>
    </div>
  );
});

DashboardLayout.displayName = 'DashboardLayout';

export default DashboardLayout;
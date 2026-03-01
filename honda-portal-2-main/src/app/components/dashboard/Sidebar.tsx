import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Sidebar menü öğesi türü
interface SidebarMenuItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  adminOnly?: boolean;
  adminHide?: boolean;
  isGroup?: boolean;
  children?: SidebarMenuItem[];
}

// Sidebar bileşeni props
interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  userRole?: string;
}

// Modern Chevron ikonu
const ChevronDownIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg 
    className={`w-4 h-4 ${isOpen ? 'rotate-180' : ''}`} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    strokeWidth={2.5}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M8.25 4.5l7.5 7.5-7.5 7.5" 
      transform={`rotate(${isOpen ? '0' : '90'} 12 12)`}
    />
  </svg>
);

// Modern Hamburger menü ikonu
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

// Modern Close ikonu
const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const DashboardIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v4.5m0-4.5h4.5m-4.5 0L9 7.5M21 3v4.5m0-4.5h-4.5m4.5 0L15 7.5M3.75 21v-4.5m0 4.5h4.5m-4.5 0L9 16.5m11.25 4.5v-4.5m0 4.5h-4.5m4.5 0L15 16.5" />
  </svg>
);

const AdminDashboardIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const CarIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m0-3.75A2.25 2.25 0 014.5 8.25h15A2.25 2.25 0 0121.75 10.5m0 3.75v3a1.125 1.125 0 01-1.125 1.125H18m-2.25-9.75v-1.5A1.5 1.5 0 0014.25 6h-4.5A1.5 1.5 0 008.25 7.5v1.5m8.25 9.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const CorporateIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m2.25-18v18m13.5-18v18M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.75m-.75 3h.75m-.75 3h.75m-3.75-16.5h3.75V21h-3.75V3z" />
  </svg>
);

const SalesIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const UsersManagementIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
);

const ReportsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const MonitoringIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

const PerformanceIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
  </svg>
);

const VehicleManagementIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
  </svg>
);

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, userRole }) => {
  const pathname = usePathname();
  const isAdmin = userRole === 'ADMIN';
  
  // Sidebar'ın collapsed/expanded durumu
  const [isCollapsed, setIsCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sidebar-collapsed');
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });
  
  // Alt menülerin açık/kapalı durumları
  const [expandedGroups, setExpandedGroups] = useState<{ [key: string]: boolean }>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sidebar-expanded-groups');
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });
  
  // Responsive davranış için ekran boyutunu takip et
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  // Grup menüsünü aç/kapat
  const toggleGroup = (groupName: string) => {
    setExpandedGroups(prev => {
      const newState = {
        ...prev,
        [groupName]: !prev[groupName]
      };
      localStorage.setItem('sidebar-expanded-groups', JSON.stringify(newState));
      return newState;
    });
  };
  
  // Sidebar'ı collapse/expand et
  const toggleCollapse = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    localStorage.setItem('sidebar-collapsed', JSON.stringify(newState));
  };

  // Sidebar menü öğeleri
  const menuItems: SidebarMenuItem[] = [
    {
      name: 'Admin Paneli',
      path: '/dashboard/admin',
      icon: <AdminDashboardIcon />,
      adminOnly: true,
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: <DashboardIcon />,
      adminHide: true,
    },
    {
      name: 'Satış Yönetimi',
      path: '',
      icon: <SalesIcon />,
      adminHide: true,
      isGroup: true,
      children: [
        {
          name: 'Müşteriler',
          path: '/dashboard/customers',
          icon: <UsersIcon />,
          adminHide: true,
        },
        {
          name: 'Kurumsal Müşteriler',
          path: '/dashboard/corporate-customers',
          icon: <CorporateIcon />,
          adminHide: true,
        },
        {
          name: 'Araç Satışları',
          path: '/dashboard/sales',
          icon: <SalesIcon />,
          adminHide: true,
        },
        {
          name: 'Aksesuar Satışları',
          path: '/dashboard/accessory-sales',
          icon: <SalesIcon />,
          adminHide: true,
        },
      ]
    },
    {
      name: 'Kullanıcı Yönetimi',
      path: '/dashboard/users',
      icon: <UsersManagementIcon />,
      adminOnly: true,
    },
    {
      name: 'Araç Bilgileri Yönetimi',
      path: '/dashboard/admin/vehicle-management',
      icon: <VehicleManagementIcon />,
      adminOnly: true,
    },
    {
      name: 'Sistem İzleme',
      path: '/dashboard/monitoring',
      icon: <MonitoringIcon />,
      adminOnly: true,
    },
    {
      name: 'Veritabanı Yönetimi',
      path: '/dashboard/database',
      icon: <DatabaseIcon />,
      adminOnly: true,
    },
    {
      name: 'Raporlar',
      path: '/dashboard/reports',
      icon: <ReportsIcon />,
      adminOnly: true,
    },
    {
      name: 'Admin Ayarları',
      path: '/dashboard/admin/settings',
      icon: <SettingsIcon />,
      adminOnly: true,
    },
    {
      name: 'Performans',
      path: '/dashboard/performance',
      icon: <PerformanceIcon />,
      adminHide: true,
    },
    {
      name: 'Ayarlar',
      path: '/dashboard/settings',
      icon: <SettingsIcon />,
      adminHide: true,
    },
  ];

  // Menü öğelerini kullanıcı rolüne göre filtrele
  const filteredMenuItems = menuItems.filter(item => {
    if (isAdmin) {
      return !item.adminHide;
    } else {
      return !item.adminOnly;
    }
  }).map(item => {
    if (item.isGroup && item.children) {
      const filteredChildren = item.children.filter(child => {
        if (isAdmin) {
          return !child.adminHide;
        } else {
          return !child.adminOnly;
        }
      });
      return { ...item, children: filteredChildren };
    }
    return item;
  });

  // Sidebar genişliği hesaplama
  const sidebarWidth = isCollapsed ? 'w-16' : 'w-64';
  const sidebarTransform = isOpen ? 'translate-x-0' : '-translate-x-full';

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 ${sidebarWidth} bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 shadow-2xl transform transition-all duration-300 ease-in-out ${
          isMobile ? sidebarTransform : 'translate-x-0'
        } lg:static lg:inset-auto`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-5 border-b border-slate-700/50">
            <div className={`flex items-center space-x-3 transition-all duration-300 ${
              isCollapsed ? 'justify-center' : ''
            }`}>
              {!isCollapsed && (
                <>
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">K</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-white">Kardelen</span>
                    <span className="text-xs text-slate-400">Otomotiv Portal</span>
                  </div>
                  {isAdmin && (
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg">
                      Admin
                    </span>
                  )}
                </>
              )}
              {isCollapsed && (
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">K</span>
                </div>
              )}
            </div>
            
            {/* Toggle buttons */}
            <div className="flex items-center space-x-2">
              {!isMobile && (
                <button
                  onClick={toggleCollapse}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200"
                  title={isCollapsed ? 'Genişlet' : 'Daralt'}
                >
                  <MenuIcon />
                </button>
              )}
              
              {isMobile && (
                <button
                  onClick={toggleSidebar}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200"
                >
                  <CloseIcon />
                </button>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 px-3 py-4 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
            <nav className="space-y-2">
              {filteredMenuItems.map((item) => {
                if (item.isGroup && item.children) {
                  const isGroupExpanded = expandedGroups[item.name];
                  
                  return (
                    <div key={item.name} className="space-y-1">
                      {/* Group Header */}
                      <button
                        onClick={() => !isCollapsed && toggleGroup(item.name)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-xl group ${
                          isCollapsed 
                            ? 'justify-center hover:bg-slate-700/50' 
                            : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                        }`}
                        title={isCollapsed ? item.name : ''}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-slate-400 group-hover:text-blue-400">
                            {item.icon}
                          </span>
                          {!isCollapsed && (
                            <span className="font-medium">{item.name}</span>
                          )}
                        </div>
                        {!isCollapsed && (
                          <ChevronDownIcon isOpen={isGroupExpanded} />
                        )}
                      </button>
                      
                      {/* Group Children */}
                      {!isCollapsed && (
                        <div className={`ml-4 space-y-1 overflow-hidden ${
                          isGroupExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          {item.children.map((child) => {
                            const isActive = pathname === child.path;
                            return (
                              <Link
                                key={child.path}
                                href={child.path}
                                onClick={(e) => {
                                  // Sidebar durumunu koru
                                  localStorage.setItem('sidebar-collapsed', JSON.stringify(isCollapsed));
                                  localStorage.setItem('sidebar-expanded-groups', JSON.stringify(expandedGroups));
                                }}
                                className={`flex items-center space-x-3 px-3 py-2 text-sm rounded-lg group ${
                                  isActive
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                                }`}
                              >
                                <span className={`${
                                  isActive ? 'text-white' : 'text-slate-500 group-hover:text-blue-400'
                                }`}>
                                  {child.icon}
                                </span>
                                <span className="font-medium">{child.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                } else {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={(e) => {
                        // Sidebar durumunu koru
                        localStorage.setItem('sidebar-collapsed', JSON.stringify(isCollapsed));
                        localStorage.setItem('sidebar-expanded-groups', JSON.stringify(expandedGroups));
                      }}
                      className={`flex items-center space-x-3 px-3 py-2.5 text-sm font-medium rounded-xl group ${
                        isCollapsed ? 'justify-center' : ''
                      } ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                      }`}
                      title={isCollapsed ? item.name : ''}
                    >
                      <span className={`${
                        isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-400'
                      }`}>
                        {item.icon}
                      </span>
                      {!isCollapsed && (
                        <>
                          <span className="font-medium">{item.name}</span>
                          {item.adminOnly && (
                            <span className="ml-auto inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm">
                              Admin
                            </span>
                          )}
                        </>
                      )}
                    </Link>
                  );
                }
              })}
            </nav>
          </div>

          {/* Footer */}
          {!isCollapsed && (
            <div className="px-4 py-4 border-t border-slate-700/50">
              <div className="text-xs text-slate-400 space-y-1">
                <p className="font-medium text-slate-300">Kardelen Otomotiv</p>
                <p>Satış ve Stok Yönetim Sistemi</p>
                <p className="text-slate-500">v2.0.0</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
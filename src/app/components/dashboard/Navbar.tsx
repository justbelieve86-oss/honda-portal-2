import React from 'react';

interface NavbarProps {
  username: string;
  userRole?: string; // Kullanıcı rolü (ADMIN veya USER)
  onLogout: () => void;
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ username, userRole, onLogout, toggleSidebar }) => {
  const isAdmin = userRole === 'ADMIN';
  
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
            >
              <span className="sr-only">Menüyü Aç</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="ml-4 lg:ml-0 flex items-center">
              <h1 className="text-xl font-bold text-gray-800">
                Kardelen Otomotiv Portal {isAdmin && <span className="text-indigo-600 ml-2 text-sm font-normal">Admin Panel</span>}
              </h1>
            </div>
          </div>
          
          <div className="flex items-center">
            {/* Bildirimler */}
            <button className="p-2 rounded-full text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">Bildirimleri Görüntüle</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            {/* Profil Dropdown */}
            <div className="ml-4 relative flex items-center">
              <div className="flex items-center">
                <div className="hidden md:flex md:items-center">
                  <span className="mr-2 text-gray-600">Merhaba, {username}</span>
                  {isAdmin && (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800">
                      Yönetici
                    </span>
                  )}
                </div>
                <button
                  onClick={onLogout}
                  className="ml-4 px-3 py-2 rounded text-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                >
                  Çıkış Yap
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import DashboardLayout from '@/app/components/dashboard/DashboardLayout';

// Kullanıcı tipi tanımlama (AuthContext'ten farklı olabilir)
interface UserData {
  id: string;
  username: string;
  email: string;
  name: string;
  role: string;
  createdAt: string;
  password?: string; // Opsiyonel, sadece düzenleme/ekleme formunda kullanılır
  authorizedBrands?: { id: string; name: string }[];
  authorizedBrandIds?: string[]; // Düzenleme formunda kullanılır
}

interface Brand {
  id: string;
  name: string;
}

/**
 * Kullanıcı Yönetimi Sayfası
 * Sadece admin rolüne sahip kullanıcılar erişebilir
 */
export default function UsersPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [users, setUsers] = useState<UserData[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<string | null>(null);
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    role: '', // Dinamik olarak ayarlanacak
    authorizedBrandIds: [] as string[]
  });
  const [editUser, setEditUser] = useState<UserData | null>(null);
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [brands, setBrands] = useState<Brand[]>([]);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [roles, setRoles] = useState<{id: string; key: string; name: string; description?: string; deletable: boolean; isSystem: boolean; permissions: any[]}[]>([]);
  const [newRoleName, setNewRoleName] = useState('');
  const [newRoleDescription, setNewRoleDescription] = useState('');


  // Kullanıcı oturum açmamışsa login sayfasına yönlendir
  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/');
      } else if (user.role !== 'ADMIN') {
        // Admin değilse normal dashboard'a yönlendir
        router.push('/dashboard');
      }
    }
  }, [user, loading, router]);

  // Demo kullanıcı listesi yerine gerçek API'den kullanıcıları getir
  useEffect(() => {
    if (user && user.role === 'ADMIN') {
      // API'den kullanıcı verilerini getir
      const fetchUsers = async () => {
        try {
          const response = await fetch('/api/users');
          if (!response.ok) {
            throw new Error('Kullanıcılar getirilirken bir hata oluştu');
          }
          const userData = await response.json();
          setUsers(userData);
        } catch (error) {
          console.error('Kullanıcılar yüklenirken hata:', error);
          // Hata durumunda boş bir dizi kullan
          setUsers([]);
        }
      };

      // API'den marka verilerini getir
      const fetchBrands = async (retryCount = 0) => {
        try {
          const response = await fetch('/api/brands');
          if (!response.ok) {
            // 401 hatası alırsak ve retry sayısı 3'ten azsa tekrar dene
            if (response.status === 401 && retryCount < 3) {
              console.log(`Brands API 401 hatası, tekrar deneniyor... (${retryCount + 1}/3)`);
              setTimeout(() => fetchBrands(retryCount + 1), 1000);
              return;
            }
            throw new Error('Markalar getirilirken bir hata oluştu');
          }
          const brandData = await response.json();
          setBrands(brandData);
        } catch (error) {
          console.error('Markalar yüklenirken hata:', error);
          setBrands([]);
        }
      };

      fetchUsers();
      fetchBrands();
      fetchRoles();
    }
  }, [user]);

  // Rolleri getir
  const fetchRoles = async () => {
    try {
      const response = await fetch('/api/roles');
      if (response.ok) {
        const data = await response.json();
        setRoles(data.roles);
        
        // İlk kez yüklendiğinde varsayılan rolü ayarla
        if (data.roles.length > 0 && !newUser.role) {
          const defaultRole = data.roles.find((role: any) => role.key === 'SATIS_DANISMANI') || data.roles[0];
          setNewUser(prev => ({
            ...prev,
            role: defaultRole.key
          }));
        }
      } else {
        console.error('Roller getirilemedi');
      }
    } catch (error) {
      console.error('Rol getirme hatası:', error);
    }
  };



  // Rol isimlerinin kullanıcı dostu gösterimi için yardımcı fonksiyon
  const getRoleName = (roleKey: string): string => {
    const roleMap: {[key: string]: string} = {
      'ADMIN': 'Yönetici',
      'USER': 'Kullanıcı',
      'GENEL_MUDUR': 'Genel Müdür',
      'SATIS_MUDURU': 'Satış Müdürü',
      'SATIS_DESTEK_UZMANI': 'Satış Destek Uzmanı',
      'SATIS_DANISMANI': 'Satış Danışmanı',
      'MUSTERI_ILISKILERI': 'Müşteri İlişkileri',
      'SIGORTA_BIRIMI': 'Sigorta Birimi'
    };
    return roleMap[roleKey] || roleKey;
  };

  // Rol arkaplan ve metin renklerinin belirlenmesi için yardımcı fonksiyon
  const getRoleColorClass = (roleKey: string): string => {
    const colorMap: {[key: string]: string} = {
      'ADMIN': 'bg-purple-100 text-purple-800',
      'USER': 'bg-green-100 text-green-800',
      'GENEL_MUDUR': 'bg-blue-100 text-blue-800',
      'SATIS_MUDURU': 'bg-yellow-100 text-yellow-800',
      'SATIS_DESTEK_UZMANI': 'bg-indigo-100 text-indigo-800',
      'SATIS_DANISMANI': 'bg-pink-100 text-pink-800',
      'MUSTERI_ILISKILERI': 'bg-red-100 text-red-800',
      'SIGORTA_BIRIMI': 'bg-gray-100 text-gray-800'
    };
    return colorMap[roleKey] || 'bg-gray-100 text-gray-800';
  };

  // Yükleme durumunda yükleniyor göster
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        <p className="ml-3 text-lg">Yükleniyor...</p>
      </div>
    );
  }

  // Kullanıcı yoksa veya admin değilse boş sayfa döndür (useEffect zaten yönlendirme yapacak)
  if (!user || user.role !== 'ADMIN') {
    return null;
  }

  // Kullanıcı ekleme API'si
  const handleAddUser = async () => {
    // Form doğrulama
    const errors: {[key: string]: string} = {};
    if (!newUser.name.trim()) errors.name = 'Ad Soyad alanı zorunludur';
    if (!newUser.username.trim()) errors.username = 'Kullanıcı Adı alanı zorunludur';
    if (!newUser.email.trim()) errors.email = 'E-posta alanı zorunludur';
    if (!newUser.password.trim()) errors.password = 'Şifre alanı zorunludur';
    if (!newUser.passwordConfirm.trim()) errors.passwordConfirm = 'Şifre Tekrar alanı zorunludur';
    if (newUser.password.trim() && newUser.passwordConfirm.trim() && newUser.password !== newUser.passwordConfirm) {
      errors.passwordConfirm = 'Şifreler eşleşmiyor';
    }
    if (newUser.email.trim() && !newUser.email.includes('@')) errors.email = 'Geçerli bir e-posta adresi giriniz';
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    try {
      // Önce CSRF token'ı al
      const csrfResponse = await fetch('/api/csrf-token');
      if (!csrfResponse.ok) {
        throw new Error('CSRF token alınamadı');
      }
      const { csrfToken } = await csrfResponse.json();
      
      // API'ye POST isteği gönder
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-csrf-token': csrfToken
        },
        body: JSON.stringify({
          ...newUser,
          authorizedBrandIds: newUser.authorizedBrandIds
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Kullanıcı eklenirken bir hata oluştu');
      }

      // Başarılı yanıt - kullanıcı listesini yeniden yükle
      const newUserData = await response.json();
      setUsers([newUserData, ...users]);
      
      // Formu temizle ve modal'ı kapat
      const defaultRole = roles.find(role => role.key === 'SATIS_DANISMANI') || (roles.length > 0 ? roles[0] : { key: '' });
      setNewUser({
        username: '',
        email: '',
        name: '',
        password: '',
        passwordConfirm: '',
        role: defaultRole.key,
        authorizedBrandIds: []
      });
      setFormErrors({});
      setIsAddModalOpen(false);

      // Kullanıcının eklendiğini kullanıcıya bildir
      alert('Kullanıcı başarıyla eklendi');
    } catch (error: any) {
      console.error('Kullanıcı ekleme hatası:', error);
      alert(`Kullanıcı eklenemedi: ${error.message || 'Bilinmeyen bir hata oluştu'}`);
    }
  };

  // Kullanıcı silme API'si
  const handleDeleteUser = async () => {
    if (!userToDelete) return;
    
    try {
      // API'ye DELETE isteği gönder
      const response = await fetch(`/api/users/${userToDelete}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Kullanıcı silinirken bir hata oluştu');
      }

      // Başarılı - kullanıcıyı listeden çıkar
      setUsers(users.filter(u => u.id !== userToDelete));
      setIsDeleteModalOpen(false);
      setUserToDelete(null);

      // Kullanıcının silindiğini kullanıcıya bildir
      alert('Kullanıcı başarıyla silindi');
    } catch (error: any) {
      console.error('Kullanıcı silme hatası:', error);
      alert(`Kullanıcı silinemedi: ${error.message || 'Bilinmeyen bir hata oluştu'}`);
    }
  };

  // Kullanıcı silme modalını aç
  const openDeleteModal = (userId: string) => {
    setUserToDelete(userId);
    setIsDeleteModalOpen(true);
  };

  // Input değişikliği
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value
    });
    
    // Hata mesajını temizle
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  // Marka seçimi değişikliği
  const handleBrandSelection = (brandId: string) => {
    const currentBrands = newUser.authorizedBrandIds;
    if (currentBrands.includes(brandId)) {
      // Marka zaten seçili, kaldır
      setNewUser({
        ...newUser,
        authorizedBrandIds: currentBrands.filter(id => id !== brandId)
      });
    } else {
      // Marka seçili değil, ekle
      setNewUser({
        ...newUser,
        authorizedBrandIds: [...currentBrands, brandId]
      });
    }
  };

  // Düzenleme modalında marka seçimi işlemi
  const handleEditBrandSelection = (brandId: string) => {
    setEditUser(prev => {
      if (!prev) return prev;
      const currentBrands = prev.authorizedBrandIds || [];
      const isSelected = currentBrands.includes(brandId);
      
      return {
        ...prev,
        authorizedBrandIds: isSelected 
          ? currentBrands.filter(id => id !== brandId)
          : [...currentBrands, brandId]
      };
    });
  };

  // Düzenleme modalını aç
  const handleOpenEditModal = (userData: UserData) => {
    setEditUser({
      ...userData,
      authorizedBrandIds: userData.authorizedBrands?.map(brand => brand.id) || []
    });
    setIsEditModalOpen(true);
  };

  // Düzenleme modalını kapat
  const handleCloseEditModal = () => {
    setEditUser(null);
    setIsEditModalOpen(false);
  };

  // Düzenlenecek kullanıcı bilgilerini güncelle
  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (editUser) {
      setEditUser({
        ...editUser,
        [name]: value
      });
      
      // Hata mesajını temizle
      if (formErrors[name]) {
        setFormErrors({
          ...formErrors,
          [name]: ''
        });
      }
    }
  };

  // Kullanıcı düzenleme işlemini kaydet
  const handleSaveEdit = async () => {
    if (!editUser) return;
    
    // Form doğrulama
    const errors: {[key: string]: string} = {};
    if (!editUser.name.trim()) errors.name = 'Ad Soyad alanı zorunludur';
    if (!editUser.username.trim()) errors.username = 'Kullanıcı Adı alanı zorunludur';
    if (!editUser.email.trim()) errors.email = 'E-posta alanı zorunludur';
    if (editUser.email.trim() && !editUser.email.includes('@')) errors.email = 'Geçerli bir e-posta adresi giriniz';
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    try {
      // API'ye PUT isteği gönder
      const response = await fetch(`/api/users/${editUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...editUser,
          authorizedBrandIds: editUser.authorizedBrandIds || []
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Kullanıcı güncellenirken bir hata oluştu');
      }

      // Başarılı yanıt - güncellenmiş kullanıcıyı al
      const updatedUser = await response.json();
      
      // Kullanıcı listesini güncelle
      const updatedUsers = users.map(u => {
        if (u.id === updatedUser.id) {
          return updatedUser;
        }
        return u;
      });
      
      setUsers(updatedUsers);
      setFormErrors({});
      setIsEditModalOpen(false);
      setEditUser(null);

      // Kullanıcının güncellendiğini kullanıcıya bildir
      alert('Kullanıcı başarıyla güncellendi');
    } catch (error: any) {
      console.error('Kullanıcı güncelleme hatası:', error);
      alert(`Kullanıcı güncellenemedi: ${error.message || 'Bilinmeyen bir hata oluştu'}`);
    }
  };

  // Rol ekleme fonksiyonu
  const handleAddRole = async () => {
    if (!newRoleName.trim()) {
      alert('Rol adı gereklidir');
      return;
    }

    try {
      // Önce CSRF token'ı al
      const csrfResponse = await fetch('/api/csrf-token');
      if (!csrfResponse.ok) {
        throw new Error('CSRF token alınamadı');
      }
      const { csrfToken } = await csrfResponse.json();

      // Rol adını büyük harfe çevir ve boşlukları alt çizgi ile değiştir
      const roleKey = newRoleName.trim().toUpperCase().replace(/\s+/g, '_');
      
      const response = await fetch('/api/roles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-csrf-token': csrfToken
        },
        body: JSON.stringify({
          name: roleKey,
          displayName: newRoleName.trim(),
          description: newRoleDescription.trim() || undefined,
          permissions: ['basic'] // Varsayılan izinler
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setRoles([...roles, result.role]);
        setNewRoleName('');
        setNewRoleDescription('');
        alert('Rol başarıyla eklendi');
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Rol eklenirken hata oluştu');
      }
    } catch (error) {
      console.error('Error adding role:', error);
      alert('Rol eklenirken hata oluştu');
    }
  };

  // Rol silme fonksiyonu
  const handleDeleteRole = async (roleId: string) => {
    const role = roles.find(r => r.id === roleId);
    if (!role) return;

    if (!confirm(`"${role.name}" rolünü silmek istediğinizden emin misiniz?`)) {
      return;
    }

    try {
      // Önce CSRF token'ı al
      const csrfResponse = await fetch('/api/csrf-token');
      if (!csrfResponse.ok) {
        throw new Error('CSRF token alınamadı');
      }
      const { csrfToken } = await csrfResponse.json();

      const response = await fetch('/api/roles', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-csrf-token': csrfToken
        },
        body: JSON.stringify({ roleId })
      });

      if (response.ok) {
        const updatedRoles = roles.filter(role => role.id !== roleId);
        setRoles(updatedRoles);
        
        // Eğer silinen rol şu anda filtre olarak seçiliyse, filtreyi "all" yap
        if (roleFilter === role.key) {
          setRoleFilter('all');
        }
        
        // Eğer silinen rol newUser'ın varsayılan rolüyse, yeni varsayılan rol ata
        if (newUser.role === role.key && updatedRoles.length > 0) {
          setNewUser(prev => ({
            ...prev,
            role: updatedRoles[0].key
          }));
        }
        
        alert('Rol başarıyla silindi');
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Rol silinirken hata oluştu');
      }
    } catch (error) {
      console.error('Error deleting role:', error);
      alert('Rol silinirken hata oluştu');
    }
  };

  // Filtrelenmiş kullanıcı listesi
  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    
    return matchesSearch && matchesRole;
  });

  return (
    <DashboardLayout username={user.name} userRole={user.role} onLogout={logout}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Kullanıcı Yönetimi</h1>
            <p className="mt-1 text-sm text-gray-500">
              Sistem kullanıcılarını görüntüleyin ve yönetin
            </p>
          </div>
          <div className="flex space-x-3">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setIsRoleModalOpen(true)}
            >
              <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              Rol Yönetimi
            </button>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setIsAddModalOpen(true)}
            >
              <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Yeni Kullanıcı Ekle
            </button>
          </div>
        </div>

        {/* Arama ve Filtreleme */}
        <div className="mb-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700">Kullanıcı Ara</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-4 py-2 sm:text-sm border-gray-400 rounded-md"
                  placeholder="Ad, kullanıcı adı veya e-posta ile ara"
                />
              </div>
            </div>
            <div>
              <label htmlFor="role-filter" className="block text-sm font-medium text-gray-700">Rol Filtresi</label>
              <select
                id="role-filter"
                name="role-filter"
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="all">Tüm Roller</option>
                {roles.map((role) => (
                  <option key={role.id} value={role.key}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Kullanıcı Sayısı Bilgisi */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            {filteredUsers.length} kullanıcıdan {filteredUsers.length} gösteriliyor
            {searchTerm && ` (${searchTerm} için arama sonuçları)`}
            {roleFilter !== 'all' && ` (${getRoleName(roleFilter)} filtresi uygulandı)`}
          </p>
          {(searchTerm || roleFilter !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setRoleFilter('all');
              }}
              className="inline-flex items-center px-2.5 py-1.5 border border-gray-400 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Filtreleri Temizle
            </button>
          )}
        </div>

        {/* Kullanıcı Tablosu */}
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Kullanıcı
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        E-posta
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Rol
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Şifre
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Oluşturulma Tarihi
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">İşlemler</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredUsers.length > 0 ? (
                      filteredUsers.map((user) => (
                        <tr key={user.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                  <span className="text-indigo-700 font-medium text-lg">
                                    {user.name.charAt(0)}
                                  </span>
                                </div>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {user.name}
                                </div>
                                <div className="text-sm text-gray-500">
                                  @{user.username}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{user.email}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleColorClass(user.role)}`}>
                              {getRoleName(user.role)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                              {user.password || '••••••••'}
                            </span>
                            {!user.password && (
                              <span className="ml-2 text-xs text-gray-400">
                                (Şifre gizli)
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(user.createdAt).toLocaleDateString('tr-TR')}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button 
                              onClick={() => handleOpenEditModal(user)}
                              className="text-indigo-600 hover:text-indigo-900 mr-4 bg-transparent border-none cursor-pointer"
                            >
                              Düzenle
                            </button>
                            {user.role !== 'ADMIN' && (
                              <button 
                                onClick={() => openDeleteModal(user.id)}
                                className="text-red-600 hover:text-red-900 bg-transparent border-none cursor-pointer"
                              >
                                Sil
                              </button>
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                          {searchTerm || roleFilter !== 'all' ? 
                            'Arama kriterlerinize uygun kullanıcı bulunamadı.' : 
                            'Henüz kullanıcı bulunmuyor.'}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Yeni Kullanıcı Modal */}
        {isAddModalOpen && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Yeni Kullanıcı Ekle
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Sisteme yeni bir kullanıcı eklemek için aşağıdaki formu doldurun.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4">
                    <div className="grid grid-cols-1 gap-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Ad Soyad
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={newUser.name}
                          onChange={handleInputChange}
                          className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${formErrors.name ? 'border-red-500' : ''}`}
                        />
                        {formErrors.name && (
                          <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                          Kullanıcı Adı
                        </label>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          value={newUser.username}
                          onChange={handleInputChange}
                          className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${formErrors.username ? 'border-red-500' : ''}`}
                        />
                        {formErrors.username && (
                          <p className="mt-1 text-sm text-red-600">{formErrors.username}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          E-posta
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={newUser.email}
                          onChange={handleInputChange}
                          className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${formErrors.email ? 'border-red-500' : ''}`}
                        />
                        {formErrors.email && (
                          <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                          Şifre
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          value={newUser.password}
                          onChange={handleInputChange}
                          className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${formErrors.password ? 'border-red-500' : ''}`}
                        />
                        {formErrors.password && (
                          <p className="mt-1 text-sm text-red-600">{formErrors.password}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="passwordConfirm" className="block text-sm font-medium text-gray-700">
                          Şifre Tekrar
                        </label>
                        <input
                          type="password"
                          name="passwordConfirm"
                          id="passwordConfirm"
                          value={newUser.passwordConfirm}
                          onChange={handleInputChange}
                          className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${formErrors.passwordConfirm ? 'border-red-500' : ''}`}
                        />
                        {formErrors.passwordConfirm && (
                          <p className="mt-1 text-sm text-red-600">{formErrors.passwordConfirm}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                          Rol
                        </label>
                        <select
                          id="role"
                          name="role"
                          value={newUser.role}
                          onChange={handleInputChange}
                          className="mt-1 block w-full py-2 px-3 border border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          {roles.map((role) => (
                            <option key={role.id} value={role.key}>
                              {role.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Yetkili Markalar
                        </label>
                        <div className="space-y-2 max-h-32 overflow-y-auto border border-gray-400 rounded-md p-3">
                          {brands.length === 0 ? (
                            <p className="text-sm text-gray-500">Henüz marka bulunmuyor</p>
                          ) : (
                            brands.map((brand) => (
                              <label key={brand.id} className="flex items-center">
                                <input
                                  type="checkbox"
                                  checked={newUser.authorizedBrandIds.includes(brand.id)}
                                  onChange={() => handleBrandSelection(brand.id)}
                                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <span className="ml-2 text-sm text-gray-700">{brand.name}</span>
                              </label>
                            ))
                          )}
                        </div>
                        <p className="mt-1 text-xs text-gray-500">
                          Kullanıcının işlem yapabileceği markaları seçin
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={handleAddUser}
                  >
                    Ekle
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-400 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={() => setIsAddModalOpen(false)}
                  >
                    İptal
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Düzenleme Modal */}
        {isEditModalOpen && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Kullanıcı Düzenle
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Kullanıcı bilgilerini düzenlemek için aşağıdaki formu doldurun.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4">
                    <div className="grid grid-cols-1 gap-y-4">
                      <div>
                        <label htmlFor="edit-name" className="block text-sm font-medium text-gray-700">
                          Ad Soyad
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="edit-name"
                          value={editUser?.name}
                          onChange={handleEditInputChange}
                          className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${formErrors.name ? 'border-red-500' : ''}`}
                        />
                        {formErrors.name && (
                          <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="edit-username" className="block text-sm font-medium text-gray-700">
                          Kullanıcı Adı
                        </label>
                        <input
                          type="text"
                          name="username"
                          id="edit-username"
                          value={editUser?.username}
                          onChange={handleEditInputChange}
                          className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${formErrors.username ? 'border-red-500' : ''}`}
                        />
                        {formErrors.username && (
                          <p className="mt-1 text-sm text-red-600">{formErrors.username}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="edit-email" className="block text-sm font-medium text-gray-700">
                          E-posta
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="edit-email"
                          value={editUser?.email}
                          onChange={handleEditInputChange}
                          className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${formErrors.email ? 'border-red-500' : ''}`}
                        />
                        {formErrors.email && (
                          <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="edit-password" className="block text-sm font-medium text-gray-700">
                          Şifre <span className="text-xs text-gray-500">(Değiştirmek istemiyorsanız boş bırakın)</span>
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="edit-password"
                          value={editUser?.password || ''}
                          onChange={handleEditInputChange}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md"
                          placeholder="••••••••"
                        />
                      </div>
                      <div>
                        <label htmlFor="edit-role" className="block text-sm font-medium text-gray-700">
                          Rol
                        </label>
                        <select
                          id="edit-role"
                          name="role"
                          value={editUser?.role}
                          onChange={handleEditInputChange}
                          className="mt-1 block w-full py-2 px-3 border border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          {roles.map((role) => (
                            <option key={role.id} value={role.key}>
                              {role.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Yetkili Markalar
                        </label>
                        <div className="space-y-2 max-h-32 overflow-y-auto border border-gray-400 rounded-md p-3">
                          {brands.length === 0 ? (
                            <p className="text-sm text-gray-500">Henüz marka bulunmuyor</p>
                          ) : (
                            brands.map((brand) => (
                              <label key={brand.id} className="flex items-center">
                                <input
                                  type="checkbox"
                                  checked={editUser?.authorizedBrandIds?.includes(brand.id) || false}
                                  onChange={() => handleEditBrandSelection(brand.id)}
                                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <span className="ml-2 text-sm text-gray-700">{brand.name}</span>
                              </label>
                            ))
                          )}
                        </div>
                        <p className="mt-1 text-xs text-gray-500">
                          Kullanıcının işlem yapabileceği markaları seçin
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={handleSaveEdit}
                  >
                    Kaydet
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={handleCloseEditModal}
                  >
                    İptal
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Silme Onay Modalı */}
        {isDeleteModalOpen && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                        Kullanıcı Sil
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Bu kullanıcıyı silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button 
                    type="button" 
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={handleDeleteUser}
                  >
                    Sil
                  </button>
                  <button 
                    type="button" 
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setIsDeleteModalOpen(false)}
                  >
                    İptal
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rol Yönetimi Modal */}
        {isRoleModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Rol Yönetimi</h3>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600"
                    onClick={() => setIsRoleModalOpen(false)}
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Mevcut Roller Listesi */}
                <div className="mb-6">
                  <h4 className="text-md font-medium text-gray-900 mb-3">Mevcut Roller</h4>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {roles.map((role) => (
                      <div key={role.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium text-gray-900">{role.name}</span>
                              <span className="text-xs text-gray-500">({role.key})</span>
                            </div>
                            {role.description && (
                              <p className="text-xs text-gray-600 mt-1">{role.description}</p>
                            )}
                          </div>
                          {role.isSystem && (
                            <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-md">
                              Sistem Rolü
                            </span>
                          )}
                          {!role.isSystem && (
                            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-md">
                              Özel Rol
                            </span>
                          )}
                        </div>
                        {role.deletable && (
                          <button
                            type="button"
                            className="text-red-600 hover:text-red-800 text-sm font-medium"
                            onClick={() => handleDeleteRole(role.id)}
                          >
                            Sil
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Yeni Rol Ekleme Formu */}
                <div className="mb-6">
                  <h4 className="text-md font-medium text-gray-900 mb-3">Yeni Rol Ekle</h4>
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={newRoleName}
                      onChange={(e) => setNewRoleName(e.target.value)}
                      placeholder="Rol adını girin"
                      className="w-full px-3 py-2 rounded-md border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <input
                      type="text"
                      value={newRoleDescription}
                      onChange={(e) => setNewRoleDescription(e.target.value)}
                      placeholder="Rol açıklaması (opsiyonel)"
                      className="w-full px-3 py-2 rounded-md border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <button
                      type="button"
                      onClick={handleAddRole}
                      className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Rol Ekle
                    </button>
                  </div>
                </div>

                {/* Modal Alt Butonları */}
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => setIsRoleModalOpen(false)}
                  >
                    Kapat
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
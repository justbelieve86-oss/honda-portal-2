'use client';

import React, { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';

// Lazy load heavy components
const DashboardLayout = dynamic(() => import('@/app/components/dashboard/DashboardLayout'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div></div>,
  ssr: false
});

// Araç marka arayüzü
interface Brand {
  id: string;
  name: string;
  models: Model[];
  createdAt?: Date;
  updatedAt?: Date;
}

// Model arayüzü
interface Model {
  id: string;
  name: string;
  brandId: string;
  packages: Package[];
  createdAt?: Date;
  updatedAt?: Date;
}

// Paket arayüzü
interface Package {
  id: string;
  name: string;
  modelId: string;
  mtvAmount: number;
  plakaMasrafi: number;
  createdAt?: Date;
  updatedAt?: Date;
}

// Aksesuar arayüzü
interface Accessory {
  id: string;
  name: string;
  brandId: string;
  modelId: string;
  brand?: { id: string; name: string };
  model?: { id: string; name: string };
  createdAt?: Date;
  updatedAt?: Date;
}

// Bakım ürünü arayüzü
interface MaintenanceProduct {
  id: string;
  name: string;
  description?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export default function VehicleManagementPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [brands, setBrands] = useState<Brand[]>([]);
  const [selectedTab, setSelectedTab] = useState<'brands' | 'models' | 'packages' | 'accessories' | 'maintenance'>('brands');
  const [isLoading, setIsLoading] = useState(true);
  const [csrfToken, setCsrfToken] = useState<string>('');
  
  // Bakım ürünleri state'leri
  const [maintenanceProducts, setMaintenanceProducts] = useState<MaintenanceProduct[]>([]);
  const [newMaintenanceProduct, setNewMaintenanceProduct] = useState({
    name: '',
    description: ''
  });
  const [editMaintenanceProductId, setEditMaintenanceProductId] = useState<string | null>(null);
  const [maintenancePagination, setMaintenancePagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0
  });

  // Sayı formatı yardımcı fonksiyonları
  const formatNumber = (value: number | string): string => {
    if (value === '' || value === 0) return '';
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(numValue)) return '';
    return numValue.toLocaleString('tr-TR');
  };

  const parseFormattedNumber = (value: string): number => {
    if (!value) return 0;
    const cleanValue = value.replace(/\./g, '').replace(',', '.');
    const parsed = parseFloat(cleanValue);
    return isNaN(parsed) ? 0 : parsed;
  };
  
  // Form state
  const [newBrand, setNewBrand] = useState({ name: '' });
  const [newModel, setNewModel] = useState({ name: '', brandId: '' });
  const [newPackage, setNewPackage] = useState({
    name: '',
    modelId: '',
    mtvAmount: 0,
    plakaMasrafi: 0
  });
  const [newAccessory, setNewAccessory] = useState({
    name: '',
    brandId: '',
    modelId: ''
  });

  // Aksesuar için seçili marka state
  const [selectedAccessoryBrand, setSelectedAccessoryBrand] = useState<string>('');
  const [accessories, setAccessories] = useState<Accessory[]>([]);

  // Seçili öğe state
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [editBrandId, setEditBrandId] = useState<string | null>(null);
  const [editModelId, setEditModelId] = useState<string | null>(null);
  const [editPackageId, setEditPackageId] = useState<string | null>(null);
  const [editBrandName, setEditBrandName] = useState('');
  const [editModelName, setEditModelName] = useState('');
  const [editPackage, setEditPackage] = useState({
    name: '',
    mtvAmount: 0,
    plakaMasrafi: 0
  });

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

  // CSRF token'ını al
  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await fetch('/api/csrf-token');
        if (response.ok) {
          const data = await response.json();
          setCsrfToken(data.csrfToken);
        }
      } catch (error) {
        console.error('CSRF token alınırken hata:', error);
      }
    };
    fetchCsrfToken();
  }, []);

  // Verileri API'den getir
  useEffect(() => {
    if (user?.role === 'ADMIN') {
      fetchBrands();
      fetchAccessories();
      fetchMaintenanceProducts();
    }
  }, [user]);

  // Markaları getir
  const fetchBrands = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/brands', {
        headers: {
          'x-user-id': user?.id || ''
        }
      });
      if (!response.ok) {
        throw new Error('Markalar getirilemedi');
      }
      const data = await response.json();
      
      // Her marka için models özelliğinin olduğundan emin ol
      const safeData = data.map((brand: any) => ({
        ...brand,
        models: brand.models || []
      }));
      
      setBrands(safeData);
    } catch (error) {
      console.error('Markalar yüklenirken hata oluştu:', error);
      alert('Markalar yüklenirken bir hata oluştu!');
    } finally {
      setIsLoading(false);
    }
  };

  // Aksesuarları getir
  const fetchAccessories = async () => {
    try {
      const response = await fetch('/api/accessories');
      if (!response.ok) {
        throw new Error('Aksesuarlar getirilemedi');
      }
      const data = await response.json();
      setAccessories(data);
    } catch (error) {
      console.error('Aksesuarlar yüklenirken hata oluştu:', error);
      // Sessizce hata ver, kullanıcıyı rahatsız etme
    }
  };

  const fetchMaintenanceProducts = async () => {
    try {
      const response = await fetch('/api/maintenance-products');
      if (!response.ok) {
        throw new Error('Bakım ürünleri getirilemedi');
      }
      const data = await response.json();
      // API pagination ile birlikte products array'i döndürüyor
      setMaintenanceProducts(data.products || []);
      if (data.pagination) {
        setMaintenancePagination(data.pagination);
      }
    } catch (error) {
      console.error('Bakım ürünleri yüklenirken hata oluştu:', error);
      // Hata durumunda boş array set et
      setMaintenanceProducts([]);
    }
  };

  // API için marka ekleme fonksiyonu
  const handleAddBrand = async () => {
    if (!newBrand.name.trim()) {
      alert('Lütfen marka adı girin');
      return;
    }
    
    try {
      console.log('Marka ekleme isteği gönderiliyor:', newBrand);
      
      // Önce CSRF token'ı al
      const csrfResponse = await fetch('/api/csrf-token');
      if (!csrfResponse.ok) {
        throw new Error('CSRF token alınamadı');
      }
      const { csrfToken } = await csrfResponse.json();
      
      const response = await fetch('/api/brands', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-csrf-token': csrfToken
        },
        body: JSON.stringify({ name: newBrand.name }),
      });
      
      console.log('API yanıtı alındı:', response.status, response.statusText);
      
      // Yanıt metni olarak al (JSON olmayabilir)
      const responseText = await response.text();
      console.log('Ham yanıt:', responseText);
      
      // JSON olarak ayrıştırmayı dene
      let responseData;
      try {
        responseData = JSON.parse(responseText);
        console.log('Ayrıştırılmış API yanıt verisi:', responseData);
      } catch (parseError) {
        console.error('API yanıtı geçerli JSON değil:', parseError);
        throw new Error('API yanıtı geçerli bir JSON formatında değil!');
      }
      
      if (!response.ok) {
        throw new Error(responseData.error || 'Marka eklenirken bir hata oluştu');
      }
      
      // API yanıtında models özelliği yoksa, boş bir dizi olarak ekle
      if (!responseData.models) {
        responseData.models = [];
      }
      
      // Yeni markayı ekleyip formu sıfırla
      setBrands([...brands, responseData]);
      setNewBrand({ name: '' });
      alert('Marka başarıyla eklendi');
    } catch (error: any) {
      console.error('Marka eklenirken hata detayı:', error);
      alert(`Marka eklenirken bir hata oluştu: ${error.message}`);
    }
  };

  // API için model ekleme fonksiyonu
  const handleAddModel = async () => {
    if (!newModel.name.trim() || !newModel.brandId) return;
    
    try {
      // Önce CSRF token'ı al
      const csrfResponse = await fetch('/api/csrf-token');
      if (!csrfResponse.ok) {
        throw new Error('CSRF token alınamadı');
      }
      const { csrfToken } = await csrfResponse.json();
      
      const response = await fetch('/api/models', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-csrf-token': csrfToken
        },
        body: JSON.stringify({
          name: newModel.name,
          brandId: newModel.brandId
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Model eklenirken bir hata oluştu');
      }
      
      const model = await response.json();
      
      // Model eklendikten sonra markalar listesini güncelle
      fetchBrands();
      setNewModel({ name: '', brandId: newModel.brandId });
    } catch (error: any) {
      console.error('Model eklenirken hata:', error);
      alert(error.message || 'Model eklenirken bir hata oluştu');
    }
  };

  // API için paket ekleme fonksiyonu
  const handleAddPackage = async () => {
    if (!newPackage.name.trim() || !newPackage.modelId) return;
    
    try {
      // Önce CSRF token'ı al
      const csrfResponse = await fetch('/api/csrf-token');
      if (!csrfResponse.ok) {
        throw new Error('CSRF token alınamadı');
      }
      const { csrfToken } = await csrfResponse.json();
      
      const response = await fetch('/api/packages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-csrf-token': csrfToken
        },
        body: JSON.stringify({
          name: newPackage.name,
          modelId: newPackage.modelId,
          mtvAmount: newPackage.mtvAmount,
          plakaMasrafi: newPackage.plakaMasrafi
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Paket eklenirken bir hata oluştu');
      }
      
      const packageItem = await response.json();
      
      // Paket eklendikten sonra markalar listesini güncelle
      fetchBrands();
      setNewPackage({
        name: '',
        modelId: '',
        mtvAmount: 0,
        plakaMasrafi: 0
      });
    } catch (error: any) {
      console.error('Paket eklenirken hata:', error);
      alert(error.message || 'Paket eklenirken bir hata oluştu');
    }
  };

  // API için aksesuar ekleme fonksiyonu
  const handleAddAccessory = async () => {
    if (!newAccessory.name.trim() || !newAccessory.brandId || !newAccessory.modelId) {
      alert('Lütfen tüm alanları doldurun');
      return;
    }
    
    try {
      // Önce CSRF token'ı al
      const csrfResponse = await fetch('/api/csrf-token');
      if (!csrfResponse.ok) {
        throw new Error('CSRF token alınamadı');
      }
      const { csrfToken } = await csrfResponse.json();

      const response = await fetch('/api/accessories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
        },
        body: JSON.stringify({
          name: newAccessory.name,
          brandId: newAccessory.brandId,
          modelId: newAccessory.modelId,
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Aksesuar eklenirken bir hata oluştu');
      }
      
      const newAccessoryItem = await response.json();
      setAccessories([...accessories, newAccessoryItem]);
      setNewAccessory({ name: '', brandId: '', modelId: '' });
      setSelectedAccessoryBrand('');
      alert('Aksesuar başarıyla eklendi');
    } catch (error: any) {
      console.error('Aksesuar eklenirken hata:', error);
      alert(error.message || 'Aksesuar eklenirken bir hata oluştu');
    }
  };

  // Düzenleme için marka seçme
  const handleEditBrand = (brand: Brand) => {
    setEditBrandId(brand.id);
    setEditBrandName(brand.name);
  };

  // Düzenleme için model seçme
  const handleEditModel = (model: Model) => {
    setEditModelId(model.id);
    setEditModelName(model.name);
  };

  // Düzenleme için paket seçme
  const handleEditPackage = (pkg: Package) => {
    setEditPackageId(pkg.id);
    setEditPackage({
      name: pkg.name,
      mtvAmount: pkg.mtvAmount,
      plakaMasrafi: pkg.plakaMasrafi || 0
    });
  };

  // API için marka güncelleme
  const handleUpdateBrand = async () => {
    if (!editBrandId || !editBrandName.trim()) return;
    
    try {
      // Önce CSRF token'ı al
      const csrfResponse = await fetch('/api/csrf-token');
      if (!csrfResponse.ok) {
        throw new Error('CSRF token alınamadı');
      }
      const { csrfToken } = await csrfResponse.json();
      
      const response = await fetch('/api/brands/' + editBrandId, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-csrf-token': csrfToken
        },
        body: JSON.stringify({ name: editBrandName }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Marka güncellenirken bir hata oluştu');
      }
      
      // Marka güncellendikten sonra markalar listesini güncelle
      fetchBrands();
      setEditBrandId(null);
      setEditBrandName('');
    } catch (error: any) {
      console.error('Marka güncellenirken hata:', error);
      alert(error.message || 'Marka güncellenirken bir hata oluştu');
    }
  };

  // API için model güncelleme
  const handleUpdateModel = async () => {
    if (!editModelId || !editModelName.trim()) return;
    
    try {
      // Önce CSRF token'ı al
      const csrfResponse = await fetch('/api/csrf-token');
      if (!csrfResponse.ok) {
        throw new Error('CSRF token alınamadı');
      }
      const { csrfToken } = await csrfResponse.json();
      
      const response = await fetch('/api/models/' + editModelId, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-csrf-token': csrfToken
        },
        body: JSON.stringify({ name: editModelName }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Model güncellenirken bir hata oluştu');
      }
      
      // Model güncellendikten sonra markalar listesini güncelle
      fetchBrands();
      setEditModelId(null);
      setEditModelName('');
    } catch (error: any) {
      console.error('Model güncellenirken hata:', error);
      alert(error.message || 'Model güncellenirken bir hata oluştu');
    }
  };

  // API için paket güncelleme
  const handleUpdatePackage = async () => {
    if (!editPackageId || !editPackage.name.trim()) return;
    
    try {
      // Önce CSRF token'ı al
      const csrfResponse = await fetch('/api/csrf-token');
      if (!csrfResponse.ok) {
        throw new Error('CSRF token alınamadı');
      }
      const { csrfToken } = await csrfResponse.json();
      
      const response = await fetch('/api/packages/' + editPackageId, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-csrf-token': csrfToken
        },
        body: JSON.stringify(editPackage),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Paket güncellenirken bir hata oluştu');
      }
      
      // Paket güncellendikten sonra markalar listesini güncelle
      fetchBrands();
      setEditPackageId(null);
      setEditPackage({
        name: '',
        mtvAmount: 0,
        plakaMasrafi: 0
      });
    } catch (error: any) {
      console.error('Paket güncellenirken hata:', error);
      alert(error.message || 'Paket güncellenirken bir hata oluştu');
    }
  };

  // API için marka silme
  const handleDeleteBrand = async (brandId: string) => {
    if (window.confirm('Bu markayı silmek istediğinizden emin misiniz? Tüm modelleri ve paketleri de silinecektir.')) {
      try {
        console.log(`Marka silme isteği gönderiliyor: ID=${brandId}`);
        
        // Önce CSRF token'ı al
        const csrfResponse = await fetch('/api/csrf-token');
        if (!csrfResponse.ok) {
          throw new Error('CSRF token alınamadı');
        }
        const { csrfToken } = await csrfResponse.json();
        
        // Alternatif API endpoint kullan
        const response = await fetch('/api/brand-delete', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-csrf-token': csrfToken
          },
          body: JSON.stringify({ brandId }),
        });
        
        console.log('API yanıtı alındı:', response.status, response.statusText);
        
        // Yanıt metni olarak al
        const responseText = await response.text();
        console.log('Ham yanıt:', responseText);
        
        // Eğer yanıt boş değilse, JSON olarak ayrıştırmayı dene
        let responseData;
        if (responseText.trim()) {
          try {
            responseData = JSON.parse(responseText);
            console.log('Ayrıştırılmış API yanıt verisi:', responseData);
          } catch (parseError) {
            console.error('API yanıtı geçerli JSON değil:', parseError);
            throw new Error('API yanıtı geçerli bir JSON formatında değil!');
          }
          
          if (!response.ok) {
            throw new Error(responseData.error || 'Marka silinirken bir hata oluştu');
          }
        } else if (!response.ok) {
          throw new Error('Marka silinirken bir hata oluştu (Boş yanıt)');
        }
        
        // Marka silindikten sonra markalar listesini güncelle
        fetchBrands();
        alert('Marka başarıyla silindi');
      } catch (error: any) {
        console.error('Marka silinirken hata detayı:', error);
        alert(`Marka silinirken bir hata oluştu: ${error.message}`);
      }
    }
  };

  // API için model silme
  const handleDeleteModel = async (modelId: string) => {
    if (window.confirm('Bu modeli silmek istediğinizden emin misiniz? Tüm paketleri de silinecektir.')) {
      try {
        console.log(`Model silme isteği gönderiliyor: ID=${modelId}`);
        
        // Önce CSRF token'ı al
        const csrfResponse = await fetch('/api/csrf-token');
        if (!csrfResponse.ok) {
          throw new Error('CSRF token alınamadı');
        }
        const { csrfToken } = await csrfResponse.json();
        
        // Alternatif API endpoint kullan
        const response = await fetch('/api/model-delete', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-csrf-token': csrfToken
          },
          body: JSON.stringify({ modelId }),
        });
        
        console.log('API yanıtı alındı:', response.status, response.statusText);
        
        // Yanıt metni olarak al
        const responseText = await response.text();
        console.log('Ham yanıt:', responseText);
        
        // Eğer yanıt boş değilse, JSON olarak ayrıştırmayı dene
        let responseData;
        if (responseText.trim()) {
          try {
            responseData = JSON.parse(responseText);
            console.log('Ayrıştırılmış API yanıt verisi:', responseData);
          } catch (parseError) {
            console.error('API yanıtı geçerli JSON değil:', parseError);
            throw new Error('API yanıtı geçerli bir JSON formatında değil!');
          }
          
          if (!response.ok) {
            throw new Error(responseData.error || 'Model silinirken bir hata oluştu');
          }
        } else if (!response.ok) {
          throw new Error('Model silinirken bir hata oluştu (Boş yanıt)');
        }
        
        // Model silindikten sonra markalar listesini güncelle
        fetchBrands();
        alert('Model başarıyla silindi');
      } catch (error: any) {
        console.error('Model silinirken hata detayı:', error);
        alert(`Model silinirken bir hata oluştu: ${error.message}`);
      }
    }
  };

  // API için paket silme
  const handleDeletePackage = async (packageId: string) => {
    if (window.confirm('Bu paketi silmek istediğinizden emin misiniz?')) {
      try {
        console.log(`Paket silme isteği gönderiliyor: ID=${packageId}`);
        
        // Önce CSRF token'ı al
        const csrfResponse = await fetch('/api/csrf-token');
        if (!csrfResponse.ok) {
          throw new Error('CSRF token alınamadı');
        }
        const { csrfToken } = await csrfResponse.json();
        
        // Alternatif API endpoint kullan
        const response = await fetch('/api/package-delete', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-csrf-token': csrfToken
          },
          body: JSON.stringify({ packageId }),
        });
        
        console.log('API yanıtı alındı:', response.status, response.statusText);
        
        // Yanıt metni olarak al
        const responseText = await response.text();
        console.log('Ham yanıt:', responseText);
        
        // Eğer yanıt boş değilse, JSON olarak ayrıştırmayı dene
        let responseData;
        if (responseText.trim()) {
          try {
            responseData = JSON.parse(responseText);
            console.log('Ayrıştırılmış API yanıt verisi:', responseData);
          } catch (parseError) {
            console.error('API yanıtı geçerli JSON değil:', parseError);
            throw new Error('API yanıtı geçerli bir JSON formatında değil!');
          }
          
          if (!response.ok) {
            throw new Error(responseData.error || 'Paket silinirken bir hata oluştu');
          }
        } else if (!response.ok) {
          throw new Error('Paket silinirken bir hata oluştu (Boş yanıt)');
        }
        
        // Paket silindikten sonra markalar listesini güncelle
        fetchBrands();
        alert('Paket başarıyla silindi');
      } catch (error: any) {
        console.error('Paket silinirken hata detayı:', error);
        alert(`Paket silinirken bir hata oluştu: ${error.message}`);
      }
    }
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

  return (
    <DashboardLayout username={user.name} userRole={user.role} onLogout={logout}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Araç Bilgileri Yönetimi</h1>
          <p className="mt-1 text-sm text-gray-700">
            Araç marka, model, paket ve vergi bilgilerini yönetin
          </p>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            <p className="ml-3 text-lg">Veriler yükleniyor...</p>
          </div>
        ) : (
          // Tab Menüsü
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setSelectedTab('brands')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  selectedTab === 'brands'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Markalar
              </button>
              <button
                onClick={() => setSelectedTab('models')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  selectedTab === 'models'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Modeller
              </button>
              <button
                onClick={() => setSelectedTab('packages')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  selectedTab === 'packages'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Paketler ve Vergi Bilgileri
              </button>
              <button
                onClick={() => setSelectedTab('accessories')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  selectedTab === 'accessories'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Aksesuarlar
              </button>
              <button
                onClick={() => setSelectedTab('maintenance')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  selectedTab === 'maintenance'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Bakım Ürünleri
              </button>
            </nav>
          </div>
        )}

        {/* Seçilen Tab İçeriği */}
        <div className="mt-6">
          {/* Markalar Tab */}
          {selectedTab === 'brands' && (
            <div>
              <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 mb-6">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-950">Yeni Marka Ekle</h3>
                    <p className="mt-1 text-sm text-gray-700">
                      Sisteme yeni bir araç markası ekleyin.
                    </p>
                  </div>
                  <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="brand-name" className="block text-sm font-medium text-gray-950">
                          Marka Adı
                        </label>
                        <input
                          type="text"
                          name="brand-name"
                          id="brand-name"
                          value={newBrand.name}
                          onChange={(e) => setNewBrand({ name: e.target.value })}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md text-gray-800"
                        />
                      </div>
                      <div className="col-span-6">
                        <button
                          type="button"
                          onClick={handleAddBrand}
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Marka Ekle
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Marka Listesi */}
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-950">Markalar</h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-700">Sistemdeki tüm araç markaları</p>
                </div>
                <div className="border-t border-gray-200">
                  <ul role="list" className="divide-y divide-gray-200">
                    {brands.map((brand) => (
                      <li key={brand.id} className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          {editBrandId === brand.id ? (
                            <div className="flex items-center space-x-2">
                              <input
                                type="text"
                                value={editBrandName}
                                onChange={(e) => setEditBrandName(e.target.value)}
                                className="text-sm border-gray-400 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                              />
                              <button
                                onClick={handleUpdateBrand}
                                className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                Kaydet
                              </button>
                              <button
                                onClick={() => setEditBrandId(null)}
                                className="inline-flex items-center px-2 py-1 border border-gray-400 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                İptal
                              </button>
                            </div>
                          ) : (
                            <p className="text-sm font-medium text-indigo-600 truncate">{brand.name}</p>
                          )}
                          <div className="ml-2 flex items-center space-x-2">
                            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {brand.models?.length || 0} Model
                            </p>
                            {editBrandId !== brand.id && (
                              <>
                                <button
                                  onClick={() => handleEditBrand(brand)}
                                  className="inline-flex items-center p-1 border border-transparent rounded-full text-indigo-600 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                  </svg>
                                </button>
                                <button
                                  onClick={() => handleDeleteBrand(brand.id)}
                                  className="inline-flex items-center p-1 border border-transparent rounded-full text-red-600 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Modeller Tab */}
          {selectedTab === 'models' && (
            <div>
              <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 mb-6">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-950">Yeni Model Ekle</h3>
                    <p className="mt-1 text-sm text-gray-700">
                      Markaya ait yeni bir model ekleyin.
                    </p>
                  </div>
                  <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="brand-id" className="block text-sm font-medium text-gray-950">
                          Marka
                        </label>
                        <select
                          id="brand-id"
                          name="brand-id"
                          value={newModel.brandId}
                          onChange={(e) => setNewModel({ ...newModel, brandId: e.target.value })}
                          className="mt-1 block w-full py-2 px-3 border border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-800"
                        >
                          <option value="">Marka Seçin</option>
                          {brands.map((brand) => (
                            <option key={brand.id} value={brand.id}>
                              {brand.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="model-name" className="block text-sm font-medium text-gray-950">
                          Model Adı
                        </label>
                        <input
                          type="text"
                          name="model-name"
                          id="model-name"
                          value={newModel.name}
                          onChange={(e) => setNewModel({ ...newModel, name: e.target.value })}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md text-gray-800"
                        />
                      </div>
                      <div className="col-span-6">
                        <button
                          type="button"
                          onClick={handleAddModel}
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Model Ekle
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Model Listesi */}
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-950">Modeller</h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-700">Markalar altındaki tüm modeller</p>
                </div>
                <div className="border-t border-gray-200">
                  <ul role="list" className="divide-y divide-gray-200">
                    {brands.map((brand) => (
                      <React.Fragment key={brand.id}>
                        {(brand.models?.length > 0) && (
                          <li className="px-4 py-2 sm:px-6 bg-gray-50">
                            <p className="text-sm font-medium text-gray-950">{brand.name}</p>
                          </li>
                        )}
                        {(brand.models || []).map((model) => (
                          <li key={model.id} className="px-4 py-4 sm:px-6 pl-10">
                            <div className="flex items-center justify-between">
                              {editModelId === model.id ? (
                                <div className="flex items-center space-x-2">
                                  <input
                                    type="text"
                                    value={editModelName}
                                    onChange={(e) => setEditModelName(e.target.value)}
                                    className="text-sm border-gray-400 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                  />
                                  <button
                                    onClick={handleUpdateModel}
                                    className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                  >
                                    Kaydet
                                  </button>
                                  <button
                                    onClick={() => setEditModelId(null)}
                                    className="inline-flex items-center px-2 py-1 border border-gray-400 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                  >
                                    İptal
                                  </button>
                                </div>
                              ) : (
                                <p className="text-sm text-gray-950 truncate">{model.name}</p>
                              )}
                              <div className="ml-2 flex items-center space-x-2">
                                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  {model.packages?.length || 0} Paket
                                </p>
                                {editModelId !== model.id && (
                                  <>
                                    <button
                                      onClick={() => handleEditModel(model)}
                                      className="inline-flex items-center p-1 border border-transparent rounded-full text-indigo-600 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                      </svg>
                                    </button>
                                    <button
                                      onClick={() => handleDeleteModel(model.id)}
                                      className="inline-flex items-center p-1 border border-transparent rounded-full text-red-600 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                    >
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                      </svg>
                                    </button>
                                  </>
                                )}
                              </div>
                            </div>
                          </li>
                        ))}
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Paketler Tab */}
          {selectedTab === 'packages' && (
            <div>
              <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 mb-6">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-950">Yeni Paket ve Vergi Bilgisi Ekle</h3>
                    <p className="mt-1 text-sm text-gray-700">
                      Modele ait paket ve vergi bilgilerini ekleyin.
                    </p>
                  </div>
                  <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="model-select" className="block text-sm font-medium text-gray-950">
                          Marka ve Model
                        </label>
                        <select
                          id="model-select"
                          name="model-select"
                          value={newPackage.modelId}
                          onChange={(e) => setNewPackage({ ...newPackage, modelId: e.target.value })}
                          className="mt-1 block w-full py-2 px-3 border border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-800"
                        >
                          <option value="">Model Seçin</option>
                          {brands.map((brand) => (
                            <optgroup key={brand.id} label={brand.name}>
                              {(brand.models || []).map((model) => (
                                <option key={model.id} value={model.id}>
                                  {model.name}
                                </option>
                              ))}
                            </optgroup>
                          ))}
                        </select>
                      </div>
                      
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="package-name" className="block text-sm font-medium text-gray-950">
                          Paket Adı
                        </label>
                        <input
                          type="text"
                          name="package-name"
                          id="package-name"
                          value={newPackage.name}
                          onChange={(e) => setNewPackage({ ...newPackage, name: e.target.value })}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md text-gray-800"
                        />
                      </div>
                      
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="mtv-amount" className="block text-sm font-medium text-gray-950">
                          MTV Tutarı (TL)
                        </label>
                        <input
                          type="text"
                          name="mtv-amount"
                          id="mtv-amount"
                          value={formatNumber(newPackage.mtvAmount)}
                          onChange={(e) => setNewPackage({ ...newPackage, mtvAmount: parseFormattedNumber(e.target.value) })}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md text-gray-800"
                        />
                      </div>
                      
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="plaka-masrafi" className="block text-sm font-medium text-gray-950">
                          Plaka Masrafı (TL)
                        </label>
                        <input
                          type="text"
                          name="plaka-masrafi"
                          id="plaka-masrafi"
                          value={formatNumber(newPackage.plakaMasrafi)}
                          onChange={(e) => setNewPackage({ ...newPackage, plakaMasrafi: parseFormattedNumber(e.target.value) })}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md text-gray-800"
                        />
                      </div>
                      
                      <div className="col-span-6">
                        <button
                          type="button"
                          onClick={handleAddPackage}
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Paket Ekle
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Paket Listesi */}
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-950">Paketler ve Vergi Bilgileri</h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-700">Marka ve modellere ait tüm paket ve vergi bilgileri</p>
                </div>
                <div className="border-t border-gray-200">
                  {editPackageId && (
                    <div className="bg-gray-50 px-4 py-5 border-b border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label htmlFor="edit-package-name" className="block text-sm font-medium text-gray-950">
                            Paket Adı
                          </label>
                          <input
                            type="text"
                            id="edit-package-name"
                            value={editPackage.name}
                            onChange={(e) => setEditPackage({...editPackage, name: e.target.value})}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md text-gray-800"
                          />
                        </div>

                        <div>
                          <label htmlFor="edit-mtv-amount" className="block text-sm font-medium text-gray-950">
                            MTV Tutarı (TL)
                          </label>
                          <input
                            type="text"
                            id="edit-mtv-amount"
                            value={formatNumber(editPackage.mtvAmount)}
                            onChange={(e) => setEditPackage({...editPackage, mtvAmount: parseFormattedNumber(e.target.value)})}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md text-gray-800"
                          />
                        </div>
                        <div>
                          <label htmlFor="edit-plaka-masrafi" className="block text-sm font-medium text-gray-950">
                            Plaka Masrafı (TL)
                          </label>
                          <input
                            type="text"
                            id="edit-plaka-masrafi"
                            value={formatNumber(editPackage.plakaMasrafi)}
                            onChange={(e) => setEditPackage({...editPackage, plakaMasrafi: parseFormattedNumber(e.target.value)})}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md text-gray-800"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                            Marka
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                            Model
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                            Paket
                          </th>

                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                            MTV (TL)
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                            Plaka Masrafı (TL)
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                            İşlemler
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {brands.map(brand => (
                          (brand.models || []).map(model => (
                            (model.packages || []).map(pkg => (
                              <tr key={pkg.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-950">
                                  {brand.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950">
                                  {model.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950">
                                  {pkg.name}
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950">
                                  {pkg.mtvAmount.toLocaleString('tr-TR')} TL
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950">
                                  {pkg.plakaMasrafi ? pkg.plakaMasrafi.toLocaleString('tr-TR') : 0} TL
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950">
                                  {editPackageId === pkg.id ? (
                                    <div className="flex items-center space-x-2">
                                      <button
                                        onClick={handleUpdatePackage}
                                        className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                      >
                                        Kaydet
                                      </button>
                                      <button
                                        onClick={() => setEditPackageId(null)}
                                        className="inline-flex items-center px-2 py-1 border border-gray-400 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                      >
                                        İptal
                                      </button>
                                    </div>
                                  ) : (
                                    <div className="flex items-center space-x-2">
                                      <button
                                        onClick={() => handleEditPackage(pkg)}
                                        className="inline-flex items-center p-1 border border-transparent rounded-full text-indigo-600 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                      >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                      </button>
                                      <button
                                        onClick={() => handleDeletePackage(pkg.id)}
                                        className="inline-flex items-center p-1 border border-transparent rounded-full text-red-600 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                      >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                      </button>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            ))
                          ))
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bakım Ürünleri Sekmesi */}
          {selectedTab === 'maintenance' && (
            <div className="space-y-6">
              {/* Bakım Ürünü Ekleme Formu */}
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Yeni Bakım Ürünü Ekle</h3>
                <form onSubmit={async (e) => {
                  e.preventDefault();
                  if (!newMaintenanceProduct.name.trim()) {
                    alert('Ürün adı zorunludur');
                    return;
                  }
                  
                  try {
                    const response = await fetch('/api/maintenance-products', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'x-csrf-token': csrfToken,
                      },
                      body: JSON.stringify(newMaintenanceProduct),
                    });
                    
                    if (!response.ok) {
                      const errorData = await response.json();
                      throw new Error(errorData.error || 'Bakım ürünü eklenirken bir hata oluştu');
                    }
                    
                    const newProduct = await response.json();
                    setMaintenanceProducts([...maintenanceProducts, newProduct]);
                    setNewMaintenanceProduct({ name: '', description: '' });
                    // Listeyi yeniden yükle
                    await fetchMaintenanceProducts();
                    alert('Bakım ürünü başarıyla eklendi');
                  } catch (error: any) {
                    console.error('Bakım ürünü eklenirken hata:', error);
                    alert(error.message || 'Bakım ürünü eklenirken bir hata oluştu');
                  }
                }} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="maintenance-name" className="block text-sm font-medium text-gray-700">
                        Ürün Adı *
                      </label>
                      <input
                        type="text"
                        id="maintenance-name"
                        value={newMaintenanceProduct.name}
                        onChange={(e) => setNewMaintenanceProduct({ ...newMaintenanceProduct, name: e.target.value })}
                        className="mt-1 block w-full border-gray-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Bakım ürünü adını girin"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="maintenance-description" className="block text-sm font-medium text-gray-700">
                        Açıklama
                      </label>
                      <input
                        type="text"
                        id="maintenance-description"
                        value={newMaintenanceProduct.description}
                        onChange={(e) => setNewMaintenanceProduct({ ...newMaintenanceProduct, description: e.target.value })}
                        className="mt-1 block w-full border-gray-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Ürün açıklamasını girin (opsiyonel)"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Bakım Ürünü Ekle
                    </button>
                  </div>
                </form>
              </div>

              {/* Bakım Ürünleri Listesi */}
              <div className="bg-white shadow rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Bakım Ürünleri</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Ürün Adı
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Açıklama
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          İşlemler
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {maintenanceProducts.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                            Henüz bakım ürünü eklenmemiş
                          </td>
                        </tr>
                      ) : (
                        maintenanceProducts.map((product) => {
                          const isEditing = editMaintenanceProductId === product.id;
                          return (
                            <tr key={product.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950">
                                {product.id}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950">
                                {isEditing ? (
                                  <input
                                    type="text"
                                    value={newMaintenanceProduct.name}
                                    onChange={(e) => setNewMaintenanceProduct({ ...newMaintenanceProduct, name: e.target.value })}
                                    className="block w-full border-gray-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  />
                                ) : (
                                  product.name
                                )}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950">
                                {isEditing ? (
                                  <input
                                    type="text"
                                    value={newMaintenanceProduct.description}
                                    onChange={(e) => setNewMaintenanceProduct({ ...newMaintenanceProduct, description: e.target.value })}
                                    className="block w-full border-gray-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  />
                                ) : (
                                  product.description || '-'
                                )}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="flex space-x-2">
                                  {isEditing ? (
                                    <>
                                      <button
                                        onClick={async () => {
                                          if (!newMaintenanceProduct.name.trim()) {
                                            alert('Ürün adı zorunludur');
                                            return;
                                          }
                                          
                                          try {
                                            const response = await fetch(`/api/maintenance-products/${product.id}`, {
                                              method: 'PUT',
                                              headers: {
                                                'Content-Type': 'application/json',
                                                'x-csrf-token': csrfToken,
                                              },
                                              body: JSON.stringify(newMaintenanceProduct),
                                            });
                                            
                                            if (!response.ok) {
                                              const errorData = await response.json();
                                              throw new Error(errorData.error || 'Bakım ürünü güncellenirken bir hata oluştu');
                                            }
                                            
                                            const updatedProduct = await response.json();
                                            setEditMaintenanceProductId(null);
                                            setNewMaintenanceProduct({ name: '', description: '' });
                                            // Listeyi yeniden yükle
                                            await fetchMaintenanceProducts();
                                            alert('Bakım ürünü başarıyla güncellendi');
                                          } catch (error: any) {
                                            console.error('Bakım ürünü güncellenirken hata:', error);
                                            alert(error.message || 'Bakım ürünü güncellenirken bir hata oluştu');
                                          }
                                        }}
                                        className="inline-flex items-center p-1 border border-transparent rounded-full text-green-600 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                      >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                      </button>
                                      <button
                                        onClick={() => {
                                          setEditMaintenanceProductId(null);
                                          setNewMaintenanceProduct({ name: '', description: '' });
                                        }}
                                        className="inline-flex items-center p-1 border border-transparent rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                      >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                      </button>
                                    </>
                                  ) : (
                                    <>
                                      <button
                                        onClick={() => {
                                          setEditMaintenanceProductId(product.id);
                                          setNewMaintenanceProduct({
                                            name: product.name,
                                            description: product.description || ''
                                          });
                                        }}
                                        className="inline-flex items-center p-1 border border-transparent rounded-full text-indigo-600 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                      >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                      </button>
                                      <button
                                        onClick={async () => {
                                          if (window.confirm('Bu bakım ürünü silmek istediğinizden emin misiniz?')) {
                                            try {
                                              const response = await fetch(`/api/maintenance-products/${product.id}`, {
                                              method: 'DELETE',
                                              headers: {
                                                'x-csrf-token': csrfToken,
                                              },
                                            });
                                              
                                              if (!response.ok) {
                                                const errorData = await response.json();
                                                throw new Error(errorData.error || 'Bakım ürünü silinirken bir hata oluştu');
                                              }
                                              
                                              // Listeyi yeniden yükle
                                              await fetchMaintenanceProducts();
                                              alert('Bakım ürünü başarıyla silindi');
                                            } catch (error: any) {
                                              console.error('Bakım ürünü silinirken hata:', error);
                                              alert(error.message || 'Bakım ürünü silinirken bir hata oluştu');
                                            }
                                          }
                                        }}
                                        className="inline-flex items-center p-1 border border-transparent rounded-full text-red-600 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                      >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                      </button>
                                    </>
                                  )}
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Aksesuarlar Sekmesi */}
          {selectedTab === 'accessories' && (
            <div className="space-y-6">
              <div className="bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-950 mb-4">
                    Aksesuar Yönetimi
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Marka ve model bazında aksesuar bilgilerini yönetebilirsiniz.
                  </p>
                  
                  {/* Aksesuar ekleme formu */}
                   <div className="bg-gray-50 p-4 rounded-lg mb-6">
                     <h4 className="text-md font-medium text-gray-950 mb-3">Yeni Aksesuar Ekle</h4>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                       <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">
                           Marka
                         </label>
                         <select 
                           value={newAccessory.brandId}
                           onChange={(e) => {
                             const brandId = e.target.value;
                             setNewAccessory({ ...newAccessory, brandId, modelId: '' });
                             setSelectedAccessoryBrand(brandId);
                           }}
                           className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-800"
                         >
                           <option value="">Marka Seçin</option>
                           {brands.map((brand) => (
                             <option key={brand.id} value={brand.id}>
                               {brand.name}
                             </option>
                           ))}
                         </select>
                       </div>
                       <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">
                           Model
                         </label>
                         <select 
                           value={newAccessory.modelId}
                           onChange={(e) => setNewAccessory({ ...newAccessory, modelId: e.target.value })}
                           className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-800"
                           disabled={!selectedAccessoryBrand}
                         >
                           <option value="">Model Seçin</option>
                           {selectedAccessoryBrand && brands
                             .find(brand => brand.id === selectedAccessoryBrand)?.models
                             .map((model) => (
                               <option key={model.id} value={model.id}>
                                 {model.name}
                               </option>
                             ))
                           }
                         </select>
                       </div>
                       <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">
                           Aksesuar Adı
                         </label>
                         <input
                           type="text"
                           value={newAccessory.name}
                           onChange={(e) => setNewAccessory({ ...newAccessory, name: e.target.value })}
                           className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-800"
                           placeholder="Aksesuar adını girin"
                         />
                       </div>
                       <div className="md:col-span-3 flex justify-end">
                         <button
                           type="button"
                           onClick={handleAddAccessory}
                           className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                         >
                           Aksesuar Ekle
                         </button>
                       </div>
                     </div>
                   </div>

                  {/* Aksesuarlar listesi */}
                   <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                     <table className="min-w-full divide-y divide-gray-300">
                       <thead className="bg-gray-50">
                         <tr>
                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                             Marka
                           </th>
                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                             Model
                           </th>
                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                             Aksesuar Adı
                           </th>
                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                             İşlemler
                           </th>
                         </tr>
                       </thead>
                       <tbody className="bg-white divide-y divide-gray-200">
                         {accessories.length === 0 ? (
                           <tr>
                             <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                               Henüz aksesuar eklenmemiş.
                             </td>
                           </tr>
                         ) : (
                           accessories.map((accessory) => {
                             return (
                               <tr key={accessory.id}>
                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950">
                                   {accessory.brand?.name || 'Bilinmeyen Marka'}
                                 </td>
                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950">
                                   {accessory.model?.name || 'Bilinmeyen Model'}
                                 </td>
                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950">
                                   {accessory.name}
                                 </td>
                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                   <button
                                     onClick={async () => {
                                       if (window.confirm('Bu aksesuarı silmek istediğinizden emin misiniz?')) {
                                         try {
                                           const response = await fetch(`/api/accessories/${accessory.id}`, {
                                             method: 'DELETE',
                                           });
                                           
                                           if (!response.ok) {
                                             const errorData = await response.json();
                                             throw new Error(errorData.error || 'Aksesuar silinirken bir hata oluştu');
                                           }
                                           
                                           setAccessories(accessories.filter(a => a.id !== accessory.id));
                                           alert('Aksesuar başarıyla silindi');
                                         } catch (error: any) {
                                           console.error('Aksesuar silinirken hata:', error);
                                           alert(error.message || 'Aksesuar silinirken bir hata oluştu');
                                         }
                                       }
                                     }}
                                     className="inline-flex items-center p-1 border border-transparent rounded-full text-red-600 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                   >
                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                     </svg>
                                   </button>
                                 </td>
                               </tr>
                             );
                           })
                         )}
                       </tbody>
                     </table>
                   </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
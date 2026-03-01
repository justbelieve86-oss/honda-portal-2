'use client';

import React, { useEffect, useState, useMemo, useCallback, memo, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';

// Lazy load heavy components
const DashboardLayout = dynamic(() => import('@/app/components/dashboard/DashboardLayout'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div></div>,
  ssr: false
});
import { turkishCities, getDistrictsByCity, getCityNameById, getDistrictNameById, getSortedCities, getSortedDistricts, City, District } from '@/lib/tr-cities';

// Müşteri tipi tanımı
interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  tcNo: string;
  birthDate?: string;
  occupation?: string;
  address?: string;
  registerDate: string;
  cityId?: number;
  districtId?: number;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  sales?: Sale[];
}

interface Sale {
  id: string;
  customerId: string;
  model: string;
  chassisNo: string;
  engineNo: string;
  purchaseDate: string;
  salePrice: number;
  purchasePrice: number;
  contributionAmount: number;
  mtvCost: number;
  licensePlateCost: number;
  color: string;
  packageId?: string;
  packageName?: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

// İlk harfleri büyük yapan yardımcı fonksiyon
const capitalizeFirstLetters = (str: string): string => {
  if (!str) return '';
  
  return str
    .split(' ')
    .map(word => word.charAt(0).toLocaleUpperCase('tr-TR') + word.slice(1).toLocaleLowerCase('tr-TR'))
    .join(' ');
};

// Telefon numarasını formatlama fonksiyonu
const formatPhoneNumber = (phone: string): string => {
  // Tüm boşlukları ve özel karakterleri temizle
  let cleaned = phone.replace(/\D/g, '');
  
  // Eğer numara 0 ile başlıyorsa bu 0'ı kaldır
  if (cleaned.startsWith('0')) {
    cleaned = cleaned.substring(1);
  }
  
  // Telefon numarası 10 haneli standart Türkiye formatında olmalı
  if (cleaned.length >= 10) {
    // Sadece son 10 haneyi al
    cleaned = cleaned.substring(cleaned.length - 10);
    
    // Formatlama: 5XX XXX XX XX
    return '+90 ' + 
           cleaned.substring(0, 3) + ' ' + 
           cleaned.substring(3, 6) + ' ' + 
           cleaned.substring(6, 8) + ' ' + 
           cleaned.substring(8, 10);
  }
  
  // Eğer numara 10 haneden az ise olduğu gibi döndür
  return phone;
};

// Sayı formatlama fonksiyonu (binlik ayırıcı ile)
const formatNumber = (value: number | string): string => {
  if (value === '' || value === 0) return '';
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(numValue)) return '';
  return numValue.toLocaleString('tr-TR');
};

// Formatlanmış sayıyı parse etme fonksiyonu
const parseFormattedNumber = (value: string): number => {
  if (!value || value.trim() === '') return 0;
  // Binlik ayırıcıları kaldır ve sayıya çevir
  const cleanedValue = value.replace(/\./g, '').replace(/,/g, '.');
  return parseFloat(cleanedValue) || 0;
};

export default function CustomersPage() {
  const { user, loading: authLoading, logout } = useAuth();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isSaleModalOpen, setIsSaleModalOpen] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState<Customer | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tcNo: '',
    birthDate: '',
    occupation: '',
    address: '',
    cityId: 0,
    districtId: 0,
  });
  const [saleFormData, setSaleFormData] = useState({
    model: '',
    chassisNo: '',
    engineNo: '',
    purchaseDate: '',
    salePrice: '',
    purchasePrice: '',
    contributionAmount: '',
    mtvCost: '',
    licensePlateCost: '',
    color: '',
    saleType: '',
    packageId: '',
    otvRate: '',
    kdvRate: '',
    extraAmount: '',
  });
  const [availableDistricts, setAvailableDistricts] = useState<District[]>([]);
  const [sortedCities, setSortedCities] = useState<City[]>([]);
  
  // Marka, model ve paket state'leri
  const [brands, setBrands] = useState<any[]>([]);
  const [authorizedBrands, setAuthorizedBrands] = useState<any[]>([]);
  const [selectedBrandId, setSelectedBrandId] = useState<string>('');
  const [selectedModelId, setSelectedModelId] = useState<string>('');
  const [models, setModels] = useState<any[]>([]);
  const [packages, setPackages] = useState<any[]>([]);
  
  // Müşteri verileri
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [transferLoading, setTransferLoading] = useState<string | null>(null);

  // API'den müşteri verilerini yükleme - useCallback ile optimize edildi
  const loadCustomers = useCallback(async (tcNoSearch?: string) => {
    try {
      setLoading(true);
      const url = tcNoSearch ? `/api/customers?tcNoSearch=${encodeURIComponent(tcNoSearch)}` : '/api/customers';
      const response = await fetch(url);
      
      if (response.ok) {
        const data = await response.json();
        setCustomers(data);
      } else {
        console.error('Müşteriler yüklenirken hata oluştu:', response.statusText);
      }
    } catch (error) {
      console.error('Müşteri verileri yüklenirken hata oluştu:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCustomers();
    // Sıralanmış şehirleri ayarla
    setSortedCities(getSortedCities());
  }, []);

  // TC Kimlik No ile arama - useCallback ile optimize edildi
  const handleSearch = useCallback(async () => {
    if (searchTerm.trim()) {
      await loadCustomers(searchTerm.trim());
    } else {
      await loadCustomers();
    }
  }, [searchTerm, loadCustomers]);

  // Arama inputu değiştiğinde - useCallback ile optimize edildi
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  // Enter tuşuna basıldığında arama yap - useCallback ile optimize edildi
  const handleSearchKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }, [handleSearch]);

  // Müşteri devralma fonksiyonu - useCallback ile optimize edildi
  const handleTransferCustomer = useCallback(async (customerId: string) => {
    try {
      setTransferLoading(customerId);
      const response = await fetch('/api/customers/transfer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ customerId }),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Müşteri başarıyla devralındı!');
        // Müşteri listesini yenile
        if (searchTerm.trim()) {
          await loadCustomers(searchTerm.trim());
        } else {
          await loadCustomers();
        }
      } else {
        const error = await response.json();
        alert(error.error || 'Müşteri devralınırken bir hata oluştu');
      }
    } catch (error) {
      console.error('Müşteri devralma hatası:', error);
      alert('Müşteri devralınırken bir hata oluştu');
    } finally {
      setTransferLoading(null);
    }
  }, [searchTerm, loadCustomers]);

  // Form verilerini güncelleme işlevi - useCallback ile optimize edildi
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Telefon numarası için özel işlem
    if (name === 'phone') {
      // Sadece rakamları al
      const digits = value.replace(/\D/g, '');
      
      // Otomatik formatla (5XX XXX XX XX)
      let formattedValue = digits;
      if (digits.length > 0) {
        formattedValue = '';
        for (let i = 0; i < digits.length && i < 10; i++) {
          // Boşluk ekle (3, 6, 8. rakamlardan sonra)
          if (i === 3 || i === 6 || i === 8) {
            formattedValue += ' ';
          }
          formattedValue += digits[i];
        }
      }
      
      setFormData({
        ...formData,
        [name]: formattedValue,
      });
    } else if (name === 'cityId') {
      const cityId = parseInt(value);
      setFormData({
        ...formData,
        cityId: cityId,
        districtId: 0, // Şehir değiştiğinde ilçeyi sıfırla
      });
      
      // Seçilen şehire ait ilçeleri getir
      if (cityId > 0) {
        setAvailableDistricts(getSortedDistricts(cityId));
      } else {
        setAvailableDistricts([]);
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: name === 'districtId' ? parseInt(value) : value,
      }));
    }
  }, [formData]);

  // Yeni müşteri ekleme işlevi - useCallback ile optimize edildi
  const handleAddCustomer = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Telefon numarasını +90 formatı ile kaydet
    const cleanedPhone = formData.phone.replace(/\s+/g, '');
    let formattedPhone = cleanedPhone;
    
    if (cleanedPhone.startsWith('0')) {
      formattedPhone = cleanedPhone.substring(1);
    }
    
    if (!formattedPhone.startsWith('+90')) {
      formattedPhone = '+90' + formattedPhone;
    }
    
    const customerData = {
      name: capitalizeFirstLetters(formData.name),
      email: formData.email.toLocaleLowerCase('tr-TR'),
      phone: formattedPhone,
      tcNo: formData.tcNo,
      birthDate: formData.birthDate,
      occupation: capitalizeFirstLetters(formData.occupation),
      address: capitalizeFirstLetters(formData.address),
      cityId: formData.cityId || undefined,
      districtId: formData.districtId || undefined,
    };
    
    try {
      // Önce CSRF token'ı al
      const csrfResponse = await fetch('/api/csrf-token');
      if (!csrfResponse.ok) {
        throw new Error('CSRF token alınamadı');
      }
      const { csrfToken } = await csrfResponse.json();
      
      const response = await fetch('/api/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-csrf-token': csrfToken
        },
        body: JSON.stringify(customerData),
      });
      
      if (response.ok) {
        // Müşteri başarıyla eklendi, listeyi yenile
        await loadCustomers();
        
        // Modalı kapat ve formu sıfırla
        setIsModalOpen(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          tcNo: '',
          birthDate: '',
          occupation: '',
          address: '',
          cityId: 0,
          districtId: 0,
        });
        setAvailableDistricts([]);
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Müşteri eklenirken bir hata oluştu');
      }
    } catch (error) {
      console.error('Müşteri ekleme hatası:', error);
      alert('Müşteri eklenirken bir hata oluştu');
    }
  }, [formData, loadCustomers]);

  // Müşteri düzenlemek için modalı açma işlevi
  const openEditModal = (customer: Customer) => {
    setCurrentCustomer(customer);
    
    // Telefon numarasından +90 kısmını çıkar
    let phoneWithoutPrefix = customer.phone;
    if (phoneWithoutPrefix.startsWith('+90')) {
      phoneWithoutPrefix = phoneWithoutPrefix.substring(3);
    }
    
    // Telefonu formatla
    const formattedPhone = formatPhoneNumber(phoneWithoutPrefix);
    
    // İlçeleri yükle
    if (customer.cityId) {
      setAvailableDistricts(getSortedDistricts(customer.cityId));
    }
    
    setFormData({
      name: customer.name,
      email: customer.email,
      phone: formattedPhone,
      tcNo: customer.tcNo || '',
      birthDate: customer.birthDate || '',
      occupation: customer.occupation || '',
      address: customer.address || '',
      cityId: customer.cityId || 0,
      districtId: customer.districtId || 0,
    });
    
    setIsEditModalOpen(true);
  };

  // Düzenleme modalını kapatma işlevi
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setCurrentCustomer(null);
  };

  // Müşteri güncelleme işlevi
  const handleUpdateCustomer = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentCustomer) return;
    
    // Telefon numarasını +90 formatı ile kaydet
    const cleanedPhone = formData.phone.replace(/\s+/g, '');
    let formattedPhone = cleanedPhone;
    
    if (cleanedPhone.startsWith('0')) {
      formattedPhone = cleanedPhone.substring(1);
    }
    
    if (!formattedPhone.startsWith('+90')) {
      formattedPhone = '+90' + formattedPhone;
    }
    
    const customerData = {
      name: capitalizeFirstLetters(formData.name),
      email: formData.email.toLocaleLowerCase('tr-TR'),
      phone: formattedPhone,
      tcNo: formData.tcNo,
      birthDate: formData.birthDate,
      occupation: capitalizeFirstLetters(formData.occupation),
      address: capitalizeFirstLetters(formData.address),
      cityId: formData.cityId || undefined,
      districtId: formData.districtId || undefined,
    };

    try {
      const response = await fetch(`/api/customers/${currentCustomer.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerData),
      });
      
      if (response.ok) {
        // Müşteri başarıyla güncellendi, listeyi yenile
        await loadCustomers();
        closeEditModal();
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Müşteri güncellenirken bir hata oluştu');
      }
    } catch (error) {
      console.error('Müşteri güncelleme hatası:', error);
      alert('Müşteri güncellenirken bir hata oluştu');
    }
  };

  // Müşteri silme işlevi
  const handleDeleteCustomer = async (customerId: string) => {
    if (window.confirm('Bu müşteriyi silmek istediğinize emin misiniz?')) {
      try {
        const response = await fetch(`/api/customers/${customerId}`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          // Müşteri başarıyla silindi, listeyi yenile
          await loadCustomers();
        } else {
          const errorData = await response.json();
          alert(errorData.error || 'Müşteri silinirken bir hata oluştu');
        }
      } catch (error) {
        console.error('Müşteri silme hatası:', error);
        alert('Müşteri silinirken bir hata oluştu');
      }
    }
  };

  // Modalı açma/kapama işlevleri
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Satış ekleme modalını aç
  const openSaleModal = (customer: Customer) => {
    setCurrentCustomer(customer);
    setSaleFormData({
      model: '',
      chassisNo: '',
      engineNo: '',
      purchaseDate: new Date().toISOString().split('T')[0],
      salePrice: '',
      purchasePrice: '',
      contributionAmount: '',
      mtvCost: '',
      licensePlateCost: '',
      color: '',
      saleType: '',
      packageId: '',
      otvRate: '',
      kdvRate: '',
      extraAmount: '',
    });
    setSelectedModelId('');
    setPackages([]);
    setIsSaleModalOpen(true);
  };
  
  // Satış ekleme modalını kapat
  const closeSaleModal = () => {
    setIsSaleModalOpen(false);
    setCurrentCustomer(null);
    setSaleFormData({
      model: '',
      chassisNo: '',
      engineNo: '',
      purchaseDate: '',
      salePrice: '',
      purchasePrice: '',
      contributionAmount: '',
      mtvCost: '',
      licensePlateCost: '',
      color: '',
      saleType: '',
      packageId: '',
      otvRate: '',
      kdvRate: '',
      extraAmount: '',
    });
  };
  
  // Satış formu için input değişikliklerini yakala
  const handleSaleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'model') {
      setSelectedModelId(value);
      
      const selectedBrand = brands.find(brand => brand.id === selectedBrandId);
      if (selectedBrand) {
        const selectedModel = selectedBrand.models.find((model: any) => model.id === value);
        if (selectedModel) {
          setPackages(selectedModel.packages || []);
          setSaleFormData({
            ...saleFormData,
            model: selectedModel.name,
            packageId: ''
          });
        }
      }
    } else if (name === 'packageId') {
      // Pakete ait MTV ve plaka masraflarını otomatik doldurma
      const selectedModel = models.find((model: any) => model.id === selectedModelId);
      if (selectedModel && value) {
        const selectedPackage = selectedModel.packages?.find((pkg: any) => pkg.id === value);
        if (selectedPackage) {
          // MTV ve plaka masraflarını paketten al
          setSaleFormData({
            ...saleFormData,
            packageId: value,
            mtvCost: selectedPackage.mtvAmount ? selectedPackage.mtvAmount.toString() : '',
            licensePlateCost: selectedPackage.plakaMasrafi ? selectedPackage.plakaMasrafi.toString() : ''
          });
          return;
        }
      }
      setSaleFormData({
        ...saleFormData,
        [name]: value,
      });
    } else {
      // Sayısal alanlar için parseFormattedNumber kullan
      const numericalFields = ['salePrice', 'purchasePrice', 'contributionAmount', 'mtvCost', 'licensePlateCost'];
      const processedValue = numericalFields.includes(name) ? parseFormattedNumber(value) : value;
      
      setSaleFormData({
        ...saleFormData,
        [name]: processedValue,
      });
    }
  };
  
  // Yeni satış ekle
  const handleAddSale = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentCustomer) return;
    
    // Sayısal değerleri dönüştür
    const salePrice = parseFloat(saleFormData.salePrice);
    const purchasePrice = parseFloat(saleFormData.purchasePrice);
    const contributionAmount = saleFormData.contributionAmount ? parseFloat(saleFormData.contributionAmount) : 0;
    const mtvCost = parseFloat(saleFormData.mtvCost);
    const licensePlateCost = parseFloat(saleFormData.licensePlateCost);
    
    // Paket adını al (eğer paket seçilmişse)
    let packageName = '';
    if (saleFormData.packageId) {
      const selectedModel = models.find((model: any) => model.id === selectedModelId);
      if (selectedModel) {
        const selectedPackage = selectedModel.packages?.find((pkg: any) => pkg.id === saleFormData.packageId);
        if (selectedPackage) {
          packageName = selectedPackage.name;
        }
      }
    }
    
    try {
      console.log('currentCustomer:', currentCustomer);
      console.log('currentCustomer full object:', JSON.stringify(currentCustomer, null, 2));
      
      if (!currentCustomer) {
        alert('Müşteri seçilmedi!');
        return;
      }
      
      const requestData = {
        customerId: currentCustomer.id,
        customerType: 'individual',
        model: saleFormData.model,
        chassisNo: saleFormData.chassisNo,
        engineNo: saleFormData.engineNo,
        purchaseDate: saleFormData.purchaseDate,
        salePrice,
        purchasePrice,
        contributionAmount,
        mtvCost,
        licensePlateCost,
        color: saleFormData.color,
        packageId: saleFormData.packageId || undefined,
        packageName: packageName || undefined,
      };
      
      console.log('Gönderilecek veri:', requestData);
      
      // Önce CSRF token'ı al
      const csrfResponse = await fetch('/api/csrf-token');
      if (!csrfResponse.ok) {
        throw new Error('CSRF token alınamadı');
      }
      const { csrfToken } = await csrfResponse.json();
      
      // API'ye satış kaydını gönder
      const response = await fetch('/api/sales', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-csrf-token': csrfToken
        },
        body: JSON.stringify(requestData),
      });
      
      if (response.ok) {
        // Modalı kapat ve formu sıfırla
        closeSaleModal();
        
        // Başarılı mesajı göster
        alert(`${currentCustomer.name} için satış kaydı başarıyla oluşturuldu.`);
      } else {
        const errorData = await response.json();
        alert(`Satış kaydı oluşturulurken hata oluştu: ${errorData.error || 'Bilinmeyen hata'}`);
      }
    } catch (error) {
      console.error('Satış kaydı oluşturulurken hata oluştu:', error);
      alert('Satış kaydı oluşturulurken hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  // Kullanıcı oturum açmamışsa login sayfasına yönlendir - useEffect kaldırıldı
  // useEffect(() => {
  //   console.log('Auth useEffect triggered:', { loading, user: !!user });
  //   if (!loading && !user) {
  //     console.log('Redirecting to login page');
  //     router.replace('/');
  //   }
  // }, [user, loading, router]);

  // Kullanıcının yetkili markalarını ve tüm markaları yüklemek için useEffect
  useEffect(() => {
    const fetchUserBrandsAndModels = async () => {
      try {
        // Kullanıcının yetkili markalarını al
        const userResponse = await fetch('/api/users/me');
        if (userResponse.ok) {
          const userData = await userResponse.json();
          setAuthorizedBrands(userData.authorizedBrands || []);
          
          // Yetkili markalar varsa ilk markayı seç
          if (userData.authorizedBrands && userData.authorizedBrands.length > 0) {
            const firstBrand = userData.authorizedBrands[0];
            setSelectedBrandId(firstBrand.id);
            
            // İlk markanın modellerini yükle
            const brandResponse = await fetch('/api/brands');
            if (brandResponse.ok) {
              const allBrands = await brandResponse.json();
              setBrands(allBrands);
              const selectedBrand = allBrands.find((brand: any) => brand.id === firstBrand.id);
              if (selectedBrand) {
                setModels(selectedBrand.models || []);
              }
            }
          }
        } else {
          console.error('Kullanıcı bilgileri yüklenemedi');
        }
      } catch (error) {
        console.error('Kullanıcı markaları getirilirken hata:', error);
      }
    };
    
    if (user) {
      fetchUserBrandsAndModels();
    }
  }, [user]);

  // Yükleme durumunda yükleniyor göster
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        <p className="ml-3 text-lg">Yükleniyor...</p>
      </div>
    );
  }

  // Kullanıcı yoksa boş sayfa döndür (useEffect zaten yönlendirme yapacak)
  if (!user) {
    return null;
  }

  return (
    <DashboardLayout username={user.name} onLogout={logout}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Müşteriler</h1>
          <p className="mt-1 text-sm text-gray-500">Tüm müşteri kayıtları</p>
        </div>
        
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="flex justify-between mb-4">
                <div className="flex space-x-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="TC Kimlik No ile ara..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                      onKeyPress={handleSearchKeyPress}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md p-2 pl-10 text-gray-800"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleSearch}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Ara
                  </button>
                  {searchTerm && (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchTerm('');
                        loadCustomers();
                      }}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Temizle
                    </button>
                  )}
                </div>
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Yeni Müşteri
                </button>
              </div>
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Müşteri
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        İletişim
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Meslek
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Düzenle</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {customers.map((customer) => (
                      <tr key={customer.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                <span className="text-indigo-600 font-medium">
                                  {customer.name.charAt(0)}
                                </span>
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                              {customer.tcNo && (
                                <div className="text-xs text-gray-500">TC: {customer.tcNo}</div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{customer.email}</div>
                          <div className="text-sm text-gray-500">{customer.phone}</div>
                          {customer.cityId && customer.districtId && (
                            <div className="text-xs text-gray-500 mt-1">
                              {getCityNameById(customer.cityId)}, {getDistrictNameById(customer.cityId, customer.districtId)}
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{customer.occupation || '-'}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            {customer.createdBy === user?.id ? (
                              // Kendi müşterisi - normal butonlar
                              <>
                                <button 
                                  className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200"
                                  onClick={() => openEditModal(customer)}
                                >
                                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                  </svg>
                                  Düzenle
                                </button>
                                <button 
                                  className={`inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-200 ${
                                    authorizedBrands.length > 0 
                                      ? 'text-white bg-green-600 hover:bg-green-700' 
                                      : 'text-gray-400 bg-gray-200 cursor-not-allowed'
                                  }`}
                                  onClick={() => authorizedBrands.length > 0 && openSaleModal(customer)}
                                  disabled={authorizedBrands.length === 0}
                                  title={authorizedBrands.length === 0 ? 'Satış yapabilmek için en az bir markaya yetkiniz olmalıdır' : 'Satış Ekle'}
                                >
                                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                  </svg>
                                  Satış Ekle
                                </button>
                                <button 
                                  className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200"
                                  onClick={() => handleDeleteCustomer(customer.id)}
                                >
                                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                  Sil
                                </button>
                              </>
                            ) : (
                              // Başka danışmanın müşterisi - devralma butonu
                              <>
                                <button 
                                  className="text-orange-600 hover:text-orange-900 bg-orange-50 px-3 py-2 rounded-md flex items-center font-medium"
                                  onClick={() => handleTransferCustomer(customer.id)}
                                  disabled={transferLoading === customer.id}
                                >
                                  {transferLoading === customer.id ? (
                                    <svg className="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                      <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                  ) : (
                                    <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                    </svg>
                                  )}
                                  {transferLoading === customer.id ? 'Devralınıyor...' : 'Müşteriyi Devral'}
                                </button>
                                <div className="text-xs text-gray-500 mt-1">
                                  Başka danışman tarafından kaydedildi
                                </div>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Yeni Müşteri Ekleme Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
              <div className="bg-white px-6 pt-6 pb-6 sm:p-8">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-12 sm:w-12">
                    <svg className="h-7 w-7 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-5 sm:text-left w-full">
                    <h3 className="text-xl leading-6 font-medium text-gray-900 mb-4">Yeni Müşteri Ekle</h3>
                    <div className="mt-4">
                      <form onSubmit={handleAddCustomer}>
                        <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                              Ad Soyad <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 px-3 text-gray-800"
                                value={formData.name}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="tcNo" className="block text-sm font-medium text-gray-700">
                              TC Kimlik No <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                name="tcNo"
                                id="tcNo"
                                required
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 px-3 text-gray-800"
                                value={formData.tcNo}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                              E-posta
                            </label>
                            <div className="mt-2">
                              <input
                                type="email"
                                name="email"
                                id="email"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 px-3 text-gray-800"
                                value={formData.email}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                              Telefon <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2 relative">
                              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none bg-gray-100 rounded-l-md px-2 text-gray-500 border-r border-gray-300">
                                +90
                              </div>
                              <input
                                type="tel"
                                name="phone"
                                id="phone"
                                required
                                placeholder="5XX XXX XX XX"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 pl-16 text-gray-800"
                                value={formData.phone}
                                onChange={handleInputChange}
                                maxLength={14}
                              />
                            </div>
                            <p className="mt-1 text-xs text-gray-500">Örnek: 532 123 45 67 (sadece rakamları girebilirsiniz)</p>
                          </div>

                          <div>
                            <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">
                              Doğum Tarihi <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                type="date"
                                name="birthDate"
                                id="birthDate"
                                required
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 px-3 text-gray-800"
                                value={formData.birthDate}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
                              Meslek
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                name="occupation"
                                id="occupation"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 px-3 text-gray-800"
                                value={formData.occupation}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="cityId" className="block text-sm font-medium text-gray-700">
                              İl <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <select
                                name="cityId"
                                id="cityId"
                                required
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                value={formData.cityId}
                                onChange={handleInputChange}
                              >
                                <option value={0}>İl Seçiniz</option>
                                {sortedCities.map(city => (
                                  <option key={city.id} value={city.id}>{city.name}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="districtId" className="block text-sm font-medium text-gray-700">
                              İlçe <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <select
                                name="districtId"
                                id="districtId"
                                required
                                disabled={formData.cityId === 0}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 px-3 text-gray-800 disabled:bg-gray-100 disabled:text-gray-500"
                                value={formData.districtId}
                                onChange={handleInputChange}
                              >
                                <option value={0}>İlçe Seçiniz</option>
                                {availableDistricts.map(district => (
                                  <option key={district.id} value={district.id}>{district.name}</option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="sm:col-span-2">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                              Açık Adres <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <textarea
                                name="address"
                                id="address"
                                rows={4}
                                required
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                value={formData.address}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 sm:flex sm:flex-row-reverse">
                          <button
                            type="submit"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 py-3 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Kaydet
                          </button>
                          <button
                            type="button"
                            onClick={closeModal}
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-400 shadow-sm px-6 py-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                          >
                            İptal
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Müşteri Düzenleme Modal */}
      {isEditModalOpen && currentCustomer && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
              <div className="bg-white px-6 pt-6 pb-6 sm:p-8">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-12 sm:w-12">
                    <svg className="h-7 w-7 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-5 sm:text-left w-full">
                    <h3 className="text-xl leading-6 font-medium text-gray-900 mb-4">Müşteri Düzenle</h3>
                    <div className="mt-4">
                      <form onSubmit={handleUpdateCustomer}>
                        <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                          <div>
                            <label htmlFor="edit-name" className="block text-sm font-medium text-gray-700">
                              Ad Soyad <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                name="name"
                                id="edit-name"
                                required
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                value={formData.name}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="edit-tcNo" className="block text-sm font-medium text-gray-700">
                              TC Kimlik No <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                name="tcNo"
                                id="edit-tcNo"
                                required
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                value={formData.tcNo}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="edit-email" className="block text-sm font-medium text-gray-700">
                              E-posta
                            </label>
                            <div className="mt-2">
                              <input
                                type="email"
                                name="email"
                                id="edit-email"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                value={formData.email}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="edit-phone" className="block text-sm font-medium text-gray-700">
                              Telefon <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2 relative">
                              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none bg-gray-100 rounded-l-md px-2 text-gray-500 border-r border-gray-300">
                                +90
                              </div>
                              <input
                                type="tel"
                                name="phone"
                                id="edit-phone"
                                required
                                placeholder="5XX XXX XX XX"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 pl-16 text-gray-800"
                                value={formData.phone}
                                onChange={handleInputChange}
                                maxLength={14}
                              />
                            </div>
                            <p className="mt-1 text-xs text-gray-500">Örnek: 532 123 45 67 (sadece rakamları girebilirsiniz)</p>
                          </div>

                          <div>
                            <label htmlFor="edit-birthDate" className="block text-sm font-medium text-gray-700">
                              Doğum Tarihi <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                type="date"
                                name="birthDate"
                                id="edit-birthDate"
                                required
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                value={formData.birthDate}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="edit-occupation" className="block text-sm font-medium text-gray-700">
                              Meslek
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                name="occupation"
                                id="edit-occupation"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                value={formData.occupation}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="edit-cityId" className="block text-sm font-medium text-gray-700">
                              İl <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <select
                                name="cityId"
                                id="edit-cityId"
                                required
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                value={formData.cityId}
                                onChange={handleInputChange}
                              >
                                <option value={0}>İl Seçiniz</option>
                                {sortedCities.map(city => (
                                  <option key={city.id} value={city.id}>{city.name}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="edit-districtId" className="block text-sm font-medium text-gray-700">
                              İlçe <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <select
                                name="districtId"
                                id="edit-districtId"
                                required
                                disabled={formData.cityId === 0}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 px-3 text-gray-800 disabled:bg-gray-100 disabled:text-gray-500"
                                value={formData.districtId}
                                onChange={handleInputChange}
                              >
                                <option value={0}>İlçe Seçiniz</option>
                                {availableDistricts.map(district => (
                                  <option key={district.id} value={district.id}>{district.name}</option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="sm:col-span-2">
                            <label htmlFor="edit-address" className="block text-sm font-medium text-gray-700">
                              Açık Adres <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <textarea
                                name="address"
                                id="edit-address"
                                rows={4}
                                required
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                value={formData.address}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 sm:flex sm:flex-row-reverse">
                          <button
                            type="submit"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 py-3 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Kaydet
                          </button>
                          <button
                            type="button"
                            onClick={closeEditModal}
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-400 shadow-sm px-6 py-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                          >
                            İptal
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Satış Ekleme Modal */}
      {isSaleModalOpen && currentCustomer && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
              <div className="bg-white px-6 pt-6 pb-6 sm:p-8">
                <div className="sm:flex sm:items-start mb-4">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-12 sm:w-12">
                    <svg className="h-7 w-7 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Satış Ekle
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {currentCustomer.name} için yeni satış ekleyin.
                      </p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleAddSale}>
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    {/* Satış Tipi */}
                    <div className="sm:col-span-6">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Satış Tipi <span className="text-red-500">*</span>
                      </label>
                      <div className="flex space-x-6">
                        <div className="flex items-center">
                          <input
                            id="perakende"
                            name="saleType"
                            type="radio"
                            value="perakende"
                            checked={saleFormData.saleType === 'perakende'}
                            onChange={(e) => setSaleFormData({...saleFormData, saleType: e.target.value})}
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            required
                          />
                          <label htmlFor="perakende" className="ml-2 block text-sm text-gray-900">
                            Perakende
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filo"
                            name="saleType"
                            type="radio"
                            value="filo"
                            checked={saleFormData.saleType === 'filo'}
                            onChange={(e) => setSaleFormData({...saleFormData, saleType: e.target.value})}
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label htmlFor="filo" className="ml-2 block text-sm text-gray-900">
                            Filo
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="otv-muaf"
                            name="saleType"
                            type="radio"
                            value="otv-muaf"
                            checked={saleFormData.saleType === 'otv-muaf'}
                            onChange={(e) => setSaleFormData({...saleFormData, saleType: e.target.value})}
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label htmlFor="otv-muaf" className="ml-2 block text-sm text-gray-900">
                            ÖTV Muaf
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Araç Marka (yetkili markalar) */}
                    <div className="sm:col-span-2">
                      <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                        Marka <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1">
                        <select
                          id="brand"
                          name="brand"
                          value={selectedBrandId}
                          onChange={(e) => {
                            const brandId = e.target.value;
                            setSelectedBrandId(brandId);
                            
                            // Seçili markaya ait modelleri getir
                            const brand = brands.find(b => b.id === brandId);
                            if (brand) {
                              setModels(brand.models || []);
                              setSelectedModelId('');
                              setPackages([]);
                              setSaleFormData({
                                ...saleFormData,
                                model: '',
                                packageId: ''
                              });
                            }
                          }}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 px-3"
                          required
                        >
                          <option value="">Marka Seçin</option>
                          {authorizedBrands.length > 0 ? (
                            authorizedBrands.map((brand) => (
                              <option key={brand.id} value={brand.id}>{brand.name}</option>
                            ))
                          ) : (
                            <option value="" disabled>Yetkili marka bulunmuyor</option>
                          )}
                        </select>
                      </div>
                      {authorizedBrands.length === 0 && (
                        <p className="mt-1 text-xs text-red-500">
                          Satış yapabilmek için en az bir markaya yetkiniz olmalıdır.
                        </p>
                      )}
                    </div>

                    {/* Araç Model */}
                    <div className="sm:col-span-2">
                      <label htmlFor="model" className="block text-sm font-medium text-gray-700">
                        Model <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1">
                        <select
                          id="model"
                          name="model"
                          value={selectedModelId}
                          onChange={handleSaleInputChange}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
                          required
                        >
                          <option value="">Model Seçin</option>
                          {models.map((model: any) => (
                            <option key={model.id} value={model.id}>{model.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    {/* Araç Paketi */}
                    <div className="sm:col-span-2">
                      <label htmlFor="packageId" className="block text-sm font-medium text-gray-700">
                        Paket <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1">
                        <select
                          id="packageId"
                          name="packageId"
                          value={saleFormData.packageId}
                          onChange={handleSaleInputChange}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
                          required
                        >
                          <option value="">Paket Seçin</option>
                          {packages.map((pkg: any) => (
                            <option key={pkg.id} value={pkg.id}>{pkg.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Şase No */}
                    <div className="sm:col-span-2">
                      <label htmlFor="chassisNo" className="block text-sm font-medium text-gray-700">
                        Şase No <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="chassisNo"
                          id="chassisNo"
                          required
                          value={saleFormData.chassisNo}
                          onChange={handleSaleInputChange}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                        />
                      </div>
                    </div>

                    {/* Motor No */}
                    <div className="sm:col-span-2">
                      <label htmlFor="engineNo" className="block text-sm font-medium text-gray-700">
                        Motor No <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="engineNo"
                          id="engineNo"
                          required
                          value={saleFormData.engineNo}
                          onChange={handleSaleInputChange}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                        />
                      </div>
                    </div>

                    {/* Renk */}
                    <div className="sm:col-span-2">
                      <label htmlFor="color" className="block text-sm font-medium text-gray-700">
                        Renk <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="color"
                          id="color"
                          required
                          value={saleFormData.color}
                          onChange={handleSaleInputChange}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                        />
                      </div>
                    </div>

                    {/* Alış Tarihi */}
                    <div className="sm:col-span-2">
                      <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-700">
                        Alış Tarihi
                      </label>
                      <div className="mt-1">
                        <input
                          type="date"
                          name="purchaseDate"
                          id="purchaseDate"
                          value={saleFormData.purchaseDate}
                          onChange={handleSaleInputChange}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                        />
                      </div>
                    </div>

                    {/* Araç Satış Fiyatı */}
                    <div className="sm:col-span-2">
                      <label htmlFor="salePrice" className="block text-sm font-medium text-gray-700">
                        Araç Satış Fiyatı (₺) <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="salePrice"
                          id="salePrice"
                          required
                          value={saleFormData.salePrice === '' || saleFormData.salePrice === '0' ? '' : formatNumber(parseFloat(saleFormData.salePrice.toString()) || 0)}
                          onChange={handleSaleInputChange}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                        />
                      </div>
                    </div>

                    {/* Ekstra Tutar */}
                    <div className="sm:col-span-2">
                      <label htmlFor="extraAmount" className="block text-sm font-medium text-gray-700">
                        Ekstra Tutar (₺)
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="extraAmount"
                          id="extraAmount"
                          value={saleFormData.extraAmount === '' || saleFormData.extraAmount === '0' ? '' : formatNumber(parseFloat(saleFormData.extraAmount.toString()) || 0)}
                          onChange={handleSaleInputChange}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                        />
                      </div>
                    </div>

                    {/* Alış Fiyatı */}
                    <div className="sm:col-span-1">
                      <label htmlFor="purchasePrice" className="block text-sm font-medium text-gray-700">
                        Alış Fiyatı (₺) <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="purchasePrice"
                          id="purchasePrice"
                          required
                          value={saleFormData.purchasePrice === '' || saleFormData.purchasePrice === '0' ? '' : formatNumber(parseFloat(saleFormData.purchasePrice.toString()) || 0)}
                          onChange={handleSaleInputChange}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                        />
                      </div>
                    </div>

                    {/* Katkı Tutarı */}
                    <div className="sm:col-span-1">
                      <label htmlFor="contributionAmount" className="block text-sm font-medium text-gray-700">
                        Katkı Tutarı (₺)
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="contributionAmount"
                          id="contributionAmount"
                          value={saleFormData.contributionAmount === '' || saleFormData.contributionAmount === '0' ? '' : formatNumber(parseFloat(saleFormData.contributionAmount.toString()) || 0)}
                          onChange={handleSaleInputChange}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                        />
                      </div>
                    </div>

                    {/* ÖTV Oranı */}
                    <div className="sm:col-span-1">
                      <label htmlFor="otvRate" className="block text-sm font-medium text-gray-700">
                        ÖTV Oranı (%)
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          name="otvRate"
                          id="otvRate"
                          min="0"
                          max="100"
                          step="0.01"
                          value={saleFormData.otvRate || ''}
                          onChange={handleSaleInputChange}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                        />
                      </div>
                    </div>

                    {/* KDV Oranı */}
                    <div className="sm:col-span-1">
                      <label htmlFor="kdvRate" className="block text-sm font-medium text-gray-700">
                        KDV Oranı (%)
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          name="kdvRate"
                          id="kdvRate"
                          min="0"
                          max="100"
                          step="0.01"
                          value={saleFormData.kdvRate || ''}
                          onChange={handleSaleInputChange}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                        />
                      </div>
                    </div>

                    {/* MTV */}
                    <div className="sm:col-span-3">
                      <label htmlFor="mtvCost" className="block text-sm font-medium text-gray-700">
                        MTV (₺) <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="mtvCost"
                          id="mtvCost"
                          required
                          readOnly
                          value={saleFormData.mtvCost === '' || saleFormData.mtvCost === '0' ? '' : formatNumber(parseFloat(saleFormData.mtvCost.toString()) || 0)}
                          onChange={handleSaleInputChange}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 px-3 text-gray-800 bg-gray-50"
                        />
                      </div>
                    </div>

                    {/* Plaka Masrafı */}
                    <div className="sm:col-span-3">
                      <label htmlFor="licensePlateCost" className="block text-sm font-medium text-gray-700">
                        Plaka Masrafı (₺) <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="licensePlateCost"
                          id="licensePlateCost"
                          required
                          readOnly
                          value={saleFormData.licensePlateCost === '' || saleFormData.licensePlateCost === '0' ? '' : formatNumber(parseFloat(saleFormData.licensePlateCost.toString()) || 0)}
                          onChange={handleSaleInputChange}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950 bg-gray-50"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 py-3 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Satışı Kaydet
                    </button>
                    <button
                      type="button"
                      onClick={closeSaleModal}
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-400 shadow-sm px-6 py-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                    >
                      İptal
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
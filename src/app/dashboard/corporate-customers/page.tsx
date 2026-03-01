'use client';

import React, { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';

// Lazy load heavy components
const DashboardLayout = dynamic(() => import('@/app/components/dashboard/DashboardLayout'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div></div>,
  ssr: false
});
import { turkishCities, getDistrictsByCity, getCityNameById, getDistrictNameById, getSortedCities, getSortedDistricts, City, District } from '@/lib/tr-cities';

// Kurumsal müşteri arayüzü
interface CorporateCustomer {
  id: string;
  name: string;
  taxNumber: string;
  taxOffice: string;
  email: string;
  phone: string;
  address: string;
  cityId: number;
  districtId: number;
  status: string;
  registerDate: string;
  authorizedPerson: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  lastPurchase?: string; // Son satış tarihi
  sales?: Sale[]; // Satış verileri eklendi
}

// Satış arayüzü
interface Sale {
  id: string;
  customerId: string;
  model: string;
  chassisNo: string;
  engineNo: string;
  color: string;
  purchaseDate: string;
  salePrice: number;
  purchasePrice: number;
  contributionAmount: number;
  mtvCost: number;
  licensePlateCost: number;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  packageId?: string; // Paket ID'si eklendi
  packageName?: string; // Paket adı eklendi
}

// Telefon numarası formatlama fonksiyonu
const formatPhoneNumber = (phone: string): string => {
  // Sadece rakamları al
  const cleaned = phone.replace(/\D/g, '');
  
  // Türkiye telefon numarası formatı: +90 (5XX) XXX XX XX
  if (cleaned.length === 11 && cleaned.startsWith('0')) {
    const withoutZero = cleaned.substring(1);
    return `+90 (${withoutZero.substring(0, 3)}) ${withoutZero.substring(3, 6)} ${withoutZero.substring(6, 8)} ${withoutZero.substring(8, 10)}`;
  } else if (cleaned.length === 10) {
    return `+90 (${cleaned.substring(0, 3)}) ${cleaned.substring(3, 6)} ${cleaned.substring(6, 8)} ${cleaned.substring(8, 10)}`;
  } else if (cleaned.length === 13 && cleaned.startsWith('90')) {
    const withoutCountryCode = cleaned.substring(2);
    return `+90 (${withoutCountryCode.substring(0, 3)}) ${withoutCountryCode.substring(3, 6)} ${withoutCountryCode.substring(6, 8)} ${withoutCountryCode.substring(8, 10)}`;
  }
  
  return phone; // Formatlanamayan numaraları olduğu gibi döndür
};

// Tarih formatlama fonksiyonu
const formatDateToTurkish = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('tr-TR');
};

// Türkçe metin formatlama fonksiyonu
const formatTurkishText = (text: string): string => {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => {
      if (word.length === 0) return word;
      const firstChar = word.charAt(0);
      const restOfWord = word.slice(1);
      return firstChar.toLocaleUpperCase('tr-TR') + restOfWord;
    })
    .join(' ');
};

// Sayı formatlama fonksiyonu
const formatNumber = (value: number | string): string => {
  if (value === '' || value === 0) return '';
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(numValue)) return '';
  return numValue.toLocaleString('tr-TR');
};

// Formatlanmış sayıyı parse etme fonksiyonu
const parseFormattedNumber = (value: string): number => {
  const cleanedValue = value.replace(/\./g, '').replace(',', '.');
  const parsed = parseFloat(cleanedValue);
  return isNaN(parsed) ? 0 : parsed;
};

export default function CorporateCustomersPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaleModalOpen, setIsSaleModalOpen] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState<CorporateCustomer | null>(null);
  const [corporateCustomers, setCorporateCustomers] = useState<CorporateCustomer[]>([]);
  const [sortedCities, setSortedCities] = useState<City[]>([]);
  const [availableDistricts, setAvailableDistricts] = useState<District[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    taxNumber: '',
    taxOffice: '',
    email: '',
    phone: '',
    address: '',
    cityId: 0,
    districtId: 0,
    authorizedPerson: '',
  });
  const [saleFormData, setSaleFormData] = useState({
    model: '',
    chassisNo: '',
    engineNo: '',
    color: '',
    saleType: '',
    purchaseDate: '',
    salePrice: '',
    purchasePrice: '',
    contributionAmount: '',
    mtvCost: '',
    licensePlateCost: '',
    packageId: '', // Paket ID'si eklendi
    otvRate: '',
    kdvRate: '',
    extraAmount: '',
  });
  const [editMode, setEditMode] = useState(false);
  const [editingCustomerId, setEditingCustomerId] = useState<string | null>(null);
  
  // Marka ve model state'leri
  const [brands, setBrands] = useState<any[]>([]);
  const [authorizedBrands, setAuthorizedBrands] = useState<any[]>([]);
  const [selectedBrandId, setSelectedBrandId] = useState<string>('');
  const [selectedModelId, setSelectedModelId] = useState<string>('');
  const [models, setModels] = useState<any[]>([]);
  const [packages, setPackages] = useState<any[]>([]);
  
  // Arama state'leri
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<CorporateCustomer[]>([]);
  const [searchMessage, setSearchMessage] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isCustomerSearchModalOpen, setIsCustomerSearchModalOpen] = useState(false);
  const [transferLoading, setTransferLoading] = useState<string | null>(null);
  
  // Kurumsal müşterileri yükleme fonksiyonu
  const loadCorporateCustomers = async () => {
    try {
      const response = await fetch('/api/corporate-customers', {
        headers: {
          'x-user-id': user?.id?.toString() || '',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setCorporateCustomers(data);
      }
    } catch (error) {
      console.error('Kurumsal müşteriler yüklenirken hata:', error);
    }
  };
  
  // Müşteri arama fonksiyonu
  const handleCustomerSearch = async () => {
    if (!searchTerm.trim()) {
      setSearchMessage('Lütfen vergi numarası giriniz.');
      return;
    }
    
    setIsSearching(true);
    setSearchMessage('');
    setSearchResults([]);
    
    try {
      const response = await fetch(`/api/corporate-customers?search=${encodeURIComponent(searchTerm.trim())}`, {
        headers: {
          'x-user-id': user?.id?.toString() || '',
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.length > 0) {
          setSearchResults(data);
          setSearchMessage(`${data.length} kurumsal müşteri bulundu.`);
        } else {
          setSearchMessage('Bu vergi numarası ile kurumsal müşteri bulunamadı.');
        }
      } else {
        setSearchMessage('Arama sırasında bir hata oluştu.');
      }
    } catch (error) {
      console.error('Arama hatası:', error);
      setSearchMessage('Arama sırasında bir hata oluştu.');
    } finally {
      setIsSearching(false);
    }
  };
  
  // Müşteri devralma fonksiyonu
  const handleTransferCustomer = async (customerId: string) => {
    if (!user?.id) {
      alert('Kullanıcı bilgisi bulunamadı.');
      return;
    }
    
    setTransferLoading(customerId);
    
    try {
      const response = await fetch('/api/corporate-customers/transfer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': user.id.toString(),
        },
        body: JSON.stringify({ customerId }),
      });
      
      if (response.ok) {
        setSearchMessage('Kurumsal müşteri başarıyla devralındı!');
        // Arama sonuçlarını güncelle
        setSearchResults(prev => 
          prev.map(customer => 
            customer.id === customerId 
              ? { ...customer, createdBy: user.id.toString() }
              : customer
          )
        );
        // Ana listeyi yeniden yükle
        await loadCorporateCustomers();
      } else {
        const errorData = await response.json();
        setSearchMessage(`Hata: ${errorData.error || 'Kurumsal müşteri devralınamadı.'}`);
      }
    } catch (error) {
      console.error('Devralma hatası:', error);
      setSearchMessage('Devralma sırasında bir hata oluştu.');
    } finally {
      setTransferLoading(null);
    }
  };
  
  // Arama temizleme fonksiyonu
  const handleClearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setSearchMessage('');
  };
  
  // Arama modalını açma fonksiyonu
  const openCustomerSearchModal = () => {
    setIsCustomerSearchModalOpen(true);
    setSearchTerm('');
    setSearchResults([]);
    setSearchMessage('');
  };
  
  // Arama modalını kapatma fonksiyonu
  const closeCustomerSearchModal = () => {
    setIsCustomerSearchModalOpen(false);
    setSearchTerm('');
    setSearchResults([]);
    setSearchMessage('');
  };
  
  // Müşteri silme fonksiyonu
  const handleDeleteCustomer = async (customerId: string) => {
    if (!confirm('Bu kurumsal müşteriyi silmek istediğinizden emin misiniz?')) {
      return;
    }
    
    try {
      const response = await fetch(`/api/corporate-customers/${customerId}`, {
        method: 'DELETE',
        headers: {
          'x-user-id': user?.id?.toString() || '',
        },
      });
      
      if (response.ok) {
        await loadCorporateCustomers();
        alert('Kurumsal müşteri başarıyla silindi.');
      } else {
        alert('Kurumsal müşteri silinirken bir hata oluştu.');
      }
    } catch (error) {
      console.error('Silme hatası:', error);
      alert('Kurumsal müşteri silinirken bir hata oluştu.');
    }
  };

  useEffect(() => {
    if (user) {
      loadCorporateCustomers();
      fetchUserBrandsAndModels();
    }
  }, [user]);

  // Kullanıcının yetkili markalarını ve tüm markaları yüklemek için useEffect
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

  // localStorage'dan form verilerini yükle
  useEffect(() => {
    const savedSaleData = localStorage.getItem('corporateCustomerSaleForm');
    const savedModalState = localStorage.getItem('corporateCustomerModalOpen');
    const savedCustomer = localStorage.getItem('corporateCustomerCurrentCustomer');
    const savedBrandId = localStorage.getItem('corporateCustomerSelectedBrandId');
    const savedModelId = localStorage.getItem('corporateCustomerSelectedModelId');
    const savedModels = localStorage.getItem('corporateCustomerModels');
    const savedPackages = localStorage.getItem('corporateCustomerPackages');
    
    if (savedSaleData && savedModalState === 'true' && savedCustomer) {
      try {
        setSaleFormData(JSON.parse(savedSaleData));
        setCurrentCustomer(JSON.parse(savedCustomer));
        setIsSaleModalOpen(true);
        
        if (savedBrandId) setSelectedBrandId(savedBrandId);
        if (savedModelId) setSelectedModelId(savedModelId);
        if (savedModels) setModels(JSON.parse(savedModels));
        if (savedPackages) setPackages(JSON.parse(savedPackages));
      } catch (error) {
        console.error('localStorage verilerini yükleme hatası:', error);
        // Hatalı verileri temizle
        localStorage.removeItem('corporateCustomerSaleForm');
        localStorage.removeItem('corporateCustomerModalOpen');
        localStorage.removeItem('corporateCustomerCurrentCustomer');
        localStorage.removeItem('corporateCustomerSelectedBrandId');
        localStorage.removeItem('corporateCustomerSelectedModelId');
        localStorage.removeItem('corporateCustomerModels');
        localStorage.removeItem('corporateCustomerPackages');
      }
    }
  }, []);

  // Form input değişikliklerini işleme
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Telefon numarası için sadece rakam ve + işareti kabul et
      const cleanedValue = value.replace(/[^0-9+]/g, '');
      setFormData(prev => ({ ...prev, [name]: cleanedValue }));
    } else if (name === 'name' || name === 'authorizedPerson') {
      // İsim alanları için Türkçe karakter desteği
      setFormData(prev => ({ ...prev, [name]: value }));
    } else if (name === 'taxNumber') {
      // Vergi numarası için sadece rakam
      const cleanedValue = value.replace(/[^0-9]/g, '');
      if (cleanedValue.length <= 10) {
        setFormData(prev => ({ ...prev, [name]: cleanedValue }));
      }
    } else if (name === 'cityId') {
      const cityId = parseInt(value);
      setFormData(prev => ({ ...prev, cityId, districtId: 0 }));
      
      // Seçilen şehre göre ilçeleri güncelle
      if (cityId > 0) {
        const districts = getDistrictsByCity(cityId);
        const sortedDistricts = getSortedDistricts(cityId);
        setAvailableDistricts(sortedDistricts);
      } else {
        setAvailableDistricts([]);
      }
    } else if (name === 'districtId') {
      const districtId = parseInt(value);
      setFormData(prev => ({ ...prev, districtId }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Modal açma fonksiyonu
  const openModal = () => {
    setIsModalOpen(true);
    setEditMode(false);
    setEditingCustomerId(null);
    setFormData({
      name: '',
      taxNumber: '',
      taxOffice: '',
      email: '',
      phone: '',
      address: '',
      cityId: 0,
      districtId: 0,
      authorizedPerson: '',
    });
    setAvailableDistricts([]);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditMode(false);
    setEditingCustomerId(null);
    setFormData({
      name: '',
      taxNumber: '',
      taxOffice: '',
      email: '',
      phone: '',
      address: '',
      cityId: 0,
      districtId: 0,
      authorizedPerson: '',
    });
    setAvailableDistricts([]);
  };

  // Satış modalını açma fonksiyonu
  const openSaleModal = (customer: CorporateCustomer) => {
    setCurrentCustomer(customer);
    setIsSaleModalOpen(true);
    const initialFormData = {
      model: '',
      chassisNo: '',
      engineNo: '',
      color: '',
      saleType: '',
      purchaseDate: '',
      salePrice: '',
      purchasePrice: '',
      contributionAmount: '',
      mtvCost: '',
      licensePlateCost: '',
      packageId: '',
      otvRate: '',
      kdvRate: '',
      extraAmount: '',
    };
    setSaleFormData(initialFormData);
    
    // localStorage'a kaydet
    localStorage.setItem('corporateCustomerSaleForm', JSON.stringify(initialFormData));
    localStorage.setItem('corporateCustomerModalOpen', 'true');
    localStorage.setItem('corporateCustomerCurrentCustomer', JSON.stringify(customer));
  };

  const closeSaleModal = () => {
    setIsSaleModalOpen(false);
    setCurrentCustomer(null);
    // Form verilerini sıfırla
    setSaleFormData({
      model: '',
      chassisNo: '',
      engineNo: '',
      color: '',
      saleType: '',
      purchaseDate: '',
      salePrice: '',
      purchasePrice: '',
      contributionAmount: '',
      mtvCost: '',
      licensePlateCost: '',
      packageId: '',
      otvRate: '',
      kdvRate: '',
      extraAmount: '',
    });
    // Seçim state'lerini sıfırla
    setSelectedBrandId('');
    setSelectedModelId('');
    setModels([]);
    setPackages([]);
    
    // localStorage'ı temizle
    localStorage.removeItem('corporateCustomerSaleForm');
    localStorage.removeItem('corporateCustomerModalOpen');
    localStorage.removeItem('corporateCustomerCurrentCustomer');
    localStorage.removeItem('corporateCustomerSelectedBrandId');
    localStorage.removeItem('corporateCustomerSelectedModelId');
    localStorage.removeItem('corporateCustomerModels');
    localStorage.removeItem('corporateCustomerPackages');
  };

  // Satış form input değişikliklerini işleme
  const handleSaleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'brandId') {
      setSelectedBrandId(value);
      setSelectedModelId('');
      const updatedFormData = { ...saleFormData, model: '', packageId: '' };
      setSaleFormData(updatedFormData);
      
      // localStorage'a kaydet
      localStorage.setItem('corporateCustomerSaleForm', JSON.stringify(updatedFormData));
      localStorage.setItem('corporateCustomerSelectedBrandId', value);
      localStorage.removeItem('corporateCustomerSelectedModelId');
      localStorage.removeItem('corporateCustomerModels');
      localStorage.removeItem('corporateCustomerPackages');
      
      // Seçilen markaya göre modelleri yükle
      if (value) {
        fetch(`/api/models?brandId=${value}`)
          .then(res => res.json())
          .then(data => {
            setModels(data);
            localStorage.setItem('corporateCustomerModels', JSON.stringify(data));
          })
          .catch(err => console.error('Model yükleme hatası:', err));
      } else {
        setModels([]);
      }
    } else if (name === 'modelId') {
      setSelectedModelId(value);
      const selectedModel = models.find(model => model.id === value);
      const updatedFormData = { 
        ...saleFormData, 
        model: selectedModel ? selectedModel.name : '',
        packageId: '' 
      };
      setSaleFormData(updatedFormData);
      
      // localStorage'a kaydet
      localStorage.setItem('corporateCustomerSaleForm', JSON.stringify(updatedFormData));
      localStorage.setItem('corporateCustomerSelectedModelId', value);
      localStorage.removeItem('corporateCustomerPackages');
      
      // Seçilen modele göre paketleri yükle
      if (value) {
        fetch(`/api/packages?modelId=${value}`)
          .then(res => res.json())
          .then(data => {
            setPackages(data);
            localStorage.setItem('corporateCustomerPackages', JSON.stringify(data));
          })
          .catch(err => console.error('Paket yükleme hatası:', err));
      } else {
        setPackages([]);
      }
    } else if (name === 'packageId') {
      // Pakete ait MTV ve plaka masraflarını otomatik doldurma
      const selectedModel = models.find((model: any) => model.id === selectedModelId);
      let updatedFormData;
      if (selectedModel && value) {
        const selectedPackage = selectedModel.packages?.find((pkg: any) => pkg.id === value);
        if (selectedPackage) {
          // MTV ve plaka masraflarını paketten al
          updatedFormData = {
            ...saleFormData,
            packageId: value,
            mtvCost: selectedPackage.mtvAmount ? selectedPackage.mtvAmount.toString() : '',
            licensePlateCost: selectedPackage.plakaMasrafi ? selectedPackage.plakaMasrafi.toString() : ''
          };
          setSaleFormData(updatedFormData);
          localStorage.setItem('corporateCustomerSaleForm', JSON.stringify(updatedFormData));
          return;
        }
      }
      updatedFormData = { ...saleFormData, [name]: value };
      setSaleFormData(updatedFormData);
      localStorage.setItem('corporateCustomerSaleForm', JSON.stringify(updatedFormData));
    }
    // Tarih alanları için özel işlem
    else if (name === 'purchaseDate') {
      // Tarih değerini doğrudan state'e kaydet
      const updatedFormData = { ...saleFormData, [name]: value };
      setSaleFormData(updatedFormData);
      localStorage.setItem('corporateCustomerSaleForm', JSON.stringify(updatedFormData));
    } else {
      // Sayısal alanlar için parseFormattedNumber kullan
      const numericalFields = ['salePrice', 'purchasePrice', 'contributionAmount', 'mtvCost', 'licensePlateCost'];
      const processedValue = numericalFields.includes(name) ? parseFormattedNumber(value) : value;
      
      const updatedFormData = { ...saleFormData, [name]: processedValue };
      setSaleFormData(updatedFormData);
      localStorage.setItem('corporateCustomerSaleForm', JSON.stringify(updatedFormData));
    }
  };

  // Satış ekleme fonksiyonu
  const handleAddSale = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentCustomer) return;
    
    // Paket adını al (eğer paket seçilmişse)
    let packageName = '';
    if (saleFormData.packageId) {
      const selectedModel = models.find((model: any) => model.id === selectedModelId);
      if (selectedModel) {
        const selectedPackage = packages.find((pkg: any) => pkg.id === saleFormData.packageId);
        if (selectedPackage) {
          packageName = selectedPackage.name;
        }
      }
    }
    
    const saleData = {
      customerId: currentCustomer.id,
      model: saleFormData.model,
      chassisNo: saleFormData.chassisNo,
      engineNo: saleFormData.engineNo,
      color: saleFormData.color,
      purchaseDate: saleFormData.purchaseDate,
      salePrice: parseFloat(saleFormData.salePrice) || 0,
      purchasePrice: parseFloat(saleFormData.purchasePrice) || 0,
      contributionAmount: parseFloat(saleFormData.contributionAmount) || 0,
      mtvCost: parseFloat(saleFormData.mtvCost) || 0,
      licensePlateCost: parseFloat(saleFormData.licensePlateCost) || 0,
      packageId: saleFormData.packageId || null,
      packageName: packageName || null,
      customerType: 'corporate' // Kurumsal müşteri olduğunu belirt
    };
    
    // Önce CSRF token'ı al
    fetch('/api/csrf-token')
    .then(response => {
      if (!response.ok) {
        throw new Error('CSRF token alınamadı');
      }
      return response.json();
    })
    .then(({ csrfToken }) => {
      return fetch('/api/sales', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': user?.id?.toString() || '',
          'x-csrf-token': csrfToken
        },
        body: JSON.stringify(saleData),
      });
    })
    .then(response => {
      if (response.ok) {
        alert('Satış başarıyla eklendi!');
        closeSaleModal();
        loadCorporateCustomers(); // Müşteri listesini yenile
      } else {
        response.json().then(data => {
          alert(`Hata: ${data.error || 'Satış eklenirken bir hata oluştu.'}`);
        }).catch(() => {
          alert('Satış eklenirken bir hata oluştu.');
        });
      }
    })
    .catch(error => {
      console.error('Satış ekleme hatası:', error);
      alert('Satış eklenirken bir hata oluştu.');
    });
  };

  // Müşteri düzenleme fonksiyonu
  const handleEditCustomer = (customer: CorporateCustomer) => {
    setEditMode(true);
    setEditingCustomerId(customer.id);
    setFormData({
      name: customer.name,
      taxNumber: customer.taxNumber,
      taxOffice: customer.taxOffice,
      email: customer.email,
      phone: customer.phone,
      address: customer.address,
      cityId: customer.cityId,
      districtId: customer.districtId,
      authorizedPerson: customer.authorizedPerson,
    });
    
    // İlçeleri yükle
    if (customer.cityId > 0) {
      const districts = getDistrictsByCity(customer.cityId);
      const sortedDistricts = getSortedDistricts(customer.cityId);
      setAvailableDistricts(sortedDistricts);
    }
    
    setIsModalOpen(true);
  };

  const handleSaveCustomer = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validasyonu
    if (!formData.name.trim()) {
      alert('Firma adı zorunludur.');
      return;
    }
    
    if (!formData.taxNumber.trim()) {
      alert('Vergi numarası zorunludur.');
      return;
    }
    
    if (formData.taxNumber.length !== 10) {
      alert('Vergi numarası 10 haneli olmalıdır.');
      return;
    }
    
    if (!formData.taxOffice.trim()) {
      alert('Vergi dairesi zorunludur.');
      return;
    }
    
    if (!formData.phone.trim()) {
      alert('Telefon numarası zorunludur.');
      return;
    }
    
    const customerData = {
      name: formatTurkishText(formData.name.trim()),
      taxNumber: formData.taxNumber.trim(),
      taxOffice: formatTurkishText(formData.taxOffice.trim()),
      email: formData.email.trim() || '', // E-posta opsiyonel, boşsa boş string gönder
      phone: formData.phone.trim(),
      address: formData.address.trim(),
      cityId: formData.cityId,
      districtId: formData.districtId,
      authorizedPerson: formatTurkishText(formData.authorizedPerson.trim()),
    };
    
    try {
      // Önce CSRF token'ı al
      const csrfResponse = await fetch('/api/csrf-token');
      if (!csrfResponse.ok) {
        throw new Error('CSRF token alınamadı');
      }
      const { csrfToken } = await csrfResponse.json();
      
      const url = editMode ? `/api/corporate-customers/${editingCustomerId}` : '/api/corporate-customers';
      const method = editMode ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': user?.id?.toString() || '',
          'x-csrf-token': csrfToken
        },
        body: JSON.stringify(customerData),
      });
      
      if (response.ok) {
        alert(editMode ? 'Kurumsal müşteri başarıyla güncellendi!' : 'Kurumsal müşteri başarıyla eklendi!');
        closeModal();
        await loadCorporateCustomers();
      } else {
        const errorData = await response.json();
        if (response.status === 400 && errorData.error?.includes('Vergi numarası')) {
          alert('Bu vergi numarası zaten kayıtlı. Lütfen farklı bir vergi numarası giriniz.');
        } else {
          alert(`Hata: ${errorData.error || 'Kurumsal müşteri kaydedilirken bir hata oluştu.'}`);
        }
      }
    } catch (error) {
      console.error('Kurumsal müşteri kaydetme hatası:', error);
      alert('Kurumsal müşteri kaydedilirken bir hata oluştu.');
    }
  };

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  // Şehirleri yükle
  useEffect(() => {
    const cities = getSortedCities();
    setSortedCities(cities);
    
    // Markaları yükle
    fetch('/api/brands')
      .then(res => res.json())
      .then(data => setBrands(data))
      .catch(err => console.error('Marka yükleme hatası:', err));
  }, []);

  // Yükleniyor durumu
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
          <h1 className="text-2xl font-bold text-gray-900">Kurumsal Müşteriler</h1>
          <p className="mt-1 text-sm text-gray-500">Tüm kurumsal müşteri kayıtları</p>
        </div>
        
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="flex justify-between mb-4">
                <div className="flex space-x-3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Kurumsal müşteri ara..."
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
                    onClick={openCustomerSearchModal}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Vergi No ile Ara
                  </button>
                </div>
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Kurumsal Müşteri Ekle
                </button>
              </div>
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Firma
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Vergi Bilgileri
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        İletişim
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Düzenle</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {corporateCustomers.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                          Henüz kurumsal müşteri kaydı bulunmuyor. Yeni kurumsal müşteri eklemek için "Kurumsal Müşteri Ekle" butonunu kullanabilirsiniz.
                        </td>
                      </tr>
                    ) : (
                      corporateCustomers.map((customer) => (
                        <tr key={customer.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                  <span className="text-sm font-medium text-indigo-800">
                                    {customer.name.charAt(0).toUpperCase()}
                                  </span>
                                </div>
                              </div>
                              <div className="ml-4 min-w-0 flex-1">
                                <div className="text-sm font-medium text-gray-900 break-words overflow-wrap-anywhere max-w-48">
                                  {customer.name}
                                </div>
                                {customer.authorizedPerson && (
                                  <div className="text-xs text-gray-700 mt-1 italic">
                                    Yetkili: {customer.authorizedPerson}
                                  </div>
                                )}
                                {customer.cityId && customer.districtId && (
                                  <div className="text-xs text-gray-500 mt-1">
                                    {getCityNameById(customer.cityId)}, {getDistrictNameById(customer.cityId, customer.districtId)}
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              <div>VN: {customer.taxNumber}</div>
                              <div className="text-xs text-gray-500 mt-1">
                                {customer.taxOffice}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              <div>{formatPhoneNumber(customer.phone)}</div>
                              {customer.email && (
                                <div className="text-xs text-gray-500 mt-1">
                                  {customer.email}
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button 
                                onClick={() => handleEditCustomer(customer)} 
                                className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200"
                              >
                                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                Düzenle
                              </button>
                              <button 
                                onClick={() => openSaleModal(customer)} 
                                className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors duration-200"
                              >
                                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Satış Ekle
                              </button>
                              <button 
                                onClick={() => handleDeleteCustomer(customer.id)} 
                                className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200"
                              >
                                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                Sil
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Kurumsal Müşteri Ekleme/Düzenleme Modalı */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-center">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100">
                  <svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {editMode ? 'Kurumsal Müşteri Düzenle' : 'Kurumsal Müşteri Ekle'}
                  </h3>
                  <div className="mt-4">
                    <form onSubmit={handleSaveCustomer} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Firma Adı *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md px-3 py-2 text-gray-800"
                          />
                        </div>
                        <div>
                          <label htmlFor="taxNumber" className="block text-sm font-medium text-gray-700">
                            Vergi Numarası *
                          </label>
                          <input
                            type="text"
                            id="taxNumber"
                            name="taxNumber"
                            value={formData.taxNumber}
                            onChange={handleInputChange}
                            maxLength={10}
                            required
                            className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 text-gray-950"
                          />
                        </div>
                        <div>
                          <label htmlFor="taxOffice" className="block text-sm font-medium text-gray-700">
                            Vergi Dairesi *
                          </label>
                          <input
                            type="text"
                            id="taxOffice"
                            name="taxOffice"
                            value={formData.taxOffice}
                            onChange={handleInputChange}
                            required
                            className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 text-gray-950"
                          />
                        </div>
                        <div>
                          <label htmlFor="authorizedPerson" className="block text-sm font-medium text-gray-700">
                            Yetkili Kişi
                          </label>
                          <input
                            type="text"
                            id="authorizedPerson"
                            name="authorizedPerson"
                            value={formData.authorizedPerson}
                            onChange={handleInputChange}
                            className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 text-gray-950"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Telefon *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 text-gray-950"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            E-posta
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 text-gray-950"
                          />
                        </div>
                        <div>
                          <label htmlFor="cityId" className="block text-sm font-medium text-gray-700">
                            İl
                          </label>
                          <select
                            id="cityId"
                            name="cityId"
                            value={formData.cityId}
                            onChange={handleInputChange}
                            className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 text-gray-950"
                          >
                            <option value={0}>İl Seçiniz</option>
                            {sortedCities.map((city) => (
                              <option key={city.id} value={city.id}>
                                {city.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="districtId" className="block text-sm font-medium text-gray-700">
                            İlçe
                          </label>
                          <select
                            id="districtId"
                            name="districtId"
                            value={formData.districtId}
                            onChange={handleInputChange}
                            disabled={availableDistricts.length === 0}
                            className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md px-3 py-2 text-gray-800 disabled:bg-gray-100"
                          >
                            <option value={0}>İlçe Seçiniz</option>
                            {availableDistricts.map((district) => (
                              <option key={district.id} value={district.id}>
                                {district.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                          Adres
                        </label>
                        <textarea
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          rows={3}
                          className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 text-gray-950"
                        />
                      </div>
                      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <button
                          type="submit"
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          {editMode ? 'Güncelle' : 'Kaydet'}
                        </button>
                        <button
                          type="button"
                          onClick={closeModal}
                          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-400 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
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
      )}

      {/* Satış Ekleme Modalı */}
      {isSaleModalOpen && currentCustomer && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Satış Ekle - {currentCustomer.name}
                    </h3>
                    <div className="mt-4">
                      <form onSubmit={handleAddSale} className="space-y-4">
                        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                          {/* Satış Tipi */}
                          <div className="sm:col-span-6">
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                              Satış Tipi <span className="text-red-500">*</span>
                            </label>
                            <div className="flex space-x-6">
                              <div className="flex items-center">
                                <input
                                  id="perakende-corp"
                                  name="saleType"
                                  type="radio"
                                  value="perakende"
                                  checked={saleFormData.saleType === 'perakende'}
                                  onChange={handleSaleInputChange}
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                  required
                                />
                                <label htmlFor="perakende-corp" className="ml-2 block text-sm text-gray-900">
                                  Perakende
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  id="filo-corp"
                                  name="saleType"
                                  type="radio"
                                  value="filo"
                                  checked={saleFormData.saleType === 'filo'}
                                  onChange={handleSaleInputChange}
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                />
                                <label htmlFor="filo-corp" className="ml-2 block text-sm text-gray-900">
                                  Filo
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  id="otv-muaf-corp"
                                  name="saleType"
                                  type="radio"
                                  value="otv-muaf"
                                  checked={saleFormData.saleType === 'otv-muaf'}
                                  onChange={handleSaleInputChange}
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                />
                                <label htmlFor="otv-muaf-corp" className="ml-2 block text-sm text-gray-900">
                                  ÖTV Muaf
                                </label>
                              </div>
                            </div>
                          </div>

                          {/* Marka */}
                          <div className="sm:col-span-2">
                            <label htmlFor="brandId" className="block text-sm font-medium text-gray-700">
                              Marka <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-1">
                              <select
                                id="brandId"
                                name="brandId"
                                value={selectedBrandId}
                                onChange={handleSaleInputChange}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 px-3 text-gray-800"
                                required
                              >
                                <option value="">Marka Seçin</option>
                                {authorizedBrands.length > 0 ? (
                                  authorizedBrands.map((brand) => (
                                    <option key={brand.id} value={brand.id}>
                                      {brand.name}
                                    </option>
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

                          {/* Model */}
                          <div className="sm:col-span-2">
                            <label htmlFor="modelId" className="block text-sm font-medium text-gray-700">
                              Model <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-1">
                              <select
                                id="modelId"
                                name="modelId"
                                value={selectedModelId}
                                onChange={handleSaleInputChange}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 px-3 text-gray-800"
                                required
                                disabled={!selectedBrandId}
                              >
                                <option value="">Model Seçin</option>
                                {models.map((model) => (
                                  <option key={model.id} value={model.id}>
                                    {model.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          {/* Paket */}
                          <div className="sm:col-span-2">
                            <label htmlFor="packageId" className="block text-sm font-medium text-gray-700">
                              Paket
                            </label>
                            <div className="mt-1">
                              <select
                                id="packageId"
                                name="packageId"
                                value={saleFormData.packageId}
                                onChange={handleSaleInputChange}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                disabled={!selectedModelId}
                              >
                                <option value="">Paket Seçin</option>
                                {packages.map((pkg) => (
                                  <option key={pkg.id} value={pkg.id}>
                                    {pkg.name}
                                  </option>
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
            </div>
          </div>
        </div>
      )}

      {/* Kurumsal Müşteri Arama Modalı */}
      {isCustomerSearchModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-center">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Kurumsal Müşteri Ara ve Devral
                  </h3>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-4">
                      Vergi No ile kurumsal müşteri arayın ve devralın
                    </p>
                    
                    {/* Arama Formu */}
                    <div className="flex space-x-2 mb-4">
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Vergi No giriniz"
                        className="flex-1 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-400 rounded-md px-3 py-2 text-gray-800"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleCustomerSearch();
                          }
                        }}
                      />
                      <button
                        onClick={handleCustomerSearch}
                        disabled={isSearching}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
                      >
                        {isSearching ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Aranıyor...
                          </>
                        ) : (
                          <>
                            <svg className="-ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Ara
                          </>
                        )}
                      </button>
                      <button
                        onClick={handleClearSearch}
                        className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Temizle
                      </button>
                    </div>
                    
                    {/* Arama Mesajı */}
                    {searchMessage && (
                      <div className={`mb-4 p-3 rounded-md ${
                        searchMessage.includes('hata') || searchMessage.includes('bulunamadı') 
                          ? 'bg-red-50 text-red-700 border border-red-200' 
                          : searchMessage.includes('başarıyla')
                          ? 'bg-green-50 text-green-700 border border-green-200'
                          : 'bg-blue-50 text-blue-700 border border-blue-200'
                      }`}>
                        {searchMessage}
                      </div>
                    )}
                    
                    {/* Arama Sonuçları */}
                    {searchResults.length > 0 && (
                      <div className="max-h-96 overflow-y-auto">
                        <div className="space-y-3">
                          {searchResults.map((customer) => (
                            <div key={customer.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                              <div className="flex justify-between items-start">
                                <div className="flex-1">
                                  <h4 className="text-sm font-medium text-gray-900">{customer.name}</h4>
                                  <p className="text-sm text-gray-500">Vergi No: {customer.taxNumber}</p>
                                  <p className="text-sm text-gray-500">Vergi Dairesi: {customer.taxOffice}</p>
                                  <p className="text-sm text-gray-500">Telefon: {customer.phone}</p>
                                  {customer.email && (
                                    <p className="text-sm text-gray-500">E-posta: {customer.email}</p>
                                  )}
                                  {customer.authorizedPerson && (
                                    <p className="text-sm text-gray-500">Yetkili: {customer.authorizedPerson}</p>
                                  )}
                                </div>
                                <div className="ml-4">
                                  {customer.createdBy === user?.id?.toString() ? (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                      Sizin Müşteriniz
                                    </span>
                                  ) : (
                                    <button
                                      onClick={() => handleTransferCustomer(customer.id)}
                                      disabled={transferLoading === customer.id}
                                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                                    >
                                      {transferLoading === customer.id ? (
                                        <>
                                          <svg className="animate-spin -ml-1 mr-1 h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                          </svg>
                                          Devralınıyor...
                                        </>
                                      ) : (
                                        'Devral'
                                      )}
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  onClick={closeCustomerSearchModal}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
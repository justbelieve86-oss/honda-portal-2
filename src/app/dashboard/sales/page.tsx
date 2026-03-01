'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import DashboardLayout from '@/app/components/dashboard/DashboardLayout';

interface Sale {
  id: number;
  customerId: number;
  customerName: string;
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
  date: string;
  customerType?: 'individual' | 'corporate';
  identificationNumber?: string;
  packageId?: string;
  packageName?: string;
}

interface Customer {
  id: number;
  name: string;
  tcNo: string;
  email: string;
  phone: string;
  occupation: string;
  birthDate: string;
  createdBy: number;
  createdAt: string;
}

// Kurumsal müşteri ve satış tipi tanımları
interface CorporateCustomer {
  id: number;
  name: string;
  taxNumber: string;
  sales?: CorporateSale[];
}

// Aksesuar tipi tanımı
interface Accessory {
  id: number;
  saleId: number;
  name: string;
  price: number;
  date: string; // Eklenme tarihi
}

// Bakım ürünü tanımı
interface MaintenanceItem {
  id: number;
  saleId: number;
  name: string;
  price: number;
  date: string; // Eklenme tarihi
}

interface CorporateSale {
  id: number;
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
  saleDate: string;
  date?: string;
  packageId?: string;
  packageName?: string;
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// 2 ondalık haneli para formatı için yeni fonksiyon
function formatCurrencyWithDecimals(amount: number): string {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      // Eğer tarih geçerli değilse (formatı farklıysa) orijinal string'i dön
      return dateString;
    }
    
    // Sadece tarih formatı göster: 10.04.2024
    return new Intl.DateTimeFormat('tr-TR', {
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit'
    }).format(date);
  } catch (error) {
    console.error('Tarih formatlarken hata:', error);
    return dateString;
  }
}

export default function SalesPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [sales, setSales] = useState<Sale[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSale, setSelectedSale] = useState<Sale | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingSale, setEditingSale] = useState<Sale | null>(null);
  const [editFormData, setEditFormData] = useState<Partial<Sale>>({});
  const [selectedBrandId, setSelectedBrandId] = useState<string>('');
  const [selectedModelId, setSelectedModelId] = useState<string>('');
  const [models, setModels] = useState<any[]>([]);
  const [packages, setPackages] = useState<any[]>([]);
  const [brands, setBrands] = useState<any[]>([]);
  // Vergi oranları için state değişkenleri
  const [vatRate, setVatRate] = useState<number>(0.20); // Varsayılan KDV oranı %20
  const [sctRate, setSctRate] = useState<number>(0.18); // Varsayılan ÖTV oranı %18
  const [loadingTaxRates, setLoadingTaxRates] = useState<boolean>(true);
  
  // Tarih filtreleme için state'ler
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());

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
  
  // Aksesuar için state'ler
  const [isAccessoryModalOpen, setIsAccessoryModalOpen] = useState(false);
  const [selectedSaleForAccessory, setSelectedSaleForAccessory] = useState<Sale | null>(null);
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [availableAccessories, setAvailableAccessories] = useState<any[]>([]);
  const [loadingAccessories, setLoadingAccessories] = useState(false);
  const [accessoryForm, setAccessoryForm] = useState({
    accessoryId: '',
    name: '',
    price: 0
  });
  
  // Bakım ürünleri için state'ler
  const [isMaintenanceModalOpen, setIsMaintenanceModalOpen] = useState(false);
  const [selectedSaleForMaintenance, setSelectedSaleForMaintenance] = useState<Sale | null>(null);
  const [maintenanceItems, setMaintenanceItems] = useState<MaintenanceItem[]>([]);
  const [maintenanceForm, setMaintenanceForm] = useState({
    name: '',
    price: 0
  });

  // Müşteri arama ve devralma için state'ler
  const [isCustomerSearchModalOpen, setIsCustomerSearchModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Customer[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [transferLoading, setTransferLoading] = useState<string | null>(null);
  const [searchMessage, setSearchMessage] = useState('');
  const [isSaleModalOpen, setIsSaleModalOpen] = useState(false);
  const [selectedCustomerForSale, setSelectedCustomerForSale] = useState<Customer | null>(null);
  const [saleFormData, setSaleFormData] = useState({
    model: '',
    chassisNo: '',
    engineNo: '',
    purchaseDate: '',
    salePrice: 0,
    purchasePrice: 0,
    contributionAmount: 0,
    mtvCost: 0,
    licensePlateCost: 0,
    color: '',
    packageId: ''
  });

  // Satış verilerini API'den yükle
  const loadSales = async (month?: number, year?: number) => {
    try {
      console.log('User info:', user);
      if (!user) {
        console.log('No user found, skipping sales load');
        return;
      }
      
      const monthParam = month || selectedMonth;
      const yearParam = year || selectedYear;
      console.log('Loading sales for month:', monthParam, 'year:', yearParam);
      const response = await fetch(`/api/sales?month=${monthParam}&year=${yearParam}`, {
        headers: {
          'x-user-id': user?.id?.toString() || ''
        }
      });
      console.log('Response status:', response.status, 'ok:', response.ok);
      if (response.ok) {
        const salesData = await response.json();
        console.log('Sales data loaded:', salesData.length, 'items');
        setSales(salesData);
      } else {
        const errorText = await response.text();
        console.error('Satış verileri yüklenirken hata oluştu:', response.status, response.statusText, errorText);
      }
    } catch (error) {
      console.error('Satış verileri yüklenirken hata oluştu:', error);
    }
  };

  // Müşteri arama fonksiyonu
  const handleCustomerSearch = async () => {
    if (!searchTerm.trim()) {
      setSearchMessage('Lütfen TC Kimlik No giriniz.');
      return;
    }

    setIsSearching(true);
    setSearchMessage('');
    setSearchResults([]);

    try {
      const response = await fetch(`/api/customers?tcNoSearch=${encodeURIComponent(searchTerm)}`, {
        headers: {
          'x-user-id': user?.id?.toString() || ''
        }
      });

      if (response.ok) {
        const customers = await response.json();
        setSearchResults(customers);
        
        if (customers.length === 0) {
          setSearchMessage('Bu TC Kimlik No ile kayıtlı müşteri bulunamadı.');
        } else {
          setSearchMessage(`${customers.length} müşteri bulundu.`);
        }
      } else {
        setSearchMessage('Arama sırasında bir hata oluştu.');
      }
    } catch (error) {
      console.error('Müşteri arama hatası:', error);
      setSearchMessage('Arama sırasında bir hata oluştu.');
    } finally {
      setIsSearching(false);
    }
  };

  // Müşteri devralma fonksiyonu
  const handleTransferCustomer = async (customerId: number) => {
    setTransferLoading(customerId.toString());
    
    try {
      const response = await fetch('/api/customers/transfer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': user?.id?.toString() || ''
        },
        body: JSON.stringify({ customerId })
      });

      if (response.ok) {
        setSearchMessage('Müşteri başarıyla devralındı!');
        
        // Arama sonuçlarını manuel olarak güncelle
        setSearchResults(prevResults => 
          prevResults.map(customer => 
            customer.id === customerId 
              ? { ...customer, createdBy: Number(user?.id) }
              : customer
          )
        );
        
        // Arama sonuçlarını API'den de yenile
        setTimeout(() => {
          handleCustomerSearch();
        }, 500);
      } else {
        const errorData = await response.json();
        setSearchMessage(errorData.error || 'Müşteri devralınırken bir hata oluştu.');
      }
    } catch (error) {
      console.error('Müşteri devralma hatası:', error);
      setSearchMessage('Müşteri devralınırken bir hata oluştu.');
    } finally {
      setTransferLoading(null);
    }
  };

  // Müşteri arama temizleme
  const handleClearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setSearchMessage('');
  };
  
  // Ay değiştiğinde satışları yeniden yükle
  const handleMonthChange = (month: number) => {
    setSelectedMonth(month);
    loadSales(month, selectedYear);
  };
  
  // Yıl değiştiğinde satışları yeniden yükle
  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    loadSales(selectedMonth, year);
  };

  // Müşteri arama modalını aç
  const openCustomerSearchModal = () => {
    setIsCustomerSearchModalOpen(true);
    setSearchTerm('');
    setSearchResults([]);
    setSearchMessage('');
  };

  // Müşteri arama modalını kapat
  const closeCustomerSearchModal = () => {
    setIsCustomerSearchModalOpen(false);
    setSearchTerm('');
    setSearchResults([]);
    setSearchMessage('');
  };

  // Satış modalını aç
  const openSaleModal = (customer: Customer) => {
    setSelectedCustomerForSale(customer);
    setIsSaleModalOpen(true);
  };

  // Satış modalını kapat
  const closeSaleModal = () => {
    setIsSaleModalOpen(false);
    setSelectedCustomerForSale(null);
    setSaleFormData({
      model: '',
      chassisNo: '',
      engineNo: '',
      purchaseDate: '',
      salePrice: 0,
      purchasePrice: 0,
      contributionAmount: 0,
      mtvCost: 0,
      licensePlateCost: 0,
      color: '',
      packageId: ''
    });
  };

  // Enter tuşu ile arama
  const handleSearchKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCustomerSearch();
    }
  };

  useEffect(() => {
    if (!loading && user) {
      // Mevcut ayın satışlarını yükle
      loadSales(selectedMonth, selectedYear);
      
      // Markaları, modelleri ve paketleri yükle (yeni satış ekleme/düzenleme için)
      const fetchBrandsAndModels = async () => {
        try {
          const response = await fetch('/api/brands');
          if (response.ok) {
            const data = await response.json();
            setBrands(data);
          } else {
            console.error('Markalar yüklenemedi');
          }
        } catch (error) {
          console.error('Markalar getirilirken hata:', error);
        }
      };
      
      fetchBrandsAndModels();
      
      // Aksesuarları yükle
      const loadAccessories = () => {
        const savedAccessories = localStorage.getItem('kardelen_portal_accessories');
        if (savedAccessories) {
          try {
            setAccessories(JSON.parse(savedAccessories));
          } catch (error) {
            console.error('Aksesuarlar yüklenirken hata:', error);
          }
        }
      };
      
      // Bakım ürünlerini yükle
      const loadMaintenanceItems = () => {
        const savedMaintenanceItems = localStorage.getItem('kardelen_portal_maintenance');
        if (savedMaintenanceItems) {
          try {
            setMaintenanceItems(JSON.parse(savedMaintenanceItems));
          } catch (error) {
            console.error('Bakım ürünleri yüklenirken hata:', error);
          }
        }
      };
      
      loadAccessories();
      loadMaintenanceItems();
    }
  }, [loading, user, selectedMonth, selectedYear]);

  // Markaları ve modelleri yüklemek için useEffect
  useEffect(() => {
    const fetchBrandsAndModels = async () => {
      try {
        const response = await fetch('/api/brands');
        if (response.ok) {
          const data = await response.json();
          setBrands(data);
          // Varsayılan olarak Kardelen Otomotiv markasını seç (varsa)
        const kardelen = data.find((brand: any) => brand.name === 'Kardelen Otomotiv');
        if (kardelen) {
          setSelectedBrandId(kardelen.id);
          setModels(kardelen.models || []);
          }
        } else {
          console.error('Markalar yüklenemedi');
        }
      } catch (error) {
        console.error('Markalar getirilirken hata:', error);
      }
    };
    
    fetchBrandsAndModels();
  }, []);

  // Vergi oranlarını API'den çekmek için useEffect
  useEffect(() => {
    fetchTaxRates();
  }, []);

  // Detay modalını aç
  const openSaleDetailModal = (sale: Sale) => {
    setSelectedSale(sale);
    
    // Seçilen satış için paket bilgilerini bul
    if (sale.packageId && brands.length > 0) {
      let packageFound = false;
      
      // Tüm markalar ve modeller içinde paketi ara
      for (const brand of brands) {
        for (const model of brand.models || []) {
          const selectedPackage = model.packages?.find((pkg: any) => pkg.id === sale.packageId);
          if (selectedPackage) {
            // Pakete özel vergi oranlarını kullan
            if (selectedPackage.kdvRate !== undefined) {
              setVatRate(selectedPackage.kdvRate / 100);
            }
            if (selectedPackage.otvRate !== undefined) {
              setSctRate(selectedPackage.otvRate / 100);
            }
            packageFound = true;
            break;
          }
        }
        if (packageFound) break;
      }
      
      // Paket bulunamadıysa, varsayılan vergi oranlarını kullan
      if (!packageFound) {
        // Varsayılan vergi oranlarını API'den çek
        fetchTaxRates();
      }
    } else {
      // Paket bilgisi yoksa, varsayılan vergi oranlarını kullan
      fetchTaxRates();
    }
    
    setIsModalOpen(true);
  };

  // Detay modalını kapat
  const closeSaleDetailModal = () => {
    setSelectedSale(null);
    setIsModalOpen(false);
  };

  // Düzenleme modalını aç
  const openEditModal = (sale: Sale) => {
    setEditingSale(sale);
    setEditFormData({
      model: sale.model,
      chassisNo: sale.chassisNo,
      engineNo: sale.engineNo,
      color: sale.color,
      purchaseDate: sale.purchaseDate,
      salePrice: sale.salePrice,
      purchasePrice: sale.purchasePrice,
      contributionAmount: sale.contributionAmount,
      mtvCost: sale.mtvCost,
      licensePlateCost: sale.licensePlateCost,
      date: sale.date,
    });
    
    // Mevcut paket bilgisine göre model ve paket seçimlerini ayarla
    if (brands.length > 0) {
      // Modeli bulmak için markalar içinde arama yapabiliriz
      const modelName = sale.model;
      let foundModelId = '';
      let foundBrandId = '';
      
      // Tüm markalarda modeli ara
      for (const brand of brands) {
        const model = brand.models?.find((m: any) => m.name === modelName);
        if (model) {
          foundModelId = model.id;
          foundBrandId = brand.id;
          setSelectedBrandId(brand.id);
          setModels(brand.models || []);
          setSelectedModelId(model.id);
          setPackages(model.packages || []);
          break;
        }
      }
    }
    
    setIsEditModalOpen(true);
  };

  // Düzenleme modalını kapat
  const closeEditModal = () => {
    setEditingSale(null);
    setEditFormData({});
    setIsEditModalOpen(false);
  };

  // Form verilerini değiştir
  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'brand') {
      // Marka değiştiğinde modelleri güncelle
      const brandId = value;
      setSelectedBrandId(brandId);
      
      // Seçili markaya ait modelleri getir
      const brand = brands.find(b => b.id === brandId);
      if (brand) {
        setModels(brand.models || []);
        setSelectedModelId('');
        setPackages([]);
        setEditFormData({
          ...editFormData,
          model: '',
        });
      }
    } else if (name === 'modelId') {
      // Model değiştiğinde paketleri güncelle
      const modelId = value;
      setSelectedModelId(modelId);
      
      // Seçilen modeli bul
      const selectedBrand = brands.find(brand => brand.id === selectedBrandId);
      if (selectedBrand) {
        const selectedModel = selectedBrand.models.find((model: any) => model.id === modelId);
        if (selectedModel) {
          setPackages(selectedModel.packages || []);
          // Model adını form verilerine set et
          setEditFormData({
            ...editFormData,
            model: selectedModel.name,
          });
        }
      }
    } else if (name === 'packageId') {
      // Pakete ait MTV ve plaka masraflarını otomatik doldurma
      const selectedModel = models.find((model: any) => model.id === selectedModelId);
      if (selectedModel && value) {
        const selectedPackage = selectedModel.packages?.find((pkg: any) => pkg.id === value);
        if (selectedPackage) {
          // MTV, plaka masraflarını ve vergi oranlarını paketten al
          setEditFormData({
            ...editFormData,
            packageId: value,
            packageName: selectedPackage.name,
            mtvCost: selectedPackage.mtvAmount ? selectedPackage.mtvAmount : 0,
            licensePlateCost: selectedPackage.plakaMasrafi ? selectedPackage.plakaMasrafi : 0
          });
          
          // Eğer pakette vergi oranları tanımlanmışsa, global state'i güncelle
          if (selectedPackage.kdvRate !== undefined) {
            setVatRate(selectedPackage.kdvRate / 100); // Yüzdelik değeri ondalık değere çevir
          }
          if (selectedPackage.otvRate !== undefined) {
            setSctRate(selectedPackage.otvRate / 100); // Yüzdelik değeri ondalık değere çevir
          }
          return;
        }
      }
      setEditFormData({
        ...editFormData,
        [name]: value,
      });
    }
    // Tarih alanları için özel işlem
    else if (name === 'date' || name === 'purchaseDate') {
      // Tarih değerini doğrudan state'e kaydet
      setEditFormData({
        ...editFormData,
        [name]: value,
      });
    }
    // Sayısal değerleri doğru şekilde işle
    else if (['salePrice', 'purchasePrice', 'contributionAmount', 'mtvCost', 'licensePlateCost'].includes(name)) {
      const numericValue = parseFormattedNumber(value);
      setEditFormData({
        ...editFormData,
        [name]: numericValue,
      });
    } else {
      setEditFormData({
        ...editFormData,
        [name]: value,
      });
    }
  };

  // Düzenlenen satışı kaydet
  const handleSaveEdit = async () => {
    if (!editingSale || !user) return;

    try {
      // Tüm satış verilerini güncelle
      const updatedSale: Sale = {
        ...editingSale,
        ...editFormData,
      };

      // Önce CSRF token'ı al
      const csrfResponse = await fetch('/api/csrf-token');
      if (!csrfResponse.ok) {
        throw new Error('CSRF token alınamadı');
      }
      const { csrfToken } = await csrfResponse.json();

      // API'ye PUT isteği gönder
      const response = await fetch(`/api/sales/${editingSale.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': user.id,
          'x-csrf-token': csrfToken
        },
        body: JSON.stringify({
          customerType: editingSale.customerType || 'individual',
          model: updatedSale.model,
          chassisNo: updatedSale.chassisNo,
          engineNo: updatedSale.engineNo,
          purchaseDate: updatedSale.purchaseDate,
          salePrice: updatedSale.salePrice,
          purchasePrice: updatedSale.purchasePrice,
          contributionAmount: updatedSale.contributionAmount,
          mtvCost: updatedSale.mtvCost,
          licensePlateCost: updatedSale.licensePlateCost,
          color: updatedSale.color,
          packageId: updatedSale.packageId,
          packageName: updatedSale.packageName
        }),
      });

      if (response.ok) {
        // Modalı kapat
        closeEditModal();

        // Başarılı mesajı göster
        alert('Satış bilgileri başarıyla güncellendi.');
        
        // Satış listesini yeniden yükle
        await loadSales();
      } else {
        const errorData = await response.json();
        alert(`Satış güncellenirken hata oluştu: ${errorData.error || 'Bilinmeyen hata'}`);
      }
    } catch (error) {
      console.error('Satış güncellenirken hata oluştu:', error);
      alert('Satış güncellenirken hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  // Satışı sil
  const handleDeleteSale = async () => {
    if (!editingSale) return;

    // Kullanıcıdan onay al
    const isConfirmed = window.confirm('Bu satışı silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.');
    if (!isConfirmed) return;

    try {
      // Önce CSRF token'ı al
      const csrfResponse = await fetch('/api/csrf-token');
      if (!csrfResponse.ok) {
        throw new Error('CSRF token alınamadı');
      }
      const { csrfToken } = await csrfResponse.json();

      // API'ye DELETE isteği gönder
      const response = await fetch(`/api/sales/${editingSale.id}?customerType=${editingSale.customerType || 'individual'}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
        },
      });

      if (response.ok) {
        // State'den satışı kaldır
        const updatedSales = sales.filter(sale => sale.id !== editingSale.id);
        setSales(updatedSales);

        // Modalı kapat
        closeEditModal();

        // Başarılı mesajı göster
        alert('Satış başarıyla silindi.');
        
        // Satış listesini yeniden yükle
        await loadSales();
      } else {
        const errorData = await response.json();
        alert(`Satış silinirken hata oluştu: ${errorData.error || 'Bilinmeyen hata'}`);
      }
    } catch (error) {
      console.error('Satış silinirken hata oluştu:', error);
      alert('Satış silinirken hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  // İstatistikleri hesapla
  const calculateStatistics = () => {
    // Filtreler - bu ayın satışlarını al
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    
    const thisMonthSales = sales.filter(sale => {
      try {
        const saleDate = new Date(sale.date);
        return !isNaN(saleDate.getTime()) && 
          saleDate.getMonth() === currentMonth && 
          saleDate.getFullYear() === currentYear;
      } catch (error) {
        // Tarih dönüştürülemezse dahil etme
        return false;
      }
    });
    
    // Bu aydaki toplam satış değeri
    const totalSalesAmount = thisMonthSales.reduce((total, sale) => total + sale.salePrice, 0);
    
    // Bu aydaki satış adedi
    const salesCount = thisMonthSales.length;
    
    // Ortalama satış değeri
    const averageSaleValue = salesCount > 0 ? totalSalesAmount / salesCount : 0;
    
    // Geçen aya göre değişim (örnek değerler)
    // Normalde geçen ayın verilerine göre hesaplanmalı
    const monthlyChangePercent = 5;
    
    return {
      totalSalesAmount,
      salesCount,
      averageSaleValue,
      monthlyChangePercent
    };
  };

  const stats = calculateStatistics();

  // Kullanıcı oturum açmamışsa login sayfasına yönlendir
  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
  }, [user, loading, router]);

  // localStorage verilerini kontrol et
  useEffect(() => {
    const checkLocalStorage = () => {
      console.log('--- LOCAL STORAGE İÇERİĞİ ---');
      
      // Tüm localStorage anahtarlarını kontrol et
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) {
          try {
            const value = localStorage.getItem(key);
            console.log(`Anahtar: ${key}`);
            console.log(`Değer: ${value ? value.substring(0, 100) + '...' : 'boş'}`);
            
            // Özellikle müşteri ve satış verilerini detaylı göster
            if (key === 'kardelen_portal_customers' || key === 'kardelen_portal_corporate_customers' || key === 'kardelen_portal_sales') {
              const parsedData = value ? JSON.parse(value) : null;
              console.log(`Parsing sonrası veri (${key}):`, parsedData);
            }
          } catch (e) {
            console.error(`"${key}" anahtarı için veri işlenirken hata:`, e);
          }
          console.log('---');
        }
      }
    };
    
    checkLocalStorage();
  }, []);

  // Mevcut aksesuarları getir
  const fetchAvailableAccessories = async (sale: Sale) => {
    try {
      setLoadingAccessories(true);
      // Satışın markasını bul
      const brand = brands.find(b => b.models?.some((m: any) => m.name === sale.model));
      if (!brand) {
        console.error('Marka bulunamadı:', sale.model);
        return;
      }
      
      // Modeli bul
      const model = brand.models?.find((m: any) => m.name === sale.model);
      if (!model) {
        console.error('Model bulunamadı:', sale.model);
        return;
      }
      
      const response = await fetch(`/api/accessories?brandId=${brand.id}&modelId=${model.id}`);
      if (response.ok) {
        const data = await response.json();
        setAvailableAccessories(data);
      } else {
        console.error('Aksesuarlar getirilemedi');
        setAvailableAccessories([]);
      }
    } catch (error) {
      console.error('Aksesuarlar yüklenirken hata:', error);
      setAvailableAccessories([]);
    } finally {
      setLoadingAccessories(false);
    }
  };

  // Vergi oranlarını API'den çekmek için fonksiyon
  const fetchTaxRates = async () => {
    setLoadingTaxRates(true);
    try {
      const response = await fetch('/api/taxRates');
      if (response.ok) {
        const data = await response.json();
        // API'den gelen vergi oranlarını ayarla
        if (data.vatRate !== undefined) {
          setVatRate(data.vatRate);
        }
        if (data.sctRate !== undefined) {
          setSctRate(data.sctRate);
        }
        console.log('Vergi oranları yüklendi:', data);
      } else {
        console.error('Vergi oranları yüklenemedi');
        // Varsayılan değerleri kullan
      }
    } catch (error) {
      console.error('Vergi oranları çekilirken hata:', error);
      // Varsayılan değerleri kullan
    } finally {
      setLoadingTaxRates(false);
    }
  };

  // Aksesuar ekleme modalını aç
  const openAccessoryModal = (sale: Sale) => {
    setSelectedSaleForAccessory(sale);
    setAccessoryForm({ accessoryId: '', name: '', price: 0 });
    setIsAccessoryModalOpen(true);
    // Seçili satışın marka ve modeline göre aksesuarları yükle
    fetchAvailableAccessories(sale);
  };

  // Aksesuar ekleme modalını kapat
  const closeAccessoryModal = () => {
    setSelectedSaleForAccessory(null);
    setAccessoryForm({ accessoryId: '', name: '', price: 0 });
    setAvailableAccessories([]);
    setIsAccessoryModalOpen(false);
  };

  // Aksesuar seçimi değiştiğinde
  const handleAccessorySelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const accessoryId = e.target.value;
    if (accessoryId) {
      const selectedAccessory = availableAccessories.find(acc => acc.id === accessoryId);
      if (selectedAccessory) {
        setAccessoryForm({
          accessoryId: accessoryId,
          name: selectedAccessory.name,
          price: 0 // Fiyat manuel girilecek
        });
      }
    } else {
      setAccessoryForm({ accessoryId: '', name: '', price: 0 });
    }
  };

  // Aksesuar form verilerini değiştir
  const handleAccessoryInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccessoryForm({
      ...accessoryForm,
      [name]: name === 'price' ? parseFormattedNumber(value) : value,
    });
  };

  // Aksesuar ekle
  const handleAddAccessory = async () => {
    if (!selectedSaleForAccessory) return;

    if (!accessoryForm.accessoryId || !accessoryForm.name.trim()) {
      alert('Lütfen bir aksesuar seçiniz.');
      return;
    }

    if (accessoryForm.price <= 0) {
      alert('Lütfen geçerli bir fiyat giriniz.');
      return;
    }

    try {
      // Marka bilgisini al
      const brand = brands.find(b => b.models?.some((m: any) => m.name === selectedSaleForAccessory.model));
      const brandName = brand?.name || 'Kardelen Otomotiv';

      // Paket bilgisini al
      const packageName = selectedSaleForAccessory.packageName || '';

      // Müşteri tam adını al
      const customerFullName = selectedSaleForAccessory.customerName || '';
      
      // Müşteri TC kimlik no bilgisini al
      const customerTcNo = selectedSaleForAccessory.identificationNumber || null;

      // Aksesuar satışını veritabanına kaydet
      const accessorySaleData = {
        customerName: customerFullName, // Tam ad+soyad olarak gönder
        customerTcNo: customerTcNo, // TC kimlik no
        vehicleBrand: brandName,
        vehicleModel: selectedSaleForAccessory.model,
        vehiclePackage: packageName,
        chassisNo: selectedSaleForAccessory.chassisNo,
        engineNo: selectedSaleForAccessory.engineNo,
        accessoryName: accessoryForm.name,
        accessoryPrice: accessoryForm.price,
        saleId: selectedSaleForAccessory.id.toString()
      };

      const response = await fetch('/api/accessory-sales', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(accessorySaleData),
      });

      if (!response.ok) {
        throw new Error('Aksesuar satışı kaydedilemedi');
      }

      // Yeni aksesuar oluştur - benzersiz ID için timestamp + rastgele sayı kullan
      const newAccessory: Accessory = {
        id: Date.now() + Math.floor(Math.random() * 10000), // Benzersiz ID için timestamp + rastgele sayı kullan
        saleId: selectedSaleForAccessory.id,
        name: accessoryForm.name,
        price: accessoryForm.price,
        date: new Date().toISOString()
      };

      // State'i güncelle
      const updatedAccessories = [...accessories, newAccessory];
      setAccessories(updatedAccessories);

      // LocalStorage'a kaydet
      localStorage.setItem('kardelen_portal_accessories', JSON.stringify(updatedAccessories));

      // Formu temizle ve yeni aksesuar eklemek için hazır hale getir
      setAccessoryForm({ accessoryId: '', name: '', price: 0 });

      // Başarılı mesajı göster
      alert('Aksesuar başarıyla eklendi ve kaydedildi.');
    } catch (error) {
      console.error('Aksesuar ekleme hatası:', error);
      alert('Aksesuar eklenirken bir hata oluştu.');
    }
  };

  // Aksesuar sil
  const handleDeleteAccessory = async (accessoryId: number) => {
    try {
      // Silinecek aksesuarı bul
      const accessoryToDelete = accessories.find(acc => acc.id === accessoryId);
      if (!accessoryToDelete) {
        alert('Aksesuar bulunamadı.');
        return;
      }

      // AccessorySale tablosundan da sil
      const response = await fetch('/api/accessory-sales', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          saleId: accessoryToDelete.saleId.toString(),
          accessoryName: accessoryToDelete.name
        }),
      });

      if (!response.ok) {
        console.warn('Aksesuar satışı veritabanından silinemedi, ancak yerel listeden kaldırılacak.');
      }

      // State'den aksesuarı kaldır
      const updatedAccessories = accessories.filter(acc => acc.id !== accessoryId);
      setAccessories(updatedAccessories);

      // LocalStorage'a kaydet
      localStorage.setItem('kardelen_portal_accessories', JSON.stringify(updatedAccessories));

      // Silme mesajı
      alert('Aksesuar silindi.');
    } catch (error) {
      console.error('Aksesuar silme hatası:', error);
      // Hata durumunda da yerel listeden kaldır
      const updatedAccessories = accessories.filter(acc => acc.id !== accessoryId);
      setAccessories(updatedAccessories);
      localStorage.setItem('kardelen_portal_accessories', JSON.stringify(updatedAccessories));
      alert('Aksesuar yerel listeden silindi, ancak veritabanı güncellemesinde hata oluştu.');
    }
  };

  // Satışa ait aksesuarları getir
  const getSaleAccessories = (saleId: number): Accessory[] => {
    return accessories.filter(acc => acc.saleId === saleId);
  };

  // Bakım ürünü modalını aç
  const openMaintenanceModal = (sale: Sale) => {
    setSelectedSaleForMaintenance(sale);
    setMaintenanceForm({ name: '', price: 0 });
    setIsMaintenanceModalOpen(true);
  };

  // Bakım ürünü modalını kapat
  const closeMaintenanceModal = () => {
    setSelectedSaleForMaintenance(null);
    setMaintenanceForm({ name: '', price: 0 });
    setIsMaintenanceModalOpen(false);
  };

  // Bakım ürünü form verilerini değiştir
  const handleMaintenanceInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMaintenanceForm({
      ...maintenanceForm,
      [name]: name === 'price' ? parseFormattedNumber(value) : value,
    });
  };

  // Bakım ürünü ekle
  const handleAddMaintenance = () => {
    if (!selectedSaleForMaintenance) return;

    if (!maintenanceForm.name.trim()) {
      alert('Lütfen bakım ürünü adını giriniz.');
      return;
    }

    // Yeni bakım ürünü oluştur - benzersiz ID için timestamp + rastgele sayı kullan
    const newMaintenanceItem: MaintenanceItem = {
      id: Date.now() + Math.floor(Math.random() * 10000), // Benzersiz ID için timestamp + rastgele sayı kullan
      saleId: selectedSaleForMaintenance.id,
      name: maintenanceForm.name,
      price: maintenanceForm.price,
      date: new Date().toISOString()
    };

    // State'i güncelle
    const updatedMaintenanceItems = [...maintenanceItems, newMaintenanceItem];
    setMaintenanceItems(updatedMaintenanceItems);

    // LocalStorage'a kaydet
    localStorage.setItem('kardelen_portal_maintenance', JSON.stringify(updatedMaintenanceItems));

    // Formu temizle ve yeni bakım ürünü eklemek için hazır hale getir
    setMaintenanceForm({ name: '', price: 0 });

    // Başarılı mesajı göster
    alert('Bakım ürünü başarıyla eklendi.');
  };

  // Bakım ürünü sil
  const handleDeleteMaintenance = (maintenanceId: number) => {
    // State'den bakım ürününü kaldır
    const updatedMaintenanceItems = maintenanceItems.filter(item => item.id !== maintenanceId);
    setMaintenanceItems(updatedMaintenanceItems);

    // LocalStorage'a kaydet
    localStorage.setItem('kardelen_portal_maintenance', JSON.stringify(updatedMaintenanceItems));

    // Silme mesajı
    alert('Bakım ürünü silindi.');
  };

  // Satışa ait bakım ürünlerini getir
  const getSaleMaintenanceItems = (saleId: number): MaintenanceItem[] => {
    return maintenanceItems.filter(item => item.saleId === saleId);
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

  // Kullanıcı yoksa boş sayfa döndür (useEffect zaten yönlendirme yapacak)
  if (!user) {
    return null;
  }

  // KDV miktarını hesaplama fonksiyonu
  const calculateVAT = (sale: Sale): number => {
    const contributionValue = sale.contributionAmount || 0; // Katkı tutarı yoksa 0 olarak kabul et
    const subtotal = sale.salePrice - contributionValue - sale.mtvCost - sale.licensePlateCost;
    const vatAmount = subtotal * vatRate;
    return vatAmount;
  };

  // ÖTV miktarını hesaplama fonksiyonu
  const calculateSCT = (sale: Sale): number => {
    // 1. Satış fiyatı - MTV - Plaka - KDV = Sonuç
    const vatAmount = calculateVAT(sale);
    const result = sale.salePrice - sale.mtvCost - sale.licensePlateCost - vatAmount;
    
    // 2. Sonuç / (1 + ÖTV oranı) = Matrah
    const matrah = result / (1 + sctRate);
    
    // 3. Sonuç - Matrah = ÖTV miktarı
    const sctAmount = result - matrah;
    
    return sctAmount;
  };

  // Matrah hesaplama fonksiyonu ekliyorum
  const calculateMatrah = (sale: Sale): number => {
    // 1. Satış fiyatı - MTV - Plaka - KDV = Sonuç
    const vatAmount = calculateVAT(sale);
    const result = sale.salePrice - sale.mtvCost - sale.licensePlateCost - vatAmount;
    
    // 2. Sonuç / (1 + ÖTV oranı) = Matrah
    const matrah = result / (1 + sctRate);
    
    return matrah;
  };

  // Kâr hesaplama fonksiyonu
  const calculateProfit = (sale: Sale): number => {
    return sale.salePrice - sale.purchasePrice - sale.contributionAmount - sale.mtvCost - sale.licensePlateCost;
  };

  return (
    <DashboardLayout username={user.name} onLogout={logout}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Satışlar</h1>
              <p className="mt-1 text-sm text-gray-500">Satış işlemleri ve kayıtları</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label htmlFor="month-select" className="text-sm font-medium text-gray-700">
                  Ay:
                </label>
                <select
                  id="month-select"
                  value={selectedMonth}
                  onChange={(e) => handleMonthChange(parseInt(e.target.value))}
                  className="block w-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value={1}>Ocak</option>
                  <option value={2}>Şubat</option>
                  <option value={3}>Mart</option>
                  <option value={4}>Nisan</option>
                  <option value={5}>Mayıs</option>
                  <option value={6}>Haziran</option>
                  <option value={7}>Temmuz</option>
                  <option value={8}>Ağustos</option>
                  <option value={9}>Eylül</option>
                  <option value={10}>Ekim</option>
                  <option value={11}>Kasım</option>
                  <option value={12}>Aralık</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <label htmlFor="year-select" className="text-sm font-medium text-gray-700">
                  Yıl:
                </label>
                <select
                  id="year-select"
                  value={selectedYear}
                  onChange={(e) => handleYearChange(parseInt(e.target.value))}
                  className="block w-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  {Array.from({ length: 15 }, (_, i) => {
                    const year = new Date().getFullYear() + 5 - i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
        
        {/* Analitik Kartlar */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Toplam Satış (Ay)
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      {formatCurrency(stats.totalSalesAmount)}
                    </div>
                    <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                      <svg className="self-center flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="sr-only">Artış</span>
                      {stats.monthlyChangePercent}%
                    </div>
                  </dd>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Satış Adedi (Ay)
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">{stats.salesCount}</div>
                    <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                      <svg className="self-center flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="sr-only">Artış</span>
                      20%
                    </div>
                  </dd>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Ortalama Satış Değeri
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      {formatCurrency(stats.averageSaleValue)}
                    </div>
                    <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                      <svg className="self-center flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="sr-only">Artış</span>
                      5%
                    </div>
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* İşlem Listesi */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Satış İşlemleri
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Son satış işlemleri ve detayları
              </p>
            </div>

          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Müşteri / Firma
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kimlik / Vergi No
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Marka
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Model
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Paket
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Satış Tarihi
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Satış Fiyatı
                  </th>
                  <th scope="col" className="relative px-4 py-3 w-52">
                    <span className="sr-only">İşlemler</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sales.length > 0 ? (
                  sales
                    // Önceden sıralanmış verileri doğrudan kullan (state içinde sıralandığı için)
                    .map((sale) => (
                      <tr key={sale.id} className="hover:bg-gray-50">
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              {sale.customerType === 'corporate' ? (
                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                  <span className="text-blue-600 font-medium">
                                    {sale.customerName.charAt(0)}
                                  </span>
                                </div>
                              ) : (
                                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                  <span className="text-indigo-600 font-medium">
                                    {sale.customerName.charAt(0)}
                                  </span>
                                </div>
                              )}
                            </div>
                            <div className="ml-4">
                              <div className="flex items-center">
                                <div className="text-sm font-medium text-gray-900">
                                  {sale.customerName}
                                </div>
                                {sale.customerType === 'corporate' ? (
                                  <span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                    Kurumsal
                                  </span>
                                ) : (
                                  <span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                                    Bireysel
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {sale.identificationNumber || "-"}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {brands.find(b => b.models?.some((m: any) => m.name === sale.model))?.name || 'Honda'}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {sale.model}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {sale.packageName || '-'}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{formatDate(sale.date)}</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{formatCurrency(sale.salePrice)}</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-right">
                          <div className="flex justify-end space-x-2">
                            <button 
                              className="text-gray-600 hover:text-gray-900 bg-gray-100 p-1.5 rounded-md text-xs"
                              onClick={() => openSaleDetailModal(sale)}
                              title="Detaylar"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </button>
                            <button 
                              className="text-gray-950 hover:text-gray-800 bg-indigo-50 p-1.5 rounded-md text-xs"
                              onClick={() => openEditModal(sale)}
                              title="Düzenle"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </button>
                            <button 
                              className="text-white hover:text-gray-100 bg-green-500 hover:bg-green-600 px-2 py-1 rounded-md text-xs flex items-center"
                              onClick={() => openAccessoryModal(sale)}
                              title="Aksesuar Ekle"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                              Aksesuar
                            </button>
                            <button 
                              className="text-white hover:text-gray-100 bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded-md text-xs flex items-center"
                              onClick={() => openMaintenanceModal(sale)}
                              title="Bakım Ürünü Ekle"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                              </svg>
                              Bakım
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                ) : (
                  <tr>
                    <td colSpan={8} className="px-4 py-6 text-center text-gray-500 italic">
                      Henüz kayıtlı satış işlemi bulunmamaktadır. Yeni satış eklemek için müşteri sayfasından işlem yapabilirsiniz.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Satış Detayı Modal */}
      {isModalOpen && selectedSale && (
        <div className="fixed inset-0 overflow-auto flex items-center justify-center z-50">
          {/* Arka plan overlay - beyaz, hafif transparan */}
          <div className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm" onClick={closeSaleDetailModal}></div>
          
          {/* Modal içeriği */}
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-5xl relative z-10">
            <div className="flex justify-between items-center mb-5 pb-3 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800">Satış Detayları</h2>
              <button onClick={closeSaleDetailModal} className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              {/* Sol Sütun */}
              <div className="space-y-6">
                {/* 1. Müşteri Bilgileri */}
                <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                  <h3 className="text-md font-semibold text-gray-700 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Müşteri Bilgileri
                  </h3>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    <div>
                      <p className="text-gray-500 text-xs mb-1">Müşteri Adı</p>
                      <div className="flex items-center">
                        <p className="font-medium text-gray-900">{selectedSale.customerName}</p>
                        <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${selectedSale.customerType === 'corporate' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                          {selectedSale.customerType === 'corporate' ? 'Kurumsal' : 'Bireysel'}
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-gray-500 text-xs mb-1">{selectedSale.customerType === 'corporate' ? 'Vergi No' : 'TC Kimlik No'}</p>
                      <p className="font-medium text-gray-900">{selectedSale.identificationNumber || '-'}</p>
                    </div>
                  </div>
                </div>
                
                {/* 2. Araç Bilgileri */}
                <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                  <h3 className="text-md font-semibold text-gray-700 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Araç Bilgileri
                  </h3>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    <div>
                      <p className="text-gray-500 text-xs mb-1">Model</p>
                      <p className="font-medium text-gray-900">
                        {selectedSale.packageName ? `${selectedSale.model} - ${selectedSale.packageName}` : selectedSale.model}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-gray-500 text-xs mb-1">Renk</p>
                      <p className="font-medium text-gray-900">{selectedSale.color}</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-500 text-xs mb-1">Şase No</p>
                      <p className="font-medium text-gray-900">{selectedSale.chassisNo}</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-500 text-xs mb-1">Motor No</p>
                      <p className="font-medium text-gray-900">{selectedSale.engineNo}</p>
                    </div>
                  </div>
                </div>
                
                {/* 3. Satış Bilgileri */}
                <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                  <h3 className="text-md font-semibold text-gray-700 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Satış Bilgileri
                  </h3>
                  <div className="grid grid-cols-3 gap-x-6 gap-y-3">
                    <div>
                      <p className="text-gray-500 text-xs mb-1">Satış Tarihi</p>
                      <p className="font-medium text-gray-900">{formatDate(selectedSale.date)}</p>
                    </div>
                     
                    <div>
                      <p className="text-gray-500 text-xs mb-1">Satış Fiyatı</p>
                      <p className="font-medium text-gray-900">{formatCurrency(selectedSale.salePrice)}</p>
                    </div>
                      
                    <div>
                      <p className="text-gray-500 text-xs mb-1">Alış Fiyatı</p>
                      <p className="font-medium text-gray-900">{formatCurrency(selectedSale.purchasePrice)}</p>
                    </div>
                      
                    <div>
                      <p className="text-gray-500 text-xs mb-1">Katkı Tutarı</p>
                      <p className="font-medium text-gray-900">{selectedSale.contributionAmount > 0 ? formatCurrency(selectedSale.contributionAmount) : "-"}</p>
                    </div>
                      
                    <div>
                      <p className="text-gray-500 text-xs mb-1">MTV</p>
                      <p className="font-medium text-gray-900">{formatCurrency(selectedSale.mtvCost)}</p>
                    </div>
                      
                    <div>
                      <p className="text-gray-500 text-xs mb-1">Plaka Masrafı</p>
                      <p className="font-medium text-gray-900">{formatCurrency(selectedSale.licensePlateCost)}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sağ Sütun */}
              <div className="space-y-6">
                {/* 4. Fiyat Detayları Bölümü */}
                <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                  <h3 className="text-md font-semibold text-gray-700 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Fiyat Detayları
                  </h3>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    <div>
                      <p className="text-gray-500 text-xs mb-1">Satış Fiyatı</p>
                      <div className="bg-blue-50 rounded px-2 py-1 inline-block">
                        <p className="font-bold text-blue-900">
                          {formatCurrency(
                            selectedSale.salePrice + 
                            getSaleAccessories(selectedSale.id).reduce((sum, acc) => sum + acc.price, 0) + 
                            getSaleMaintenanceItems(selectedSale.id).reduce((sum, item) => sum + item.price, 0)
                          )}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-gray-500 text-xs mb-1">ÖTV Matrahı</p>
                      <p className="font-medium text-gray-900">{formatCurrencyWithDecimals(calculateMatrah(selectedSale))}</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-500 text-xs mb-1">ÖTV Miktarı (%{(sctRate * 100).toFixed(0)})</p>
                      <p className="font-medium text-gray-900">{formatCurrencyWithDecimals(calculateSCT(selectedSale))}</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-500 text-xs mb-1">KDV Miktarı (%{(vatRate * 100).toFixed(0)})</p>
                      <p className="font-medium text-gray-900">{formatCurrencyWithDecimals(calculateVAT(selectedSale))}</p>
                      <p className="text-xs text-gray-500 mt-1 italic">
                        Formula: (Satış Fiyatı - Katkı Tutarı - MTV - Plaka) × KDV Oranı
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* 5. Ekstralar Bölümü */}
                <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                  <h3 className="text-md font-semibold text-gray-700 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Ekstralar
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {/* Aksesuarlar */}
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2 border-b border-gray-200 pb-1">Aksesuarlar</p>
                      {getSaleAccessories(selectedSale.id).length > 0 ? (
                        <div>
                          {getSaleAccessories(selectedSale.id).map(acc => (
                            <div key={acc.id} className="flex justify-between items-center text-sm py-1">
                              <span className="text-gray-800">{acc.name}</span>
                              <span className="font-medium text-gray-900">{formatCurrency(acc.price)}</span>
                            </div>
                          ))}
                          <div className="flex justify-end mt-2 pt-1 border-t border-gray-200">
                            <p className="font-semibold text-gray-900 bg-gray-100 px-2 py-1 rounded-md text-sm">
                              {formatCurrency(getSaleAccessories(selectedSale.id).reduce((sum, acc) => sum + acc.price, 0))}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-600 italic text-sm">Aksesuar eklenmemiş.</p>
                      )}
                    </div>
                    
                    {/* Bakım Ürünleri */}
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2 border-b border-gray-200 pb-1">Bakım Ürünleri</p>
                      {getSaleMaintenanceItems(selectedSale.id).length > 0 ? (
                        <div>
                          {getSaleMaintenanceItems(selectedSale.id).map(item => (
                            <div key={item.id} className="flex justify-between items-center text-sm py-1">
                              <span className="text-gray-800">{item.name}</span>
                              <span className="font-medium text-gray-900">{formatCurrency(item.price)}</span>
                            </div>
                          ))}
                          <div className="flex justify-end mt-2 pt-1 border-t border-gray-200">
                            <p className="font-semibold text-gray-900 bg-gray-100 px-2 py-1 rounded-md text-sm">
                              {formatCurrency(getSaleMaintenanceItems(selectedSale.id).reduce((sum, item) => sum + item.price, 0))}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-600 italic text-sm">Bakım ürünü eklenmemiş.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Düzenleme Modal */}
      {isEditModalOpen && editingSale && (
        <div className="fixed inset-0 overflow-auto flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm" onClick={closeEditModal}></div>
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-5xl relative z-10 my-8">
            <div className="flex justify-between items-center mb-5 pb-3 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800">Satış Bilgilerini Düzenle</h2>
              <button onClick={closeEditModal} className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-5 shadow-sm">
              <div className="sm:flex sm:items-start">
                <div className="w-full">
                  <form className="space-y-6">
                    <div className="grid grid-cols-6 gap-6">
                      {/* Marka Seçimi */}
                      <div className="sm:col-span-2">
                        <label htmlFor="brandId" className="block text-sm font-medium text-gray-700">
                          Marka <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1">
                          <select
                            id="brandId"
                            name="brandId"
                            value={selectedBrandId}
                            onChange={(e) => {
                              const brandId = e.target.value;
                              setSelectedBrandId(brandId);
                              setSelectedModelId('');
                              setEditFormData({
                                ...editFormData,
                                packageId: '',
                                mtvCost: 0,
                                licensePlateCost: 0
                              });
                              
                              if (brandId) {
                                const brand = brands.find((b: any) => b.id === brandId);
                                if (brand) {
                                  setModels(brand.models || []);
                                  setPackages([]);
                                }
                              } else {
                                setModels([]);
                                setPackages([]);
                              }
                            }}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                            required
                          >
                            <option value="">Marka Seçin</option>
                            {brands.map((brand: any) => (
                              <option key={brand.id} value={brand.id}>{brand.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      {/* Model Seçimi */}
                      <div className="sm:col-span-2">
                        <label htmlFor="modelId" className="block text-sm font-medium text-gray-700">
                          Model <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1">
                          <select
                            id="modelId"
                            name="modelId"
                            value={selectedModelId}
                            onChange={handleEditInputChange}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
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
                            value={editFormData.packageId || ''}
                            onChange={handleEditInputChange}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                            required
                          >
                            <option value="">Paket Seçin</option>
                            {packages.map((pkg: any) => (
                              <option key={pkg.id} value={pkg.id}>{pkg.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Şase Numarası */}
                      <div className="sm:col-span-3">
                        <label htmlFor="chassisNo" className="block text-sm font-medium text-gray-700">Şase No</label>
                        <input
                          type="text"
                          name="chassisNo"
                          id="chassisNo"
                          value={editFormData.chassisNo || ''}
                          onChange={handleEditInputChange}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                        />
                      </div>

                      {/* Motor Numarası */}
                      <div className="sm:col-span-3">
                        <label htmlFor="engineNo" className="block text-sm font-medium text-gray-700">Motor No</label>
                        <input
                          type="text"
                          name="engineNo"
                          id="engineNo"
                          value={editFormData.engineNo || ''}
                          onChange={handleEditInputChange}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                        />
                      </div>

                      {/* Renk */}
                      <div className="sm:col-span-3">
                        <label htmlFor="color" className="block text-sm font-medium text-gray-700">Renk</label>
                        <input
                          type="text"
                          name="color"
                          id="color"
                          value={editFormData.color || ''}
                          onChange={handleEditInputChange}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                        />
                      </div>

                      {/* Satış Tarihi */}
                      <div className="sm:col-span-3">
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Satış Tarihi</label>
                        <input
                          type="date"
                          name="date"
                          id="date"
                          value={editFormData.date ? new Date(editFormData.date).toISOString().split('T')[0] : ''}
                          onChange={handleEditInputChange}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                        />
                      </div>

                      {/* Satış Fiyatı */}
                      <div className="sm:col-span-2">
                        <label htmlFor="salePrice" className="block text-sm font-medium text-gray-700">Satış Fiyatı</label>
                        <input
                          type="text"
                          name="salePrice"
                          id="salePrice"
                          value={editFormData.salePrice === 0 ? '' : formatNumber(editFormData.salePrice || 0)}
                          onChange={handleEditInputChange}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                        />
                      </div>

                      {/* Alış Fiyatı */}
                      <div className="sm:col-span-2">
                        <label htmlFor="purchasePrice" className="block text-sm font-medium text-gray-700">Alış Fiyatı</label>
                        <input
                          type="text"
                          name="purchasePrice"
                          id="purchasePrice"
                          value={editFormData.purchasePrice === 0 ? '' : formatNumber(editFormData.purchasePrice || 0)}
                          onChange={handleEditInputChange}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                        />
                      </div>

                      {/* Katkı Tutarı */}
                      <div className="sm:col-span-2">
                        <label htmlFor="contributionAmount" className="block text-sm font-medium text-gray-700">Katkı Tutarı</label>
                        <input
                          type="text"
                          name="contributionAmount"
                          id="contributionAmount"
                          value={editFormData.contributionAmount === 0 ? '' : formatNumber(editFormData.contributionAmount || 0)}
                          onChange={handleEditInputChange}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                        />
                      </div>

                      {/* MTV */}
                      <div className="sm:col-span-3">
                        <label htmlFor="mtvCost" className="block text-sm font-medium text-gray-700">MTV Bedeli</label>
                        <input
                          type="text"
                          name="mtvCost"
                          id="mtvCost"
                          value={editFormData.mtvCost === 0 ? '' : formatNumber(editFormData.mtvCost || 0)}
                          onChange={handleEditInputChange}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950 bg-gray-50"
                          readOnly
                        />
                      </div>

                      {/* Plaka Masrafı */}
                      <div className="sm:col-span-3">
                        <label htmlFor="licensePlateCost" className="block text-sm font-medium text-gray-700">Plaka Masrafı</label>
                        <input
                          type="text"
                          name="licensePlateCost"
                          id="licensePlateCost"
                          value={editFormData.licensePlateCost === 0 ? '' : formatNumber(editFormData.licensePlateCost || 0)}
                          onChange={handleEditInputChange}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950 bg-gray-50"
                          readOnly
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <button
                type="button"
                className="px-4 py-2 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors font-medium text-sm flex items-center"
                onClick={handleDeleteSale}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Sil
              </button>
              <div className="flex space-x-3">
                <button
                  type="button"
                  className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors font-medium text-sm"
                  onClick={closeEditModal}
                >
                  İptal
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors font-medium text-sm flex items-center"
                  onClick={handleSaveEdit}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Aksesuar Ekleme Modalı */}
      {isAccessoryModalOpen && selectedSaleForAccessory && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Aksesuar Ekle
                    </h3>
                    <div className="mt-4">
                      <p className="text-sm text-gray-500 mb-4">
                        <strong>{selectedSaleForAccessory.customerName}</strong> müşterisine ait <strong>{brands.find(b => b.models?.some((m: any) => m.name === selectedSaleForAccessory.model))?.name || 'Honda'} {selectedSaleForAccessory.model}</strong> için aksesuar ekle
                      </p>
                      <form className="space-y-4">
                        <div>
                          <label htmlFor="accessory-select" className="block text-sm font-medium text-gray-700">
                            Aksesuar Seçin <span className="text-red-500">*</span>
                          </label>
                          {loadingAccessories ? (
                            <div className="mt-1 text-sm text-gray-500">Aksesuarlar yükleniyor...</div>
                          ) : availableAccessories.length > 0 ? (
                            <select
                              id="accessory-select"
                              value={accessoryForm.accessoryId}
                              onChange={handleAccessorySelection}
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950 bg-white"
                              required
                            >
                              <option value="">Aksesuar seçin</option>
                              {availableAccessories.map((accessory) => (
                                <option key={accessory.id} value={accessory.id}>
                                  {accessory.name}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <div className="mt-1 text-sm text-gray-500">
                              Bu marka ve model için tanımlı aksesuar bulunamadı.
                            </div>
                          )}
                        </div>
                        
                        {/* Seçilen aksesuar adını göster */}
                        {accessoryForm.name && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Seçilen Aksesuar
                            </label>
                            <div className="mt-1 text-sm text-gray-900 bg-gray-50 p-2 rounded-md">
                              {accessoryForm.name}
                            </div>
                          </div>
                        )}
                        <div>
                          <label htmlFor="accessory-price" className="block text-sm font-medium text-gray-700">
                            Fiyat <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="price"
                            id="accessory-price"
                            value={accessoryForm.price === 0 ? '' : formatNumber(accessoryForm.price)}
                            onChange={handleAccessoryInputChange}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950 bg-white"
                            placeholder="Fiyatı girin"
                            required
                          />
                        </div>

                        <div className="flex justify-end">
                          <button
                            type="button"
                            onClick={handleAddAccessory}
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Ekle
                          </button>
                        </div>
                      </form>

                      {/* Eklenen Aksesuarların Listesi */}
                      <div className="mt-6">
                        <h4 className="text-md font-medium text-gray-900 mb-2">Eklenen Aksesuarlar</h4>
                        {getSaleAccessories(selectedSaleForAccessory.id).length > 0 ? (
                          <div className="bg-gray-50 rounded-md p-2">
                            <ul className="divide-y divide-gray-200">
                              {getSaleAccessories(selectedSaleForAccessory.id).map((accessory) => (
                                <li key={accessory.id} className="py-2 flex justify-between items-center">
                                  <div>
                                    <p className="text-sm font-medium text-gray-900">{accessory.name}</p>
                                    <p className="text-sm text-gray-500">{formatCurrency(accessory.price)}</p>
                                  </div>
                                  <button
                                    onClick={() => handleDeleteAccessory(accessory.id)}
                                    className="text-red-500 hover:text-red-700"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <p className="text-sm text-gray-500 italic">Bu satış için henüz aksesuar eklenmemiş.</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={closeAccessoryModal}
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Müşteri Arama Modalı */}
      {isCustomerSearchModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Müşteri Ara ve Satış Yap
                    </h3>
                    <div className="mt-4">
                      <p className="text-sm text-gray-500 mb-4">
                        TC Kimlik No ile müşteri arayın ve satış işlemi yapın
                      </p>
                      
                      {/* Arama Formu */}
                      <div className="flex space-x-2 mb-4">
                        <input
                          type="text"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          onKeyPress={handleSearchKeyPress}
                          className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950 bg-white"
                          placeholder="TC Kimlik No giriniz"
                          maxLength={11}
                        />
                        <button
                          type="button"
                          onClick={handleCustomerSearch}
                          disabled={isSearching}
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
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
                          type="button"
                          onClick={handleClearSearch}
                          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Temizle
                        </button>
                      </div>

                      {/* Arama Mesajı */}
                      {searchMessage && (
                        <div className={`mb-4 p-3 rounded-md ${searchMessage.includes('başarıyla') ? 'bg-green-50 text-green-800' : searchMessage.includes('hata') ? 'bg-red-50 text-red-800' : 'bg-blue-50 text-blue-800'}`}>
                          {searchMessage}
                        </div>
                      )}

                      {/* Arama Sonuçları */}
                      {searchResults.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-md font-medium text-gray-900 mb-3">Arama Sonuçları</h4>
                          <div className="bg-gray-50 rounded-md p-4 max-h-96 overflow-y-auto">
                            <div className="space-y-3">
                              {searchResults.map((customer) => (
                                <div key={customer.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                  <div className="flex justify-between items-start">
                                    <div className="flex-1">
                                      <h5 className="text-sm font-medium text-gray-900">{customer.name}</h5>
                                      <p className="text-sm text-gray-500">TC: {customer.tcNo}</p>
                                      <p className="text-sm text-gray-500">Email: {customer.email}</p>
                                      <p className="text-sm text-gray-500">Telefon: {customer.phone}</p>
                                      <p className="text-sm text-gray-500">Meslek: {customer.occupation}</p>
                                      <p className="text-xs text-gray-400 mt-1">
                                        Kayıt: {new Date(customer.createdAt).toLocaleDateString('tr-TR')}
                                      </p>
                                    </div>
                                    <div className="ml-4 flex flex-col space-y-2">
                                      {customer.createdBy === Number(user?.id) ? (
                                        <button
                                          onClick={() => openSaleModal(customer)}
                                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                        >
                                          <svg className="-ml-0.5 mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                          </svg>
                                          Satış Yap
                                        </button>
                                      ) : (
                                        <button
                                          onClick={() => handleTransferCustomer(customer.id)}
                                          disabled={transferLoading === customer.id.toString()}
                                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                                        >
                                          {transferLoading === customer.id.toString() ? (
                                            <>
                                              <svg className="animate-spin -ml-0.5 mr-1 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                              </svg>
                                              Devralınıyor...
                                            </>
                                          ) : (
                                            <>
                                              <svg className="-ml-0.5 mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                              </svg>
                                              Müşteriyi Devral
                                            </>
                                          )}
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={closeCustomerSearchModal}
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Satış Modalı */}
      {isSaleModalOpen && selectedCustomerForSale && (
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
                      Yeni Satış - {selectedCustomerForSale.name}
                    </h3>
                    <div className="mt-4">
                      <p className="text-sm text-gray-500 mb-4">
                        TC: {selectedCustomerForSale.tcNo} | Email: {selectedCustomerForSale.email} | Telefon: {selectedCustomerForSale.phone}
                      </p>
                      
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Model</label>
                            <input
                              type="text"
                              value={saleFormData.model}
                              onChange={(e) => setSaleFormData({...saleFormData, model: e.target.value})}
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950 bg-white"
                              placeholder="Araç modeli"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Şasi No</label>
                            <input
                              type="text"
                              value={saleFormData.chassisNo}
                              onChange={(e) => setSaleFormData({...saleFormData, chassisNo: e.target.value})}
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950 bg-white"
                              placeholder="Şasi numarası"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Motor No</label>
                            <input
                              type="text"
                              value={saleFormData.engineNo}
                              onChange={(e) => setSaleFormData({...saleFormData, engineNo: e.target.value})}
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950 bg-white"
                              placeholder="Motor numarası"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Renk</label>
                            <input
                              type="text"
                              value={saleFormData.color}
                              onChange={(e) => setSaleFormData({...saleFormData, color: e.target.value})}
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950 bg-white"
                              placeholder="Araç rengi"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Satış Fiyatı</label>
                            <input
                              type="number"
                              value={saleFormData.salePrice}
                              onChange={(e) => setSaleFormData({...saleFormData, salePrice: parseFloat(e.target.value) || 0})}
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950 bg-white"
                              placeholder="Satış fiyatı"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Alış Fiyatı</label>
                            <input
                              type="number"
                              value={saleFormData.purchasePrice}
                              onChange={(e) => setSaleFormData({...saleFormData, purchasePrice: parseFloat(e.target.value) || 0})}
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950 bg-white"
                              placeholder="Alış fiyatı"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Katkı Payı</label>
                            <input
                              type="number"
                              value={saleFormData.contributionAmount}
                              onChange={(e) => setSaleFormData({...saleFormData, contributionAmount: parseFloat(e.target.value) || 0})}
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950 bg-white"
                              placeholder="Katkı payı"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">MTV Maliyeti</label>
                            <input
                              type="number"
                              value={saleFormData.mtvCost}
                              onChange={(e) => setSaleFormData({...saleFormData, mtvCost: parseFloat(e.target.value) || 0})}
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950 bg-white"
                              placeholder="MTV maliyeti"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Plaka Maliyeti</label>
                            <input
                              type="number"
                              value={saleFormData.licensePlateCost}
                              onChange={(e) => setSaleFormData({...saleFormData, licensePlateCost: parseFloat(e.target.value) || 0})}
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950 bg-white"
                              placeholder="Plaka maliyeti"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Satış Tarihi</label>
                            <input
                              type="date"
                              value={saleFormData.purchaseDate}
                              onChange={(e) => setSaleFormData({...saleFormData, purchaseDate: e.target.value})}
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950 bg-white"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    // Satış kaydetme işlemi burada yapılacak
                    console.log('Satış kaydediliyor:', saleFormData);
                    closeSaleModal();
                  }}
                >
                  Satışı Kaydet
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeSaleModal}
                >
                  İptal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bakım Ürünü Ekleme Modalı */}
      {isMaintenanceModalOpen && selectedSaleForMaintenance && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Bakım Ürünü Ekle
                    </h3>
                    <div className="mt-4">
                      <p className="text-sm text-gray-500 mb-4">
                        <strong>{selectedSaleForMaintenance.customerName}</strong> müşterisine ait <strong>{brands.find(b => b.models?.some((m: any) => m.name === selectedSaleForMaintenance.model))?.name || 'Honda'} {selectedSaleForMaintenance.model}</strong> için bakım ürünü ekle
                      </p>
                      <form className="space-y-4">
                        <div>
                          <label htmlFor="maintenance-name" className="block text-sm font-medium text-gray-700">
                            Bakım Ürünü Adı <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="maintenance-name"
                            value={maintenanceForm.name}
                            onChange={handleMaintenanceInputChange}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950 bg-white"
                            placeholder="Bakım ürününün adını girin"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="maintenance-price" className="block text-sm font-medium text-gray-700">
                            Fiyat <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="price"
                            id="maintenance-price"
                            value={maintenanceForm.price === 0 ? '' : formatNumber(maintenanceForm.price)}
                            onChange={handleMaintenanceInputChange}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950 bg-white"
                            placeholder="Fiyatı girin"
                            min="0"
                            required
                          />
                        </div>

                        <div className="flex justify-end">
                          <button
                            type="button"
                            onClick={handleAddMaintenance}
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Ekle
                          </button>
                        </div>
                      </form>

                      {/* Eklenen Bakım Ürünlerinin Listesi */}
                      <div className="mt-6">
                        <h4 className="text-md font-medium text-gray-900 mb-2">Eklenen Bakım Ürünleri</h4>
                        {getSaleMaintenanceItems(selectedSaleForMaintenance.id).length > 0 ? (
                          <div className="bg-gray-50 rounded-md p-2">
                            <ul className="divide-y divide-gray-200">
                              {getSaleMaintenanceItems(selectedSaleForMaintenance.id).map((item) => (
                                <li key={item.id} className="py-2 flex justify-between items-center">
                                  <div>
                                    <p className="text-sm font-medium text-gray-900">{item.name}</p>
                                    <p className="text-sm text-gray-500">{formatCurrency(item.price)}</p>
                                  </div>
                                  <button
                                    onClick={() => handleDeleteMaintenance(item.id)}
                                    className="text-red-500 hover:text-red-700"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <p className="text-sm text-gray-500 italic">Bu satış için henüz bakım ürünü eklenmemiş.</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={closeMaintenanceModal}
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
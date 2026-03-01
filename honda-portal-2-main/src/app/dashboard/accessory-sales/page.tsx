'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

// Aksesuar satışı arayüzü
interface AccessorySale {
  id: string;
  customerName: string;
  customerTcNo?: string | null;
  vehicleBrand: string;
  vehicleModel: string;
  vehiclePackage: string;
  licensePlate?: string | null;
  chassisNo?: string | null;
  engineNo?: string | null;
  accessoryName: string;
  accessoryPrice: number;
  saleDate: string;
  createdByUser: {
    name: string;
    username: string;
  };
  createdAt: string;
}

// Marka arayüzü
interface Brand {
  id: string;
  name: string;
}

const AccessorySalesPage = () => {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [accessorySales, setAccessorySales] = useState<AccessorySale[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingSale, setEditingSale] = useState<AccessorySale | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [brands, setBrands] = useState<Brand[]>([]);

  // Hibrit gruplama: Plaka varsa plakaya göre, yoksa şasi/motor no kombinasyonuna göre grupla
  const groupedSales = accessorySales.reduce((acc, sale) => {
    // Gruplama anahtarını belirle: plaka varsa plaka, yoksa şasi+motor kombinasyonu
    const key = sale.licensePlate || `${sale.chassisNo || 'N/A'}-${sale.engineNo || 'N/A'}`;
    
    if (!acc[key]) {
      acc[key] = {
        ...sale,
        accessories: [{ name: sale.accessoryName, price: sale.accessoryPrice }],
        totalPrice: sale.accessoryPrice,
        groupKey: key,
        groupType: sale.licensePlate ? 'licensePlate' : 'chassisEngine'
      };
    } else {
      acc[key].accessories.push({ name: sale.accessoryName, price: sale.accessoryPrice });
      acc[key].totalPrice += sale.accessoryPrice;
    }
    return acc;
  }, {} as Record<string, AccessorySale & { accessories: { name: string; price: number }[]; totalPrice: number; groupKey: string; groupType: 'licensePlate' | 'chassisEngine' }>);

  const groupedSalesArray = Object.values(groupedSales);

  // Kullanıcı kontrolü
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  // Aksesuar satışlarını yükle
  const fetchAccessorySales = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/accessory-sales', {
        headers: {
          'x-user-id': user?.id || ''
        }
      });
      
      if (!response.ok) {
        throw new Error('Aksesuar satışları yüklenemedi');
      }
      
      const data = await response.json();
      setAccessorySales(data);
      setError(null);
    } catch (error) {
      console.error('Aksesuar satışları yüklenirken hata:', error);
      setError('Aksesuar satışları yüklenirken bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  // Kullanıcının yetkili markalarını yükle
  const fetchBrands = async () => {
    try {
      const response = await fetch('/api/brands', {
        headers: {
          'x-user-id': user?.id || ''
        }
      });
      
      if (!response.ok) {
        throw new Error('Markalar yüklenemedi');
      }
      
      const data = await response.json();
      setBrands(data);
    } catch (error) {
      console.error('Markalar yüklenirken hata:', error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchAccessorySales();
      fetchBrands();
    }
  }, [user]);

  // Fiyat formatlama
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY'
    }).format(price);
  };

  // Tarih formatlama
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR');
  };

  // Düzenleme işlemi
  const handleEditSale = (sale: AccessorySale & { accessories: { name: string; price: number }[]; totalPrice: number }) => {
    setEditingSale(sale);
    setIsEditModalOpen(true);
  };

  // Düzenleme kaydetme
  const handleSaveEdit = async (updatedSale: AccessorySale) => {
    try {
      const response = await fetch('/api/accessory-sales', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': user?.id || ''
        },
        body: JSON.stringify(updatedSale),
      });

      if (!response.ok) {
        throw new Error('Aksesuar satışı güncellenemedi');
      }

      // Listeyi yenile
      await fetchAccessorySales();
      setIsEditModalOpen(false);
      setEditingSale(null);
    } catch (error) {
      console.error('Güncelleme hatası:', error);
      setError('Aksesuar satışı güncellenirken bir hata oluştu');
    }
  };

  // Yeni aksesuar satışı ekleme
  const handleAddSale = async (newSale: Omit<AccessorySale, 'id' | 'createdByUser' | 'createdAt'>) => {
    try {
      const response = await fetch('/api/accessory-sales', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': user?.id || ''
        },
        body: JSON.stringify(newSale),
      });

      if (!response.ok) {
        throw new Error('Aksesuar satışı eklenemedi');
      }

      // Listeyi yenile
      await fetchAccessorySales();
      setIsAddModalOpen(false);
    } catch (error) {
      console.error('Ekleme hatası:', error);
      setError('Aksesuar satışı eklenirken bir hata oluştu');
    }
  };

  // Aksesuar satışı silme
  const handleDeleteSale = async (saleId: string) => {
    if (!confirm('Bu aksesuar satışını silmek istediğinizden emin misiniz?')) {
      return;
    }

    try {
      const response = await fetch('/api/accessory-sales', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': user?.id || ''
        },
        body: JSON.stringify({ id: saleId }),
      });

      if (!response.ok) {
        throw new Error('Aksesuar satışı silinemedi');
      }

      // Listeyi yenile
      await fetchAccessorySales();
    } catch (error) {
      console.error('Silme hatası:', error);
      setError('Aksesuar satışı silinirken bir hata oluştu');
    }
  };

  if (loading || isLoading) {
    return (
      <div className="p-6">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      </div>
    );
  }

  return (
    <DashboardLayout username={user?.name || ''} userRole={user?.role} onLogout={logout}>
      <div className="p-6">
        <div className="mb-6 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-950">Aksesuar Satışları</h1>
            <p className="text-gray-600 mt-2">
              Satış işlemlerinde eklenen aksesuarların listesi ve detayları.
            </p>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Aksesuar Ekle
          </button>
        </div>

        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {/* Düzenleme Modal */}
        {isEditModalOpen && editingSale && (
          <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <h3 className="text-lg font-medium text-gray-950 mb-4">
                  Aksesuar Satışını Düzenle
                </h3>
                <form onSubmit={(e) => {
                   e.preventDefault();
                   const formData = new FormData(e.target as HTMLFormElement);
                   const licensePlate = formData.get('licensePlate') as string;
                   const chassisNo = formData.get('chassisNo') as string;
                   const engineNo = formData.get('engineNo') as string;
                   
                   // Hibrit validasyon: Plaka VEYA (şasi ve motor no) zorunlu
                   if (!licensePlate && (!chassisNo || !engineNo)) {
                     alert('Plaka numarası VEYA şasi ve motor numarası gereklidir');
                     return;
                   }
                   
                   const updatedSale = {
                     ...editingSale,
                     customerName: formData.get('customerName') as string,
                     vehicleBrand: formData.get('vehicleBrand') as string,
                     vehicleModel: formData.get('vehicleModel') as string,
                     vehiclePackage: formData.get('vehiclePackage') as string,
                     licensePlate: licensePlate || null,
                     chassisNo: chassisNo || null,
                     engineNo: engineNo || null,
                     accessoryName: formData.get('accessoryName') as string,
                     accessoryPrice: parseFloat(formData.get('accessoryPrice') as string),
                     saleDate: formData.get('saleDate') as string,
                   };
                   handleSaveEdit(updatedSale);
                 }}>
                   <div className="space-y-4">
                     <div className="grid grid-cols-2 gap-4">
                       <div>
                         <label className="block text-sm font-medium text-gray-700">Aksesuar Adı</label>
                         <input
                           type="text"
                           name="customerName"
                           defaultValue={editingSale.customerName}
                           placeholder="Örn: Ahmet Yılmaz"
                           className="mt-1 block w-full border border-gray-400 rounded-md px-3 py-2"
                           required
                         />
                       </div>

                     </div>
                     <div className="grid grid-cols-2 gap-4">
                       <div>
                         <label className="block text-sm font-medium text-gray-700">Araç Markası</label>
                         <select
                           name="vehicleBrand"
                           defaultValue={editingSale.vehicleBrand}
                           className="mt-1 block w-full border border-gray-400 rounded-md px-3 py-2"
                           required
                         >
                           <option value="">Marka Seçiniz</option>
                           {brands.map((brand) => (
                             <option key={brand.id} value={brand.name}>
                               {brand.name}
                             </option>
                           ))}
                         </select>
                       </div>
                       <div>
                         <label className="block text-sm font-medium text-gray-700">Araç Modeli</label>
                         <input
                           type="text"
                           name="vehicleModel"
                           defaultValue={editingSale.vehicleModel}
                           className="mt-1 block w-full border border-gray-400 rounded-md px-3 py-2"
                           required
                         />
                       </div>
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700">Araç Paketi</label>
                       <input
                         type="text"
                         name="vehiclePackage"
                         defaultValue={editingSale.vehiclePackage}
                         className="mt-1 block w-full border border-gray-400 rounded-md px-3 py-2"
                       />
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700">Plaka (Opsiyonel)</label>
                       <input
                         type="text"
                         name="licensePlate"
                         defaultValue={editingSale.licensePlate || ''}
                         className="mt-1 block w-full border border-gray-400 rounded-md px-3 py-2"
                         placeholder="Plaka numarası veya şasi/motor no giriniz"
                       />
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                       <div>
                         <label className="block text-sm font-medium text-gray-700">Şasi No (Opsiyonel)</label>
                         <input
                           type="text"
                           name="chassisNo"
                           defaultValue={editingSale.chassisNo || ''}
                           className="mt-1 block w-full border border-gray-400 rounded-md px-3 py-2"
                         />
                       </div>
                       <div>
                         <label className="block text-sm font-medium text-gray-700">Motor No (Opsiyonel)</label>
                         <input
                           type="text"
                           name="engineNo"
                           defaultValue={editingSale.engineNo || ''}
                           className="mt-1 block w-full border border-gray-400 rounded-md px-3 py-2"
                           required
                         />
                       </div>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                       <div>
                         <label className="block text-sm font-medium text-gray-700">Müşteri Adı Soyadı</label>
                         <input
                           type="text"
                           name="accessoryName"
                           defaultValue={editingSale.accessoryName}
                           className="mt-1 block w-full border border-gray-400 rounded-md px-3 py-2"
                           required
                         />
                       </div>
                       <div>
                         <label className="block text-sm font-medium text-gray-700">Aksesuar Fiyatı</label>
                         <input
                           type="number"
                           step="0.01"
                           name="accessoryPrice"
                           defaultValue={editingSale.accessoryPrice}
                           className="mt-1 block w-full border border-gray-400 rounded-md px-3 py-2"
                           required
                         />
                       </div>
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700">Satış Tarihi</label>
                       <input
                         type="date"
                         name="saleDate"
                         defaultValue={editingSale.saleDate}
                         className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                         required
                       />
                     </div>
                   </div>
                   <div className="mt-6 flex justify-end space-x-3">
                     <button
                        type="button"
                        onClick={() => setIsEditModalOpen(false)}
                        className="px-4 py-2 border border-gray-400 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        İptal
                      </button>
                     <button
                       type="submit"
                       className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                     >
                       Kaydet
                     </button>
                   </div>
                 </form>
              </div>
            </div>
          </div>
        )}

        {/* Yeni Aksesuar Ekleme Modal */}
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                &#8203;
              </span>

              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-950">Yeni Aksesuar Satışı Ekle</h3>
                  <button
                    onClick={() => setIsAddModalOpen(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <form onSubmit={(e) => {
                   e.preventDefault();
                   const formData = new FormData(e.target as HTMLFormElement);
                   const licensePlate = formData.get('licensePlate') as string;
                   const chassisNo = formData.get('chassisNo') as string;
                   const engineNo = formData.get('engineNo') as string;
                   
                   // Hibrit validasyon: Plaka VEYA (şasi ve motor no) zorunlu
                   if (!licensePlate && (!chassisNo || !engineNo)) {
                     alert('Plaka numarası VEYA şasi ve motor numarası gereklidir');
                     return;
                   }
                   
                   const newSale = {
                     customerName: formData.get('customerName') as string,
                     vehicleBrand: formData.get('vehicleBrand') as string,
                     vehicleModel: formData.get('vehicleModel') as string,
                     vehiclePackage: formData.get('vehiclePackage') as string,
                     licensePlate: licensePlate || null,
                     chassisNo: chassisNo || null,
                     engineNo: engineNo || null,
                     accessoryName: formData.get('accessoryName') as string,
                     accessoryPrice: parseFloat(formData.get('accessoryPrice') as string),
                     saleDate: formData.get('saleDate') as string,
                   };
                   handleAddSale(newSale);
                 }}>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Müşteri Adı Soyadı</label>
                        <input
                          type="text"
                          name="customerName"
                          placeholder="Örn: Ahmet Yılmaz"
                          className="mt-1 block w-full border border-gray-400 rounded-md px-3 py-2"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Araç Markası</label>
                          <select
                            name="vehicleBrand"
                            className="mt-1 block w-full border border-gray-400 rounded-md px-3 py-2"
                            required
                          >
                            <option value="">Marka Seçiniz</option>
                            {brands.map((brand) => (
                              <option key={brand.id} value={brand.name}>
                                {brand.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Araç Modeli</label>
                          <input
                            type="text"
                            name="vehicleModel"
                            className="mt-1 block w-full border border-gray-400 rounded-md px-3 py-2"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Araç Paketi</label>
                        <input
                          type="text"
                          name="vehiclePackage"
                          className="mt-1 block w-full border border-gray-400 rounded-md px-3 py-2"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Plaka (Opsiyonel)</label>
                        <input
                          type="text"
                          name="licensePlate"
                          className="mt-1 block w-full border border-gray-400 rounded-md px-3 py-2"
                          placeholder="Plaka numarası veya şasi/motor no giriniz"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Şasi No (Opsiyonel)</label>
                          <input
                            type="text"
                            name="chassisNo"
                            className="mt-1 block w-full border border-gray-400 rounded-md px-3 py-2"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Motor No (Opsiyonel)</label>
                          <input
                            type="text"
                            name="engineNo"
                            className="mt-1 block w-full border border-gray-400 rounded-md px-3 py-2"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Aksesuar Adı</label>
                          <input
                            type="text"
                            name="accessoryName"
                            className="mt-1 block w-full border border-gray-400 rounded-md px-3 py-2"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Aksesuar Fiyatı</label>
                          <input
                            type="number"
                            step="0.01"
                            name="accessoryPrice"
                            className="mt-1 block w-full border border-gray-400 rounded-md px-3 py-2"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Satış Tarihi</label>
                        <input
                          type="date"
                          name="saleDate"
                          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end space-x-3">
                      <button
                        type="button"
                        onClick={() => setIsAddModalOpen(false)}
                        className="px-4 py-2 border border-gray-400 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        İptal
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Ekle
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          {groupedSalesArray.length === 0 ? (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-950">
                Henüz aksesuar satışı bulunmuyor
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Satış işlemlerinde aksesuar eklendiğinde burada görüntülenecektir.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Müşteri Bilgileri
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Araç Bilgileri
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Aksesuarlar
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Toplam Fiyat
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Satış Tarihi
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Satış Yapan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      İşlemler
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {groupedSalesArray.map((sale) => (
                    <tr key={sale.groupKey} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-950">
                          {sale.customerName}
                        </div>
                        {sale.customerTcNo && (
                          <div className="text-xs text-gray-500">
                            TC: {sale.customerTcNo}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-950">
                          <div className="font-medium">{sale.vehicleBrand} {sale.vehicleModel}</div>
                          {sale.vehiclePackage && (
                            <div className="text-gray-500">{sale.vehiclePackage}</div>
                          )}
                          <div className="text-xs text-gray-500 mt-1">
                            {sale.groupType === 'licensePlate' ? (
                              <>
                                <span className="font-medium text-blue-600">Plaka: {sale.licensePlate}</span><br />
                                {sale.chassisNo && `Şasi: ${sale.chassisNo}`}
                                {sale.chassisNo && sale.engineNo && <br />}
                                {sale.engineNo && `Motor: ${sale.engineNo}`}
                              </>
                            ) : (
                              <>
                                <span className="font-medium text-green-600">Şasi: {sale.chassisNo || 'N/A'}</span><br />
                                <span className="font-medium text-green-600">Motor: {sale.engineNo || 'N/A'}</span><br />
                                {sale.licensePlate && `Plaka: ${sale.licensePlate}`}
                              </>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          {sale.accessories.map((accessory, index) => (
                            <div key={index} className="flex justify-between items-center">
                              <span className="text-sm text-gray-950">{accessory.name}</span>
                              <span className="text-sm text-gray-600 ml-2">{formatPrice(accessory.price)}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-green-600">
                          {formatPrice(sale.totalPrice)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(sale.saleDate)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-950">
                          {sale.createdByUser.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          @{sale.createdByUser.username}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => handleEditSale(sale)}
                          className="text-indigo-600 hover:text-indigo-900 mr-3"
                        >
                          Düzenle
                        </button>
                        <button
                          onClick={() => handleDeleteSale(sale.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Sil
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* İstatistikler */}
        {groupedSalesArray.length > 0 && (
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Toplam Araç Sayısı
                      </dt>
                      <dd className="text-lg font-medium text-gray-950">
                        {groupedSalesArray.length}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Toplam Ciro
                      </dt>
                      <dd className="text-lg font-medium text-gray-950">
                        {formatPrice(groupedSalesArray.reduce((total, sale) => total + sale.totalPrice, 0))}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Ortalama Aksesuar Fiyatı
                      </dt>
                      <dd className="text-lg font-medium text-gray-950">
                        {formatPrice(groupedSalesArray.reduce((total, sale) => total + sale.totalPrice, 0) / groupedSalesArray.length)}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AccessorySalesPage;
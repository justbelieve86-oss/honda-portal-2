module.exports = {

"[project]/src/app/dashboard/admin/vehicle-management/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>VehicleManagementPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/AuthContext.tsx [app-ssr] (ecmascript)");
;
'use client';
;
;
;
;
;
// Lazy load heavy components
const DashboardLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/app/components/dashboard/DashboardLayout.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/components/dashboard/DashboardLayout.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                lineNumber: 10,
                columnNumber: 81
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
            lineNumber: 10,
            columnNumber: 18
        }, this),
    ssr: false
});
function VehicleManagementPage() {
    const { user, loading, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [brands, setBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedTab, setSelectedTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('brands');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [csrfToken, setCsrfToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Bakım ürünleri state'leri
    const [maintenanceProducts, setMaintenanceProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newMaintenanceProduct, setNewMaintenanceProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        description: ''
    });
    const [editMaintenanceProductId, setEditMaintenanceProductId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [maintenancePagination, setMaintenancePagination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        page: 1,
        limit: 10,
        total: 0,
        pages: 0
    });
    // Sayı formatı yardımcı fonksiyonları
    const formatNumber = (value)=>{
        if (value === '' || value === 0) return '';
        const numValue = typeof value === 'string' ? parseFloat(value) : value;
        if (isNaN(numValue)) return '';
        return numValue.toLocaleString('tr-TR');
    };
    const parseFormattedNumber = (value)=>{
        if (!value) return 0;
        const cleanValue = value.replace(/\./g, '').replace(',', '.');
        const parsed = parseFloat(cleanValue);
        return isNaN(parsed) ? 0 : parsed;
    };
    // Form state
    const [newBrand, setNewBrand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: ''
    });
    const [newModel, setNewModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        brandId: ''
    });
    const [newPackage, setNewPackage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        modelId: '',
        mtvAmount: 0,
        plakaMasrafi: 0
    });
    const [newAccessory, setNewAccessory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        brandId: '',
        modelId: ''
    });
    // Aksesuar için seçili marka state
    const [selectedAccessoryBrand, setSelectedAccessoryBrand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [accessories, setAccessories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Seçili öğe state
    const [selectedBrand, setSelectedBrand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedModel, setSelectedModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editBrandId, setEditBrandId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editModelId, setEditModelId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editPackageId, setEditPackageId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editBrandName, setEditBrandName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [editModelName, setEditModelName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [editPackage, setEditPackage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        mtvAmount: 0,
        plakaMasrafi: 0
    });
    // Kullanıcı oturum açmamışsa login sayfasına yönlendir
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!loading) {
            if (!user) {
                router.push('/');
            } else if (user.role !== 'ADMIN') {
                // Admin değilse normal dashboard'a yönlendir
                router.push('/dashboard');
            }
        }
    }, [
        user,
        loading,
        router
    ]);
    // CSRF token'ını al
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchCsrfToken = async ()=>{
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (user?.role === 'ADMIN') {
            fetchBrands();
            fetchAccessories();
            fetchMaintenanceProducts();
        }
    }, [
        user
    ]);
    // Markaları getir
    const fetchBrands = async ()=>{
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
            const safeData = data.map((brand)=>({
                    ...brand,
                    models: brand.models || []
                }));
            setBrands(safeData);
        } catch (error) {
            console.error('Markalar yüklenirken hata oluştu:', error);
            alert('Markalar yüklenirken bir hata oluştu!');
        } finally{
            setIsLoading(false);
        }
    };
    // Aksesuarları getir
    const fetchAccessories = async ()=>{
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
    const fetchMaintenanceProducts = async ()=>{
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
    const handleAddBrand = async ()=>{
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
                body: JSON.stringify({
                    name: newBrand.name
                })
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
            setBrands([
                ...brands,
                responseData
            ]);
            setNewBrand({
                name: ''
            });
            alert('Marka başarıyla eklendi');
        } catch (error) {
            console.error('Marka eklenirken hata detayı:', error);
            alert(`Marka eklenirken bir hata oluştu: ${error.message}`);
        }
    };
    // API için model ekleme fonksiyonu
    const handleAddModel = async ()=>{
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
                })
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Model eklenirken bir hata oluştu');
            }
            const model = await response.json();
            // Model eklendikten sonra markalar listesini güncelle
            fetchBrands();
            setNewModel({
                name: '',
                brandId: newModel.brandId
            });
        } catch (error) {
            console.error('Model eklenirken hata:', error);
            alert(error.message || 'Model eklenirken bir hata oluştu');
        }
    };
    // API için paket ekleme fonksiyonu
    const handleAddPackage = async ()=>{
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
                })
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
        } catch (error) {
            console.error('Paket eklenirken hata:', error);
            alert(error.message || 'Paket eklenirken bir hata oluştu');
        }
    };
    // API için aksesuar ekleme fonksiyonu
    const handleAddAccessory = async ()=>{
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
                    'X-CSRF-Token': csrfToken
                },
                body: JSON.stringify({
                    name: newAccessory.name,
                    brandId: newAccessory.brandId,
                    modelId: newAccessory.modelId
                })
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Aksesuar eklenirken bir hata oluştu');
            }
            const newAccessoryItem = await response.json();
            setAccessories([
                ...accessories,
                newAccessoryItem
            ]);
            setNewAccessory({
                name: '',
                brandId: '',
                modelId: ''
            });
            setSelectedAccessoryBrand('');
            alert('Aksesuar başarıyla eklendi');
        } catch (error) {
            console.error('Aksesuar eklenirken hata:', error);
            alert(error.message || 'Aksesuar eklenirken bir hata oluştu');
        }
    };
    // Düzenleme için marka seçme
    const handleEditBrand = (brand)=>{
        setEditBrandId(brand.id);
        setEditBrandName(brand.name);
    };
    // Düzenleme için model seçme
    const handleEditModel = (model)=>{
        setEditModelId(model.id);
        setEditModelName(model.name);
    };
    // Düzenleme için paket seçme
    const handleEditPackage = (pkg)=>{
        setEditPackageId(pkg.id);
        setEditPackage({
            name: pkg.name,
            mtvAmount: pkg.mtvAmount,
            plakaMasrafi: pkg.plakaMasrafi || 0
        });
    };
    // API için marka güncelleme
    const handleUpdateBrand = async ()=>{
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
                body: JSON.stringify({
                    name: editBrandName
                })
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Marka güncellenirken bir hata oluştu');
            }
            // Marka güncellendikten sonra markalar listesini güncelle
            fetchBrands();
            setEditBrandId(null);
            setEditBrandName('');
        } catch (error) {
            console.error('Marka güncellenirken hata:', error);
            alert(error.message || 'Marka güncellenirken bir hata oluştu');
        }
    };
    // API için model güncelleme
    const handleUpdateModel = async ()=>{
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
                body: JSON.stringify({
                    name: editModelName
                })
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Model güncellenirken bir hata oluştu');
            }
            // Model güncellendikten sonra markalar listesini güncelle
            fetchBrands();
            setEditModelId(null);
            setEditModelName('');
        } catch (error) {
            console.error('Model güncellenirken hata:', error);
            alert(error.message || 'Model güncellenirken bir hata oluştu');
        }
    };
    // API için paket güncelleme
    const handleUpdatePackage = async ()=>{
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
                body: JSON.stringify(editPackage)
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
        } catch (error) {
            console.error('Paket güncellenirken hata:', error);
            alert(error.message || 'Paket güncellenirken bir hata oluştu');
        }
    };
    // API için marka silme
    const handleDeleteBrand = async (brandId)=>{
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
                    body: JSON.stringify({
                        brandId
                    })
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
            } catch (error) {
                console.error('Marka silinirken hata detayı:', error);
                alert(`Marka silinirken bir hata oluştu: ${error.message}`);
            }
        }
    };
    // API için model silme
    const handleDeleteModel = async (modelId)=>{
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
                    body: JSON.stringify({
                        modelId
                    })
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
            } catch (error) {
                console.error('Model silinirken hata detayı:', error);
                alert(`Model silinirken bir hata oluştu: ${error.message}`);
            }
        }
    };
    // API için paket silme
    const handleDeletePackage = async (packageId)=>{
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
                    body: JSON.stringify({
                        packageId
                    })
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
            } catch (error) {
                console.error('Paket silinirken hata detayı:', error);
                alert(`Paket silinirken bir hata oluştu: ${error.message}`);
            }
        }
    };
    // Yükleme durumunda yükleniyor göster
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                    lineNumber: 736,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "ml-3 text-lg",
                    children: "Yükleniyor..."
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                    lineNumber: 737,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
            lineNumber: 735,
            columnNumber: 7
        }, this);
    }
    // Kullanıcı yoksa veya admin değilse boş sayfa döndür (useEffect zaten yönlendirme yapacak)
    if (!user || user.role !== 'ADMIN') {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardLayout, {
        username: user.name,
        userRole: user.role,
        onLogout: logout,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-gray-800",
                            children: "Araç Bilgileri Yönetimi"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                            lineNumber: 751,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-sm text-gray-700",
                            children: "Araç marka, model, paket ve vergi bilgilerini yönetin"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                            lineNumber: 752,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                    lineNumber: 750,
                    columnNumber: 9
                }, this),
                isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center h-96",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                            lineNumber: 759,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "ml-3 text-lg",
                            children: "Veriler yükleniyor..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                            lineNumber: 760,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                    lineNumber: 758,
                    columnNumber: 11
                }, this) : // Tab Menüsü
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b border-gray-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "-mb-px flex space-x-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedTab('brands'),
                                className: `whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${selectedTab === 'brands' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`,
                                children: "Markalar"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                lineNumber: 766,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedTab('models'),
                                className: `whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${selectedTab === 'models' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`,
                                children: "Modeller"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                lineNumber: 776,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedTab('packages'),
                                className: `whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${selectedTab === 'packages' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`,
                                children: "Paketler ve Vergi Bilgileri"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                lineNumber: 786,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedTab('accessories'),
                                className: `whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${selectedTab === 'accessories' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`,
                                children: "Aksesuarlar"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                lineNumber: 796,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedTab('maintenance'),
                                className: `whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${selectedTab === 'maintenance' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`,
                                children: "Bakım Ürünleri"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                lineNumber: 806,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                        lineNumber: 765,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                    lineNumber: 764,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6",
                    children: [
                        selectedTab === 'brands' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:grid md:grid-cols-3 md:gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-medium leading-6 text-gray-950",
                                                        children: "Yeni Marka Ekle"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                        lineNumber: 828,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-sm text-gray-700",
                                                        children: "Sisteme yeni bir araç markası ekleyin."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                        lineNumber: 829,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                lineNumber: 827,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-5 md:mt-0 md:col-span-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-6 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-span-6 sm:col-span-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "brand-name",
                                                                    className: "block text-sm font-medium text-gray-950",
                                                                    children: "Marka Adı"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 836,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "brand-name",
                                                                    id: "brand-name",
                                                                    value: newBrand.name,
                                                                    onChange: (e)=>setNewBrand({
                                                                            name: e.target.value
                                                                        }),
                                                                    className: "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md text-gray-800"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 839,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                            lineNumber: 835,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-span-6",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: handleAddBrand,
                                                                className: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                                                children: "Marka Ekle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                lineNumber: 849,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                            lineNumber: 848,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                    lineNumber: 834,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                lineNumber: 833,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                        lineNumber: 826,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                    lineNumber: 825,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white shadow overflow-hidden sm:rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-5 sm:px-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg leading-6 font-medium text-gray-950",
                                                    children: "Markalar"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                    lineNumber: 865,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 max-w-2xl text-sm text-gray-700",
                                                    children: "Sistemdeki tüm araç markaları"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                    lineNumber: 866,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                            lineNumber: 864,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-gray-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                role: "list",
                                                className: "divide-y divide-gray-200",
                                                children: brands.map((brand)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "px-4 py-4 sm:px-6",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                editBrandId === brand.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center space-x-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            value: editBrandName,
                                                                            onChange: (e)=>setEditBrandName(e.target.value),
                                                                            className: "text-sm border-gray-400 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                            lineNumber: 875,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: handleUpdateBrand,
                                                                            className: "inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                                                            children: "Kaydet"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                            lineNumber: 881,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>setEditBrandId(null),
                                                                            className: "inline-flex items-center px-2 py-1 border border-gray-400 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                                                            children: "İptal"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                            lineNumber: 887,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 874,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-medium text-indigo-600 truncate",
                                                                    children: brand.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 895,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "ml-2 flex items-center space-x-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",
                                                                            children: [
                                                                                brand.models?.length || 0,
                                                                                " Model"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                            lineNumber: 898,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        editBrandId !== brand.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleEditBrand(brand),
                                                                                    className: "inline-flex items-center p-1 border border-transparent rounded-full text-indigo-600 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        className: "h-4 w-4",
                                                                                        fill: "none",
                                                                                        viewBox: "0 0 24 24",
                                                                                        stroke: "currentColor",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                            strokeLinecap: "round",
                                                                                            strokeLinejoin: "round",
                                                                                            strokeWidth: 2,
                                                                                            d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                            lineNumber: 908,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                        lineNumber: 907,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                    lineNumber: 903,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleDeleteBrand(brand.id),
                                                                                    className: "inline-flex items-center p-1 border border-transparent rounded-full text-red-600 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        className: "h-4 w-4",
                                                                                        fill: "none",
                                                                                        viewBox: "0 0 24 24",
                                                                                        stroke: "currentColor",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                            strokeLinecap: "round",
                                                                                            strokeLinejoin: "round",
                                                                                            strokeWidth: 2,
                                                                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                            lineNumber: 916,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                        lineNumber: 915,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                    lineNumber: 911,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 897,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                            lineNumber: 872,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, brand.id, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                        lineNumber: 871,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                lineNumber: 869,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                            lineNumber: 868,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                    lineNumber: 863,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                            lineNumber: 824,
                            columnNumber: 13
                        }, this),
                        selectedTab === 'models' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:grid md:grid-cols-3 md:gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-medium leading-6 text-gray-950",
                                                        children: "Yeni Model Ekle"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                        lineNumber: 937,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-sm text-gray-700",
                                                        children: "Markaya ait yeni bir model ekleyin."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                        lineNumber: 938,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                lineNumber: 936,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-5 md:mt-0 md:col-span-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-6 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-span-6 sm:col-span-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "brand-id",
                                                                    className: "block text-sm font-medium text-gray-950",
                                                                    children: "Marka"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 945,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    id: "brand-id",
                                                                    name: "brand-id",
                                                                    value: newModel.brandId,
                                                                    onChange: (e)=>setNewModel({
                                                                            ...newModel,
                                                                            brandId: e.target.value
                                                                        }),
                                                                    className: "mt-1 block w-full py-2 px-3 border border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-800",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "Marka Seçin"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                            lineNumber: 955,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        brands.map((brand)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: brand.id,
                                                                                children: brand.name
                                                                            }, brand.id, false, {
                                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                lineNumber: 957,
                                                                                columnNumber: 29
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 948,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                            lineNumber: 944,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-span-6 sm:col-span-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "model-name",
                                                                    className: "block text-sm font-medium text-gray-950",
                                                                    children: "Model Adı"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 964,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "model-name",
                                                                    id: "model-name",
                                                                    value: newModel.name,
                                                                    onChange: (e)=>setNewModel({
                                                                            ...newModel,
                                                                            name: e.target.value
                                                                        }),
                                                                    className: "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md text-gray-800"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 967,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                            lineNumber: 963,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-span-6",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: handleAddModel,
                                                                className: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                                                children: "Model Ekle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                lineNumber: 977,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                            lineNumber: 976,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                    lineNumber: 943,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                lineNumber: 942,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                        lineNumber: 935,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                    lineNumber: 934,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white shadow overflow-hidden sm:rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-5 sm:px-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg leading-6 font-medium text-gray-950",
                                                    children: "Modeller"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                    lineNumber: 993,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 max-w-2xl text-sm text-gray-700",
                                                    children: "Markalar altındaki tüm modeller"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                    lineNumber: 994,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                            lineNumber: 992,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-gray-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                role: "list",
                                                className: "divide-y divide-gray-200",
                                                children: brands.map((brand)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                        children: [
                                                            brand.models?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "px-4 py-2 sm:px-6 bg-gray-50",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-medium text-gray-950",
                                                                    children: brand.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1002,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                lineNumber: 1001,
                                                                columnNumber: 27
                                                            }, this),
                                                            (brand.models || []).map((model)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "px-4 py-4 sm:px-6 pl-10",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            editModelId === model.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center space-x-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "text",
                                                                                        value: editModelName,
                                                                                        onChange: (e)=>setEditModelName(e.target.value),
                                                                                        className: "text-sm border-gray-400 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                        lineNumber: 1010,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: handleUpdateModel,
                                                                                        className: "inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                                                                        children: "Kaydet"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                        lineNumber: 1016,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>setEditModelId(null),
                                                                                        className: "inline-flex items-center px-2 py-1 border border-gray-400 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                                                                        children: "İptal"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                        lineNumber: 1022,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                lineNumber: 1009,
                                                                                columnNumber: 33
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-gray-950 truncate",
                                                                                children: model.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                lineNumber: 1030,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "ml-2 flex items-center space-x-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",
                                                                                        children: [
                                                                                            model.packages?.length || 0,
                                                                                            " Paket"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                        lineNumber: 1033,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    editModelId !== model.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                onClick: ()=>handleEditModel(model),
                                                                                                className: "inline-flex items-center p-1 border border-transparent rounded-full text-indigo-600 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                                    className: "h-4 w-4",
                                                                                                    fill: "none",
                                                                                                    viewBox: "0 0 24 24",
                                                                                                    stroke: "currentColor",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                        strokeLinecap: "round",
                                                                                                        strokeLinejoin: "round",
                                                                                                        strokeWidth: 2,
                                                                                                        d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                                        lineNumber: 1043,
                                                                                                        columnNumber: 41
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                                    lineNumber: 1042,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                                lineNumber: 1038,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                onClick: ()=>handleDeleteModel(model.id),
                                                                                                className: "inline-flex items-center p-1 border border-transparent rounded-full text-red-600 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                                    className: "h-4 w-4",
                                                                                                    fill: "none",
                                                                                                    viewBox: "0 0 24 24",
                                                                                                    stroke: "currentColor",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                        strokeLinecap: "round",
                                                                                                        strokeLinejoin: "round",
                                                                                                        strokeWidth: 2,
                                                                                                        d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                                        lineNumber: 1051,
                                                                                                        columnNumber: 41
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                                    lineNumber: 1050,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                                lineNumber: 1046,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                lineNumber: 1032,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                        lineNumber: 1007,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, model.id, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1006,
                                                                    columnNumber: 27
                                                                }, this))
                                                        ]
                                                    }, brand.id, true, {
                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                        lineNumber: 999,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                lineNumber: 997,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                            lineNumber: 996,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                    lineNumber: 991,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                            lineNumber: 933,
                            columnNumber: 13
                        }, this),
                        selectedTab === 'packages' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:grid md:grid-cols-3 md:gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-medium leading-6 text-gray-950",
                                                        children: "Yeni Paket ve Vergi Bilgisi Ekle"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                        lineNumber: 1074,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-sm text-gray-700",
                                                        children: "Modele ait paket ve vergi bilgilerini ekleyin."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                        lineNumber: 1075,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                lineNumber: 1073,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-5 md:mt-0 md:col-span-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-6 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-span-6 sm:col-span-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "model-select",
                                                                    className: "block text-sm font-medium text-gray-950",
                                                                    children: "Marka ve Model"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1082,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    id: "model-select",
                                                                    name: "model-select",
                                                                    value: newPackage.modelId,
                                                                    onChange: (e)=>setNewPackage({
                                                                            ...newPackage,
                                                                            modelId: e.target.value
                                                                        }),
                                                                    className: "mt-1 block w-full py-2 px-3 border border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-800",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "Model Seçin"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                            lineNumber: 1092,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        brands.map((brand)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                                                label: brand.name,
                                                                                children: (brand.models || []).map((model)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: model.id,
                                                                                        children: model.name
                                                                                    }, model.id, false, {
                                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                        lineNumber: 1096,
                                                                                        columnNumber: 33
                                                                                    }, this))
                                                                            }, brand.id, false, {
                                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                lineNumber: 1094,
                                                                                columnNumber: 29
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1085,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                            lineNumber: 1081,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-span-6 sm:col-span-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "package-name",
                                                                    className: "block text-sm font-medium text-gray-950",
                                                                    children: "Paket Adı"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1106,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "package-name",
                                                                    id: "package-name",
                                                                    value: newPackage.name,
                                                                    onChange: (e)=>setNewPackage({
                                                                            ...newPackage,
                                                                            name: e.target.value
                                                                        }),
                                                                    className: "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md text-gray-800"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1109,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                            lineNumber: 1105,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-span-6 sm:col-span-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "mtv-amount",
                                                                    className: "block text-sm font-medium text-gray-950",
                                                                    children: "MTV Tutarı (TL)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1120,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "mtv-amount",
                                                                    id: "mtv-amount",
                                                                    value: formatNumber(newPackage.mtvAmount),
                                                                    onChange: (e)=>setNewPackage({
                                                                            ...newPackage,
                                                                            mtvAmount: parseFormattedNumber(e.target.value)
                                                                        }),
                                                                    className: "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md text-gray-800"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1123,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                            lineNumber: 1119,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-span-6 sm:col-span-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "plaka-masrafi",
                                                                    className: "block text-sm font-medium text-gray-950",
                                                                    children: "Plaka Masrafı (TL)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1134,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "plaka-masrafi",
                                                                    id: "plaka-masrafi",
                                                                    value: formatNumber(newPackage.plakaMasrafi),
                                                                    onChange: (e)=>setNewPackage({
                                                                            ...newPackage,
                                                                            plakaMasrafi: parseFormattedNumber(e.target.value)
                                                                        }),
                                                                    className: "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md text-gray-800"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1137,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                            lineNumber: 1133,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-span-6",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: handleAddPackage,
                                                                className: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                                                children: "Paket Ekle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                lineNumber: 1148,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                            lineNumber: 1147,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                    lineNumber: 1080,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                lineNumber: 1079,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                        lineNumber: 1072,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                    lineNumber: 1071,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white shadow overflow-hidden sm:rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-5 sm:px-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg leading-6 font-medium text-gray-950",
                                                    children: "Paketler ve Vergi Bilgileri"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                    lineNumber: 1164,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 max-w-2xl text-sm text-gray-700",
                                                    children: "Marka ve modellere ait tüm paket ve vergi bilgileri"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                    lineNumber: 1165,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                            lineNumber: 1163,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-gray-200",
                                            children: [
                                                editPackageId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 px-4 py-5 border-b border-gray-200",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "edit-package-name",
                                                                        className: "block text-sm font-medium text-gray-950",
                                                                        children: "Paket Adı"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                        lineNumber: 1172,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        id: "edit-package-name",
                                                                        value: editPackage.name,
                                                                        onChange: (e)=>setEditPackage({
                                                                                ...editPackage,
                                                                                name: e.target.value
                                                                            }),
                                                                        className: "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md text-gray-800"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                        lineNumber: 1175,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                lineNumber: 1171,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "edit-mtv-amount",
                                                                        className: "block text-sm font-medium text-gray-950",
                                                                        children: "MTV Tutarı (TL)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                        lineNumber: 1185,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        id: "edit-mtv-amount",
                                                                        value: formatNumber(editPackage.mtvAmount),
                                                                        onChange: (e)=>setEditPackage({
                                                                                ...editPackage,
                                                                                mtvAmount: parseFormattedNumber(e.target.value)
                                                                            }),
                                                                        className: "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md text-gray-800"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                        lineNumber: 1188,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                lineNumber: 1184,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "edit-plaka-masrafi",
                                                                        className: "block text-sm font-medium text-gray-950",
                                                                        children: "Plaka Masrafı (TL)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                        lineNumber: 1197,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        id: "edit-plaka-masrafi",
                                                                        value: formatNumber(editPackage.plakaMasrafi),
                                                                        onChange: (e)=>setEditPackage({
                                                                                ...editPackage,
                                                                                plakaMasrafi: parseFormattedNumber(e.target.value)
                                                                            }),
                                                                        className: "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md text-gray-800"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                        lineNumber: 1200,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                lineNumber: 1196,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                        lineNumber: 1170,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                    lineNumber: 1169,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-x-auto",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "min-w-full divide-y divide-gray-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                className: "bg-gray-50",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            scope: "col",
                                                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",
                                                                            children: "Marka"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                            lineNumber: 1215,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            scope: "col",
                                                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",
                                                                            children: "Model"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                            lineNumber: 1218,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            scope: "col",
                                                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",
                                                                            children: "Paket"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                            lineNumber: 1221,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            scope: "col",
                                                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",
                                                                            children: "MTV (TL)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                            lineNumber: 1225,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            scope: "col",
                                                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",
                                                                            children: "Plaka Masrafı (TL)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                            lineNumber: 1228,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            scope: "col",
                                                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",
                                                                            children: "İşlemler"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                            lineNumber: 1231,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1214,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                lineNumber: 1213,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                className: "bg-white divide-y divide-gray-200",
                                                                children: brands.map((brand)=>(brand.models || []).map((model)=>(model.packages || []).map((pkg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-950",
                                                                                        children: brand.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                        lineNumber: 1241,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-950",
                                                                                        children: model.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                        lineNumber: 1244,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-950",
                                                                                        children: pkg.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                        lineNumber: 1247,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-950",
                                                                                        children: [
                                                                                            pkg.mtvAmount.toLocaleString('tr-TR'),
                                                                                            " TL"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                        lineNumber: 1251,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-950",
                                                                                        children: [
                                                                                            pkg.plakaMasrafi ? pkg.plakaMasrafi.toLocaleString('tr-TR') : 0,
                                                                                            " TL"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                        lineNumber: 1254,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-950",
                                                                                        children: editPackageId === pkg.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center space-x-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                    onClick: handleUpdatePackage,
                                                                                                    className: "inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                                                                                    children: "Kaydet"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                                    lineNumber: 1260,
                                                                                                    columnNumber: 39
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                    onClick: ()=>setEditPackageId(null),
                                                                                                    className: "inline-flex items-center px-2 py-1 border border-gray-400 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                                                                                    children: "İptal"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                                    lineNumber: 1266,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                            lineNumber: 1259,
                                                                                            columnNumber: 37
                                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center space-x-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                    onClick: ()=>handleEditPackage(pkg),
                                                                                                    className: "inline-flex items-center p-1 border border-transparent rounded-full text-indigo-600 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                                        className: "h-4 w-4",
                                                                                                        fill: "none",
                                                                                                        viewBox: "0 0 24 24",
                                                                                                        stroke: "currentColor",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                            strokeLinecap: "round",
                                                                                                            strokeLinejoin: "round",
                                                                                                            strokeWidth: 2,
                                                                                                            d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                                            lineNumber: 1280,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                                        lineNumber: 1279,
                                                                                                        columnNumber: 41
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                                    lineNumber: 1275,
                                                                                                    columnNumber: 39
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                    onClick: ()=>handleDeletePackage(pkg.id),
                                                                                                    className: "inline-flex items-center p-1 border border-transparent rounded-full text-red-600 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                                        className: "h-4 w-4",
                                                                                                        fill: "none",
                                                                                                        viewBox: "0 0 24 24",
                                                                                                        stroke: "currentColor",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                            strokeLinecap: "round",
                                                                                                            strokeLinejoin: "round",
                                                                                                            strokeWidth: 2,
                                                                                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                                            lineNumber: 1288,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                                        lineNumber: 1287,
                                                                                                        columnNumber: 41
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                                    lineNumber: 1283,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                            lineNumber: 1274,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                        lineNumber: 1257,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, pkg.id, true, {
                                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                lineNumber: 1240,
                                                                                columnNumber: 31
                                                                            }, this))))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                lineNumber: 1236,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                        lineNumber: 1212,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                    lineNumber: 1211,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                            lineNumber: 1167,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                    lineNumber: 1162,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                            lineNumber: 1070,
                            columnNumber: 13
                        }, this),
                        selectedTab === 'maintenance' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white shadow rounded-lg p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg leading-6 font-medium text-gray-900 mb-4",
                                            children: "Yeni Bakım Ürünü Ekle"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                            lineNumber: 1311,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: async (e)=>{
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
                                                            'x-csrf-token': csrfToken
                                                        },
                                                        body: JSON.stringify(newMaintenanceProduct)
                                                    });
                                                    if (!response.ok) {
                                                        const errorData = await response.json();
                                                        throw new Error(errorData.error || 'Bakım ürünü eklenirken bir hata oluştu');
                                                    }
                                                    const newProduct = await response.json();
                                                    setMaintenanceProducts([
                                                        ...maintenanceProducts,
                                                        newProduct
                                                    ]);
                                                    setNewMaintenanceProduct({
                                                        name: '',
                                                        description: ''
                                                    });
                                                    // Listeyi yeniden yükle
                                                    await fetchMaintenanceProducts();
                                                    alert('Bakım ürünü başarıyla eklendi');
                                                } catch (error) {
                                                    console.error('Bakım ürünü eklenirken hata:', error);
                                                    alert(error.message || 'Bakım ürünü eklenirken bir hata oluştu');
                                                }
                                            },
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "maintenance-name",
                                                                    className: "block text-sm font-medium text-gray-700",
                                                                    children: "Ürün Adı *"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1347,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    id: "maintenance-name",
                                                                    value: newMaintenanceProduct.name,
                                                                    onChange: (e)=>setNewMaintenanceProduct({
                                                                            ...newMaintenanceProduct,
                                                                            name: e.target.value
                                                                        }),
                                                                    className: "mt-1 block w-full border-gray-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                                                                    placeholder: "Bakım ürünü adını girin",
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1350,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                            lineNumber: 1346,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "maintenance-description",
                                                                    className: "block text-sm font-medium text-gray-700",
                                                                    children: "Açıklama"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1361,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    id: "maintenance-description",
                                                                    value: newMaintenanceProduct.description,
                                                                    onChange: (e)=>setNewMaintenanceProduct({
                                                                            ...newMaintenanceProduct,
                                                                            description: e.target.value
                                                                        }),
                                                                    className: "mt-1 block w-full border-gray-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                                                                    placeholder: "Ürün açıklamasını girin (opsiyonel)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1364,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                            lineNumber: 1360,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                    lineNumber: 1345,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        className: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                                        children: "Bakım Ürünü Ekle"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                        lineNumber: 1375,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                    lineNumber: 1374,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                            lineNumber: 1312,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                    lineNumber: 1310,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white shadow rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-6 py-4 border-b border-gray-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg leading-6 font-medium text-gray-900",
                                                children: "Bakım Ürünleri"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                lineNumber: 1388,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                            lineNumber: 1387,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-x-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "min-w-full divide-y divide-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        className: "bg-gray-50",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "ID"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1394,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "Ürün Adı"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1397,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "Açıklama"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1400,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "İşlemler"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1403,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                            lineNumber: 1393,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                        lineNumber: 1392,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        className: "bg-white divide-y divide-gray-200",
                                                        children: maintenanceProducts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                colSpan: 4,
                                                                className: "px-6 py-4 text-center text-sm text-gray-500",
                                                                children: "Henüz bakım ürünü eklenmemiş"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                lineNumber: 1411,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                            lineNumber: 1410,
                                                            columnNumber: 25
                                                        }, this) : maintenanceProducts.map((product)=>{
                                                            const isEditing = editMaintenanceProductId === product.id;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-950",
                                                                        children: product.id
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                        lineNumber: 1420,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-950",
                                                                        children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            value: newMaintenanceProduct.name,
                                                                            onChange: (e)=>setNewMaintenanceProduct({
                                                                                    ...newMaintenanceProduct,
                                                                                    name: e.target.value
                                                                                }),
                                                                            className: "block w-full border-gray-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                            lineNumber: 1425,
                                                                            columnNumber: 35
                                                                        }, this) : product.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                        lineNumber: 1423,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-950",
                                                                        children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            value: newMaintenanceProduct.description,
                                                                            onChange: (e)=>setNewMaintenanceProduct({
                                                                                    ...newMaintenanceProduct,
                                                                                    description: e.target.value
                                                                                }),
                                                                            className: "block w-full border-gray-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                            lineNumber: 1437,
                                                                            columnNumber: 35
                                                                        }, this) : product.description || '-'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                        lineNumber: 1435,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex space-x-2",
                                                                            children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: async ()=>{
                                                                                            if (!newMaintenanceProduct.name.trim()) {
                                                                                                alert('Ürün adı zorunludur');
                                                                                                return;
                                                                                            }
                                                                                            try {
                                                                                                const response = await fetch(`/api/maintenance-products/${product.id}`, {
                                                                                                    method: 'PUT',
                                                                                                    headers: {
                                                                                                        'Content-Type': 'application/json',
                                                                                                        'x-csrf-token': csrfToken
                                                                                                    },
                                                                                                    body: JSON.stringify(newMaintenanceProduct)
                                                                                                });
                                                                                                if (!response.ok) {
                                                                                                    const errorData = await response.json();
                                                                                                    throw new Error(errorData.error || 'Bakım ürünü güncellenirken bir hata oluştu');
                                                                                                }
                                                                                                const updatedProduct = await response.json();
                                                                                                setEditMaintenanceProductId(null);
                                                                                                setNewMaintenanceProduct({
                                                                                                    name: '',
                                                                                                    description: ''
                                                                                                });
                                                                                                // Listeyi yeniden yükle
                                                                                                await fetchMaintenanceProducts();
                                                                                                alert('Bakım ürünü başarıyla güncellendi');
                                                                                            } catch (error) {
                                                                                                console.error('Bakım ürünü güncellenirken hata:', error);
                                                                                                alert(error.message || 'Bakım ürünü güncellenirken bir hata oluştu');
                                                                                            }
                                                                                        },
                                                                                        className: "inline-flex items-center p-1 border border-transparent rounded-full text-green-600 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            className: "h-4 w-4",
                                                                                            fill: "none",
                                                                                            viewBox: "0 0 24 24",
                                                                                            stroke: "currentColor",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                strokeLinecap: "round",
                                                                                                strokeLinejoin: "round",
                                                                                                strokeWidth: 2,
                                                                                                d: "M5 13l4 4L19 7"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                                lineNumber: 1487,
                                                                                                columnNumber: 43
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                            lineNumber: 1486,
                                                                                            columnNumber: 41
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                        lineNumber: 1451,
                                                                                        columnNumber: 39
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>{
                                                                                            setEditMaintenanceProductId(null);
                                                                                            setNewMaintenanceProduct({
                                                                                                name: '',
                                                                                                description: ''
                                                                                            });
                                                                                        },
                                                                                        className: "inline-flex items-center p-1 border border-transparent rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            className: "h-4 w-4",
                                                                                            fill: "none",
                                                                                            viewBox: "0 0 24 24",
                                                                                            stroke: "currentColor",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                strokeLinecap: "round",
                                                                                                strokeLinejoin: "round",
                                                                                                strokeWidth: 2,
                                                                                                d: "M6 18L18 6M6 6l12 12"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                                lineNumber: 1498,
                                                                                                columnNumber: 43
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                            lineNumber: 1497,
                                                                                            columnNumber: 41
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                        lineNumber: 1490,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>{
                                                                                            setEditMaintenanceProductId(product.id);
                                                                                            setNewMaintenanceProduct({
                                                                                                name: product.name,
                                                                                                description: product.description || ''
                                                                                            });
                                                                                        },
                                                                                        className: "inline-flex items-center p-1 border border-transparent rounded-full text-indigo-600 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            className: "h-4 w-4",
                                                                                            fill: "none",
                                                                                            viewBox: "0 0 24 24",
                                                                                            stroke: "currentColor",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                strokeLinecap: "round",
                                                                                                strokeLinejoin: "round",
                                                                                                strokeWidth: 2,
                                                                                                d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                                lineNumber: 1515,
                                                                                                columnNumber: 43
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                            lineNumber: 1514,
                                                                                            columnNumber: 41
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                        lineNumber: 1504,
                                                                                        columnNumber: 39
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: async ()=>{
                                                                                            if (window.confirm('Bu bakım ürünü silmek istediğinizden emin misiniz?')) {
                                                                                                try {
                                                                                                    const response = await fetch(`/api/maintenance-products/${product.id}`, {
                                                                                                        method: 'DELETE',
                                                                                                        headers: {
                                                                                                            'x-csrf-token': csrfToken
                                                                                                        }
                                                                                                    });
                                                                                                    if (!response.ok) {
                                                                                                        const errorData = await response.json();
                                                                                                        throw new Error(errorData.error || 'Bakım ürünü silinirken bir hata oluştu');
                                                                                                    }
                                                                                                    // Listeyi yeniden yükle
                                                                                                    await fetchMaintenanceProducts();
                                                                                                    alert('Bakım ürünü başarıyla silindi');
                                                                                                } catch (error) {
                                                                                                    console.error('Bakım ürünü silinirken hata:', error);
                                                                                                    alert(error.message || 'Bakım ürünü silinirken bir hata oluştu');
                                                                                                }
                                                                                            }
                                                                                        },
                                                                                        className: "inline-flex items-center p-1 border border-transparent rounded-full text-red-600 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            className: "h-4 w-4",
                                                                                            fill: "none",
                                                                                            viewBox: "0 0 24 24",
                                                                                            stroke: "currentColor",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                strokeLinecap: "round",
                                                                                                strokeLinejoin: "round",
                                                                                                strokeWidth: 2,
                                                                                                d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                                lineNumber: 1546,
                                                                                                columnNumber: 43
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                            lineNumber: 1545,
                                                                                            columnNumber: 41
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                        lineNumber: 1518,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                            lineNumber: 1448,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                        lineNumber: 1447,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, product.id, true, {
                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                lineNumber: 1419,
                                                                columnNumber: 29
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                        lineNumber: 1408,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                lineNumber: 1391,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                            lineNumber: 1390,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                    lineNumber: 1386,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                            lineNumber: 1308,
                            columnNumber: 13
                        }, this),
                        selectedTab === 'accessories' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white shadow rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 py-5 sm:p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg leading-6 font-medium text-gray-950 mb-4",
                                            children: "Aksesuar Yönetimi"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                            lineNumber: 1569,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 mb-4",
                                            children: "Marka ve model bazında aksesuar bilgilerini yönetebilirsiniz."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                            lineNumber: 1572,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-50 p-4 rounded-lg mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-md font-medium text-gray-950 mb-3",
                                                    children: "Yeni Aksesuar Ekle"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                    lineNumber: 1578,
                                                    columnNumber: 22
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                                    children: "Marka"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1581,
                                                                    columnNumber: 26
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: newAccessory.brandId,
                                                                    onChange: (e)=>{
                                                                        const brandId = e.target.value;
                                                                        setNewAccessory({
                                                                            ...newAccessory,
                                                                            brandId,
                                                                            modelId: ''
                                                                        });
                                                                        setSelectedAccessoryBrand(brandId);
                                                                    },
                                                                    className: "w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-800",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "Marka Seçin"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                            lineNumber: 1593,
                                                                            columnNumber: 28
                                                                        }, this),
                                                                        brands.map((brand)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: brand.id,
                                                                                children: brand.name
                                                                            }, brand.id, false, {
                                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                lineNumber: 1595,
                                                                                columnNumber: 30
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1584,
                                                                    columnNumber: 26
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                            lineNumber: 1580,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                                    children: "Model"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1602,
                                                                    columnNumber: 26
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: newAccessory.modelId,
                                                                    onChange: (e)=>setNewAccessory({
                                                                            ...newAccessory,
                                                                            modelId: e.target.value
                                                                        }),
                                                                    className: "w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-800",
                                                                    disabled: !selectedAccessoryBrand,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "Model Seçin"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                            lineNumber: 1611,
                                                                            columnNumber: 28
                                                                        }, this),
                                                                        selectedAccessoryBrand && brands.find((brand)=>brand.id === selectedAccessoryBrand)?.models.map((model)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: model.id,
                                                                                children: model.name
                                                                            }, model.id, false, {
                                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                lineNumber: 1615,
                                                                                columnNumber: 32
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1605,
                                                                    columnNumber: 26
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                            lineNumber: 1601,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                                    children: "Aksesuar Adı"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1623,
                                                                    columnNumber: 26
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: newAccessory.name,
                                                                    onChange: (e)=>setNewAccessory({
                                                                            ...newAccessory,
                                                                            name: e.target.value
                                                                        }),
                                                                    className: "w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-800",
                                                                    placeholder: "Aksesuar adını girin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1626,
                                                                    columnNumber: 26
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                            lineNumber: 1622,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "md:col-span-3 flex justify-end",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: handleAddAccessory,
                                                                className: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                                                children: "Aksesuar Ekle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                lineNumber: 1635,
                                                                columnNumber: 26
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                            lineNumber: 1634,
                                                            columnNumber: 24
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                    lineNumber: 1579,
                                                    columnNumber: 22
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                            lineNumber: 1577,
                                            columnNumber: 20
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "min-w-full divide-y divide-gray-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        className: "bg-gray-50",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "Marka"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1651,
                                                                    columnNumber: 28
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "Model"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1654,
                                                                    columnNumber: 28
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "Aksesuar Adı"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1657,
                                                                    columnNumber: 28
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "İşlemler"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                    lineNumber: 1660,
                                                                    columnNumber: 28
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                            lineNumber: 1650,
                                                            columnNumber: 26
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                        lineNumber: 1649,
                                                        columnNumber: 24
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        className: "bg-white divide-y divide-gray-200",
                                                        children: accessories.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                colSpan: 4,
                                                                className: "px-6 py-4 text-center text-sm text-gray-500",
                                                                children: "Henüz aksesuar eklenmemiş."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                lineNumber: 1668,
                                                                columnNumber: 30
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                            lineNumber: 1667,
                                                            columnNumber: 28
                                                        }, this) : accessories.map((accessory)=>{
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-950",
                                                                        children: accessory.brand?.name || 'Bilinmeyen Marka'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                        lineNumber: 1676,
                                                                        columnNumber: 34
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-950",
                                                                        children: accessory.model?.name || 'Bilinmeyen Model'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                        lineNumber: 1679,
                                                                        columnNumber: 34
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-950",
                                                                        children: accessory.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                        lineNumber: 1682,
                                                                        columnNumber: 34
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: async ()=>{
                                                                                if (window.confirm('Bu aksesuarı silmek istediğinizden emin misiniz?')) {
                                                                                    try {
                                                                                        const response = await fetch(`/api/accessories/${accessory.id}`, {
                                                                                            method: 'DELETE'
                                                                                        });
                                                                                        if (!response.ok) {
                                                                                            const errorData = await response.json();
                                                                                            throw new Error(errorData.error || 'Aksesuar silinirken bir hata oluştu');
                                                                                        }
                                                                                        setAccessories(accessories.filter((a)=>a.id !== accessory.id));
                                                                                        alert('Aksesuar başarıyla silindi');
                                                                                    } catch (error) {
                                                                                        console.error('Aksesuar silinirken hata:', error);
                                                                                        alert(error.message || 'Aksesuar silinirken bir hata oluştu');
                                                                                    }
                                                                                }
                                                                            },
                                                                            className: "inline-flex items-center p-1 border border-transparent rounded-full text-red-600 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                className: "h-4 w-4",
                                                                                fill: "none",
                                                                                viewBox: "0 0 24 24",
                                                                                stroke: "currentColor",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: 2,
                                                                                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                    lineNumber: 1710,
                                                                                    columnNumber: 40
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                                lineNumber: 1709,
                                                                                columnNumber: 38
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                            lineNumber: 1686,
                                                                            columnNumber: 36
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                        lineNumber: 1685,
                                                                        columnNumber: 34
                                                                    }, this)
                                                                ]
                                                            }, accessory.id, true, {
                                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                                lineNumber: 1675,
                                                                columnNumber: 32
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                        lineNumber: 1665,
                                                        columnNumber: 24
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                                lineNumber: 1648,
                                                columnNumber: 22
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                            lineNumber: 1647,
                                            columnNumber: 20
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                    lineNumber: 1568,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                                lineNumber: 1567,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                            lineNumber: 1566,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
                    lineNumber: 821,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
            lineNumber: 749,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/admin/vehicle-management/page.tsx",
        lineNumber: 748,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_app_dashboard_admin_vehicle-management_page_tsx_a937721a._.js.map
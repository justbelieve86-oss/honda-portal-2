module.exports = {

"[project]/.next-internal/server/app/api/sales/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route.runtime.dev.js [external] (next/dist/compiled/next-server/app-route.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}}),
"[project]/lib/prisma.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "prisma": (()=>prisma)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
// Geliştirme ortamında birden fazla Next.js yeniden yüklemesi sırasında 
// birden fazla Prisma örneği oluşturulmasını önlemek için global değişken
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
// Geliştirme ortamında değilse, global nesneye kaydet
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
const __TURBOPACK__default__export__ = prisma;
}}),
"[project]/src/app/api/sales/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET),
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
;
;
;
async function GET(request) {
    try {
        // URL parametrelerini al
        const { searchParams } = new URL(request.url);
        const month = searchParams.get('month');
        const year = searchParams.get('year');
        console.log('GET /api/sales çağrıldı - month:', month, 'year:', year);
        // Header'dan kullanıcı ID'sini al
        const headersList = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["headers"])();
        const userId = headersList.get('x-user-id');
        if (!userId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Unauthorized'
            }, {
                status: 401
            });
        }
        // Kullanıcının rolünü ve yetkili markalarını al
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].user.findUnique({
            where: {
                id: userId
            },
            include: {
                authorizedBrands: {
                    include: {
                        brand: true
                    }
                }
            }
        });
        if (!user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'User not found'
            }, {
                status: 404
            });
        }
        // Rol bazlı filtreleme için kullanıcı ID'lerini belirle
        let authorizedUserIds = [
            userId
        ]; // Varsayılan olarak sadece kendi ID'si
        if (user.role === 'SATIS_MUDURU') {
            // Satış Müdürü: Aynı markadaki Satış Danışmanlarının satışlarını da görebilir
            try {
                const userBrandIds = user.authorizedBrands?.map((ub)=>ub.brandId) || [];
                if (userBrandIds.length > 0) {
                    // Aynı markalara yetkili olan Satış Danışmanlarını bul
                    const samebrandUsers = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].userBrand.findMany({
                        where: {
                            brandId: {
                                in: userBrandIds
                            }
                        },
                        include: {
                            user: true
                        }
                    });
                    authorizedUserIds = samebrandUsers.filter((ub)=>ub.user.role === 'SATIS_DANISMANI' || ub.user.id === userId).map((ub)=>ub.user.id);
                }
            } catch (error) {
                console.log('UserBrand operations not available yet:', error);
                // UserBrand modeli henüz yoksa sadece kendi satışlarını göster
                authorizedUserIds = [
                    userId
                ];
            }
        }
        // Tarih filtreleme için where koşulunu hazırla
        let dateFilter = {};
        if (month && year) {
            // purchaseDate string formatında (YYYY-MM-DD) olduğu için string karşılaştırması yapıyoruz
            const yearStr = year.toString();
            const monthStr = month.toString().padStart(2, '0');
            const startDateStr = `${yearStr}-${monthStr}-01`;
            const endDay = new Date(parseInt(year), parseInt(month), 0).getDate();
            const endDateStr = `${yearStr}-${monthStr}-${endDay.toString().padStart(2, '0')}`;
            dateFilter = {
                purchaseDate: {
                    gte: startDateStr,
                    lte: endDateStr
                }
            };
        }
        // Kullanıcının eklediği satışları getir
        const sales = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sale.findMany({
            where: {
                createdBy: {
                    in: authorizedUserIds
                },
                ...dateFilter
            },
            include: {
                customer: {
                    select: {
                        id: true,
                        name: true,
                        tcNo: true
                    }
                },
                createdByUser: {
                    select: {
                        id: true,
                        name: true,
                        username: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        // Kurumsal satışları da getir
        const corporateSales = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].corporateSale.findMany({
            where: {
                createdBy: {
                    in: authorizedUserIds
                },
                ...dateFilter
            },
            include: {
                customer: {
                    select: {
                        id: true,
                        name: true,
                        taxNumber: true
                    }
                },
                createdByUser: {
                    select: {
                        id: true,
                        name: true,
                        username: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        // Satışları birleştir ve frontend formatına çevir
        const allSales = [
            ...sales.map((sale)=>({
                    id: sale.id,
                    customerId: sale.customerId,
                    customerName: sale.customer.name,
                    customerType: 'individual',
                    identificationNumber: sale.customer.tcNo,
                    model: sale.model,
                    chassisNo: sale.chassisNo,
                    engineNo: sale.engineNo,
                    purchaseDate: sale.purchaseDate,
                    salePrice: sale.salePrice,
                    purchasePrice: sale.purchasePrice,
                    contributionAmount: sale.contributionAmount,
                    mtvCost: sale.mtvCost,
                    licensePlateCost: sale.licensePlateCost,
                    color: sale.color,
                    packageId: sale.packageId,
                    packageName: sale.packageName,
                    date: sale.purchaseDate,
                    createdAt: sale.createdAt // createdAt'i de ekle
                })),
            ...corporateSales.map((sale)=>({
                    id: sale.id,
                    customerId: sale.customerId,
                    customerName: sale.customer.name,
                    customerType: 'corporate',
                    identificationNumber: sale.customer.taxNumber,
                    model: sale.model,
                    chassisNo: sale.chassisNo,
                    engineNo: sale.engineNo,
                    purchaseDate: sale.purchaseDate,
                    salePrice: sale.salePrice,
                    purchasePrice: sale.purchasePrice,
                    contributionAmount: sale.contributionAmount,
                    mtvCost: sale.mtvCost,
                    licensePlateCost: sale.licensePlateCost,
                    color: sale.color,
                    packageId: sale.packageId,
                    packageName: sale.packageName,
                    date: sale.purchaseDate,
                    createdAt: sale.createdAt // createdAt'i de ekle
                }))
        ];
        // Tarihe ve saate göre sırala (yeniden eskiye doğru)
        // Önce purchaseDate'e göre, sonra createdAt'e göre sırala
        allSales.sort((a, b)=>{
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            // Eğer tarihler aynıysa, createdAt'e göre sırala (saat bazında)
            if (dateA.getTime() === dateB.getTime()) {
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            }
            // Tarih bazında sıralama (yeniden eskiye)
            return dateB.getTime() - dateA.getTime();
        });
        console.log('Returning sales data, count:', allSales.length);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(allSales);
    } catch (error) {
        console.error('Error fetching sales:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        // Middleware'den gelen kullanıcı ID'sini al
        const headersList = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["headers"])();
        const userId = headersList.get('x-user-id');
        if (!userId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Kullanıcı kimliği bulunamadı'
            }, {
                status: 401
            });
        }
        const data = await request.json();
        console.log('POST /api/sales - Gelen veri:', JSON.stringify(data, null, 2));
        const { customerId, customerType, model, chassisNo, engineNo, purchaseDate, salePrice, purchasePrice, contributionAmount, mtvCost, licensePlateCost, color, saleType, packageId, packageName, extraAmount, otvRate, kdvRate } = data;
        // Zorunlu alanları kontrol et
        console.log('Zorunlu alan kontrolü:', {
            customerId: !!customerId,
            customerType: !!customerType,
            model: !!model,
            chassisNo: !!chassisNo,
            engineNo: !!engineNo,
            purchaseDate: !!purchaseDate,
            salePrice: !!salePrice,
            purchasePrice: !!purchasePrice,
            color: !!color
        });
        if (!customerId || !customerType || !model || !chassisNo || !engineNo || !purchaseDate || !salePrice || !purchasePrice || !color) {
            const missingFields = [];
            if (!customerId) missingFields.push('customerId');
            if (!customerType) missingFields.push('customerType');
            if (!model) missingFields.push('model');
            if (!chassisNo) missingFields.push('chassisNo');
            if (!engineNo) missingFields.push('engineNo');
            if (!purchaseDate) missingFields.push('purchaseDate');
            if (!salePrice) missingFields.push('salePrice');
            if (!purchasePrice) missingFields.push('purchasePrice');
            if (!color) missingFields.push('color');
            console.log('Eksik alanlar:', missingFields);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: `Eksik alanlar: ${missingFields.join(', ')}`
            }, {
                status: 400
            });
        }
        let newSale;
        if (customerType === 'individual') {
            // Bireysel müşteri satışı
            const customer = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].customer.findFirst({
                where: {
                    id: customerId,
                    createdBy: userId
                }
            });
            if (!customer) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Müşteri bulunamadı veya erişim yetkiniz yok'
                }, {
                    status: 404
                });
            }
            newSale = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sale.create({
                data: {
                    customerId,
                    model,
                    chassisNo,
                    engineNo,
                    purchaseDate,
                    salePrice: parseFloat(salePrice),
                    purchasePrice: parseFloat(purchasePrice),
                    contributionAmount: parseFloat(contributionAmount || 0),
                    mtvCost: parseFloat(mtvCost || 0),
                    licensePlateCost: parseFloat(licensePlateCost || 0),
                    color,
                    saleType: saleType || null,
                    packageId: packageId || null,
                    packageName: packageName || null,
                    extraAmount: extraAmount ? parseFloat(extraAmount) : null,
                    otvRate: otvRate ? parseFloat(otvRate) : null,
                    kdvRate: kdvRate ? parseFloat(kdvRate) : null,
                    createdBy: userId
                },
                include: {
                    customer: {
                        select: {
                            id: true,
                            name: true,
                            tcNo: true
                        }
                    }
                }
            });
        } else {
            // Kurumsal müşteri satışı
            const customer = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].corporateCustomer.findFirst({
                where: {
                    id: customerId,
                    createdBy: userId
                }
            });
            if (!customer) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Kurumsal müşteri bulunamadı veya erişim yetkiniz yok'
                }, {
                    status: 404
                });
            }
            newSale = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].corporateSale.create({
                data: {
                    customerId,
                    model,
                    chassisNo,
                    engineNo,
                    purchaseDate,
                    salePrice: parseFloat(salePrice),
                    purchasePrice: parseFloat(purchasePrice),
                    contributionAmount: parseFloat(contributionAmount || 0),
                    mtvCost: parseFloat(mtvCost || 0),
                    licensePlateCost: parseFloat(licensePlateCost || 0),
                    color,
                    saleType: saleType || null,
                    packageId: packageId || null,
                    packageName: packageName || null,
                    extraAmount: extraAmount ? parseFloat(extraAmount) : null,
                    otvRate: otvRate ? parseFloat(otvRate) : null,
                    kdvRate: kdvRate ? parseFloat(kdvRate) : null,
                    createdBy: userId
                },
                include: {
                    customer: {
                        select: {
                            id: true,
                            name: true,
                            taxNumber: true
                        }
                    }
                }
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(newSale, {
            status: 201
        });
    } catch (error) {
        console.error('Error creating sale:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Satış oluşturulurken bir hata oluştu'
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__bb493416._.js.map
module.exports = {

"[project]/.next-internal/server/app/api/corporate-customers/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/src/app/api/corporate-customers/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
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
        // URL'den arama parametrelerini al
        const { searchParams } = new URL(request.url);
        const search = searchParams.get('search');
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
        // Vergi no ile arama yapılıyorsa tüm sistemdeki kurumsal müşterileri ara
        // Aksi halde rol bazlı filtreleme yap
        const whereClause = {};
        if (search) {
            // Vergi no ile arama yapılıyorsa tüm kurumsal müşterilerde ara
            whereClause.taxNumber = {
                contains: search,
                mode: 'insensitive'
            };
        } else {
            // Rol bazlı filtreleme
            if (user.role === 'SATIS_MUDURU') {
                // Satış Müdürü: Aynı markadaki Satış Danışmanlarının kurumsal müşterilerini de görebilir
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
                        const authorizedUserIds = samebrandUsers.filter((ub)=>ub.user.role === 'SATIS_DANISMANI' || ub.user.id === userId).map((ub)=>ub.user.id);
                        whereClause.createdBy = {
                            in: authorizedUserIds
                        };
                    } else {
                        // Yetkili marka yoksa sadece kendi kurumsal müşterilerini göster
                        whereClause.createdBy = userId;
                    }
                } catch (error) {
                    console.log('UserBrand operations not available yet:', error);
                    // UserBrand modeli henüz yoksa sadece kendi kurumsal müşterilerini göster
                    whereClause.createdBy = userId;
                }
            } else {
                // Diğer roller: Sadece kendi kurumsal müşterilerini görebilir
                whereClause.createdBy = userId;
            }
        }
        const corporateCustomers = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].corporateCustomer.findMany({
            where: whereClause,
            include: {
                sales: true,
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(corporateCustomers);
    } catch (error) {
        console.error('Error fetching corporate customers:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Kurumsal müşteriler getirilirken bir hata oluştu'
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
        // Zorunlu alanları kontrol et
        console.log('Gelen veri:', data);
        if (!data.name || !data.taxNumber || !data.taxOffice || !data.phone) {
            console.log('Eksik alanlar:', {
                name: !data.name,
                taxNumber: !data.taxNumber,
                taxOffice: !data.taxOffice,
                phone: !data.phone
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Firma adı, vergi numarası, vergi dairesi ve telefon alanları zorunludur'
            }, {
                status: 400
            });
        }
        // Vergi no ile mükerrer kayıt kontrolü
        const existingCorporateCustomer = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].corporateCustomer.findUnique({
            where: {
                taxNumber: data.taxNumber
            }
        });
        if (existingCorporateCustomer) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Bu vergi numarası ile kayıtlı kurumsal müşteri sistemde bulunmaktadır'
            }, {
                status: 400
            });
        }
        // Bugünün tarihini al
        const today = new Date();
        const formattedDate = `${today.getDate().toString().padStart(2, '0')}.${(today.getMonth() + 1).toString().padStart(2, '0')}.${today.getFullYear()}`;
        // Yeni kurumsal müşteri oluştur
        const newCorporateCustomer = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].corporateCustomer.create({
            data: {
                name: data.name,
                taxNumber: data.taxNumber,
                taxOffice: data.taxOffice,
                email: data.email.toLowerCase(),
                phone: data.phone,
                address: data.address,
                cityId: data.cityId,
                districtId: data.districtId,
                authorizedPerson: data.authorizedPerson || null,
                registerDate: formattedDate,
                createdBy: userId
            },
            include: {
                createdByUser: {
                    select: {
                        id: true,
                        name: true,
                        username: true
                    }
                }
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(newCorporateCustomer, {
            status: 201
        });
    } catch (error) {
        console.error('Error creating corporate customer:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Kurumsal müşteri oluşturulurken bir hata oluştu'
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__d50b6254._.js.map
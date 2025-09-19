module.exports = {

"[project]/.next-internal/server/app/api/accessory-sales/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/src/app/api/accessory-sales/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DELETE": (()=>DELETE),
    "GET": (()=>GET),
    "POST": (()=>POST),
    "PUT": (()=>PUT)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
;
const prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
async function GET(request) {
    try {
        const userId = request.headers.get('x-user-id');
        if (!userId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Unauthorized'
            }, {
                status: 401
            });
        }
        const accessorySales = await prisma.accessorySale.findMany({
            include: {
                createdByUser: {
                    select: {
                        name: true,
                        username: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        console.log('Aksesuar satışları bulundu:', accessorySales.length);
        console.log('İlk kayıt:', accessorySales[0]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(accessorySales);
    } catch (error) {
        console.error('Aksesuar satışları yüklenirken hata:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Aksesuar satışları yüklenemedi'
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const userId = request.headers.get('x-user-id');
        if (!userId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Unauthorized'
            }, {
                status: 401
            });
        }
        const body = await request.json();
        console.log('POST isteği alındı:', body);
        console.log('User ID:', userId);
        const { customerName, customerTcNo, vehicleBrand, vehicleModel, vehiclePackage, licensePlate, chassisNo, engineNo, accessoryName, accessoryPrice, saleDate, saleId } = body;
        // Gerekli alanları kontrol et
        if (!customerName || !vehicleBrand || !vehicleModel || !accessoryName || !accessoryPrice) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Gerekli alanlar eksik'
            }, {
                status: 400
            });
        }
        // Plaka VEYA (şasi ve motor no) kombinasyonu zorunlu
        if (!licensePlate && (!chassisNo || !engineNo)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Plaka numarası VEYA şasi ve motor numarası gereklidir'
            }, {
                status: 400
            });
        }
        const newAccessorySale = await prisma.accessorySale.create({
            data: {
                customerName,
                customerTcNo: customerTcNo || null,
                vehicleBrand,
                vehicleModel,
                vehiclePackage: vehiclePackage || '',
                chassisNo: chassisNo || null,
                engineNo: engineNo || null,
                accessoryName,
                accessoryPrice: parseFloat(accessoryPrice),
                saleDate: saleDate || new Date().toISOString().split('T')[0],
                ...saleId && {
                    saleId
                },
                createdBy: userId
            },
            include: {
                createdByUser: {
                    select: {
                        name: true,
                        username: true
                    }
                }
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(newAccessorySale, {
            status: 201
        });
    } catch (error) {
        console.error('Aksesuar satışı eklenirken hata:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Aksesuar satışı eklenemedi'
        }, {
            status: 500
        });
    }
}
async function PUT(request) {
    try {
        // Header'dan kullanıcı ID'sini al
        const userId = request.headers.get('x-user-id');
        if (!userId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Unauthorized'
            }, {
                status: 401
            });
        }
        const body = await request.json();
        const { id, customerName, vehicleBrand, vehicleModel, vehiclePackage, licensePlate, chassisNo, engineNo, accessoryName, accessoryPrice, saleDate } = body;
        // Gerekli alanları kontrol et
        if (!id || !customerName || !vehicleBrand || !vehicleModel || !accessoryName || !accessoryPrice) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Gerekli alanlar eksik'
            }, {
                status: 400
            });
        }
        // Plaka VEYA (şasi ve motor no) kombinasyonu zorunlu
        if (!licensePlate && (!chassisNo || !engineNo)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Plaka numarası VEYA şasi ve motor numarası gereklidir'
            }, {
                status: 400
            });
        }
        // Mevcut kaydı kontrol et
        const existingSale = await prisma.accessorySale.findUnique({
            where: {
                id
            }
        });
        if (!existingSale) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Aksesuar satışı bulunamadı'
            }, {
                status: 404
            });
        }
        // Güncelleme işlemi
        const updatedAccessorySale = await prisma.accessorySale.update({
            where: {
                id
            },
            data: {
                customerName,
                vehicleBrand,
                vehicleModel,
                vehiclePackage: vehiclePackage || '',
                chassisNo: chassisNo || null,
                engineNo: engineNo || null,
                accessoryName,
                accessoryPrice: parseFloat(accessoryPrice),
                saleDate: saleDate || new Date().toISOString().split('T')[0]
            },
            include: {
                createdByUser: {
                    select: {
                        name: true,
                        username: true
                    }
                }
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(updatedAccessorySale);
    } catch (error) {
        console.error('Aksesuar satışı güncellenirken hata:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Aksesuar satışı güncellenemedi'
        }, {
            status: 500
        });
    }
}
async function DELETE(request) {
    try {
        const userId = request.headers.get('x-user-id');
        if (!userId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Unauthorized'
            }, {
                status: 401
            });
        }
        const body = await request.json();
        const { id, saleId, accessoryName } = body;
        // ID ile silme (aksesuar satışları sayfasından)
        if (id) {
            const deletedAccessorySale = await prisma.accessorySale.delete({
                where: {
                    id: id
                }
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: 'Aksesuar satışı başarıyla silindi',
                deletedSale: deletedAccessorySale
            });
        }
        // saleId ve accessoryName ile silme (araç satışları sayfasından)
        if (!saleId || !accessoryName) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'id VEYA (saleId ve accessoryName) gereklidir'
            }, {
                status: 400
            });
        }
        // Belirtilen saleId ve accessoryName ile eşleşen ilk kaydı sil (sadece bir tane silmek için)
        const whereCondition = {
            accessoryName: accessoryName
        };
        if (saleId) {
            whereCondition.saleId = saleId;
        } else {
            whereCondition.saleId = null;
        }
        const accessorySaleToDelete = await prisma.accessorySale.findFirst({
            where: whereCondition
        });
        if (!accessorySaleToDelete) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Silinecek aksesuar satışı bulunamadı'
            }, {
                status: 404
            });
        }
        const deletedAccessorySale = await prisma.accessorySale.delete({
            where: {
                id: accessorySaleToDelete.id
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'Aksesuar satışı başarıyla silindi',
            deletedSale: deletedAccessorySale
        });
    } catch (error) {
        console.error('Aksesuar satışı silinirken hata:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Aksesuar satışı silinemedi'
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__37660fc9._.js.map
module.exports = {

"[project]/.next-internal/server/app/api/customers/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/lib/validation.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "accessorySchema": (()=>accessorySchema),
    "brandSchema": (()=>brandSchema),
    "customerSchema": (()=>customerSchema),
    "loginSchema": (()=>loginSchema),
    "maintenanceProductSchema": (()=>maintenanceProductSchema),
    "modelSchema": (()=>modelSchema),
    "packageSchema": (()=>packageSchema),
    "registerSchema": (()=>registerSchema),
    "vehicleSchema": (()=>vehicleSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
;
const loginSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    username: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Kullanıcı adı zorunludur').max(100, 'Kullanıcı adı çok uzun').trim(),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Şifre zorunludur').max(200, 'Şifre çok uzun'),
    loginType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const registerSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, 'İsim en az 2 karakter olmalıdır'),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email('Geçerli bir email adresi girin'),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(6, 'Şifre en az 6 karakter olmalıdır'),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const brandSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Marka adı zorunludur')
});
const modelSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Model adı zorunludur'),
    brandId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Marka seçimi zorunludur')
});
const packageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Paket adı zorunludur'),
    modelId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Model seçimi zorunludur'),
    mtvAmount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0, 'MTV tutarı 0 veya pozitif olmalıdır'),
    plakaMasrafi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0, 'Plaka masrafı 0 veya pozitif olmalıdır')
});
const accessorySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Aksesuar adı zorunludur'),
    brandId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Marka seçimi zorunludur'),
    modelId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Model seçimi zorunludur')
});
const maintenanceProductSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Ürün adı zorunludur'),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const customerSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, 'İsim en az 2 karakter olmalıdır'),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email('Geçerli bir email adresi girin').optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('')),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, 'Telefon numarası en az 10 karakter olmalıdır'),
    address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    cityId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
    districtId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
    tcNo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    birthDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    occupation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const vehicleSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    customerId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Müşteri seçimi zorunludur'),
    brandId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Marka seçimi zorunludur'),
    modelId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Model seçimi zorunludur'),
    packageId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Paket seçimi zorunludur'),
    licensePlate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Plaka zorunludur'),
    chassisNumber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Şasi numarası zorunludur'),
    engineNumber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Motor numarası zorunludur'),
    year: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(1900, 'Geçerli bir yıl girin').max(new Date().getFullYear() + 1),
    color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Renk zorunludur')
});
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/string_decoder [external] (string_decoder, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("string_decoder", () => require("string_decoder"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[project]/lib/logger.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const winston = __turbopack_context__.r("[project]/node_modules/winston/lib/winston.js [app-route] (ecmascript)");
const DailyRotateFile = __turbopack_context__.r("[project]/node_modules/winston-daily-rotate-file/index.js [app-route] (ecmascript)");
const path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
// Log dizinini oluştur
const logDir = path.join(process.cwd(), 'logs');
const fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, {
        recursive: true
    });
}
// Custom format
const logFormat = winston.format.combine(winston.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss'
}), winston.format.errors({
    stack: true
}), winston.format.json(), winston.format.prettyPrint());
// Console format
const consoleFormat = winston.format.combine(winston.format.colorize(), winston.format.timestamp({
    format: 'HH:mm:ss'
}), winston.format.printf(({ timestamp, level, message, ...meta })=>{
    let msg = `${timestamp} [${level}]: ${message}`;
    if (Object.keys(meta).length > 0) {
        msg += ` ${JSON.stringify(meta)}`;
    }
    return msg;
}));
// Transport configurations
const transports = [
    // Console transport
    new winston.transports.Console({
        format: consoleFormat,
        level: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 'debug'
    }),
    // Error log file
    new DailyRotateFile({
        filename: path.join(logDir, 'error-%DATE%.log'),
        datePattern: 'YYYY-MM-DD',
        level: 'error',
        format: logFormat,
        maxSize: '20m',
        maxFiles: '14d',
        zippedArchive: true
    }),
    // Combined log file
    new DailyRotateFile({
        filename: path.join(logDir, 'combined-%DATE%.log'),
        datePattern: 'YYYY-MM-DD',
        format: logFormat,
        maxSize: '20m',
        maxFiles: '30d',
        zippedArchive: true
    }),
    // Access log file (for HTTP requests)
    new DailyRotateFile({
        filename: path.join(logDir, 'access-%DATE%.log'),
        datePattern: 'YYYY-MM-DD',
        level: 'http',
        format: logFormat,
        maxSize: '20m',
        maxFiles: '30d',
        zippedArchive: true
    })
];
// Create logger instance
const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: logFormat,
    transports,
    exitOnError: false
});
// Add custom levels for specific use cases
winston.addColors({
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white'
});
// Helper functions
logger.logRequest = (req, res, responseTime)=>{
    const logData = {
        method: req.method,
        url: req.originalUrl,
        ip: req.ip || req.connection.remoteAddress,
        userAgent: req.get('User-Agent'),
        statusCode: res.statusCode,
        responseTime: `${responseTime}ms`,
        userId: req.user?.id || 'anonymous'
    };
    logger.http('HTTP Request', logData);
};
logger.logError = (error, context = {})=>{
    logger.error('Application Error', {
        message: error.message,
        stack: error.stack,
        ...context
    });
};
logger.logDatabaseQuery = (query, duration, error = null)=>{
    const logData = {
        query: query.substring(0, 200) + (query.length > 200 ? '...' : ''),
        duration: `${duration}ms`
    };
    if (error) {
        logger.error('Database Query Error', {
            ...logData,
            error: error.message
        });
    } else {
        logger.debug('Database Query', logData);
    }
};
logger.logUserAction = (userId, action, details = {})=>{
    logger.info('User Action', {
        userId,
        action,
        ...details,
        timestamp: new Date().toISOString()
    });
};
module.exports = logger;
}}),
"[project]/lib/security-validators.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const logger = __turbopack_context__.r("[project]/lib/logger.js [app-route] (ecmascript)");
// Input validation patterns
const validationPatterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[+]?[1-9][\d\s\-\(\)]{7,15}$/,
    alphanumeric: /^[a-zA-Z0-9]+$/,
    alphanumericWithSpaces: /^[a-zA-Z0-9\s]+$/,
    noSpecialChars: /^[a-zA-Z0-9\s\-_\.]+$/,
    strongPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
};
// Suspicious patterns for security scanning
const suspiciousPatterns = {
    xss: [
        /(<script|javascript:|vbscript:|onload=|onerror=)/i
    ],
    sqlInjection: [
        /(\b(union|select|insert|delete|drop|create|alter|exec|execute)\b.*\b(from|where|into|values)\b)/i
    ],
    pathTraversal: [
        /(\.\.[\/\\]|\.\.[\/\\])/g
    ],
    codeInjection: [
        /(eval\(|exec\(|system\(|require\()/i
    ],
    commandInjection: [
        /(;\s*(rm|del|format|shutdown)|\|\s*(rm|del|format)|`[^`]*`|\$\([^)]*\)|\${[^}]*})/
    ],
    ldapInjection: [
        /(\*\)|\(\*|\)\(|\\\*|\|\&)/
    ]
};
// Validation functions
const validators = {
    // Basic type validation
    isString: (value)=>typeof value === 'string',
    isNumber: (value)=>typeof value === 'number' && !isNaN(value),
    isBoolean: (value)=>typeof value === 'boolean',
    isArray: (value)=>Array.isArray(value),
    isObject: (value)=>typeof value === 'object' && value !== null && !Array.isArray(value),
    // Length validation
    minLength: (value, min)=>typeof value === 'string' && value.length >= min,
    maxLength: (value, max)=>typeof value === 'string' && value.length <= max,
    lengthBetween: (value, min, max)=>typeof value === 'string' && value.length >= min && value.length <= max,
    // Pattern validation
    matchesPattern: (value, pattern)=>{
        if (typeof value !== 'string') return false;
        return pattern.test(value);
    },
    // Email validation
    isValidEmail: (email)=>{
        if (typeof email !== 'string') return false;
        return validationPatterns.email.test(email) && email.length <= 254;
    },
    // Phone validation
    isValidPhone: (phone)=>{
        if (typeof phone !== 'string') return false;
        return validationPatterns.phone.test(phone);
    },
    // Password validation
    isStrongPassword: (password)=>{
        if (typeof password !== 'string') return false;
        return validationPatterns.strongPassword.test(password);
    },
    // Numeric validation
    isPositiveNumber: (value)=>typeof value === 'number' && value > 0,
    isNonNegativeNumber: (value)=>typeof value === 'number' && value >= 0,
    isBetween: (value, min, max)=>typeof value === 'number' && value >= min && value <= max,
    // Date validation
    isValidDate: (date)=>{
        if (date instanceof Date) return !isNaN(date.getTime());
        if (typeof date === 'string') {
            const parsed = new Date(date);
            return !isNaN(parsed.getTime());
        }
        return false;
    },
    // URL validation
    isValidUrl: (url)=>{
        if (typeof url !== 'string') return false;
        try {
            new URL(url);
            return true;
        } catch  {
            return false;
        }
    },
    // Required field validation
    isRequired: (value)=>{
        if (value === null || value === undefined) return false;
        if (typeof value === 'string') return value.trim().length > 0;
        if (Array.isArray(value)) return value.length > 0;
        return true;
    }
};
// Security scanning functions
const securityScanner = {
    // Scan for suspicious patterns
    scanForThreats: (input)=>{
        if (typeof input !== 'string') return {
            safe: true,
            threats: []
        };
        const threats = [];
        // Check each category of threats
        Object.entries(suspiciousPatterns).forEach(([category, patterns])=>{
            patterns.forEach((pattern)=>{
                if (pattern.test(input)) {
                    threats.push({
                        category,
                        pattern: pattern.toString(),
                        match: input.match(pattern)?.[0]
                    });
                }
            });
        });
        return {
            safe: threats.length === 0,
            threats
        };
    },
    // Sanitize input
    sanitizeInput: (input)=>{
        if (typeof input !== 'string') return input;
        // Basic HTML encoding
        return input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;').trim();
    },
    // Check for SQL injection patterns
    isSqlInjectionAttempt: (input)=>{
        const result = securityScanner.scanForThreats(input);
        return result.threats.some((threat)=>threat.type === 'sqlInjection');
    },
    // Check for XSS patterns
    isXssAttempt: (input)=>{
        const result = securityScanner.scanForThreats(input);
        return result.threats.some((threat)=>threat.type === 'xss');
    }
};
// Validation schema builder
class ValidationSchema {
    constructor(){
        this.rules = {};
    }
    field(name) {
        this.rules[name] = [];
        const self = this;
        return {
            required: function() {
                self.rules[name].push({
                    type: 'required'
                });
                return this;
            },
            string: function() {
                self.rules[name].push({
                    type: 'string'
                });
                return this;
            },
            number: function() {
                self.rules[name].push({
                    type: 'number'
                });
                return this;
            },
            email: function() {
                self.rules[name].push({
                    type: 'email'
                });
                return this;
            },
            minLength: function(min) {
                self.rules[name].push({
                    type: 'minLength',
                    value: min
                });
                return this;
            },
            maxLength: function(max) {
                self.rules[name].push({
                    type: 'maxLength',
                    value: max
                });
                return this;
            },
            pattern: function(regex) {
                self.rules[name].push({
                    type: 'pattern',
                    value: regex
                });
                return this;
            },
            custom: function(validator, message) {
                self.rules[name].push({
                    type: 'custom',
                    validator,
                    message
                });
                return this;
            }
        };
    }
    validate(data) {
        const errors = {};
        const sanitized = {};
        Object.entries(this.rules).forEach(([fieldName, rules])=>{
            const value = data[fieldName];
            const fieldErrors = [];
            rules.forEach((rule)=>{
                switch(rule.type){
                    case 'required':
                        if (!validators.isRequired(value)) {
                            fieldErrors.push(`${fieldName} is required`);
                        }
                        break;
                    case 'string':
                        if (value !== undefined && !validators.isString(value)) {
                            fieldErrors.push(`${fieldName} must be a string`);
                        }
                        break;
                    case 'number':
                        if (value !== undefined && !validators.isNumber(value)) {
                            fieldErrors.push(`${fieldName} must be a number`);
                        }
                        break;
                    case 'email':
                        if (value !== undefined && !validators.isValidEmail(value)) {
                            fieldErrors.push(`${fieldName} must be a valid email`);
                        }
                        break;
                    case 'minLength':
                        if (value !== undefined && !validators.minLength(value, rule.value)) {
                            fieldErrors.push(`${fieldName} must be at least ${rule.value} characters`);
                        }
                        break;
                    case 'maxLength':
                        if (value !== undefined && !validators.maxLength(value, rule.value)) {
                            fieldErrors.push(`${fieldName} must be at most ${rule.value} characters`);
                        }
                        break;
                    case 'pattern':
                        if (value !== undefined && !validators.matchesPattern(value, rule.value)) {
                            fieldErrors.push(`${fieldName} format is invalid`);
                        }
                        break;
                    case 'custom':
                        if (value !== undefined && !rule.validator(value)) {
                            fieldErrors.push(rule.message || `${fieldName} is invalid`);
                        }
                        break;
                }
            });
            if (fieldErrors.length > 0) {
                errors[fieldName] = fieldErrors;
            }
            // Sanitize the value if it's a string
            if (typeof value === 'string') {
                sanitized[fieldName] = securityScanner.sanitizeInput(value);
            } else {
                sanitized[fieldName] = value;
            }
        });
        return {
            isValid: Object.keys(errors).length === 0,
            errors,
            sanitized
        };
    }
}
// Middleware for request validation
const createValidationMiddleware = (schema)=>{
    return (req, res, next)=>{
        try {
            const validation = schema.validate(req.body);
            if (!validation.isValid) {
                logger.warn('Validation failed', {
                    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                    errors: validation.errors,
                    body: req.body
                });
                return res.status(400).json({
                    error: 'Validation failed',
                    details: validation.errors
                });
            }
            // Replace request body with sanitized data
            req.body = validation.sanitized;
            next();
        } catch (error) {
            logger.error('Validation middleware error', {
                error: error.message
            });
            return res.status(500).json({
                error: 'Internal server error'
            });
        }
    };
};
module.exports = {
    validators,
    securityScanner,
    ValidationSchema,
    createValidationMiddleware,
    validationPatterns,
    suspiciousPatterns
};
}}),
"[project]/src/app/api/customers/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validation.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$security$2d$validators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/security-validators.js [app-route] (ecmascript)");
;
;
;
;
;
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const tcNo = searchParams.get('tcNoSearch');
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
        // TC Kimlik No ile arama yapılıyorsa tüm sistemdeki müşterileri ara
        // Aksi halde rol bazlı filtreleme yap
        const whereClause = {};
        if (tcNo) {
            // TC No ile arama yapılıyorsa tüm müşterilerde ara
            whereClause.tcNo = {
                contains: tcNo,
                mode: 'insensitive'
            };
        } else {
            // Rol bazlı filtreleme
            if (user.role === 'SATIS_MUDURU') {
                // Satış Müdürü: Aynı markadaki Satış Danışmanlarının müşterilerini de görebilir
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
                        // Yetkili marka yoksa sadece kendi müşterilerini göster
                        whereClause.createdBy = userId;
                    }
                } catch (error) {
                    console.log('UserBrand operations not available yet:', error);
                    // UserBrand modeli henüz yoksa sadece kendi müşterilerini göster
                    whereClause.createdBy = userId;
                }
            } else {
                // Diğer roller: Sadece kendi müşterilerini görebilir
                whereClause.createdBy = userId;
            }
        }
        const customers = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].customer.findMany({
            where: whereClause,
            orderBy: {
                createdAt: 'desc'
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(customers);
    } catch (error) {
        console.error('Error fetching customers:', error);
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
        // Güvenlik taraması - XSS ve SQL injection kontrolü
        const securityScan = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$security$2d$validators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["securityScanner"].scanForThreats(JSON.stringify(data));
        if (!securityScan.safe) {
            console.warn('Security threats detected:', securityScan.threats);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Güvenlik tehdidi tespit edildi. Lütfen girdiğinizi kontrol edin.'
            }, {
                status: 400
            });
        }
        // Zod validation
        const validation = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["customerSchema"].safeParse(data);
        if (!validation.success) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: validation.error.issues.map((issue)=>issue.message).join(', ')
            }, {
                status: 400
            });
        }
        const validatedData = validation.data;
        // Input sanitization
        const sanitizedData = {
            ...validatedData,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$security$2d$validators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["securityScanner"].sanitizeInput(validatedData.name),
            email: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$security$2d$validators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["securityScanner"].sanitizeInput(validatedData.email),
            phone: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$security$2d$validators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["securityScanner"].sanitizeInput(validatedData.phone),
            tcNo: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$security$2d$validators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["securityScanner"].sanitizeInput(validatedData.tcNo)
        };
        // TC kimlik no ile mükerrer kayıt kontrolü
        const existingCustomer = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].customer.findUnique({
            where: {
                tcNo: sanitizedData.tcNo
            }
        });
        if (existingCustomer) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Bu TC kimlik numarası ile kayıtlı müşteri sistemde bulunmaktadır'
            }, {
                status: 400
            });
        }
        // Bugünün tarihini al
        const today = new Date();
        const formattedDate = `${today.getDate().toString().padStart(2, '0')}.${(today.getMonth() + 1).toString().padStart(2, '0')}.${today.getFullYear()}`;
        // Yeni müşteri oluştur
        const newCustomer = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].customer.create({
            data: {
                name: sanitizedData.name,
                email: sanitizedData.email,
                phone: sanitizedData.phone,
                tcNo: sanitizedData.tcNo,
                birthDate: validatedData.birthDate || null,
                occupation: validatedData.occupation || null,
                address: validatedData.address || null,
                cityId: validatedData.cityId || null,
                districtId: validatedData.districtId || null,
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(newCustomer, {
            status: 201
        });
    } catch (error) {
        console.error('Error creating customer:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Müşteri oluşturulurken bir hata oluştu'
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__6c950955._.js.map
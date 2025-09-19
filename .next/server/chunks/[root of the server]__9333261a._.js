module.exports = {

"[project]/.next-internal/server/app/api/csrf-token/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/lib/csrf.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "csrfProtection": (()=>csrfProtection),
    "generateCSRFToken": (()=>generateCSRFToken),
    "setCSRFTokenCookie": (()=>setCSRFTokenCookie),
    "validateCSRFToken": (()=>validateCSRFToken)
});
function generateCSRFToken() {
    // Edge Runtime'da crypto.randomBytes yerine Web Crypto API kullanıyoruz
    const array = new Uint8Array(32);
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
        crypto.getRandomValues(array);
    } else {
        // Fallback for environments without crypto
        for(let i = 0; i < array.length; i++){
            array[i] = Math.floor(Math.random() * 256);
        }
    }
    return Array.from(array, (byte)=>byte.toString(16).padStart(2, '0')).join('');
}
function validateCSRFToken(token, sessionToken) {
    if (!token || !sessionToken) {
        return false;
    }
    return token === sessionToken;
}
function csrfProtection(request) {
    // GET, HEAD, OPTIONS istekleri için CSRF koruması gerekmiyor
    if ([
        'GET',
        'HEAD',
        'OPTIONS'
    ].includes(request.method)) {
        return true;
    }
    // POST, PUT, DELETE gibi state-changing istekler için CSRF token kontrolü
    const csrfToken = request.headers.get('x-csrf-token') || request.headers.get('csrf-token');
    const sessionToken = request.cookies.get('csrf-token')?.value;
    if (!csrfToken || !sessionToken) {
        return false;
    }
    return validateCSRFToken(csrfToken, sessionToken);
}
function setCSRFTokenCookie(token) {
    return {
        name: 'csrf-token',
        value: token,
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 // 24 saat
    };
}
}}),
"[project]/src/app/api/csrf-token/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET),
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$csrf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/csrf.ts [app-route] (ecmascript)");
;
;
async function GET(request) {
    try {
        // Yeni CSRF token oluştur
        const csrfToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$csrf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateCSRFToken"])();
        // Cookie ayarlarını hazırla
        const cookieOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$csrf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setCSRFTokenCookie"])(csrfToken);
        // Response oluştur
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            csrfToken,
            success: true
        });
        // CSRF token'ı cookie olarak set et
        response.cookies.set(cookieOptions.name, cookieOptions.value, {
            httpOnly: cookieOptions.httpOnly,
            secure: cookieOptions.secure,
            sameSite: cookieOptions.sameSite,
            maxAge: cookieOptions.maxAge
        });
        return response;
    } catch (error) {
        console.error('CSRF token oluşturulurken hata:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'CSRF token oluşturulamadı'
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    // POST istekleri için de aynı işlemi yap
    return GET(request);
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__9333261a._.js.map
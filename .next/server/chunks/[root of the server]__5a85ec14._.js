module.exports = {

"[project]/.next-internal/server/app/api/auth/login/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/src/lib/prisma.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
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
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[project]/src/lib/security-utils.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Security policies and utilities
/**
 * Security policies configuration
 */ __turbopack_context__.s({
    "InputValidator": (()=>InputValidator),
    "RateLimitStore": (()=>RateLimitStore),
    "SECURITY_POLICIES": (()=>SECURITY_POLICIES),
    "SecurityScanner": (()=>SecurityScanner),
    "SecurityUtils": (()=>SecurityUtils),
    "VALIDATION_PATTERNS": (()=>VALIDATION_PATTERNS)
});
const SECURITY_POLICIES = {
    password: {
        minLength: 8,
        maxLength: 128,
        requireUppercase: true,
        requireLowercase: true,
        requireNumbers: true,
        requireSpecialChars: true,
        specialChars: '!@#$%^&*()_+-=[]{}|;:,.<>?',
        maxConsecutiveChars: 3,
        preventCommonPasswords: true,
        preventUserInfo: true
    },
    session: {
        maxAge: 24 * 60 * 60 * 1000,
        warningTime: 5 * 60 * 1000,
        renewThreshold: 30 * 60 * 1000,
        maxConcurrentSessions: 3
    },
    rateLimit: {
        login: {
            windowMs: 15 * 60 * 1000,
            maxAttempts: 5
        },
        api: {
            windowMs: 60 * 1000,
            maxAttempts: 100
        },
        registration: {
            windowMs: 60 * 60 * 1000,
            maxAttempts: 3
        }
    }
};
const VALIDATION_PATTERNS = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^(\+90|0)?[5][0-9]{9}$/,
    tcNo: /^[1-9][0-9]{10}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]).{8,}$/,
    alphanumeric: /^[a-zA-Z0-9]+$/,
    numeric: /^[0-9]+$/,
    url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/
};
class SecurityScanner {
    static SQL_INJECTION_PATTERNS = [
        /('|(\-\-)|(;)|(\||\|)|(\*|\*))/i,
        /(union|select|insert|delete|update|drop|create|alter|exec|execute)/i,
        /(script|javascript|vbscript|onload|onerror|onclick)/i
    ];
    static XSS_PATTERNS = [
        /<script[^>]*>.*?<\/script>/gi,
        /<iframe[^>]*>.*?<\/iframe>/gi,
        /javascript:/gi,
        /on\w+\s*=/gi,
        /<\s*\w.*?(onload|onerror|onclick).*?>/gi
    ];
    /**
   * Scan input for SQL injection attempts
   */ static scanForSQLInjection(input) {
        return this.SQL_INJECTION_PATTERNS.some((pattern)=>pattern.test(input));
    }
    /**
   * Scan input for XSS attempts
   */ static scanForXSS(input) {
        return this.XSS_PATTERNS.some((pattern)=>pattern.test(input));
    }
    /**
   * Comprehensive security scan
   */ static scanInput(input) {
        const threats = [];
        if (this.scanForSQLInjection(input)) {
            threats.push('SQL Injection');
        }
        if (this.scanForXSS(input)) {
            threats.push('XSS');
        }
        return {
            isSafe: threats.length === 0,
            threats
        };
    }
}
class InputValidator {
    /**
   * Validate email format
   */ static validateEmail(email) {
        return VALIDATION_PATTERNS.email.test(email);
    }
    /**
   * Validate phone number format
   */ static validatePhone(phone) {
        return VALIDATION_PATTERNS.phone.test(phone);
    }
    /**
   * Validate TC number
   */ static validateTCNo(tcNo) {
        if (!VALIDATION_PATTERNS.tcNo.test(tcNo)) {
            return false;
        }
        // TC number algorithm validation
        const digits = tcNo.split('').map(Number);
        const sum1 = digits[0] + digits[2] + digits[4] + digits[6] + digits[8];
        const sum2 = digits[1] + digits[3] + digits[5] + digits[7];
        const check1 = (sum1 * 7 - sum2) % 10;
        const check2 = (sum1 + sum2 + digits[9]) % 10;
        return check1 === digits[9] && check2 === digits[10];
    }
    /**
   * Validate input against security threats
   */ static validateSecurity(input) {
        const scan = SecurityScanner.scanInput(input);
        return {
            isValid: scan.isSafe,
            errors: scan.threats
        };
    }
    /**
   * Validate string length
   */ static validateLength(input, min, max) {
        return input.length >= min && input.length <= max;
    }
    /**
   * Validate against pattern
   */ static validatePattern(input, pattern) {
        return pattern.test(input);
    }
}
class RateLimitStore {
    store = new Map();
    /**
   * Check if request is within rate limit
   */ isAllowed(key, windowMs, maxAttempts) {
        const now = Date.now();
        const record = this.store.get(key);
        if (!record || now > record.resetTime) {
            this.store.set(key, {
                count: 1,
                resetTime: now + windowMs
            });
            return true;
        }
        if (record.count >= maxAttempts) {
            return false;
        }
        record.count++;
        return true;
    }
    /**
   * Get remaining attempts
   */ getRemainingAttempts(key, maxAttempts) {
        const record = this.store.get(key);
        if (!record || Date.now() > record.resetTime) {
            return maxAttempts;
        }
        return Math.max(0, maxAttempts - record.count);
    }
    /**
   * Get reset time for rate limit
   */ getResetTime(key) {
        const record = this.store.get(key);
        if (!record || Date.now() > record.resetTime) {
            return null;
        }
        return record.resetTime;
    }
    /**
   * Clear rate limit for key
   */ clear(key) {
        this.store.delete(key);
    }
    /**
   * Clear expired entries
   */ cleanup() {
        const now = Date.now();
        for (const [key, record] of this.store.entries()){
            if (now > record.resetTime) {
                this.store.delete(key);
            }
        }
    }
}
const SecurityUtils = {
    /**
   * Generate secure random string
   */ generateSecureToken (length = 32) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for(let i = 0; i < length; i++){
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    },
    /**
   * Escape HTML to prevent XSS
   */ escapeHtml (unsafe) {
        return unsafe.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    },
    /**
   * Generate CSRF token
   */ generateCSRFToken () {
        return this.generateSecureToken(64);
    },
    /**
   * Validate CSRF token
   */ validateCSRFToken (token, expectedToken) {
        return token === expectedToken && token.length === 64;
    }
};
}}),
"[project]/src/lib/security.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PASSWORD_POLICY": (()=>PASSWORD_POLICY),
    "RATE_LIMIT_POLICY": (()=>RATE_LIMIT_POLICY),
    "SESSION_POLICY": (()=>SESSION_POLICY),
    "generateSecurePassword": (()=>generateSecurePassword),
    "hashPassword": (()=>hashPassword),
    "isSessionExpired": (()=>isSessionExpired),
    "rateLimitStore": (()=>rateLimitStore),
    "sanitizeEmail": (()=>sanitizeEmail),
    "sanitizeInput": (()=>sanitizeInput),
    "sanitizePhoneNumber": (()=>sanitizePhoneNumber),
    "shouldShowSessionWarning": (()=>shouldShowSessionWarning),
    "validatePasswordStrength": (()=>validatePasswordStrength),
    "validateTCNo": (()=>validateTCNo),
    "verifyPassword": (()=>verifyPassword)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$security$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/security-utils.ts [app-route] (ecmascript)");
;
;
const PASSWORD_POLICY = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$security$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SECURITY_POLICIES"].password;
const SESSION_POLICY = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$security$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SECURITY_POLICIES"].session;
const RATE_LIMIT_POLICY = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$security$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SECURITY_POLICIES"].rateLimit;
function validatePasswordStrength(password) {
    const errors = [];
    let score = 0;
    // Uzunluk kontrolü
    if (password.length < PASSWORD_POLICY.minLength) {
        errors.push(`Şifre en az ${PASSWORD_POLICY.minLength} karakter olmalıdır`);
    } else if (password.length >= PASSWORD_POLICY.minLength) {
        score += 1;
    }
    if (password.length > PASSWORD_POLICY.maxLength) {
        errors.push(`Şifre en fazla ${PASSWORD_POLICY.maxLength} karakter olabilir`);
    }
    // Büyük harf kontrolü
    if (PASSWORD_POLICY.requireUppercase && !/[A-Z]/.test(password)) {
        errors.push('Şifre en az bir büyük harf içermelidir');
    } else if (/[A-Z]/.test(password)) {
        score += 1;
    }
    // Küçük harf kontrolü
    if (PASSWORD_POLICY.requireLowercase && !/[a-z]/.test(password)) {
        errors.push('Şifre en az bir küçük harf içermelidir');
    } else if (/[a-z]/.test(password)) {
        score += 1;
    }
    // Rakam kontrolü
    if (PASSWORD_POLICY.requireNumbers && !/\d/.test(password)) {
        errors.push('Şifre en az bir rakam içermelidir');
    } else if (/\d/.test(password)) {
        score += 1;
    }
    // Özel karakter kontrolü
    if (PASSWORD_POLICY.requireSpecialChars) {
        const specialCharRegex = new RegExp(`[${PASSWORD_POLICY.specialChars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}]`);
        if (!specialCharRegex.test(password)) {
            errors.push(`Şifre en az bir özel karakter içermelidir (${PASSWORD_POLICY.specialChars})`);
        } else {
            score += 1;
        }
    }
    // Yaygın şifre kontrolü
    const commonPasswords = [
        '12345678',
        'password',
        '123456789',
        'qwerty',
        'abc123',
        'password123',
        '123123123',
        'admin',
        'letmein',
        'welcome'
    ];
    if (commonPasswords.includes(password.toLowerCase())) {
        errors.push('Bu şifre çok yaygın kullanılmaktadır, daha güvenli bir şifre seçiniz');
        score = Math.max(0, score - 2);
    }
    return {
        isValid: errors.length === 0,
        errors,
        score: Math.min(5, score)
    };
}
async function hashPassword(password) {
    const saltRounds = 12; // Güvenlik için yüksek salt rounds
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(password, saltRounds);
}
async function verifyPassword(password, hashedPassword) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(password, hashedPassword);
}
function generateSecurePassword(length = 12) {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = PASSWORD_POLICY.specialChars;
    const allChars = uppercase + lowercase + numbers + specialChars;
    let password = '';
    // Her kategoriden en az bir karakter ekle
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];
    // Kalan karakterleri rastgele ekle
    for(let i = 4; i < length; i++){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    // Karakterleri karıştır
    return password.split('').sort(()=>Math.random() - 0.5).join('');
}
function sanitizeInput(input) {
    if (typeof input !== 'string') return '';
    return input.trim().replace(/[<>]/g, '') // XSS koruması için temel HTML tag'leri kaldır
    .replace(/['"]/g, '') // SQL injection koruması için tırnak işaretlerini kaldır
    .slice(0, 1000); // Maksimum uzunluk sınırı
}
function sanitizeEmail(email) {
    if (typeof email !== 'string') return '';
    return email.trim().toLowerCase().replace(/[^a-z0-9@._-]/g, '') // Sadece geçerli email karakterleri
    .slice(0, 100); // Maksimum uzunluk sınırı
}
function validateTCNo(tcNo) {
    if (typeof tcNo !== 'string' || tcNo.length !== 11) return false;
    // Sadece rakam kontrolü
    if (!/^\d{11}$/.test(tcNo)) return false;
    // İlk hane 0 olamaz
    if (tcNo[0] === '0') return false;
    // TC Kimlik No algoritması kontrolü
    const digits = tcNo.split('').map(Number);
    // İlk 10 hanenin toplamı
    const sum1 = digits.slice(0, 10).reduce((sum, digit)=>sum + digit, 0);
    if (sum1 % 10 !== digits[10]) return false;
    // Tek ve çift hanelerin toplamı kontrolü
    const oddSum = digits[0] + digits[2] + digits[4] + digits[6] + digits[8];
    const evenSum = digits[1] + digits[3] + digits[5] + digits[7];
    if ((oddSum * 7 - evenSum) % 10 !== digits[9]) return false;
    return true;
}
function sanitizePhoneNumber(phone) {
    if (typeof phone !== 'string') return '';
    // Sadece rakam, boşluk, tire, parantez ve + işareti
    return phone.replace(/[^\d\s\-\+\(\)]/g, '').trim().slice(0, 20);
}
function isSessionExpired(lastActivity) {
    const now = new Date();
    const timeDiff = now.getTime() - lastActivity.getTime();
    return timeDiff > SESSION_POLICY.maxAge;
}
function shouldShowSessionWarning(lastActivity) {
    const now = new Date();
    const timeDiff = now.getTime() - lastActivity.getTime();
    const remainingTime = SESSION_POLICY.maxAge - timeDiff;
    return remainingTime <= SESSION_POLICY.warningTime && remainingTime > 0;
}
const rateLimitStore = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$security$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RateLimitStore"]();
}}),
"[project]/src/lib/validation.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "brandSchema": (()=>brandSchema),
    "changePasswordSchema": (()=>changePasswordSchema),
    "customerSchema": (()=>customerSchema),
    "idSchema": (()=>idSchema),
    "loginSchema": (()=>loginSchema),
    "registerSchema": (()=>registerSchema),
    "saleSchema": (()=>saleSchema),
    "validateRequest": (()=>validateRequest),
    "withValidation": (()=>withValidation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$security$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/security.ts [app-route] (ecmascript)");
;
;
const loginSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    username: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Kullanıcı adı zorunludur').max(100, 'Kullanıcı adı çok uzun').trim(),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Şifre zorunludur').max(200, 'Şifre çok uzun'),
    loginType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const registerSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    username: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, 'Kullanıcı adı en az 3 karakter olmalıdır').max(50, 'Kullanıcı adı en fazla 50 karakter olabilir').regex(/^[a-zA-Z0-9_]+$/, 'Kullanıcı adı sadece harf, rakam ve alt çizgi içerebilir').trim(),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email('Geçerli bir e-posta adresi giriniz').max(100, 'E-posta adresi çok uzun').trim().toLowerCase(),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().refine((password)=>{
        const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$security$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validatePasswordStrength"])(password);
        return validation.isValid;
    }, (password)=>{
        const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$security$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validatePasswordStrength"])(password);
        return {
            message: validation.errors.join(', ')
        };
    }),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, 'İsim en az 2 karakter olmalıdır').max(100, 'İsim çok uzun').trim(),
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'ADMIN',
        'USER'
    ]).default('USER')
});
const changePasswordSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    currentPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Mevcut şifre zorunludur'),
    newPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().refine((password)=>{
        const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$security$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validatePasswordStrength"])(password);
        return validation.isValid;
    }, (password)=>{
        const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$security$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validatePasswordStrength"])(password);
        return {
            message: validation.errors.join(', ')
        };
    }),
    confirmPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
}).refine((data)=>data.newPassword === data.confirmPassword, {
    message: "Şifreler eşleşmiyor",
    path: [
        "confirmPassword"
    ]
});
const customerSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, 'İsim en az 2 karakter olmalıdır').max(100, 'İsim çok uzun').trim(),
    tcNo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().length(11, 'TC Kimlik No 11 haneli olmalıdır').refine((tcNo)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$security$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateTCNo"])(tcNo), 'Geçerli bir TC Kimlik No giriniz'),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, 'Telefon numarası en az 10 haneli olmalıdır').max(15, 'Telefon numarası çok uzun').regex(/^[\d\s\-\+\(\)]+$/, 'Geçerli bir telefon numarası giriniz'),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email('Geçerli bir e-posta adresi giriniz').max(100, 'E-posta adresi çok uzun').trim().toLowerCase(),
    birthDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    occupation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(100, 'Meslek bilgisi çok uzun').optional(),
    address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(500, 'Adres çok uzun').optional(),
    cityId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int('Şehir ID geçerli bir sayı olmalıdır').positive('Şehir seçimi zorunludur').optional(),
    districtId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int('İlçe ID geçerli bir sayı olmalıdır').positive('İlçe seçimi zorunludur').optional()
});
const saleSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    customerId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int('Müşteri ID geçerli bir sayı olmalıdır').positive('Müşteri seçimi zorunludur'),
    brandId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int('Marka ID geçerli bir sayı olmalıdır').positive('Marka seçimi zorunludur'),
    model: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Model bilgisi zorunludur').max(100, 'Model adı çok uzun').trim(),
    year: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int('Yıl geçerli bir sayı olmalıdır').min(1900, 'Geçerli bir yıl giriniz').max(new Date().getFullYear() + 1, 'Gelecek yıldan fazla olamaz'),
    price: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive('Fiyat pozitif bir sayı olmalıdır').max(10000000, 'Fiyat çok yüksek'),
    saleDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime('Geçerli bir tarih formatı giriniz').optional(),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(1000, 'Notlar çok uzun').optional()
});
const brandSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Marka adı zorunludur').max(50, 'Marka adı çok uzun').trim()
});
const idSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^\d+$/, 'Geçerli bir ID giriniz').transform((val)=>parseInt(val, 10))
});
function validateRequest(schema, data) {
    try {
        const validatedData = schema.parse(data);
        return {
            success: true,
            data: validatedData
        };
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodError) {
            const errorMessage = error.errors.map((err)=>err.message).join(', ');
            return {
                success: false,
                error: errorMessage
            };
        }
        return {
            success: false,
            error: 'Validation hatası oluştu'
        };
    }
}
function withValidation(schema) {
    return async (request)=>{
        try {
            const body = await request.json();
            const validation = validateRequest(schema, body);
            if (!validation.success) {
                return {
                    success: false,
                    response: new Response(JSON.stringify({
                        error: validation.error
                    }), {
                        status: 400,
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                };
            }
            return {
                success: true,
                data: validation.data
            };
        } catch (error) {
            return {
                success: false,
                response: new Response(JSON.stringify({
                    error: 'Geçersiz JSON formatı'
                }), {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            };
        }
    };
}
}}),
"[project]/src/app/api/auth/login/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/validation.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$security$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/security.ts [app-route] (ecmascript)");
;
;
;
;
async function POST(request) {
    try {
        // Rate limiting kontrolü
        const clientIp = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
        const rateLimitKey = `login:${clientIp}`;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$security$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rateLimitStore"].isAllowed(rateLimitKey, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$security$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RATE_LIMIT_POLICY"].windowMs, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$security$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RATE_LIMIT_POLICY"].maxAttempts)) {
            const timeLeft = Math.ceil(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$security$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RATE_LIMIT_POLICY"].windowMs / 1000 / 60);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: `Çok fazla giriş denemesi. ${timeLeft} dakika sonra tekrar deneyin.`
            }, {
                status: 429
            });
        }
        // Request body'yi al
        const body = await request.json();
        // Zod validation
        const validation = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loginSchema"].safeParse(body);
        if (!validation.success) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Geçersiz giriş bilgileri'
            }, {
                status: 400
            });
        }
        const { username, password, loginType } = validation.data;
        console.log(`Login attempt: ${username}, type: ${loginType}`);
        // Önce kullanıcı adı ile arama yap
        let user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].user.findUnique({
            where: {
                username: username
            }
        });
        console.log('User found:', user ? {
            id: user.id,
            username: user.username,
            role: user.role
        } : 'null');
        // Kullanıcı adı ile bulunamadıysa, e-posta ile dene
        if (!user) {
            try {
                // İkincil kontroller - email veya name ile arama
                const usersByAlternative = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].user.findMany({
                    where: {
                        OR: [
                            {
                                email: username
                            },
                            {
                                name: username
                            }
                        ]
                    },
                    take: 1 // Sadece ilk sonucu al
                });
                if (usersByAlternative.length > 0) {
                    user = usersByAlternative[0];
                }
            } catch (findError) {
                console.error("Error finding by alternative fields:", findError);
            }
            // Hala kullanıcı bulunamadıysa hata döndür
            if (!user) {
                console.log(`Kullanıcı bulunamadı: ${username}`);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Kullanıcı bulunamadı'
                }, {
                    status: 401
                });
            }
        }
        // Şifre kontrolü
        const isValidPassword = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$security$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyPassword"])(password, user.password);
        if (!isValidPassword) {
            console.log(`Geçersiz şifre: ${username}`);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Geçersiz şifre'
            }, {
                status: 401
            });
        }
        // Başarılı giriş - rate limit sayacını sıfırla
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$security$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rateLimitStore"].clear(rateLimitKey);
        // Admin girişi kontrolünü kaldırıyoruz, rol kontrolü frontend'de yapılacak
        // Password'ü response'dan çıkar
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: _password, ...userWithoutPassword } = user;
        const roleKey = user.role || 'USER';
        const roleName = user.role === 'ADMIN' ? 'Yönetici' : 'Kullanıcı';
        console.log(`Başarılı giriş: ${username}, rol: ${roleKey}`);
        // Response için user objesini düzenle
        const responseUser = {
            ...userWithoutPassword,
            role: roleKey,
            roleName: roleName
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(responseUser);
    } catch (error) {
        console.error('Login error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Giriş işlemi başarısız oldu. Lütfen daha sonra tekrar deneyin.'
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__5a85ec14._.js.map
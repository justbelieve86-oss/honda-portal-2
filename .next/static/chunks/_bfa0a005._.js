(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_bfa0a005._.js", {

"[project]/src/app/context/AuthContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthProvider": (()=>AuthProvider),
    "useAuth": (()=>useAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
// Context oluşturma
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Oturum bilgisini local storage'dan yükleme
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const loadUserFromStorage = {
                "AuthProvider.useEffect.loadUserFromStorage": ()=>{
                    if ("TURBOPACK compile-time falsy", 0) {
                        "TURBOPACK unreachable";
                    }
                    try {
                        // LocalStorage'dan kullanıcı verisi yükleme
                        const storedUser = localStorage.getItem('user');
                        if (storedUser) {
                            console.log('User loaded from localStorage');
                            setUser(JSON.parse(storedUser));
                        } else {
                            // LocalStorage'da yoksa cookie'den kullanıcı verisini alma
                            const cookies = document.cookie.split(';');
                            console.log('All cookies:', document.cookie);
                            for(let i = 0; i < cookies.length; i++){
                                const cookie = cookies[i].trim();
                                if (cookie.startsWith('user=')) {
                                    try {
                                        const userCookieValue = cookie.substring('user='.length, cookie.length);
                                        if (userCookieValue) {
                                            // Base64 güvenli decode et
                                            const binaryString = atob(userCookieValue);
                                            const bytes = new Uint8Array(binaryString.length);
                                            for(let i = 0; i < binaryString.length; i++){
                                                bytes[i] = binaryString.charCodeAt(i);
                                            }
                                            const decoder = new TextDecoder();
                                            const jsonString = decoder.decode(bytes);
                                            const userData = JSON.parse(jsonString);
                                            console.log('User loaded from cookie with base64');
                                            console.log('User role from cookie:', userData.role);
                                            setUser(userData);
                                            // LocalStorage'a da kaydedelim
                                            localStorage.setItem('user', JSON.stringify(userData));
                                            break;
                                        }
                                    } catch (cookieError) {
                                        console.error('Base64 cookie parsing error:', cookieError);
                                        // Eski format için fallback
                                        try {
                                            const userCookieEncoded = cookie.substring('user='.length, cookie.length);
                                            const userCookie = decodeURIComponent(userCookieEncoded);
                                            const userData = JSON.parse(userCookie);
                                            console.log('User loaded from cookie with URL decode fallback');
                                            setUser(userData);
                                            localStorage.setItem('user', JSON.stringify(userData));
                                            break;
                                        } catch (fallbackError) {
                                            console.error('Fallback cookie parsing error:', fallbackError);
                                        }
                                    }
                                }
                            }
                        }
                    } catch (error) {
                        console.error('Oturum bilgisi yüklenirken hata oluştu:', error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["AuthProvider.useEffect.loadUserFromStorage"];
            loadUserFromStorage();
        }
    }["AuthProvider.useEffect"], []);
    // Giriş işlemi - useCallback ile optimize edildi
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[login]": async (username, password, loginType)=>{
            try {
                // Önce CSRF token'ı al
                const csrfResponse = await fetch('/api/csrf-token');
                if (!csrfResponse.ok) {
                    throw new Error('CSRF token alınamadı');
                }
                const { csrfToken } = await csrfResponse.json();
                const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-csrf-token': csrfToken
                    },
                    body: JSON.stringify({
                        username,
                        password,
                        loginType
                    })
                });
                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('Login error status:', response.status);
                    throw new Error(errorData.error || 'Giriş başarısız');
                }
                const userData = await response.json();
                setUser(userData);
                // LocalStorage'a kullanıcı bilgilerini kaydet
                localStorage.setItem('user', JSON.stringify(userData));
                // Cookie'ye kullanıcı bilgilerini kaydet (middleware için)
                try {
                    // JSON string'i güvenli base64 encode edelim ki özel karakterler sorun çıkarmasın
                    const jsonString = JSON.stringify(userData);
                    // UTF-8 karakterleri için güvenli encoding
                    const encoder = new TextEncoder();
                    const data = encoder.encode(jsonString);
                    const base64Value = btoa(String.fromCharCode(...data));
                    document.cookie = `user=${base64Value}; path=/; max-age=86400; SameSite=Lax`;
                    console.log('Set cookie with base64 encoding');
                    console.log('User role from login response:', userData.role);
                    // Cookie doğru şekilde ayarlandı mı kontrol edelim
                    setTimeout({
                        "AuthProvider.useCallback[login]": ()=>{
                            console.log('Cookie check after timeout:', document.cookie);
                            const hasCookie = document.cookie.includes('user=');
                            console.log('Has cookie after timeout:', hasCookie);
                        }
                    }["AuthProvider.useCallback[login]"], 100);
                } catch (cookieError) {
                    console.error('Cookie set error:', cookieError);
                }
                return userData; // Kullanıcı bilgilerini döndür
            } catch (error) {
                console.error('Giriş sırasında hata:', error);
                throw error;
            }
        }
    }["AuthProvider.useCallback[login]"], []);
    // Çıkış işlemi - useCallback ile optimize edildi
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[logout]": ()=>{
            setUser(null);
            localStorage.removeItem('user');
            // Cookie'yi temizle
            try {
                document.cookie = 'user=; path=/; max-age=0; SameSite=Lax';
                console.log('Cleared cookie on logout');
            } catch (cookieError) {
                console.error('Cookie clear error:', cookieError);
            }
        }
    }["AuthProvider.useCallback[logout]"], []);
    // Context value'yu memoize et
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AuthProvider.useMemo[contextValue]": ()=>({
                user,
                login,
                logout,
                loading
            })
    }["AuthProvider.useMemo[contextValue]"], [
        user,
        login,
        logout,
        loading
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: contextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/context/AuthContext.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
_s(AuthProvider, "ns1h3JJbriSFEhGVXNLpwUwolZk=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth hook AuthProvider içinde kullanılmalıdır');
    }
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/error-handler.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ErrorSeverity": (()=>ErrorSeverity),
    "clearClientErrors": (()=>clearClientErrors),
    "getClientErrors": (()=>getClientErrors),
    "getErrorSeverity": (()=>getErrorSeverity),
    "handleClientError": (()=>handleClientError),
    "setupGlobalErrorHandling": (()=>setupGlobalErrorHandling)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var ErrorSeverity = /*#__PURE__*/ function(ErrorSeverity) {
    ErrorSeverity["LOW"] = "low";
    ErrorSeverity["MEDIUM"] = "medium";
    ErrorSeverity["HIGH"] = "high";
    ErrorSeverity["CRITICAL"] = "critical";
    return ErrorSeverity;
}({});
function handleClientError(error, errorInfo, context) {
    const clientError = {
        name: error.name,
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString(),
        url: ("TURBOPACK compile-time truthy", 1) ? window.location.href : ("TURBOPACK unreachable", undefined),
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : ''
    };
    // Log to console in development
    if ("TURBOPACK compile-time truthy", 1) {
        console.group('🚨 Client Error Detected');
        console.error('Error:', error);
        console.error('Error Info:', errorInfo);
        console.error('Context:', context);
        console.groupEnd();
    }
    // Store error in localStorage for debugging
    try {
        const errorLog = {
            ...clientError,
            errorInfo: errorInfo ? {
                componentStack: errorInfo.componentStack
            } : undefined,
            context
        };
        const existingErrors = JSON.parse(localStorage.getItem('client_errors') || '[]');
        existingErrors.push(errorLog);
        // Keep only last 50 errors
        if (existingErrors.length > 50) {
            existingErrors.splice(0, existingErrors.length - 50);
        }
        localStorage.setItem('client_errors', JSON.stringify(existingErrors));
    } catch (storageError) {
        console.error('Failed to store error in localStorage:', storageError);
    }
    // Send error to monitoring service (if configured)
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
}
// Send error to external monitoring service
function sendErrorToMonitoring(error, errorInfo, context) {
    // This would integrate with services like Sentry, LogRocket, etc.
    // For now, we'll just log it
    console.log('Error would be sent to monitoring service:', {
        error,
        errorInfo,
        context
    });
// Example Sentry integration:
// if (window.Sentry) {
//   window.Sentry.captureException(new Error(error.message), {
//     tags: {
//       component: context?.componentStack?.split('\n')[1]?.trim()
//     },
//     extra: {
//       errorInfo,
//       context
//     }
//   });
// }
}
function getClientErrors() {
    try {
        return JSON.parse(localStorage.getItem('client_errors') || '[]');
    } catch  {
        return [];
    }
}
function clearClientErrors() {
    localStorage.removeItem('client_errors');
}
function getErrorSeverity(error) {
    const message = error.message.toLowerCase();
    const name = error.name.toLowerCase();
    // Critical errors
    if (name.includes('syntaxerror') || name.includes('referenceerror') || message.includes('network error') || message.includes('failed to fetch')) {
        return "critical";
    }
    // High severity errors
    if (name.includes('typeerror') || message.includes('permission denied') || message.includes('unauthorized')) {
        return "high";
    }
    // Medium severity errors
    if (message.includes('validation') || message.includes('invalid')) {
        return "medium";
    }
    // Default to low severity
    return "low";
}
function setupGlobalErrorHandling() {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event)=>{
        const error = new Error(event.reason?.message || 'Unhandled Promise Rejection');
        error.name = 'UnhandledPromiseRejection';
        error.stack = event.reason?.stack;
        handleClientError(error, undefined, {
            errorBoundary: false,
            props: {
                reason: event.reason
            }
        });
    });
    // Handle global JavaScript errors
    window.addEventListener('error', (event)=>{
        const error = new Error(event.message);
        error.name = event.error?.name || 'GlobalError';
        error.stack = event.error?.stack;
        handleClientError(error, undefined, {
            errorBoundary: false,
            props: {
                filename: event.filename,
                lineno: event.lineno,
                colno: event.colno
            }
        });
    });
}
// Initialize error handling when module is imported
if ("TURBOPACK compile-time truthy", 1) {
    setupGlobalErrorHandling();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/ErrorBoundary.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearErrorBoundaryLogs": (()=>clearErrorBoundaryLogs),
    "default": (()=>__TURBOPACK__default__export__),
    "getErrorBoundaryLogs": (()=>getErrorBoundaryLogs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$error$2d$handler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/error-handler.ts [app-client] (ecmascript)");
'use client';
;
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            errorId: ''
        };
    }
    static getDerivedStateFromError(error) {
        // State'i güncelle böylece bir sonraki render'da fallback UI gösterilsin
        return {
            hasError: true,
            error,
            errorId: crypto.randomUUID()
        };
    }
    componentDidCatch(error, errorInfo) {
        // Hata detaylarını state'e kaydet
        this.setState({
            error,
            errorInfo
        });
        // Log error using our enhanced error handler
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$error$2d$handler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleClientError"])(error, errorInfo);
        // Parent component'e hata bildir
        if (this.props.onError) {
            this.props.onError(error, errorInfo);
        }
        // Hata raporlama servisi entegrasyonu
        this.logErrorToService(error, errorInfo);
    }
    logErrorToService = (error, errorInfo)=>{
        try {
            // Local storage'a kaydet
            const errorLog = {
                error: {
                    name: error.name,
                    message: error.message,
                    stack: error.stack
                },
                errorInfo: {
                    componentStack: errorInfo.componentStack
                },
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent,
                url: window.location.href
            };
            const existingLogs = JSON.parse(localStorage.getItem('error_boundary_logs') || '[]');
            existingLogs.push(errorLog);
            // Son 20 hatayı tut
            if (existingLogs.length > 20) {
                existingLogs.splice(0, existingLogs.length - 20);
            }
            localStorage.setItem('error_boundary_logs', JSON.stringify(existingLogs));
        } catch (storageError) {
            console.error('Error logging failed:', storageError);
        }
    };
    handleRetry = ()=>{
        this.setState({
            hasError: false,
            error: undefined,
            errorInfo: undefined,
            errorId: ''
        });
    };
    handleReload = ()=>{
        window.location.reload();
    };
    render() {
        if (this.state.hasError) {
            // Custom fallback UI varsa onu göster
            if (this.props.fallback) {
                return this.props.fallback;
            }
            // Default error UI
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen flex items-center justify-center bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md w-full bg-white shadow-lg rounded-lg p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 text-red-600",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/ErrorBoundary.tsx",
                                    lineNumber: 110,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ErrorBoundary.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ErrorBoundary.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-medium text-gray-900",
                                    children: "Bir şeyler ters gitti"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/ErrorBoundary.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm text-gray-500",
                                    children: "Beklenmeyen bir hata oluştu. Lütfen sayfayı yenileyin veya tekrar deneyin."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/ErrorBoundary.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                ("TURBOPACK compile-time value", "development") === 'development' && this.state.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    className: "mt-4 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            className: "cursor-pointer text-sm font-medium text-gray-700",
                                            children: "Hata Detayları (Geliştirme Modu)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ErrorBoundary.tsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 p-3 bg-gray-100 rounded text-xs font-mono text-gray-800 overflow-auto max-h-32",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Hata ID:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ErrorBoundary.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 24
                                                        }, this),
                                                        " ",
                                                        this.state.errorId
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/ErrorBoundary.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Mesaj:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/ErrorBoundary.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 24
                                                        }, this),
                                                        " ",
                                                        this.state.error.message
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/ErrorBoundary.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 21
                                                }, this),
                                                this.state.error.stack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                    className: "mt-2 whitespace-pre-wrap",
                                                    children: this.state.error.stack
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/ErrorBoundary.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/ErrorBoundary.tsx",
                                            lineNumber: 131,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/ErrorBoundary.tsx",
                                    lineNumber: 127,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/ErrorBoundary.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: this.handleRetry,
                                    className: "flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    children: "Tekrar Dene"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/ErrorBoundary.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: this.handleReload,
                                    className: "flex-1 bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500",
                                    children: "Sayfayı Yenile"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/ErrorBoundary.tsx",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/ErrorBoundary.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/ErrorBoundary.tsx",
                    lineNumber: 102,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/ErrorBoundary.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this);
        }
        return this.props.children;
    }
}
const __TURBOPACK__default__export__ = ErrorBoundary;
const getErrorBoundaryLogs = ()=>{
    try {
        return JSON.parse(localStorage.getItem('error_boundary_logs') || '[]');
    } catch  {
        return [];
    }
};
const clearErrorBoundaryLogs = ()=>{
    localStorage.removeItem('error_boundary_logs');
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    }, specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, Error("react-stack-top-frame"), createTask(getTaskName(type)));
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
}]);

//# sourceMappingURL=_bfa0a005._.js.map
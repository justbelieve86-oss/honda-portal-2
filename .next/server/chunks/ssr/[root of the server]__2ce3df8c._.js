module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/app/context/AuthContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthProvider": (()=>AuthProvider),
    "useAuth": (()=>useAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
// Context oluşturma
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Oturum bilgisini local storage'dan yükleme
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadUserFromStorage = ()=>{
            if ("TURBOPACK compile-time truthy", 1) return;
            "TURBOPACK unreachable";
        };
        loadUserFromStorage();
    }, []);
    // Giriş işlemi - useCallback ile optimize edildi
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (username, password, loginType)=>{
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
                setTimeout(()=>{
                    console.log('Cookie check after timeout:', document.cookie);
                    const hasCookie = document.cookie.includes('user=');
                    console.log('Has cookie after timeout:', hasCookie);
                }, 100);
            } catch (cookieError) {
                console.error('Cookie set error:', cookieError);
            }
            return userData; // Kullanıcı bilgilerini döndür
        } catch (error) {
            console.error('Giriş sırasında hata:', error);
            throw error;
        }
    }, []);
    // Çıkış işlemi - useCallback ile optimize edildi
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setUser(null);
        localStorage.removeItem('user');
        // Cookie'yi temizle
        try {
            document.cookie = 'user=; path=/; max-age=0; SameSite=Lax';
            console.log('Cleared cookie on logout');
        } catch (cookieError) {
            console.error('Cookie clear error:', cookieError);
        }
    }, []);
    // Context value'yu memoize et
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            user,
            login,
            logout,
            loading
        }), [
        user,
        login,
        logout,
        loading
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: contextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/context/AuthContext.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth hook AuthProvider içinde kullanılmalıdır');
    }
    return context;
}
}}),
"[project]/src/lib/error-handler.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ErrorSeverity": (()=>ErrorSeverity),
    "clearClientErrors": (()=>clearClientErrors),
    "getClientErrors": (()=>getClientErrors),
    "getErrorSeverity": (()=>getErrorSeverity),
    "handleClientError": (()=>handleClientError),
    "setupGlobalErrorHandling": (()=>setupGlobalErrorHandling)
});
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
        url: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : '',
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
    if ("TURBOPACK compile-time truthy", 1) return;
    "TURBOPACK unreachable";
}
// Initialize error handling when module is imported
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
}
}}),
"[project]/src/app/components/ErrorBoundary.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearErrorBoundaryLogs": (()=>clearErrorBoundaryLogs),
    "default": (()=>__TURBOPACK__default__export__),
    "getErrorBoundaryLogs": (()=>getErrorBoundaryLogs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$error$2d$handler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/error-handler.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"] {
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$error$2d$handler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleClientError"])(error, errorInfo);
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen flex items-center justify-center bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md w-full bg-white shadow-lg rounded-lg p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 text-red-600",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-medium text-gray-900",
                                    children: "Bir şeyler ters gitti"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/ErrorBoundary.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm text-gray-500",
                                    children: "Beklenmeyen bir hata oluştu. Lütfen sayfayı yenileyin veya tekrar deneyin."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/ErrorBoundary.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                ("TURBOPACK compile-time value", "development") === 'development' && this.state.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    className: "mt-4 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            className: "cursor-pointer text-sm font-medium text-gray-700",
                                            children: "Hata Detayları (Geliştirme Modu)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ErrorBoundary.tsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 p-3 bg-gray-100 rounded text-xs font-mono text-gray-800 overflow-auto max-h-32",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                                                this.state.error.stack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: this.handleRetry,
                                    className: "flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    children: "Tekrar Dene"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/ErrorBoundary.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__2ce3df8c._.js.map
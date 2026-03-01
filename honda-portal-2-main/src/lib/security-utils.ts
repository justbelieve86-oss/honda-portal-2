// Security policies and utilities

/**
 * Security policies configuration
 */
export const SECURITY_POLICIES = {
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
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    warningTime: 5 * 60 * 1000, // 5 minutes before expiry
    renewThreshold: 30 * 60 * 1000, // 30 minutes
    maxConcurrentSessions: 3
  },
  rateLimit: {
    login: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      maxAttempts: 5
    },
    api: {
      windowMs: 60 * 1000, // 1 minute
      maxAttempts: 100
    },
    registration: {
      windowMs: 60 * 60 * 1000, // 1 hour
      maxAttempts: 3
    }
  }
};

/**
 * Validation patterns
 */
export const VALIDATION_PATTERNS = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^(\+90|0)?[5][0-9]{9}$/,
  tcNo: /^[1-9][0-9]{10}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]).{8,}$/,
  alphanumeric: /^[a-zA-Z0-9]+$/,
  numeric: /^[0-9]+$/,
  url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/
};

/**
 * Security scanner for detecting potential threats
 */
export class SecurityScanner {
  private static readonly SQL_INJECTION_PATTERNS = [
    /('|(\-\-)|(;)|(\||\|)|(\*|\*))/i,
    /(union|select|insert|delete|update|drop|create|alter|exec|execute)/i,
    /(script|javascript|vbscript|onload|onerror|onclick)/i
  ];

  private static readonly XSS_PATTERNS = [
    /<script[^>]*>.*?<\/script>/gi,
    /<iframe[^>]*>.*?<\/iframe>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<\s*\w.*?(onload|onerror|onclick).*?>/gi
  ];

  /**
   * Scan input for SQL injection attempts
   */
  static scanForSQLInjection(input: string): boolean {
    return this.SQL_INJECTION_PATTERNS.some(pattern => pattern.test(input));
  }

  /**
   * Scan input for XSS attempts
   */
  static scanForXSS(input: string): boolean {
    return this.XSS_PATTERNS.some(pattern => pattern.test(input));
  }

  /**
   * Comprehensive security scan
   */
  static scanInput(input: string): {
    isSafe: boolean;
    threats: string[];
  } {
    const threats: string[] = [];

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

/**
 * Input validator with security checks
 */
export class InputValidator {
  /**
   * Validate email format
   */
  static validateEmail(email: string): boolean {
    return VALIDATION_PATTERNS.email.test(email);
  }

  /**
   * Validate phone number format
   */
  static validatePhone(phone: string): boolean {
    return VALIDATION_PATTERNS.phone.test(phone);
  }

  /**
   * Validate TC number
   */
  static validateTCNo(tcNo: string): boolean {
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
   */
  static validateSecurity(input: string): {
    isValid: boolean;
    errors: string[];
  } {
    const scan = SecurityScanner.scanInput(input);
    return {
      isValid: scan.isSafe,
      errors: scan.threats
    };
  }

  /**
   * Validate string length
   */
  static validateLength(input: string, min: number, max: number): boolean {
    return input.length >= min && input.length <= max;
  }

  /**
   * Validate against pattern
   */
  static validatePattern(input: string, pattern: RegExp): boolean {
    return pattern.test(input);
  }
}

/**
 * Rate limiting store
 */
export class RateLimitStore {
  private store: Map<string, { count: number; resetTime: number }> = new Map();

  /**
   * Check if request is within rate limit
   */
  isAllowed(key: string, windowMs: number, maxAttempts: number): boolean {
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
   */
  getRemainingAttempts(key: string, maxAttempts: number): number {
    const record = this.store.get(key);
    if (!record || Date.now() > record.resetTime) {
      return maxAttempts;
    }
    return Math.max(0, maxAttempts - record.count);
  }

  /**
   * Get reset time for rate limit
   */
  getResetTime(key: string): number | null {
    const record = this.store.get(key);
    if (!record || Date.now() > record.resetTime) {
      return null;
    }
    return record.resetTime;
  }

  /**
   * Clear rate limit for key
   */
  clear(key: string): void {
    this.store.delete(key);
  }

  /**
   * Clear expired entries
   */
  cleanup(): void {
    const now = Date.now();
    for (const [key, record] of this.store.entries()) {
      if (now > record.resetTime) {
        this.store.delete(key);
      }
    }
  }
}

/**
 * Common security utilities
 */
export const SecurityUtils = {
  /**
   * Generate secure random string
   */
  generateSecureToken(length: number = 32): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  },

  /**
   * Escape HTML to prevent XSS
   */
  escapeHtml(unsafe: string): string {
    return unsafe
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  },

  /**
   * Generate CSRF token
   */
  generateCSRFToken(): string {
    return this.generateSecureToken(64);
  },

  /**
   * Validate CSRF token
   */
  validateCSRFToken(token: string, expectedToken: string): boolean {
    return token === expectedToken && token.length === 64;
  }
};
import bcrypt from 'bcryptjs';

// Rate limiting configuration
export const RATE_LIMIT_POLICY = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxAttempts: 5, // limit each IP to 5 requests per windowMs
};

// In-memory rate limit store (in production, use Redis or similar)
const baseRateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limit store with additional methods
export const rateLimitStore = {
  store: baseRateLimitStore,
  
  isAllowed(key: string, windowMs: number, maxAttempts: number): boolean {
    const now = Date.now();
    const record = this.store.get(key);
    
    if (!record) {
      this.store.set(key, { count: 1, resetTime: now + windowMs });
      return true;
    }
    
    if (now > record.resetTime) {
      this.store.set(key, { count: 1, resetTime: now + windowMs });
      return true;
    }
    
    if (record.count >= maxAttempts) {
      return false;
    }
    
    record.count++;
    return true;
  },
  
  clear(key: string): void {
    this.store.delete(key);
  }
}

// Password hashing and verification
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
};

export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

// Rate limiting functions
export const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const record = rateLimitStore.store.get(ip);
  
  if (!record) {
    rateLimitStore.store.set(ip, { count: 1, resetTime: now + RATE_LIMIT_POLICY.windowMs });
    return true;
  }
  
  if (now > record.resetTime) {
    rateLimitStore.store.set(ip, { count: 1, resetTime: now + RATE_LIMIT_POLICY.windowMs });
    return true;
  }
  
  if (record.count >= RATE_LIMIT_POLICY.maxAttempts) {
    return false;
  }
  
  record.count++;
  return true;
};

export const getRemainingAttempts = (ip: string): number => {
  const record = rateLimitStore.store.get(ip);
  if (!record || Date.now() > record.resetTime) {
    return RATE_LIMIT_POLICY.maxAttempts;
  }
  return Math.max(0, RATE_LIMIT_POLICY.maxAttempts - record.count);
};

// Input sanitization
export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>"'&]/g, (match) => {
    const entities: { [key: string]: string } = {
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '&': '&amp;',
    };
    return entities[match] || match;
  });
};

// Generate secure random token
export const generateSecureToken = (length: number = 32): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

// Validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate phone number (Turkish format)
export const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^(\+90|0)?[5][0-9]{9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};
// Simple security test endpoint without external dependencies

// Rate limiting store
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 100; // 100 requests per window

const checkRateLimit = (ip) => {
  const now = Date.now();
  let record = rateLimitStore.get(ip);
  
  if (!record) {
    record = { count: 0, resetTime: now + RATE_LIMIT_WINDOW };
    rateLimitStore.set(ip, record);
  }
  
  if (now > record.resetTime) {
    record.count = 0;
    record.resetTime = now + RATE_LIMIT_WINDOW;
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, retryAfter: Math.ceil((record.resetTime - now) / 1000) };
  }
  
  record.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count };
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return typeof email === 'string' && emailRegex.test(email) && email.length <= 254;
};

const isValidName = (name) => {
  return typeof name === 'string' && name.length >= 2 && name.length <= 50;
};

const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  return input.replace(/[<>"'&]/g, (match) => {
    const entities = {
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '&': '&amp;'
    };
    return entities[match];
  }).trim();
};

export default async function handler(req, res) {
  try {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
    
    // Rate limiting
    const rateLimit = checkRateLimit(ip);
    res.setHeader('X-RateLimit-Limit', RATE_LIMIT_MAX);
    res.setHeader('X-RateLimit-Remaining', rateLimit.remaining || 0);
    
    if (!rateLimit.allowed) {
      res.setHeader('Retry-After', rateLimit.retryAfter);
      return res.status(429).json({
        error: 'Too many requests',
        retryAfter: rateLimit.retryAfter
      });
    }
    
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
    
    const { email, name } = req.body || {};
    
    // Validation
    const errors = {};
    if (!email) {
      errors.email = ['Email is required'];
    } else if (!isValidEmail(email)) {
      errors.email = ['Email format is invalid'];
    }
    
    if (!name) {
      errors.name = ['Name is required'];
    } else if (!isValidName(name)) {
      errors.name = ['Name must be between 2 and 50 characters'];
    }
    
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        error: 'Validation failed',
        details: errors
      });
    }
    
    // Sanitize inputs
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedName = sanitizeInput(name);
    
    // Log to console instead of using logger
    console.log('Security test endpoint accessed:', {
      ip,
      userAgent: req.headers['user-agent'],
      email: sanitizedEmail,
      name: sanitizedName,
      timestamp: new Date().toISOString()
    });
    
    return res.status(200).json({
      success: true,
      message: 'Security test passed',
      data: { 
        email: sanitizedEmail, 
        name: sanitizedName 
      },
      security: {
        rateLimitRemaining: rateLimit.remaining,
        inputSanitized: true,
        validationPassed: true
      },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Security test endpoint error:', error);
    
    return res.status(500).json({ 
      error: 'Internal server error',
      message: 'Security test failed'
    });
  }
}
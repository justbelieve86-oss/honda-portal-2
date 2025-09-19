const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const { body, validationResult } = require('express-validator');
const logger = require('../lib/logger');
const { SECURITY_POLICIES, VALIDATION_PATTERNS } = require('../src/lib/security-utils');

// Rate limiting configurations
const createRateLimit = (windowMs, max, message, skipSuccessfulRequests = false) => {
  return rateLimit({
    windowMs,
    max,
    message: { error: message },
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests,
    handler: (req, res) => {
      logger.warn('Rate limit exceeded', {
        ip: req.ip,
        userAgent: req.get('User-Agent'),
        endpoint: req.originalUrl,
        method: req.method
      });
      res.status(429).json({ error: message });
    }
  });
};

// Different rate limits for different endpoints using unified policies
const rateLimits = {
  // General API rate limit
  general: createRateLimit(
    SECURITY_POLICIES.rateLimit.api.windowMs,
    SECURITY_POLICIES.rateLimit.api.maxRequests,
    'Too many requests from this IP, please try again later.'
  ),

  // Strict rate limit for authentication endpoints
  auth: createRateLimit(
    SECURITY_POLICIES.rateLimit.login.windowMs,
    SECURITY_POLICIES.rateLimit.login.maxAttempts,
    'Too many login attempts from this IP, please try again later.',
    true // don't count successful requests
  ),

  // Rate limit for sensitive operations
  sensitive: createRateLimit(
    60 * 60 * 1000, // 1 hour
    10, // limit each IP to 10 requests per hour
    'Too many sensitive operations from this IP, please try again later.'
  ),

  // Rate limit for file uploads
  upload: createRateLimit(
    60 * 60 * 1000, // 1 hour
    20, // limit each IP to 20 uploads per hour
    'Too many file uploads from this IP, please try again later.'
  )
};

// Security headers middleware
const securityHeaders = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      imgSrc: ["'self'", 'data:', 'https:'],
      scriptSrc: ["'self'"],
      connectSrc: ["'self'"],
      frameSrc: ["'none'"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: []
    }
  },
  crossOriginEmbedderPolicy: false // Disable for Next.js compatibility
});

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:3001',
      'https://your-production-domain.com' // Replace with actual domain
    ];
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      logger.warn('CORS blocked request', { origin, userAgent: 'N/A' });
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

// Input validation helpers
const validationRules = {
  email: body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
    
  password: body('password')
    .isLength({ min: SECURITY_POLICIES.password.minLength, max: SECURITY_POLICIES.password.maxLength })
    .withMessage(`Password must be between ${SECURITY_POLICIES.password.minLength} and ${SECURITY_POLICIES.password.maxLength} characters long`)
    .matches(VALIDATION_PATTERNS.PASSWORD)
    .withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
    
  name: body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters')
    .matches(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/)
    .withMessage('Name can only contain letters and spaces'),
    
  phone: body('phone')
    .matches(VALIDATION_PATTERNS.PHONE)
    .withMessage('Please provide a valid phone number'),
    
  tcNo: body('tcNo')
    .matches(/^[1-9][0-9]{10}$/)
    .withMessage('Please provide a valid TC number'),
    
  id: body('id')
    .isUUID()
    .withMessage('Please provide a valid ID')
};

// Validation error handler
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    logger.warn('Validation errors', {
      errors: errors.array(),
      ip: req.ip,
      endpoint: req.originalUrl,
      body: req.body
    });
    
    return res.status(400).json({
      error: 'Validation failed',
      details: errors.array()
    });
  }
  next();
};

// IP whitelist middleware (for admin endpoints)
const ipWhitelist = (allowedIPs = []) => {
  return (req, res, next) => {
    const clientIP = req.ip || req.connection.remoteAddress;
    
    if (allowedIPs.length === 0 || allowedIPs.includes(clientIP)) {
      next();
    } else {
      logger.warn('IP not whitelisted', {
        ip: clientIP,
        endpoint: req.originalUrl,
        userAgent: req.get('User-Agent')
      });
      
      res.status(403).json({ error: 'Access denied' });
    }
  };
};

// Request size limiter
const requestSizeLimiter = (maxSize = '10mb') => {
  return (req, res, next) => {
    const contentLength = req.get('content-length');
    if (contentLength && parseInt(contentLength) > parseSize(maxSize)) {
      logger.warn('Request too large', {
        contentLength,
        maxSize,
        ip: req.ip,
        endpoint: req.originalUrl
      });
      
      return res.status(413).json({ error: 'Request entity too large' });
    }
    next();
  };
};

// Helper function to parse size strings
function parseSize(size) {
  const units = { b: 1, kb: 1024, mb: 1024 * 1024, gb: 1024 * 1024 * 1024 };
  const match = size.toLowerCase().match(/^(\d+)([a-z]+)$/);
  if (!match) return parseInt(size);
  return parseInt(match[1]) * (units[match[2]] || 1);
}

// Security event logger middleware
const securityEventLogger = (req, res, next) => {
  // Log suspicious patterns
  const suspiciousPatterns = [
    /(<script|javascript:|vbscript:|onload=|onerror=)/i, // XSS attempts
    /(union|select|insert|delete|drop|create|alter)/i, // SQL injection attempts
    /(\.\.\/|\.\.\\\/)/g, // Path traversal attempts
    /(eval\(|exec\(|system\()/i // Code injection attempts
  ];
  
  const requestData = JSON.stringify({
    url: req.originalUrl,
    body: req.body,
    query: req.query,
    headers: req.headers
  });
  
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(requestData)) {
      logger.warn('Suspicious request detected', {
        pattern: pattern.toString(),
        ip: req.ip,
        userAgent: req.get('User-Agent'),
        endpoint: req.originalUrl,
        method: req.method,
        body: req.body,
        query: req.query
      });
      break;
    }
  }
  
  next();
};

module.exports = {
  rateLimits,
  securityHeaders,
  corsOptions,
  validationRules,
  handleValidationErrors,
  ipWhitelist,
  requestSizeLimiter,
  securityEventLogger,
  cors: cors(corsOptions)
};
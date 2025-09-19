const logger = require('./logger');

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
  xss: [/(<script|javascript:|vbscript:|onload=|onerror=)/i],
  sqlInjection: [/(\b(union|select|insert|delete|drop|create|alter|exec|execute)\b.*\b(from|where|into|values)\b)/i],
  pathTraversal: [/(\.\.[\/\\]|\.\.[\/\\])/g],
  codeInjection: [/(eval\(|exec\(|system\(|require\()/i],
  commandInjection: [/(;\s*(rm|del|format|shutdown)|\|\s*(rm|del|format)|`[^`]*`|\$\([^)]*\)|\${[^}]*})/],
  ldapInjection: [/(\*\)|\(\*|\)\(|\\\*|\|\&)/]
};

// Validation functions
const validators = {
  // Basic type validation
  isString: (value) => typeof value === 'string',
  isNumber: (value) => typeof value === 'number' && !isNaN(value),
  isBoolean: (value) => typeof value === 'boolean',
  isArray: (value) => Array.isArray(value),
  isObject: (value) => typeof value === 'object' && value !== null && !Array.isArray(value),
  
  // Length validation
  minLength: (value, min) => typeof value === 'string' && value.length >= min,
  maxLength: (value, max) => typeof value === 'string' && value.length <= max,
  lengthBetween: (value, min, max) => typeof value === 'string' && value.length >= min && value.length <= max,
  
  // Pattern validation
  matchesPattern: (value, pattern) => {
    if (typeof value !== 'string') return false;
    return pattern.test(value);
  },
  
  // Email validation
  isValidEmail: (email) => {
    if (typeof email !== 'string') return false;
    return validationPatterns.email.test(email) && email.length <= 254;
  },
  
  // Phone validation
  isValidPhone: (phone) => {
    if (typeof phone !== 'string') return false;
    return validationPatterns.phone.test(phone);
  },
  
  // Password validation
  isStrongPassword: (password) => {
    if (typeof password !== 'string') return false;
    return validationPatterns.strongPassword.test(password);
  },
  
  // Numeric validation
  isPositiveNumber: (value) => typeof value === 'number' && value > 0,
  isNonNegativeNumber: (value) => typeof value === 'number' && value >= 0,
  isBetween: (value, min, max) => typeof value === 'number' && value >= min && value <= max,
  
  // Date validation
  isValidDate: (date) => {
    if (date instanceof Date) return !isNaN(date.getTime());
    if (typeof date === 'string') {
      const parsed = new Date(date);
      return !isNaN(parsed.getTime());
    }
    return false;
  },
  
  // URL validation
  isValidUrl: (url) => {
    if (typeof url !== 'string') return false;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },
  
  // Required field validation
  isRequired: (value) => {
    if (value === null || value === undefined) return false;
    if (typeof value === 'string') return value.trim().length > 0;
    if (Array.isArray(value)) return value.length > 0;
    return true;
  }
};

// Security scanning functions
const securityScanner = {
  // Scan for suspicious patterns
  scanForThreats: (input) => {
    if (typeof input !== 'string') return { safe: true, threats: [] };
    
    const threats = [];
    
    // Check each category of threats
    Object.entries(suspiciousPatterns).forEach(([category, patterns]) => {
      patterns.forEach(pattern => {
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
  sanitizeInput: (input) => {
    if (typeof input !== 'string') return input;
    
    // Basic HTML encoding
    return input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;')
      .trim();
  },
  
  // Check for SQL injection patterns
  isSqlInjectionAttempt: (input) => {
    const result = securityScanner.scanForThreats(input);
    return result.threats.some(threat => threat.type === 'sqlInjection');
  },
  
  // Check for XSS patterns
  isXssAttempt: (input) => {
    const result = securityScanner.scanForThreats(input);
    return result.threats.some(threat => threat.type === 'xss');
  }
};

// Validation schema builder
class ValidationSchema {
  constructor() {
    this.rules = {};
  }
  
  field(name) {
    this.rules[name] = [];
    const self = this;
    return {
      required: function() {
        self.rules[name].push({ type: 'required' });
        return this;
      },
      string: function() {
        self.rules[name].push({ type: 'string' });
        return this;
      },
      number: function() {
        self.rules[name].push({ type: 'number' });
        return this;
      },
      email: function() {
        self.rules[name].push({ type: 'email' });
        return this;
      },
      minLength: function(min) {
        self.rules[name].push({ type: 'minLength', value: min });
        return this;
      },
      maxLength: function(max) {
        self.rules[name].push({ type: 'maxLength', value: max });
        return this;
      },
      pattern: function(regex) {
        self.rules[name].push({ type: 'pattern', value: regex });
        return this;
      },
      custom: function(validator, message) {
        self.rules[name].push({ type: 'custom', validator, message });
        return this;
      }
    };
  }
  
  validate(data) {
    const errors = {};
    const sanitized = {};
    
    Object.entries(this.rules).forEach(([fieldName, rules]) => {
      const value = data[fieldName];
      const fieldErrors = [];
      
      rules.forEach(rule => {
        switch (rule.type) {
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
const createValidationMiddleware = (schema) => {
  return (req, res, next) => {
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
      logger.error('Validation middleware error', { error: error.message });
      return res.status(500).json({ error: 'Internal server error' });
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
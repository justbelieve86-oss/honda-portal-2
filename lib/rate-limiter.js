const logger = require('./logger');

// In-memory store for rate limiting (in production, use Redis)
const rateLimitStore = new Map();

// Clean up old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, data] of rateLimitStore.entries()) {
    if (now - data.resetTime > 0) {
      rateLimitStore.delete(key);
    }
  }
}, 5 * 60 * 1000);

class RateLimiter {
  constructor(options = {}) {
    this.windowMs = options.windowMs || 15 * 60 * 1000; // 15 minutes
    this.max = options.max || 100; // 100 requests per window
    this.message = options.message || 'Too many requests, please try again later.';
    this.skipSuccessfulRequests = options.skipSuccessfulRequests || false;
    this.keyGenerator = options.keyGenerator || this.defaultKeyGenerator;
  }

  defaultKeyGenerator(req) {
    return req.headers['x-forwarded-for'] || 
           req.connection.remoteAddress || 
           req.socket.remoteAddress ||
           (req.connection.socket ? req.connection.socket.remoteAddress : null) ||
           'unknown';
  }

  async checkLimit(req) {
    const key = this.keyGenerator(req);
    const now = Date.now();
    
    let record = rateLimitStore.get(key);
    
    if (!record) {
      record = {
        count: 0,
        resetTime: now + this.windowMs
      };
      rateLimitStore.set(key, record);
    }
    
    // Reset if window has expired
    if (now > record.resetTime) {
      record.count = 0;
      record.resetTime = now + this.windowMs;
    }
    
    // Check if limit exceeded
    if (record.count >= this.max) {
      logger.warn('Rate limit exceeded', {
        ip: key,
        count: record.count,
        max: this.max,
        resetTime: new Date(record.resetTime).toISOString()
      });
      
      return {
        allowed: false,
        count: record.count,
        remaining: 0,
        resetTime: record.resetTime,
        retryAfter: Math.ceil((record.resetTime - now) / 1000)
      };
    }
    
    // Increment counter
    record.count++;
    
    return {
      allowed: true,
      count: record.count,
      remaining: this.max - record.count,
      resetTime: record.resetTime,
      retryAfter: 0
    };
  }

  middleware() {
    return async (req, res, next) => {
      try {
        const result = await this.checkLimit(req);
        
        // Set rate limit headers
        res.setHeader('X-RateLimit-Limit', this.max);
        res.setHeader('X-RateLimit-Remaining', result.remaining);
        res.setHeader('X-RateLimit-Reset', new Date(result.resetTime).toISOString());
        
        if (!result.allowed) {
          res.setHeader('Retry-After', result.retryAfter);
          return res.status(429).json({
            error: this.message,
            retryAfter: result.retryAfter
          });
        }
        
        next();
      } catch (error) {
        logger.error('Rate limiter error', { error: error.message });
        next(); // Continue on error to avoid blocking legitimate requests
      }
    };
  }
}

// Pre-configured rate limiters
const rateLimiters = {
  general: new RateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: 'Too many requests from this IP, please try again later.'
  }),
  
  auth: new RateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5,
    message: 'Too many login attempts from this IP, please try again later.',
    skipSuccessfulRequests: true
  }),
  
  sensitive: new RateLimiter({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10,
    message: 'Too many sensitive operations from this IP, please try again later.'
  }),
  
  upload: new RateLimiter({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 20,
    message: 'Too many file uploads from this IP, please try again later.'
  })
};

// Helper function to apply rate limiting to API routes
const withRateLimit = (handler, limiterType = 'general') => {
  const limiter = rateLimiters[limiterType];
  
  return async (req, res) => {
    try {
      const result = await limiter.checkLimit(req);
      
      // Set rate limit headers
      res.setHeader('X-RateLimit-Limit', limiter.max);
      res.setHeader('X-RateLimit-Remaining', result.remaining);
      res.setHeader('X-RateLimit-Reset', new Date(result.resetTime).toISOString());
      
      if (!result.allowed) {
        res.setHeader('Retry-After', result.retryAfter);
        return res.status(429).json({
          error: limiter.message,
          retryAfter: result.retryAfter
        });
      }
      
      return handler(req, res);
    } catch (error) {
      logger.error('Rate limiter error', { error: error.message });
      return handler(req, res); // Continue on error
    }
  };
};

module.exports = {
  RateLimiter,
  rateLimiters,
  withRateLimit
};
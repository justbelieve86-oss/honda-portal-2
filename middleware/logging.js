const { createRequestLogger } = require('../src/lib/logging-utils');

// Use unified request logger
const requestLogger = createRequestLogger();

const { createErrorLogger } = require('../src/lib/logging-utils');

// Use unified error logger
const errorLogger = createErrorLogger();

const { UnifiedLogger } = require('../src/lib/logging-utils');

// Database query logging middleware for Prisma
const createDatabaseLogger = () => {
  return {
    query: (e) => {
      const duration = e.duration;
      const query = e.query;
      UnifiedLogger.database('query', 'prisma', duration, undefined, { query });
    },
    error: (e) => {
      const duration = e.duration;
      const query = e.query;
      const error = new Error(e.message);
      UnifiedLogger.database('query', 'prisma', duration, error, { query });
    }
  };
};

const { createPerformanceLogger } = require('../src/lib/logging-utils');

// Use unified performance logger
const performanceLogger = createPerformanceLogger(1000); // 1000ms threshold

const { SecurityLogger } = require('../src/lib/logging-utils');

// Use unified security logger
const securityLogger = {
  logFailedLogin: SecurityLogger.failedLogin,
  logSuccessfulLogin: SecurityLogger.successfulLogin,
  logSuspiciousActivity: SecurityLogger.suspiciousActivity,
  logRateLimitExceeded: SecurityLogger.rateLimitExceeded
};

module.exports = {
  requestLogger,
  errorLogger,
  createDatabaseLogger,
  performanceLogger,
  securityLogger
};
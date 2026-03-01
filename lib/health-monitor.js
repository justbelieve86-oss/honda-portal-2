const logger = require('./logger');
const { PrismaClient } = require('@prisma/client');
const fs = require('fs').promises;
const path = require('path');
const os = require('os');
const { exec } = require('child_process');

class HealthMonitor {
  constructor() {
    this.prisma = new PrismaClient();
    this.startTime = Date.now();
    this.healthChecks = new Map();
    this.alerts = new Map();
    
    // Initialize health checks
    this.initializeHealthChecks();
    
    // Start periodic health monitoring
    this.startPeriodicMonitoring();
  }

  initializeHealthChecks() {
    // Database health check
    this.healthChecks.set('database', async () => {
      try {
        await this.prisma.$queryRaw`SELECT 1`;
        return { status: 'healthy', message: 'Database connection successful' };
      } catch (error) {
        return { status: 'unhealthy', message: `Database error: ${error.message}` };
      }
    });

    // Disk space health check
    this.healthChecks.set('diskSpace', async () => {
      try {
        const stats = await fs.stat(process.cwd());
        const freeSpace = await this.getDiskFreeSpace();
        const freeSpaceGB = freeSpace / (1024 * 1024 * 1024);
        
        if (freeSpaceGB < 1) {
          return { status: 'critical', message: `Low disk space: ${freeSpaceGB.toFixed(2)}GB remaining` };
        } else if (freeSpaceGB < 5) {
          return { status: 'warning', message: `Disk space getting low: ${freeSpaceGB.toFixed(2)}GB remaining` };
        }
        
        return { status: 'healthy', message: `Disk space: ${freeSpaceGB.toFixed(2)}GB available` };
      } catch (error) {
        return { status: 'unhealthy', message: `Disk space check failed: ${error.message}` };
      }
    });

    // Memory usage health check
    this.healthChecks.set('memory', async () => {
      const memUsage = process.memoryUsage();
      const totalMemory = os.totalmem();
      const freeMemory = os.freemem();
      const usedMemoryPercent = ((totalMemory - freeMemory) / totalMemory) * 100;
      
      if (usedMemoryPercent > 90) {
        return { status: 'critical', message: `High memory usage: ${usedMemoryPercent.toFixed(2)}%` };
      } else if (usedMemoryPercent > 80) {
        return { status: 'warning', message: `Memory usage: ${usedMemoryPercent.toFixed(2)}%` };
      }
      
      return { 
        status: 'healthy', 
        message: `Memory usage: ${usedMemoryPercent.toFixed(2)}%`,
        details: {
          heapUsed: `${(memUsage.heapUsed / 1024 / 1024).toFixed(2)}MB`,
          heapTotal: `${(memUsage.heapTotal / 1024 / 1024).toFixed(2)}MB`,
          rss: `${(memUsage.rss / 1024 / 1024).toFixed(2)}MB`
        }
      };
    });

    // Application uptime check
    this.healthChecks.set('uptime', async () => {
      const uptime = Date.now() - this.startTime;
      const uptimeHours = uptime / (1000 * 60 * 60);
      
      return {
        status: 'healthy',
        message: `Application uptime: ${uptimeHours.toFixed(2)} hours`,
        details: {
          startTime: new Date(this.startTime).toISOString(),
          uptime: `${Math.floor(uptimeHours)}h ${Math.floor((uptimeHours % 1) * 60)}m`
        }
      };
    });

    // Log files health check
    this.healthChecks.set('logFiles', async () => {
      try {
        const logDir = path.join(process.cwd(), 'logs');
        const files = await fs.readdir(logDir);
        const logFiles = files.filter(file => file.endsWith('.log'));
        
        let totalSize = 0;
        for (const file of logFiles) {
          const stats = await fs.stat(path.join(logDir, file));
          totalSize += stats.size;
        }
        
        const totalSizeMB = totalSize / (1024 * 1024);
        
        if (totalSizeMB > 500) {
          return { status: 'warning', message: `Log files size: ${totalSizeMB.toFixed(2)}MB` };
        }
        
        return { 
          status: 'healthy', 
          message: `Log files: ${logFiles.length} files, ${totalSizeMB.toFixed(2)}MB total` 
        };
      } catch (error) {
        return { status: 'unhealthy', message: `Log files check failed: ${error.message}` };
      }
    });
  }

  async getDiskFreeSpace() {
    return new Promise((resolve, reject) => {
      // exec is already imported at the top
      exec('df -k .', (error, stdout) => {
        if (error) {
          reject(error);
          return;
        }
        
        const lines = stdout.trim().split('\n');
        const data = lines[1].split(/\s+/);
        const freeSpace = parseInt(data[3]) * 1024; // Convert from KB to bytes
        resolve(freeSpace);
      });
    });
  }

  async runHealthCheck(checkName) {
    const healthCheck = this.healthChecks.get(checkName);
    if (!healthCheck) {
      return { status: 'unknown', message: `Health check '${checkName}' not found` };
    }

    try {
      const result = await healthCheck();
      
      // Log critical and warning statuses
      if (result.status === 'critical') {
        logger.error(`Health Check Critical: ${checkName}`, result);
        this.triggerAlert(checkName, result);
      } else if (result.status === 'warning') {
        logger.warn(`Health Check Warning: ${checkName}`, result);
      }
      
      return result;
    } catch (error) {
      const errorResult = { status: 'error', message: `Health check failed: ${error.message}` };
      logger.error(`Health Check Error: ${checkName}`, errorResult);
      return errorResult;
    }
  }

  async runAllHealthChecks() {
    const results = {};
    let overallStatus = 'healthy';

    for (const [checkName] of this.healthChecks) {
      const result = await this.runHealthCheck(checkName);
      results[checkName] = result;
      
      // Determine overall status
      if (result.status === 'critical' || result.status === 'error') {
        overallStatus = 'unhealthy';
      } else if (result.status === 'warning' && overallStatus === 'healthy') {
        overallStatus = 'warning';
      }
    }

    return {
      status: overallStatus,
      timestamp: new Date().toISOString(),
      checks: results,
      uptime: Date.now() - this.startTime
    };
  }

  triggerAlert(checkName, result) {
    const alertKey = `${checkName}_${result.status}`;
    const lastAlert = this.alerts.get(alertKey);
    const now = Date.now();
    
    // Prevent spam alerts (minimum 5 minutes between same alerts)
    if (lastAlert && (now - lastAlert) < 5 * 60 * 1000) {
      return;
    }
    
    this.alerts.set(alertKey, now);
    
    // Here you could integrate with external alerting systems
    // For now, we'll just log the alert
    logger.error('ALERT TRIGGERED', {
      checkName,
      status: result.status,
      message: result.message,
      timestamp: new Date().toISOString()
    });
  }

  startPeriodicMonitoring() {
    // Run health checks every 5 minutes
    setInterval(async () => {
      try {
        const healthStatus = await this.runAllHealthChecks();
        
        if (healthStatus.status !== 'healthy') {
          logger.warn('Periodic Health Check', healthStatus);
        } else {
          logger.debug('Periodic Health Check', { status: healthStatus.status });
        }
      } catch (error) {
        logger.error('Periodic Health Check Failed', { error: error.message });
      }
    }, 5 * 60 * 1000); // 5 minutes
  }

  // Graceful shutdown
  async shutdown() {
    logger.info('Health Monitor shutting down...');
    await this.prisma.$disconnect();
  }
}

module.exports = HealthMonitor;
const { PrismaClient } = require('@prisma/client');
const os = require('os');

const prisma = new PrismaClient();

module.exports = async function handler(req, res) {
  const startTime = Date.now();
  
  try {
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const checks = {};
    let overallStatus = 'healthy';

    // Database health check
    try {
      await prisma.$queryRaw`SELECT 1`;
      checks.database = { status: 'healthy', message: 'Database connection successful' };
    } catch (error) {
      checks.database = { status: 'unhealthy', message: `Database error: ${error.message}` };
      overallStatus = 'unhealthy';
    }

    // Memory usage check
    const memUsage = process.memoryUsage();
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const usedMemoryPercent = ((totalMemory - freeMemory) / totalMemory) * 100;
    
    if (usedMemoryPercent > 90) {
      checks.memory = { status: 'critical', message: `High memory usage: ${usedMemoryPercent.toFixed(2)}%` };
      overallStatus = 'unhealthy';
    } else if (usedMemoryPercent > 80) {
      checks.memory = { status: 'warning', message: `Memory usage: ${usedMemoryPercent.toFixed(2)}%` };
      if (overallStatus === 'healthy') overallStatus = 'warning';
    } else {
      checks.memory = { status: 'healthy', message: `Memory usage: ${usedMemoryPercent.toFixed(2)}%` };
    }

    // Uptime check
    const uptime = process.uptime();
    const uptimeHours = uptime / 3600;
    checks.uptime = {
      status: 'healthy',
      message: `Application uptime: ${uptimeHours.toFixed(2)} hours`
    };

    const healthStatus = {
      status: overallStatus,
      timestamp: new Date().toISOString(),
      responseTime: `${Date.now() - startTime}ms`,
      checks
    };
    
    // Set appropriate HTTP status code
    let httpStatus = 200;
    if (overallStatus === 'unhealthy' || overallStatus === 'critical') {
      httpStatus = 503;
    }

    res.status(httpStatus).json(healthStatus);
    
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Health check failed',
      timestamp: new Date().toISOString(),
      responseTime: `${Date.now() - startTime}ms`,
      error: error.message
    });
  }
};
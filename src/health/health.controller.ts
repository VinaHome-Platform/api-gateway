import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  healthCheck() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'VinaHome API Gateway',
      version: process.env.npm_package_version || '1.0.0',
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
    };
  }

  @Get('detailed')
  detailedHealthCheck() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'VinaHome API Gateway',
      version: process.env.npm_package_version || '1.0.0',
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      memory: {
        used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + ' MB',
        total:
          Math.round(process.memoryUsage().heapTotal / 1024 / 1024) + ' MB',
      },
      cpu: {
        platform: process.platform,
        arch: process.arch,
      },
      node: {
        version: process.version,
      },
    };
  }
}

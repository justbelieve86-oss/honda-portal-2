import { PrismaClient } from '@prisma/client';

declare global {
  namespace PrismaJson {
    type PrismaClientOptions = any;
    type DefaultArgs = any;
  }
}

declare module '@prisma/client' {
  interface PrismaClient {
    brand: any;
    model: any;
    package: any;
  }
}

export {}; 
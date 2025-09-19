import { PrismaClient } from '@prisma/client';

// Geliştirme ortamında birden fazla Next.js yeniden yüklemesi sırasında 
// birden fazla Prisma örneği oluşturulmasını önlemek için global değişken
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Globalden al veya yeni oluştur
export const prisma = globalForPrisma.prisma || new PrismaClient();

// Geliştirme ortamında değilse, global nesneye kaydet
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma; 
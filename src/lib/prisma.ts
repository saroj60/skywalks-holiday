// Prisma Client singleton wrapper with fallback for build phase
let prismaInstance: any;

try {
  const { PrismaClient } = require("@prisma/client");
  const globalForPrisma = global as unknown as { prisma: any };
  prismaInstance =
    globalForPrisma.prisma ||
    new PrismaClient({
      log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    });
  if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prismaInstance;
} catch (e) {
  // Fallback mock object if PrismaClient generator hasn't executed
  prismaInstance = {};
}

export const prisma = prismaInstance;

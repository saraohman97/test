import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
};

const prisma = globalThis.prisma || new PrismaClient();
if(process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export default prisma;

// const prisma = new PrismaClient()

// const globalForPrisma = global as unknown as { prisma: typeof prisma }

// if(process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

// export default prisma
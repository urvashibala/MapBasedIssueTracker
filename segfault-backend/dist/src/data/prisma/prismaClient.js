import { PrismaClient } from "../../generated/prisma/client";
const globalForPrisma = global;
export const prisma = globalForPrisma.prisma ?? new PrismaClient({
    log: ['warn', 'error'],
});
globalForPrisma.prisma = prisma;
//# sourceMappingURL=prismaClient.js.map
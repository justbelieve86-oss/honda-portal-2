/*
  Warnings:

  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_role_idx";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "roleId" TEXT NOT NULL DEFAULT 'user';

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "RoleDefinition" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "isSystem" BOOLEAN NOT NULL DEFAULT false,
    "isDeletable" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RoleDefinition_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RoleDefinition_key_key" ON "RoleDefinition"("key");

-- CreateIndex
CREATE INDEX "RoleDefinition_key_idx" ON "RoleDefinition"("key");

-- CreateIndex
CREATE INDEX "RoleDefinition_isSystem_idx" ON "RoleDefinition"("isSystem");

-- CreateIndex
CREATE INDEX "AccessorySale_customerTcNo_idx" ON "AccessorySale"("customerTcNo");

-- CreateIndex
CREATE INDEX "AccessorySale_vehicleBrand_idx" ON "AccessorySale"("vehicleBrand");

-- CreateIndex
CREATE INDEX "AccessorySale_vehicleModel_idx" ON "AccessorySale"("vehicleModel");

-- CreateIndex
CREATE INDEX "AccessorySale_saleDate_idx" ON "AccessorySale"("saleDate");

-- CreateIndex
CREATE INDEX "AccessorySale_createdBy_idx" ON "AccessorySale"("createdBy");

-- CreateIndex
CREATE INDEX "AccessorySale_createdAt_idx" ON "AccessorySale"("createdAt");

-- CreateIndex
CREATE INDEX "AccessorySale_saleId_idx" ON "AccessorySale"("saleId");

-- CreateIndex
CREATE INDEX "User_roleId_idx" ON "User"("roleId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "RoleDefinition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `isDeletable` on the `RoleDefinition` table. All the data in the column will be lost.
  - You are about to drop the column `key` on the `RoleDefinition` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `RoleDefinition` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `displayName` to the `RoleDefinition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `permissions` to the `RoleDefinition` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_roleId_fkey";

-- DropIndex
DROP INDEX "RoleDefinition_key_idx";

-- DropIndex
DROP INDEX "RoleDefinition_key_key";

-- DropIndex
DROP INDEX "User_roleId_idx";

-- AlterTable
ALTER TABLE "RoleDefinition" DROP COLUMN "isDeletable",
DROP COLUMN "key",
ADD COLUMN     "displayName" TEXT NOT NULL,
ADD COLUMN     "permissions" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "roleId",
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'USER';

-- CreateIndex
CREATE UNIQUE INDEX "RoleDefinition_name_key" ON "RoleDefinition"("name");

-- CreateIndex
CREATE INDEX "RoleDefinition_name_idx" ON "RoleDefinition"("name");

-- CreateIndex
CREATE INDEX "User_role_idx" ON "User"("role");

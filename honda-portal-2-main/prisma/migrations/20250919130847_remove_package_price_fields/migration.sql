/*
  Warnings:

  - You are about to drop the column `basePrice` on the `Package` table. All the data in the column will be lost.
  - You are about to drop the column `kdvRate` on the `Package` table. All the data in the column will be lost.
  - You are about to drop the column `otvRate` on the `Package` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Package" DROP COLUMN "basePrice",
DROP COLUMN "kdvRate",
DROP COLUMN "otvRate";

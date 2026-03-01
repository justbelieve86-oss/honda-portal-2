/*
  Warnings:

  - Added the required column `licensePlate` to the `AccessorySale` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
-- First add the column with a default value
ALTER TABLE "AccessorySale" ADD COLUMN "licensePlate" TEXT NOT NULL DEFAULT 'PLAKA_GIRILMEDI';

-- Update existing records with a placeholder value
UPDATE "AccessorySale" SET "licensePlate" = 'PLAKA_GIRILMEDI' WHERE "licensePlate" = 'PLAKA_GIRILMEDI';

-- Remove the default constraint
ALTER TABLE "AccessorySale" ALTER COLUMN "licensePlate" DROP DEFAULT;

-- Make chassisNo and engineNo optional
ALTER TABLE "AccessorySale" ALTER COLUMN "chassisNo" DROP NOT NULL;
ALTER TABLE "AccessorySale" ALTER COLUMN "engineNo" DROP NOT NULL;

-- AlterTable
ALTER TABLE "AccessorySale" ADD COLUMN     "saleId" TEXT;

-- AddForeignKey
ALTER TABLE "AccessorySale" ADD CONSTRAINT "AccessorySale_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "AccessorySale" (
    "id" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "vehicleBrand" TEXT NOT NULL,
    "vehicleModel" TEXT NOT NULL,
    "vehiclePackage" TEXT NOT NULL,
    "chassisNo" TEXT NOT NULL,
    "engineNo" TEXT NOT NULL,
    "accessoryName" TEXT NOT NULL,
    "accessoryPrice" DOUBLE PRECISION NOT NULL,
    "saleDate" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AccessorySale_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AccessorySale" ADD CONSTRAINT "AccessorySale_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

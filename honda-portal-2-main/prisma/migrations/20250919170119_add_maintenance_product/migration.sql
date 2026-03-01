-- CreateTable
CREATE TABLE "MaintenanceProduct" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MaintenanceProduct_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "MaintenanceProduct_name_idx" ON "MaintenanceProduct"("name");

-- CreateIndex
CREATE INDEX "MaintenanceProduct_createdAt_idx" ON "MaintenanceProduct"("createdAt");

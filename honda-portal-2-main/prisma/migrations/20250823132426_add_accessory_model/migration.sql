-- CreateTable
CREATE TABLE "Accessory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brandId" TEXT NOT NULL,
    "modelId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Accessory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "tcNo" TEXT NOT NULL,
    "birthDate" TEXT,
    "occupation" TEXT,
    "address" TEXT,
    "cityId" INTEGER,
    "districtId" INTEGER,
    "status" TEXT NOT NULL DEFAULT 'Aktif',
    "registerDate" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CorporateCustomer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "taxNumber" TEXT NOT NULL,
    "taxOffice" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "cityId" INTEGER NOT NULL,
    "districtId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Aktif',
    "registerDate" TEXT NOT NULL,
    "authorizedPerson" TEXT,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CorporateCustomer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sale" (
    "id" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "chassisNo" TEXT NOT NULL,
    "engineNo" TEXT NOT NULL,
    "purchaseDate" TEXT NOT NULL,
    "salePrice" DOUBLE PRECISION NOT NULL,
    "purchasePrice" DOUBLE PRECISION NOT NULL,
    "contributionAmount" DOUBLE PRECISION NOT NULL,
    "mtvCost" DOUBLE PRECISION NOT NULL,
    "licensePlateCost" DOUBLE PRECISION NOT NULL,
    "color" TEXT NOT NULL,
    "packageId" TEXT,
    "packageName" TEXT,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CorporateSale" (
    "id" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "chassisNo" TEXT NOT NULL,
    "engineNo" TEXT NOT NULL,
    "purchaseDate" TEXT NOT NULL,
    "salePrice" DOUBLE PRECISION NOT NULL,
    "purchasePrice" DOUBLE PRECISION NOT NULL,
    "contributionAmount" DOUBLE PRECISION NOT NULL,
    "mtvCost" DOUBLE PRECISION NOT NULL,
    "licensePlateCost" DOUBLE PRECISION NOT NULL,
    "color" TEXT NOT NULL,
    "packageId" TEXT,
    "packageName" TEXT,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CorporateSale_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Accessory_name_brandId_modelId_key" ON "Accessory"("name", "brandId", "modelId");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_tcNo_key" ON "Customer"("tcNo");

-- CreateIndex
CREATE UNIQUE INDEX "CorporateCustomer_taxNumber_key" ON "CorporateCustomer"("taxNumber");

-- AddForeignKey
ALTER TABLE "Accessory" ADD CONSTRAINT "Accessory_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Accessory" ADD CONSTRAINT "Accessory_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporateCustomer" ADD CONSTRAINT "CorporateCustomer_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporateSale" ADD CONSTRAINT "CorporateSale_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "CorporateCustomer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporateSale" ADD CONSTRAINT "CorporateSale_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

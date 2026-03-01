-- CreateIndex
CREATE INDEX "Brand_name_idx" ON "Brand"("name");

-- CreateIndex
CREATE INDEX "Brand_createdAt_idx" ON "Brand"("createdAt");

-- CreateIndex
CREATE INDEX "CorporateCustomer_email_idx" ON "CorporateCustomer"("email");

-- CreateIndex
CREATE INDEX "CorporateCustomer_phone_idx" ON "CorporateCustomer"("phone");

-- CreateIndex
CREATE INDEX "CorporateCustomer_taxNumber_idx" ON "CorporateCustomer"("taxNumber");

-- CreateIndex
CREATE INDEX "CorporateCustomer_status_idx" ON "CorporateCustomer"("status");

-- CreateIndex
CREATE INDEX "CorporateCustomer_createdBy_idx" ON "CorporateCustomer"("createdBy");

-- CreateIndex
CREATE INDEX "CorporateCustomer_createdAt_idx" ON "CorporateCustomer"("createdAt");

-- CreateIndex
CREATE INDEX "CorporateSale_customerId_idx" ON "CorporateSale"("customerId");

-- CreateIndex
CREATE INDEX "CorporateSale_createdBy_idx" ON "CorporateSale"("createdBy");

-- CreateIndex
CREATE INDEX "CorporateSale_model_idx" ON "CorporateSale"("model");

-- CreateIndex
CREATE INDEX "CorporateSale_purchaseDate_idx" ON "CorporateSale"("purchaseDate");

-- CreateIndex
CREATE INDEX "CorporateSale_createdAt_idx" ON "CorporateSale"("createdAt");

-- CreateIndex
CREATE INDEX "Customer_email_idx" ON "Customer"("email");

-- CreateIndex
CREATE INDEX "Customer_phone_idx" ON "Customer"("phone");

-- CreateIndex
CREATE INDEX "Customer_tcNo_idx" ON "Customer"("tcNo");

-- CreateIndex
CREATE INDEX "Customer_status_idx" ON "Customer"("status");

-- CreateIndex
CREATE INDEX "Customer_createdBy_idx" ON "Customer"("createdBy");

-- CreateIndex
CREATE INDEX "Customer_createdAt_idx" ON "Customer"("createdAt");

-- CreateIndex
CREATE INDEX "Model_brandId_idx" ON "Model"("brandId");

-- CreateIndex
CREATE INDEX "Model_name_idx" ON "Model"("name");

-- CreateIndex
CREATE INDEX "Model_createdAt_idx" ON "Model"("createdAt");

-- CreateIndex
CREATE INDEX "Sale_customerId_idx" ON "Sale"("customerId");

-- CreateIndex
CREATE INDEX "Sale_createdBy_idx" ON "Sale"("createdBy");

-- CreateIndex
CREATE INDEX "Sale_model_idx" ON "Sale"("model");

-- CreateIndex
CREATE INDEX "Sale_purchaseDate_idx" ON "Sale"("purchaseDate");

-- CreateIndex
CREATE INDEX "Sale_createdAt_idx" ON "Sale"("createdAt");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_role_idx" ON "User"("role");

-- CreateIndex
CREATE INDEX "User_createdAt_idx" ON "User"("createdAt");

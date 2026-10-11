-- CreateIndex
CREATE INDEX "Transaction_companyId_deletedAt_type_date_idx" ON "Transaction"("companyId", "deletedAt", "type", "date");

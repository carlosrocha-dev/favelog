-- CreateTable
CREATE TABLE "Retail" (
    "retail_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" INTEGER NOT NULL,
    "tel" INTEGER NOT NULL,
    "pix" TEXT NOT NULL,
    "pickup_address" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Courier" (
    "courier_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "tel" INTEGER NOT NULL,
    "pix" TEXT NOT NULL,
    "vehicle_plate" TEXT NOT NULL,
    "vehicle_model" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Delivery" (
    "delivery_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "retail_id" INTEGER NOT NULL,
    "courier_id" INTEGER NOT NULL,
    "pickup_address" TEXT NOT NULL,
    "delivery_address" TEXT NOT NULL,
    "value_tax" INTEGER NOT NULL,
    "delivery_status" INTEGER NOT NULL,
    "payment_status" INTEGER NOT NULL,
    CONSTRAINT "Delivery_retail_id_fkey" FOREIGN KEY ("retail_id") REFERENCES "Retail" ("retail_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Delivery_courier_id_fkey" FOREIGN KEY ("courier_id") REFERENCES "Courier" ("courier_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Retail_email_key" ON "Retail"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Retail_cpf_key" ON "Retail"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Courier_email_key" ON "Courier"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Courier_cpf_key" ON "Courier"("cpf");

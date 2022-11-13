/*
  Warnings:

  - You are about to alter the column `cpf` on the `Courier` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Courier" (
    "courier_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" INTEGER NOT NULL,
    "tel" INTEGER NOT NULL,
    "pix" TEXT NOT NULL,
    "vehicle_plate" TEXT NOT NULL,
    "vehicle_model" TEXT NOT NULL
);
INSERT INTO "new_Courier" ("courier_id", "cpf", "email", "name", "pix", "tel", "vehicle_model", "vehicle_plate") SELECT "courier_id", "cpf", "email", "name", "pix", "tel", "vehicle_model", "vehicle_plate" FROM "Courier";
DROP TABLE "Courier";
ALTER TABLE "new_Courier" RENAME TO "Courier";
CREATE UNIQUE INDEX "Courier_email_key" ON "Courier"("email");
CREATE UNIQUE INDEX "Courier_cpf_key" ON "Courier"("cpf");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

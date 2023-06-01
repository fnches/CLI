-- CreateTable
CREATE TABLE "CorvusASA" (
    "asa" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "imageref" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "slug" INTEGER,
    "artist" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "CorvusASA_asa_key" ON "CorvusASA"("asa");

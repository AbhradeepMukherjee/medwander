-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "formType" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

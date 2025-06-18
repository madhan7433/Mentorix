/*
  Warnings:

  - The `keyTrends` column on the `IndustryInsight` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `recommendedSkills` column on the `IndustryInsight` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_industry_fkey";

-- AlterTable
ALTER TABLE "IndustryInsight" DROP COLUMN "keyTrends",
ADD COLUMN     "keyTrends" TEXT[],
DROP COLUMN "recommendedSkills",
ADD COLUMN     "recommendedSkills" TEXT[];

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_industry_fkey" FOREIGN KEY ("industry") REFERENCES "IndustryInsight"("industry") ON DELETE SET NULL ON UPDATE CASCADE;

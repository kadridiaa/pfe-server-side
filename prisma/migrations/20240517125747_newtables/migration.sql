/*
  Warnings:

  - You are about to alter the column `productId` on the `favorite` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `websiteName` on the `product` table. All the data in the column will be lost.
  - You are about to alter the column `product_id` on the `product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `websiteId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `favorite` DROP FOREIGN KEY `Favorite_productId_fkey`;

-- AlterTable
ALTER TABLE `favorite` MODIFY `productId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `product` DROP PRIMARY KEY,
    DROP COLUMN `websiteName`,
    ADD COLUMN `websiteId` INTEGER NOT NULL,
    MODIFY `product_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`product_id`);

-- CreateTable
CREATE TABLE `Website` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Website_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notification` (
    `notificatrion_id` INTEGER NOT NULL AUTO_INCREMENT,
    `contenue` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`notificatrion_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contacte` (
    `contacte_id` INTEGER NOT NULL AUTO_INCREMENT,
    `commenatire` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`contacte_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_websiteId_fkey` FOREIGN KEY (`websiteId`) REFERENCES `Website`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Favorite` ADD CONSTRAINT `Favorite_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`product_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notification` ADD CONSTRAINT `notification_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contacte` ADD CONSTRAINT `contacte_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

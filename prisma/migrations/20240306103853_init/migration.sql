-- CreateTable
CREATE TABLE `Product` (
    `product_id` VARCHAR(191) NOT NULL,
    `availability` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `oldPrice` VARCHAR(191) NOT NULL,
    `displayDiscountPercentage` VARCHAR(191) NOT NULL,
    `familyName` VARCHAR(191) NOT NULL,
    `subfamilyName` VARCHAR(191) NOT NULL,
    `sectionName` VARCHAR(191) NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

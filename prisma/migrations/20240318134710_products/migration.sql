-- CreateTable
CREATE TABLE `products` (
    `product_id` VARCHAR(191) NOT NULL,
    `availability` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `price` VARCHAR(191) NULL,
    `oldPrice` VARCHAR(191) NULL,
    `displayDiscountPercentage` VARCHAR(191) NULL,
    `familyName` VARCHAR(191) NULL,
    `subfamilyName` VARCHAR(191) NULL,
    `sectionName` VARCHAR(191) NULL,
    `img` VARCHAR(191) NULL,
    `link` VARCHAR(191) NULL,

    PRIMARY KEY (`product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

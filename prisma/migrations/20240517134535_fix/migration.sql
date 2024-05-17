/*
  Warnings:

  - The primary key for the `notification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `notificatrion_id` on the `notification` table. All the data in the column will be lost.
  - Added the required column `notification_id` to the `notification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `notification` DROP PRIMARY KEY,
    DROP COLUMN `notificatrion_id`,
    ADD COLUMN `notification_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`notification_id`);

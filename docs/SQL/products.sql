CREATE TABLE `products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `desc` VARCHAR(255) NOT NULL,
  `price` DOUBLE NOT NULL DEFAULT 0,
  `status` BOOLEAN NOT NULL DEFAULT true,
  `urlImage` VARCHAR(130) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
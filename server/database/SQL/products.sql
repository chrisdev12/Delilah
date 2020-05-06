CREATE TABLE `products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `desc` VARCHAR(45) NOT NULL,
  `price` FLOAT NOT NULL DEFAULT 0.0,
  `status` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
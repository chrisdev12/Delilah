CREATE TABLE `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(40) NOT NULL,
  `email` VARCHAR(60) UNIQUE NOT NULL,
  `phone` INT NOT NULL,
  `address` VARCHAR(70) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `status` BOOLEAN NOT NULL DEFAULT true,
  `rol` ENUM('user', 'admin') DEFAULT 'user',
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
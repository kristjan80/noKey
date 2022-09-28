-- -----------------------------------------------------
-- Table `nokey`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nokey`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(120) NOT NULL,
  `phash` VARCHAR(100) NOT NULL,
  `salt` VARCHAR(100) NOT NULL,
  `createdon` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb3;

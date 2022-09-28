-- -----------------------------------------------------
-- Table `nokey`.`access_devices`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nokey`.`access_devices` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NULL DEFAULT NULL,
  `producer` VARCHAR(45) NULL DEFAULT NULL,
  `description` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

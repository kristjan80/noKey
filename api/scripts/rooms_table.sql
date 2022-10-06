-- -----------------------------------------------------
-- Table `nokey`.`rooms`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nokey`.`rooms` (
  `id` INT NOT NULL,
  `code` VARCHAR(45) NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `addedon` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedon` TIMESTAMP NULL DEFAULT NULL,
  `access_device` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_rooms_access_devices1_idx` (`access_device` ASC) VISIBLE,
  CONSTRAINT `fk_rooms_access_devices1`
    FOREIGN KEY (`access_device`)
    REFERENCES `nokey`.`access_devices` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;
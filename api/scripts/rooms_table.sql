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
  `access_devices_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_rooms_access_devices1_idx` (`access_devices_id` ASC) VISIBLE,
  CONSTRAINT `fk_rooms_access_devices1`
    FOREIGN KEY (`access_devices_id`)
    REFERENCES `nokey`.`access_devices` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

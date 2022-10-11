-- -----------------------------------------------------
-- Table `nokey`.`active_qr_codes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nokey`.`active_qr_codes` (
  `id` INT NOT NULL,
  `qrbase64` TEXT NOT NULL,
  `createdon` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `expireson` TIMESTAMP NULL DEFAULT NULL,
  `user` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_active_qr_codes_users1_idx` (`user` ASC) VISIBLE,
  CONSTRAINT `fk_active_qr_codes_users1`
    FOREIGN KEY (`user`)
    REFERENCES `nokey`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

-- -----------------------------------------------------
-- Table `nokey`.`access_history`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nokey`.`access_history` (
  `id` INT NOT NULL,
  `access` INT NOT NULL,
  `createdon` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_access_history_access_list1_idx` (`access` ASC) VISIBLE,
  CONSTRAINT `fk_access_history_access_list1`
    FOREIGN KEY (`access`)
    REFERENCES `nokey`.`access_list` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

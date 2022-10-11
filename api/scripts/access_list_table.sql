-- -----------------------------------------------------
-- Table `nokey`.`access_list`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nokey`.`access_list` (
  `id` INT NOT NULL,
  `room` INT NOT NULL,
  `user` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_access_list_rooms_idx` (`room` ASC) VISIBLE,
  INDEX `fk_access_list_users1_idx` (`user` ASC) VISIBLE,
  CONSTRAINT `fk_access_list_rooms`
    FOREIGN KEY (`room`)
    REFERENCES `nokey`.`rooms` (`id`),
  CONSTRAINT `fk_access_list_users1`
    FOREIGN KEY (`user`)
    REFERENCES `nokey`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;
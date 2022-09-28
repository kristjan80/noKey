-- -----------------------------------------------------
-- Table `nokey`.`access_list`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nokey`.`access_list` (
  `id` INT NOT NULL,
  `rooms_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_access_list_rooms_idx` (`rooms_id` ASC) VISIBLE,
  INDEX `fk_access_list_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_access_list_rooms`
    FOREIGN KEY (`rooms_id`)
    REFERENCES `nokey`.`rooms` (`id`),
  CONSTRAINT `fk_access_list_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `nokey`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

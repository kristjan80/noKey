-- -----------------------------------------------------
-- Table `nokey`.`user_groups`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nokey`.`user_groups` (
  `id` INT NOT NULL,
  `group_name` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;
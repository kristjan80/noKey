CREATE TABLE IF NOT EXISTS `nokey`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(120) NOT NULL,
  `phash` VARCHAR(100) NOT NULL,
  `salt` VARCHAR(100) NOT NULL,
  `createdon` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb3;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'Kaarel','Kaalikas','kaalikas@tlu.ee','AAAA','AAAA','2019-09-21 02:00:00'),(3,'Mari','Maasikas','maasikas@tlu.ee','AAAA','AAAA','2019-09-21 02:00:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
# ************************************************************
# Sequel Pro SQL dump
# Версия 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Адрес: 127.0.0.1 (MySQL 5.7.21)
# Схема: binadox_db
# Время создания: 2018-06-04 10:08:53 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Дамп таблицы services
# ------------------------------------------------------------

DROP TABLE IF EXISTS `services`;

CREATE TABLE `services` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(120) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `connected` tinyint(1) DEFAULT NULL,
  `used` tinyint(1) DEFAULT NULL,
  `warning` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;

INSERT INTO `services` (`id`, `url`, `name`, `connected`, `used`, `warning`)
VALUES
	(1,'./assets/img/services/atlassian.png','Atlassian',1,1,0),
	(2,'./assets/img/services/google.png','Google G Suite',1,1,1),
	(3,'./assets/img/services/salesforce.svg','Salesforce',0,1,1),
	(4,'./assets/img/services/concur.png','Concur',0,0,1),
	(5,'./assets/img/services/linkedin.png','LinkedIn',0,0,1),
	(6,'./assets/img/services/box.png','Box',1,1,0),
	(7,'./assets/img/services/office-365.svg','Office 365',1,1,0),
	(8,'./assets/img/services/slack.svg','Slack',1,1,0),
	(9,'./assets/img/services/gotomeeting.png','Gotomeeting',0,0,0),
	(10,'./assets/img/services/webex.png','WebEx',0,0,1),
	(11,'./assets/img/services/firefox-icon.png','Firefox',0,0,0);

/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;


# Дамп таблицы users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(150) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `email`, `password`, `name`)
VALUES
	(1,'artav80@mail.ru','$2b$10$XgURCHHVNUHBGDbFMygH.udpTYDUhjU1uoEMaK4W5u5bH4YGcZJBa','malik');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

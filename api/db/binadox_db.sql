# ************************************************************
# Sequel Pro SQL dump
# Версия 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Адрес: 127.0.0.1 (MySQL 5.7.21)
# Схема: binadox_db
# Время создания: 2018-06-07 10:05:17 +0000
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
  `unused` tinyint(1) DEFAULT NULL,
  `warning` tinyint(1) DEFAULT NULL,
  `installed` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;

INSERT INTO `services` (`id`, `url`, `name`, `connected`, `unused`, `warning`, `installed`)
VALUES
	(1,'./assets/img/services/atlassian.png','atlassian',1,0,0,1),
	(2,'./assets/img/services/google.png','google G Suite',1,0,1,1),
	(3,'./assets/img/services/salesforce.svg','salesforce',0,0,1,0),
	(4,'./assets/img/services/concur.png','concur',0,0,1,0),
	(5,'./assets/img/services/linkedin.png','linkedIn',0,0,1,0),
	(6,'./assets/img/services/box.png','box',1,0,0,1),
	(7,'./assets/img/services/office-365.svg','office 365',1,0,0,1),
	(8,'./assets/img/services/slack.svg','slack',0,1,0,1),
	(9,'./assets/img/services/gotomeeting.png','gotomeeting',0,0,0,0),
	(10,'./assets/img/services/webex.png','webEx',0,0,1,0);

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

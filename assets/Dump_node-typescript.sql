CREATE DATABASE  IF NOT EXISTS `node_typescript` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `node_typescript`;
-- MySQL dump 10.13  Distrib 5.7.23, for Linux (x86_64)
--
-- Host: localhost    Database: node_typescript
-- ------------------------------------------------------
-- Server version	5.7.23-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `competition`
--

DROP TABLE IF EXISTS `competition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `competition` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `_week` int(11) DEFAULT NULL,
  `_name` varchar(45) DEFAULT NULL,
  `_date` date DEFAULT NULL,
  `_winner` text,
  `_competitors` text,
  `_result` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `competition_competitor`
--

DROP TABLE IF EXISTS `competition_competitor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `competition_competitor` (
  `_competition` int(11) NOT NULL,
  `_competitor` int(11) NOT NULL,
  PRIMARY KEY (`_competition`,`_competitor`),
  KEY `fk_competition_competitor_2_idx` (`_competitor`),
  CONSTRAINT `fk_competition_competitor_1` FOREIGN KEY (`_competition`) REFERENCES `competition` (`_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_competition_competitor_2` FOREIGN KEY (`_competitor`) REFERENCES `competitor` (`_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `competitor`
--

DROP TABLE IF EXISTS `competitor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `competitor` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `_name` varchar(45) DEFAULT NULL,
  `_age` int(11) DEFAULT NULL,
  `_birth` date DEFAULT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tournament`
--

DROP TABLE IF EXISTS `tournament`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tournament` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `_name` varchar(45) DEFAULT NULL,
  `_week` int(11) DEFAULT NULL,
  `_date` date DEFAULT NULL,
  `_winner` text,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tournament_competition`
--

DROP TABLE IF EXISTS `tournament_competition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tournament_competition` (
  `_tournament` int(11) NOT NULL,
  `_competition` int(11) NOT NULL,
  PRIMARY KEY (`_tournament`,`_competition`),
  KEY `fk_tournament_competition_2_idx` (`_competition`),
  CONSTRAINT `fk_tournament_competition_1` FOREIGN KEY (`_tournament`) REFERENCES `tournament` (`_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tournament_competition_2` FOREIGN KEY (`_competition`) REFERENCES `competition` (`_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tournament_competitor`
--

DROP TABLE IF EXISTS `tournament_competitor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tournament_competitor` (
  `_tournament` int(11) NOT NULL,
  `_competitor` int(11) NOT NULL,
  PRIMARY KEY (`_tournament`,`_competitor`),
  KEY `fk_tournament_competitor_2_idx` (`_competitor`),
  CONSTRAINT `fk_tournament_competitor_1` FOREIGN KEY (`_tournament`) REFERENCES `tournament` (`_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tournament_competitor_2` FOREIGN KEY (`_competitor`) REFERENCES `competitor` (`_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping events for database 'node_typescript'
--

--
-- Dumping routines for database 'node_typescript'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-12  9:16:29

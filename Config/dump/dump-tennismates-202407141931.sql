-- MariaDB dump 10.19  Distrib 10.4.32-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: tennismates
-- ------------------------------------------------------
-- Server version	10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `ME_ID` int(11) NOT NULL AUTO_INCREMENT,
  `ME_Envoyeur` int(11) DEFAULT NULL,
  `ME_Receveur` int(11) DEFAULT NULL,
  `ME_contenu` text DEFAULT NULL,
  `ME_DateEnvoie` datetime NOT NULL,
  PRIMARY KEY (`ME_ID`),
  KEY `FK_Envoyeur` (`ME_Envoyeur`),
  KEY `FK_Receveur` (`ME_Receveur`),
  CONSTRAINT `FK_Envoyeur` FOREIGN KEY (`ME_Envoyeur`) REFERENCES `utilisateurs` (`UT_ID`),
  CONSTRAINT `FK_Receveur` FOREIGN KEY (`ME_Receveur`) REFERENCES `utilisateurs` (`UT_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (2,1,15,'Bonjour je m\'appelle michel','2024-06-28 00:00:00'),(3,15,1,'Bonjour, comment vas-tu ? ','2024-06-28 00:00:00'),(4,1,15,'ça va ','2024-06-28 00:00:00');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profiles` (
  `PR_ID` int(11) NOT NULL AUTO_INCREMENT,
  `UT_ID` int(11) DEFAULT NULL,
  `PR_Genre` enum('Homme','Femme','both') DEFAULT NULL,
  `PR_Tennisniveau` enum('Débutant','Intermédiaire','Expert') NOT NULL,
  `PR_Padelniveau` enum('Débutant','Intermédiaire','Expert') NOT NULL,
  `PR_Pratique` enum('Tennis','Padel','Both') DEFAULT NULL,
  `PR_Description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`PR_ID`),
  KEY `FK_UtilisateurProfile` (`UT_ID`),
  CONSTRAINT `FK_UtilisateurProfile` FOREIGN KEY (`UT_ID`) REFERENCES `utilisateurs` (`UT_ID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiles`
--

LOCK TABLES `profiles` WRITE;
/*!40000 ALTER TABLE `profiles` DISABLE KEYS */;
INSERT INTO `profiles` VALUES (1,1,'Femme','Expert','Débutant','Tennis','Ceci est ma description'),(2,1,'Femme','Expert','Débutant','Tennis','Ceci est ma description');
/*!40000 ALTER TABLE `profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilisateurs`
--

DROP TABLE IF EXISTS `utilisateurs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `utilisateurs` (
  `UT_ID` int(11) NOT NULL AUTO_INCREMENT,
  `UT_Motdepasse` varchar(255) NOT NULL,
  `UT_Email` varchar(100) NOT NULL,
  `UT_Prenom` varchar(50) NOT NULL,
  `UT_Nom` varchar(50) NOT NULL,
  `UT_Ville` varchar(100) NOT NULL,
  `UT_Codepostal` varchar(10) NOT NULL,
  PRIMARY KEY (`UT_ID`),
  UNIQUE KEY `UT_Email` (`UT_Email`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilisateurs`
--

LOCK TABLES `utilisateurs` WRITE;
/*!40000 ALTER TABLE `utilisateurs` DISABLE KEYS */;
INSERT INTO `utilisateurs` VALUES (1,'abc123','Fillierelouis1@gmail.com','Louis','Filliere','Henin-beaumont','62110'),(15,'$2b$10$cNWThMkVNyCJJv0Cr1e5IOfD.dU9dfCdyw4SLruDw7nykLZ415Ijq','rooteehhgkjllkjf@root','Paul','xfgeeeeee','Paris','75000'),(17,'$2b$10$ILBFSLdK4Np2RQFr.VO/IO2Vzti5yU3pdinxsYBJ7JrVM4W6e1MMu','test@test.com','Thomas','xfgeeeeee','Paris','75000'),(19,'$2b$10$XzM4R5587ho3amjjOIhDLeUBsSW9/qOoF1EeV.9Q9lcpccnvvoRIC','utilisateur@test.com','Guillaume','xfgeeeeee','Paris','75000'),(20,'$2b$10$4hVnj5szzwmxIQZ1wGLytO1miKMiYw8.Pq6JEw87SFaCMQii/EiZ6','pierre@test.com','Jerome','Pierre','Lille','59000'),(21,'$2b$10$KBUP/U9pGrnlmLzb4ildHejZKpNvH4b.leQ9L5etnbiFNuTQsit2C','david@test.com','David','Pierre','Carvin','52220'),(52,'$2b$10$oLyR2gl4XXxubaUr77bLLuR21SQXI5ayOUdre9vEwnCfy1t2eD58q','PlayerOne@gmail.com','PlayerOne','PlayerOne','Henin-beaumont','62110'),(55,'$2b$10$hO87aYkeqdkKLs16u4IDHessPwLG6EWFcQ0GWifdOtYJsr2q4SUfi','utilisateur@gmail.com','utilisateur','utilisateur','Arras','62000'),(56,'$2b$10$EpDllsQKJi.cJqSA4tEz/O7stiJSWKb68bAEgQWhCWW/RcsHdYAFi','testone@gmail.com','Tim','Tim','Lens','62500'),(62,'$2b$10$boWb8EYqKSPQ4zc0Gyk.hOz5bZsb9FRaX6tFHNSd9ydvYRfNbf7le','test1@gmail.com','testeur1','testeur1','Lens','62200');
/*!40000 ALTER TABLE `utilisateurs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'tennismates'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-14 19:31:11

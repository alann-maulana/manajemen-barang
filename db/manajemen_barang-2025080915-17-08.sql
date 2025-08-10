# ************************************************************
# Sequel Ace SQL dump
# Version 20095
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Host: localhost (MySQL 5.7.39)
# Database: manajemen_barang
# Generation Time: 2025-08-09 08:17:08 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table master_barang
# ------------------------------------------------------------

DROP TABLE IF EXISTS `master_barang`;

CREATE TABLE `master_barang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode` varchar(50) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `tanggal` date NOT NULL,
  `id_kategori` int(11) NOT NULL,
  `satuan` varchar(20) NOT NULL,
  `stock` tinyint(1) NOT NULL DEFAULT '0',
  `keterangan` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_id_kategori` (`id_kategori`),
  CONSTRAINT `fk_id_kategori` FOREIGN KEY (`id_kategori`) REFERENCES `master_kategori` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

LOCK TABLES `master_barang` WRITE;
/*!40000 ALTER TABLE `master_barang` DISABLE KEYS */;

INSERT INTO `master_barang` (`id`, `kode`, `nama`, `tanggal`, `id_kategori`, `satuan`, `stock`, `keterangan`, `created_at`, `updated_at`)
VALUES
	(1,'MB001','MacBook Air M1','2023-01-15',1,'unit',1,'Chip M1, 8GB RAM, 256GB SSD','2025-08-09 15:11:09','2025-08-09 15:11:09'),
	(2,'MB002','MacBook Pro 14\"','2023-03-20',1,'unit',1,'Chip M2 Pro, 16GB RAM, 512GB SSD','2025-08-09 15:11:09','2025-08-09 15:11:09'),
	(3,'MB003','MacBook Air M2','2023-05-10',1,'unit',0,'Chip M2, 8GB RAM, 256GB SSD - Stok habis','2025-08-09 15:11:09','2025-08-09 15:11:09'),
	(4,'MB004','MacBook Pro 16\"','2023-07-05',1,'unit',1,'Chip M2 Max, 32GB RAM, 1TB SSD','2025-08-09 15:11:09','2025-08-09 15:11:09'),
	(5,'MB005','MacBook Pro 13\"','2023-09-18',1,'unit',0,'Chip M2, 8GB RAM, 256GB SSD - Diskon','2025-08-09 15:11:09','2025-08-09 15:11:09'),
	(6,'IP001','iPhone 15 Pro','2023-02-14',2,'unit',1,'A17 Pro, Kamera 48MP, 5G','2025-08-09 15:13:04','2025-08-09 15:13:04'),
	(7,'IP002','iPhone 14','2023-04-30',2,'unit',1,'Chip A15 Bionic, Kamera ganda','2025-08-09 15:13:04','2025-08-09 15:13:04'),
	(8,'IP003','iPhone SE','2023-06-22',2,'unit',0,'Model ekonomis - Preorder','2025-08-09 15:13:04','2025-08-09 15:13:04'),
	(9,'IP004','iPhone 15','2023-08-11',2,'unit',1,'Desain Dynamic Island, USB-C','2025-08-09 15:13:04','2025-08-09 15:13:04'),
	(10,'IP005','iPhone 13 Mini','2023-10-25',2,'unit',1,'Ukuran kompak, performa tinggi','2025-08-09 15:13:04','2025-08-09 15:13:04'),
	(11,'PD001','iPad Air','2023-01-30',3,'unit',1,'Chip M1, Layar Liquid Retina','2025-08-09 15:13:04','2025-08-09 15:13:04'),
	(12,'PD002','iPad Pro 11\"','2023-03-15',3,'unit',0,'Chip M2, WiFi+Cellular - Stok terbatas','2025-08-09 15:13:04','2025-08-09 15:13:04'),
	(13,'PD003','iPad 10th Gen','2023-05-05',3,'unit',1,'Desain modern, USB-C','2025-08-09 15:13:04','2025-08-09 15:13:04'),
	(14,'PD004','iPad Mini','2023-07-19',3,'unit',1,'Ukuran portabel, chip A15','2025-08-09 15:13:04','2025-08-09 15:13:04'),
	(15,'PD005','iPad Pro 12.9\"','2023-09-28',3,'unit',0,'Layar XDR, untuk profesional','2025-08-09 15:13:04','2025-08-09 15:13:04'),
	(16,'AW001','Apple Watch Series 9','2023-02-28',4,'unit',1,'Chip S9, layar Always-On','2025-08-09 15:13:04','2025-08-09 15:13:04'),
	(17,'AW002','Apple Watch SE','2023-04-10',4,'unit',1,'Model entry-level, fitur esensial','2025-08-09 15:13:04','2025-08-09 15:13:04'),
	(18,'AW003','Apple Watch Ultra 2','2023-06-15',4,'unit',1,'Untuk petualang, baterai tahan lama','2025-08-09 15:13:04','2025-08-09 15:13:04'),
	(19,'AW004','Apple Watch Hermès','2023-08-22',4,'unit',1,'Edisi mewah, strap kulit eksklusif','2025-08-09 15:13:04','2025-08-09 15:13:04'),
	(20,'AW005','Apple Watch Nike','2023-10-05',4,'unit',1,'Edisi olahraga, strap khusus','2025-08-09 15:13:04','2025-08-09 15:13:04');

/*!40000 ALTER TABLE `master_barang` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table master_kategori
# ------------------------------------------------------------

DROP TABLE IF EXISTS `master_kategori`;

CREATE TABLE `master_kategori` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode` varchar(50) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `keterangan` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

LOCK TABLES `master_kategori` WRITE;
/*!40000 ALTER TABLE `master_kategori` DISABLE KEYS */;

INSERT INTO `master_kategori` (`id`, `kode`, `nama`, `keterangan`, `created_at`, `updated_at`)
VALUES
	(1,'MBK','MacBook','Laptop premium Apple','2025-08-09 15:09:18','2025-08-09 15:09:18'),
	(2,'IPH','iPhone','Smartphone flagship Apple','2025-08-09 15:09:18','2025-08-09 15:09:18'),
	(3,'IPD','iPad','Tablet serbaguna Apple','2025-08-09 15:09:18','2025-08-09 15:09:18'),
	(4,'APW','Apple Watch','Smartwatch kesehatan dan lifestyle','2025-08-09 15:09:18','2025-08-09 15:09:18');

/*!40000 ALTER TABLE `master_kategori` ENABLE KEYS */;
UNLOCK TABLES;




# Dump of view stock_barang
# ------------------------------------------------------------

DROP TABLE IF EXISTS `stock_barang`; DROP VIEW IF EXISTS `stock_barang`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `stock_barang`
AS SELECT
   `mb`.`id` AS `id`,
   `mb`.`nama` AS `nama_barang`,
   `mk`.`nama` AS `kategori`,
   `mb`.`stock` AS `stock`,
   `mb`.`satuan` AS `satuan`
FROM (`master_barang` `mb` join `master_kategori` `mk` on((`mk`.`id` = `mb`.`id_kategori`))) where (`mb`.`stock` = 1);


/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

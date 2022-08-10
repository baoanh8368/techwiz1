CREATE TABLE `Counter` (
  `vcid`       int(6) NOT NULL,  
  `visits`     int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `Counter` (`vcid`, `visits`)
VALUES  (1, 0);
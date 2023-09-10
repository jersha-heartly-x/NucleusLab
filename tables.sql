CREATE TABLE BLOCKING (
  ACADEMIC_YEAR VARCHAR(12),
  SEMESTER VARCHAR(5),
  LAB VARCHAR(6),
  _DAY VARCHAR(10),
  FROMPERIOD INTEGER,
  TOPERIOD INTEGER,
  PRIMARY KEY(ACADEMIC_YEAR, SEMESTER, LAB, _DAY, FROMPERIOD, TOPERIOD)
);

CREATE TABLE BOOKING (
  STAFFID VARCHAR(6),
  PROGRAMME VARCHAR(10),
  _YEAR INTEGER,
  LAB VARCHAR(6),
  BOOKINGDATE DATE,
  ENTRYDATE DATE,
  FROMPERIOD INTEGER,
  TOPERIOD INTEGER,
  PURPOSE VARCHAR(1000),
  PRIMARY KEY( LAB, BOOKINGDATE, FROMPERIOD, TOPERIOD )
);

CREATE TABLE COMPLAINTS (
  COMPLAINTID INT NOT NULL AUTO_INCREMENT,
  USERID VARCHAR(6),
  LAB VARCHAR(6),
  _ROW INTEGER,
  _COL INTEGER,
  SYSTEMNO INTEGER,
  REQUIREMENT VARCHAR(1000),
  DATE_TIME DATETIME,
  _STATUS VARCHAR(20),
  RESOLVEDDATE DATE,
  REMARKS VARCHAR(500),
  RESOLVEDBY VARCHAR(40),
  PRIMARY KEY(COMPLAINTID)
);

CREATE TABLE COURSE_DATES (
  ACADEMIC_YEAR VARCHAR(12),
  CLASS VARCHAR(10),
  SEMESTER VARCHAR(5),
  START_DATE DATE,
  END_DATE DATE,
  PRIMARY KEY (ACADEMIC_YEAR, CLASS, SEMESTER)
);

CREATE TABLE LOGIN_REQUESTS (
  REQUESTID INT NOT NULL AUTO_INCREMENT,
  STAFFID VARCHAR(6),
  STAFFNAME VARCHAR(40),
  STAFFEMAIL VARCHAR(80),
  CLASS VARCHAR(5),
  DATEREQUESTED DATETIME,
  DATENEEDED DATE,
  FROMPERIOD INTEGER,
  TOPERIOD INTEGER,
  _TYPE VARCHAR(10),
  NOOFLOGINS INTEGER,
  TOOLS VARCHAR(40),
  SERIES VARCHAR(20),
  _STATUS VARCHAR(20),
  PRIMARY KEY(REQUESTID)
);

CREATE TABLE SCHEDULE (
  ACADEMICYEAR VARCHAR(12),
  SEMESTER VARCHAR(5),
  _YEAR INTEGER,
  PROGRAMME VARCHAR(10),
  LAB VARCHAR(6),
  _DAY VARCHAR(10),
  PERIOD INTEGER,
  PRIMARY KEY(_DAY, LAB, PERIOD, ACADEMICYEAR, SEMESTER)
);

CREATE TABLE WIFI (
  ROLLNO VARCHAR(6),
  _NAME VARCHAR(50),
  MAC VARCHAR(20),
  MODEL VARCHAR(100),
  _TYPE VARCHAR(15),
  MOBILE VARCHAR(10),
  ROUTERNAME VARCHAR(20),
  VERIFY VARCHAR(20),
  _STATUS VARCHAR(10),
  PRIMARY KEY(ROLLNO)
);

CREATE TABLE `device_master` (
  `model` varchar(50) DEFAULT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'Working',
  `invoiceno` varchar(50) NOT NULL,
  `invoicedate` date NOT NULL,
  `location` varchar(10) NOT NULL DEFAULT 'Store',
  `devicetype` varchar(30) NOT NULL,
  `mac` varchar(20) DEFAULT NULL,
  `ram` varchar(4) DEFAULT NULL,
  `serialno` varchar(50) NOT NULL,
  `specification` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`serialno`)
);

CREATE TABLE `computer_master`(
  `location` varchar(10) DEFAULT NULL,
  `mousesno` varchar(50) DEFAULT NULL,
  `keyboardsno` varchar(50) DEFAULT NULL,
  `monitorsno` varchar(50) DEFAULT NULL,
  `cpusno` varchar(50) DEFAULT NULL,
  `systemno` int DEFAULT NULL,
  KEY `monitorsno` (`monitorsno`),
  KEY `mousesno` (`mousesno`),
  KEY `keyboardsno` (`keyboardsno`),
  KEY `cpusno` (`cpusno`),
  CONSTRAINT `computer_master_ibfk_1` FOREIGN KEY (`monitorsno`) REFERENCES `device_master` (`serialno`),
  CONSTRAINT `computer_master_ibfk_2` FOREIGN KEY (`mousesno`) REFERENCES `device_master` (`serialno`),
  CONSTRAINT `computer_master_ibfk_3` FOREIGN KEY (`keyboardsno`) REFERENCES `device_master` (`serialno`),
  CONSTRAINT `computer_master_ibfk_4` FOREIGN KEY (`cpusno`) REFERENCES `device_master` (`serialno`)
);

CREATE TABLE  `dump` (
  `dumpid` int NOT NULL AUTO_INCREMENT,
  `disposaldate` varchar(10) DEFAULT NULL,
  `verify` varchar(15) DEFAULT 'not verified',
  `serialno` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`dumpid`),
  KEY `serialno` (`serialno`),
  CONSTRAINT `dump_ibfk_1` FOREIGN KEY (`serialno`) REFERENCES `device_master` (`serialno`)
) ;

CREATE TABLE `location` (
  `lab` varchar(20) DEFAULT NULL
);

CREATE TABLE `device` (
  `devicetype` varchar(20) DEFAULT NULL
);

SELECT DATE_FORMAT(disposaldate, '%d/%m/%Y') AS disposaldate_formatted FROM dump;
ALTER TABLE dump MODIFY disposaldate VARCHAR(10);
UPDATE dump SET disposaldate = DATE_FORMAT(str_to_date(disposaldate, '%Y-%m-%d'), '%d/%m/%Y');

SELECT DATE_FORMAT(invoicedate, '%d/%m/%Y') AS invoicedate_formatted FROM device_master;
ALTER TABLE device_master MODIFY invoicedate VARCHAR(10);
UPDATE device_master SET invoicedate = DATE_FORMAT(str_to_date(invoicedate, '%Y-%m-%d'), '%d/%m/%Y');
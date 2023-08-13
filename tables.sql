CREATE TABLE blocking
(
	academic_year VARCHAR(12),
    semester VARCHAR(5),
    lab VARCHAR(6),
    _day VARCHAR(10),
    fromperiod INTEGER,
    toperiod INTEGER,
    PRIMARY KEY(academic_year, semester, lab, _day, fromperiod, toperiod)
);


CREATE TABLE booking
(
	staffId VARCHAR(6),
    programme VARCHAR(10),
    _year INTEGER,
    lab VARCHAR(6),
    bookingDate DATE,
    entryDate DATE,
    fromperiod INTEGER,
    toperiod INTEGER,
    purpose VARCHAR(1000),
    PRIMARY KEY( lab, bookingDate, fromperiod, toperiod )
);


CREATE TABLE complaints
(
	complaintId int NOT NULL AUTO_INCREMENT,
	userId VARCHAR(6),
    lab VARCHAR(6),
    _row INTEGER,
    _col INTEGER,
    systemNo INTEGER,
    requirement VARCHAR(1000),
    date_time DATETIME,
    _status VARCHAR(20),
    resolvedDate DATE,
    remarks VARCHAR(500),
    resolvedBy VARCHAR(40),
    PRIMARY KEY(complaintId)
);


CREATE TABLE course_dates
(
    academic_year VARCHAR(12),
    class VARCHAR(10),
    semester VARCHAR(5),
    start_date DATE,
    end_date DATE,
    PRIMARY KEY (academic_year, class, semester)
);


CREATE TABLE login_requests
(
	requestId int NOT NULL AUTO_INCREMENT,
    staffid VARCHAR(6),
    staffname VARCHAR(40),
    staffemail VARCHAR(80),
    class VARCHAR(5),
    daterequested DATETIME,
    dateneeded DATE,
    fromperiod INTEGER,
    toperiod INTEGER,
    _type VARCHAR(10),
    nooflogins INTEGER,
    tools VARCHAR(40),
    series VARCHAR(20),
    _status VARCHAR(20),
    PRIMARY KEY(requestId)
);


CREATE TABLE schedule
(
	academicYear VARCHAR(12),
    semester VARCHAR(5),
	_year INTEGER,
    programme VARCHAR(10),
    lab VARCHAR(6),
    _day VARCHAR(10),
    period INTEGER,
    PRIMARY KEY(_day, lab, period, academicYear, semester)
);


CREATE TABLE wifi (
	rollNo VARCHAR(6),
    _name VARCHAR(50),
	mac VARCHAR(20),
    model VARCHAR(100),
    _type VARCHAR(15),
    mobile VARCHAR(10),
    routerName VARCHAR(20),
    verify VARCHAR(20),
    _status VARCHAR(10),
	PRIMARY KEY(rollNo)
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
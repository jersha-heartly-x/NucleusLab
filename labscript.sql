USE sql6510384;

SELECT * FROM complaints;

DROP TABLE complaints;

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

SELECT * FROM schedule;

DROP TABLE schedule;

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

CREATE TABLE login_requests
(
    staffid VARCHAR(6),
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
    PRIMARY KEY(staffid, daterequested)
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

DROP TABLE course_dates;

SELECT * FROM course_dates;

SELECT * FROM login_requests;

DELETE FROM complaints WHERE date_time < NOW() - INTERVAL 30 DAY;

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

DROP TABLE booking;

INSERT INTO booking VALUES("C3391", "2022 - 2023", "odd", "MSc SS", 3, "DSL", "2022-08-27", "2022-08-10", 5, 6, "Placement");

SELECT * FROM booking;

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


SELECT * FROM blocking;

DROP TABLE blocking;

CREATE TABLE attendance (
	USERID VARCHAR(10),
    DATE_ VARCHAR(20),
    IN_TIME VARCHAR(20),
    OUT_TIME VARCHAR(20),
    PRIMARY KEY(USERID, DATE_, IN_TIME, OUT_TIME)
);

DROP TABLE attendance;

SELECT * FROM attendance;

SELECT * FROM attendance where DATE_ between "2022-08-01" and "2022-08-12" AND USERID = "12013";

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

DROP TABLE wifi;

SELECT * FROM wifi;

CREATE TABLE master (
    USERID VARCHAR(20),
    NAME VARCHAR(255),
    ROLLNO VARCHAR(6),
    PRIMARY KEY(USERID, ROLLNO)
);




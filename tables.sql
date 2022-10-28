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



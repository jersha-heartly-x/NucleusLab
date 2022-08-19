USE sql6510384;

SELECT * FROM complaints;

DROP TABLE complaints;

CREATE TABLE complaints
(
	staffId VARCHAR(6),
    lab VARCHAR(6),
    _row INTEGER,
    _col INTEGER,
    systemNo INTEGER,
    requirement VARCHAR(1000),
    date_time DATETIME,
    PRIMARY KEY(staffId, date_time)
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

INSERT INTO schedule VALUES(2022, "odd", 3, "MSc SS", "NSL", "Thursday", 8);

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

SELECT * FROM course_dates;

SELECT * FROM login_requests;

DELETE FROM complaints WHERE date_time < NOW() - INTERVAL 30 DAY;

CREATE TABLE booking
(
	staffId VARCHAR(6),
	academic_year VARCHAR(12),
    semester VARCHAR(5),
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

INSERT INTO blocking VALUES("2022 - 2023", "odd", "DSL", "Wednesday", 3, 4);
INSERT INTO blocking VALUES("2022 - 2023", "odd", "CSL1", "Thursday", 1, 2);
INSERT INTO blocking VALUES("2022 - 2023", "odd", "CSL3", "Friday", 5, 6);

SELECT * FROM blocking;

DROP TABLE blocking;



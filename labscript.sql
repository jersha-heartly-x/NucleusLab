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

INSERT INTO schedule VALUES("2022 - 2023", "odd", 3, "MSc SS", "NSL", "Thursday", 7);

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

CREATE TABLE attendance (
	USERID VARCHAR(10),
    DATE_ VARCHAR(20),
    IN_TIME VARCHAR(20),
    OUT_TIME VARCHAR(20),
    PRIMARY KEY(USERID, DATE_, IN_TIME, OUT_TIME)
);

DROP TABLE attendance;

SELECT * FROM attendance;

INSERT INTO attendance values("22012","2022-06-08","5:30","6:30");
INSERT INTO attendance values("22023","2022-06-03","9:30","12:30");
INSERT INTO attendance values("32012","2022-06-07","7:30","9:30");
INSERT INTO attendance values("42012","2022-05-02","17:30","19:30");
INSERT INTO attendance values("32012","2022-04-14","15:30","19:30");
INSERT INTO attendance values("31912","2022-04-14","14:30","18:30");
INSERT INTO attendance values("11839","2022-04-14","15:30","19:30");
INSERT INTO attendance values("11839","2022-09-20","15:30","19:30");
INSERT INTO attendance values("21939","2022-09-20","15:30","19:30");
INSERT INTO attendance values("42032","2022-09-20","15:30","19:30");
INSERT INTO attendance values("42133","2022-09-20","15:30","19:30");
INSERT INTO attendance values("31922","2022-08-08","12:30","6:30");
INSERT INTO attendance values("12039","2022-08-04","13:30","17:45");
INSERT INTO attendance values("12013","2022-08-05","12:30","14:50");
INSERT INTO attendance values("12013","2022-04-10","13:30","14:50");

SELECT * FROM attendance where DATE_ between "2022-08-01" and "2022-08-12" AND USERID = "12013";




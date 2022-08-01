USE sql6508890;

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
    date_time VARCHAR(20),
    PRIMARY KEY(staffId, date_time)
);

SELECT * FROM schedule;

DROP TABLE schedule;

CREATE TABLE schedule
(
	academicYear INTEGER,
    sem VARCHAR(5),
	_year INTEGER,
    programme VARCHAR(10),
    lab VARCHAR(6),
    _day VARCHAR(10),
    period INTEGER,
    
    PRIMARY KEY(_day, lab, period, academicYear)
);

INSERT INTO schedule VALUES(2022, "even", 3, "MSc SS", "NSL", "Thursday", 7);


CREATE DATABASE labbooking;
USE labbooking;

CREATE TABLE complaints
(
    labName VARCHAR(10),
    rowNo INT,
    colNo INT,
    systemNo INT,
    requirement VARCHAR(1000),
    timings VARCHAR(30)
);

SELECT * FROM complaints;

DROP TABLE complaints;

CREATE TABLE loginRequests
(
	_year INT,
    programme VARCHAR(5),
    _date DATE,
    _from INT,
    _to INT,
    _type VARCHAR(20),
    login INT,
    tools VARCHAR(30)
);

SELECT * FROM loginRequests;


var db = require('../db');

exports.blockLab = function (req, res) {
    
    const q = `SELECT academic_year, semester from course_dates where '${new Date().toISOString().slice(0, 10)}' BETWEEN start_date and end_date;`;
    db.query(q, (err, result)=>{
        if(err) {
            console.log(err);
        }
        // console.log(result);
        else {
            res.render("block_lab", {title: "Schedule", menu: "Block Lab", defaultOptions :result[0]});
        }
    })

}

exports.toBlock = function (req, res) {

    let q = `SELECT academic_year, semester from course_dates where '${new Date().toISOString().slice(0, 10)}' BETWEEN start_date and end_date;`;
    
    db.query(q, (err, result)=>{
        if(err) {
            console.log(err);
        }
        else {
            const defaultOptions = result[0];

            const academicYear = req.body.academic_year,
            semester = req.body.semester,
            lab = req.body.lab,
            day = req.body.day,
            from = req.body.from,
            to = req.body.to;

            q = `SELECT * FROM schedule WHERE academicYear="${academicYear}" AND semester="${semester}" AND lab="${lab}" AND _day="${day}" AND period>=${from} AND period<=${to};`;

            db.query(q, (err, result) => {
                
                if(err) {
                    console.log(err);
                }
                else {
                    if(result.length != 0 ) {
                        console.log("Already Scheduled");
                        res.render("block_lab", {title: "Schedule", menu: "Block Lab", defaultOptions : defaultOptions, alert: "Already Scheduled!"});
                    }
                    else {
                        q = `SELECT * FROM booking WHERE academic_year="${academicYear}" AND semester="${semester}" AND lab="${lab}" AND DAYNAME(bookingDate)="${day}" AND ((${from} BETWEEN fromperiod AND toperiod) OR (${to} BETWEEN fromperiod AND toperiod)) OR (${from}<=fromperiod AND ${to}>=toperiod);`;

                        db.query(q, (err, result) => {
                            // console.log(result);
                            if(err) {
                                console.log(err);
                            }
                            else {
                                if(result.length != 0) {
                                    console.log("Already Booked");
                                    res.render("block_lab", {title: "Schedule", menu: "Block Lab", defaultOptions : defaultOptions, alert: "Already Booked!"});
                                }
                                else {

                                    q = `INSERT INTO blocking VALUES("${academicYear}", "${semester}", "${lab}", "${day}", ${from}, ${to});`;

                                    db.query(q, (err, result) => {
                                        if(err) {
                                            console.log(err);
                                        }
                                        else {
                                            console.log("Blocked Successfully");
                                            res.render("block_lab", {title: "Schedule", menu: "Block Lab", defaultOptions : defaultOptions, success: "Blocked Successfully!"});
                                        }

                                    })

                                }
                            }
                        })
                    }
                }
            })
        }
    })

}



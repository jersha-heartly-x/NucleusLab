var db = require('../db');

exports.blockLab = function (req, res) {
    
    const q = `SELECT academic_year, semester from course_dates where '${new Date().toISOString().slice(0, 10)}' BETWEEN start_date and end_date;`;
    
    db.query(q, (err, result)=>{
        if(err) {
            console.log(err);
        }
        // console.log(result);
        else {
            if(result[0]){
                res.render("block_lab", {title: "Schedule", menu: "Block Lab", defaultOptions :result[0]});
            }
            else{
                res.render("block_lab", {title: "Schedule", menu: "Block Lab"})
            }
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
    })

}

exports.unblockLab = function(req, res) {

    let q = `SELECT academic_year, semester from course_dates where '${new Date().toISOString().slice(0, 10)}' BETWEEN start_date and end_date;`;
    
    db.query(q, (err, result)=>{
        if(err) {
            console.log(err);
        }
        else {
            if(result[0]){
                const academic_year = result[0].academic_year,
                semester = result[0].semester;

                const q = `SELECT * FROM blocking WHERE academic_year="${academic_year}" AND semester="${semester}";`;
                
                db.query(q, (err, result) => {

                    if(err) {
                        console.log(err);
                    }
                    else {
                        // console.log(result);
                        res.render("unblock_lab", {title: "Schedule", menu: "Unblock Lab", table: result});
                    }
                })
            }
            else{
                res.render("unblock_lab", {title: "Schedule", menu: "Unblock Lab", table: []});
            }
        }
    })
}

exports.toUnblock = function(req, res) {

    let q = `SELECT academic_year, semester from course_dates where '${new Date().toISOString().slice(0, 10)}' BETWEEN start_date and end_date;`;
    
    db.query(q, (err, result)=>{
        
        if(err) {
            console.log(err);
        }
        else {

            const academic_year = result[0].academic_year,
                semester = result[0].semester;
            
            const lab = req.body.lab,
                day = req.body.day,
                from = req.body.from,
                to = req.body.to;

            q = `DELETE FROM blocking WHERE academic_year="${academic_year}" AND semester="${semester}" AND lab="${lab}" AND _day="${day}" AND fromperiod=${from} AND toperiod=${to};`;

            db.query(q, (err, result) => {
                if(err) {
                    console.log(err);
                }
                else {
                    res.redirect("/unblock-lab");
                }
            }) 
        }
    })
}
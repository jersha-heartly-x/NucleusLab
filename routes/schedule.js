var db = require('../db');

exports.regularSchedule = function (req, res) {
    // console.log(req.query['day']);
    const day = req.query.day!==undefined? req.query.day : new Date().toLocaleString('en-US', {weekday: "long"});
    //year and sem to be changed
    var year, sem;
    
    var q = `SELECT academic_year, semester from course_dates where '${new Date().toISOString().slice(0, 10)}' BETWEEN start_date and end_date;`;
    
    db.query(q, (err, result)=> {
        if(err) {
            console.log(err);
        }
        else {
            year= result[0].academic_year;
            sem= result[0].semester;
            console.log(year, sem);
            const labs=["CSL1", "CSL2", "CSL3", "DSL", "NSL", "IIL", "OCL", "SKAVA", "SCL"];
        
            const table = [];

            for(var i=0; i<labs.length; i++){
                var row = Array(10);
                row.fill("free");
                table.push(row);
            }

            q = `select lab, period, _year, programme from schedule where _day="${day}" and academicYear="${year}" and semester="${sem}";`;
            db.query(q, (err, result)=>{
                if(err) {
                    console.log(err);
                }
                else {
                    console.log(result);
                    for(var i=0; i<result.length; i++){
                        const x = labs.indexOf(result[i].lab);
                        const y = result[i].period -1;
                        // console.log(x, y, result[i]._year, result[i].programme);
                        table[x][y] = result[i]._year + " yr " + result[i].programme;
                    }
                
                    const data = {
                        role: res.locals.role,
                        title: "Lab Booking",
                        menu: "Regular Schedule",
                        day: day,
                        table: table
                    }

                    res.render("regular_schedule", data);
                }
            });
        }
    }) 
}

exports.add_schedule = (req, res)=>{
    const q = `SELECT academic_year, semester from course_dates where '${new Date().toISOString().slice(0, 10)}' BETWEEN start_date and end_date;`;
    db.query(q, (err, result)=>{
        if(err) {
            console.log(err);
        }
        // console.log(result);
        else {
            res.render("add_regular_schedule", {title: "Schedule", menu: "Add Schedule", defaultOptions :result[0]});
        }
    })
    
}

exports.checkAvailability = function (req, res) {
    const date = req.body.date,
        from = req.body.from,
        to = req.body.to,
        day = new Date(date).toLocaleString('en-US', {weekday: "long"}),
        labs = ["CSL1", "CSL2", "CSL3", "DSL", "NSL", "IIL", "OCL", "SKAVA", "SCL"], 
        table = [];

    for(var i=0; i<labs.length; i++) {
        var row = Array(10);
        row.fill("free");
        table.push(row);
    }

    let sql = `SELECT * FROM schedule WHERE period >= "${from}" AND period <= "${to}" AND _day = "${day}";`;

    db.query(sql, (err, result) => {
        if(err) {
            console.log(err);
        }

        else {
            for(var i=0; i<result.length; i++) {
                const x = labs.indexOf(result[i].lab);
                const y = result[i].period-1;
                table[x][y] = result[i]._year + " yr " + result[i].programme;
            }

            sql = `SELECT * FROM booking WHERE bookingDate="${date}" AND (((${from} BETWEEN fromperiod AND toperiod) OR (${to} BETWEEN fromperiod AND toperiod)) OR (fromperiod>=${from} AND toperiod<=${to}));`;
            
            db.query(sql, (err, result) => {
                if(err){
                    console.log(err);
                }
                else{
                    // console.log(result);
                    for(var i=0; i<result.length; i++) {
                        const x = labs.indexOf(result[i].lab);
                        let f = Math.max(result[i].fromperiod, from),
                            t = Math.min(result[i].toperiod, to);
                        for(let j=f-1; j<t; j++) {
                            const y = j;
                            table[x][y] = result[i]._year + " yr " + result[i].programme;
                        }
                    }

                    const data = {
                        title: "Lab Booking",
                        menu: "Check Availability",
                        table: table,
                        from: from,
                        to: to,
                        role: res.locals.role,
                        isPR: res.locals.isPR
                    }
                    // console.log(table);
                    res.render("check_available", data);

                }
            })
       }
    })
}


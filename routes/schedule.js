var db = require('../db');

exports.regularSchedule = function (req, res) {
    // console.log(req.query['day']);
    const day = req.query.day!==undefined? req.query.day : new Date().toLocaleString('en-US', {weekday: "long"});
    //year and sem to be changed
    var year=2022, sem="even";
    var q = `SELECT academic_year, semester from course_dates where '${new Date().toISOString().slice(0, 10)}' BETWEEN start_date and end_date;`;
    db.query(q, (err, result)=>{
        if(err){
            console.log(err);
        }
        year= result[0].academic_year;
        sem= result[0].semester;
    })
    const labs=["CSL1", "CSL2", "CSL3", "DSL", "NSL", "IIL", "OCL", "SKAVA", "SCL"];
    
    const table = [];

    for(var i=0; i<labs.length; i++){
        var row = Array(10);
        row.fill("free");
        table.push(row);
    }
    
    q = `select lab, period, _year, programme from schedule where _day="${day}" and academicYear=${year} and sem="${sem}";`;
    db.query(q, (err, result)=>{
        if(err) throw err;
        else{
            for(var i=0; i<result.length; i++){
                const x = labs.indexOf(result[i].lab);
                const y = result[i].period -1;
                // console.log(x, y, result[i]._year, result[i].programme);
                table[x][y] = result[i]._year + " yr " + result[i].programme;
            }
        
            const data = {
                title: "Lab Booking",
                menu: "Regular Schedule",
                day: day,
                table: table
            }

            res.render("regular_schedule", data);
        }
    });
}

exports.add_schedule = (req, res)=>{
    const q = `SELECT academic_year, semester from course_dates where '${new Date().toISOString().slice(0, 10)}' BETWEEN start_date and end_date;`;
    db.query(q, (err, result)=>{
        if(err){
            console.log(err);
        }
        console.log(result);
        res.render("add_regular_schedule", {title: "Schedule", menu: "Add Schedule", defaultOptions :result[0]});
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
        var row = Array(to-from+1);
        row.fill("free");
        table.push(row);
    }

    var sql = `SELECT * FROM schedule WHERE period >= "${from}" AND period <= "${to}" AND _day = "${day}";`;

    db.query(sql, (err, result) => {
        if(err) throw err;

        else {
            for(var i=0; i<result.length; i++) {
                const x = labs.indexOf(result[i].lab);
                const y = result[i].period-1;
                table[x][y] = result[i]._year + " yr " + result[i].programme;
            }
        
            const data = {
                table: table,
                from: from,
                to: to
            }

            res.render("check_available", data);
       }
    })
}


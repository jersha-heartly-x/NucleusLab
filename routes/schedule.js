var db = require('../db');

exports.regularSchedule = function (req, res) {
    const day = new Date().toLocaleString('en-US', {weekday: "long"});
    
    const data = {
        day: day,
    }
    res.render("regular_schedule", data);
}

exports.checkAvailability = function (req, res) {
    const date = req.body.date,
        from = req.body.from,
        to = req.body.to,
        day = new Date(date).toLocaleString('en-US', {weekday: "long"});
    
    const labs = ["CSL1", "CSL2", "CSL3", "DSL", "NSL", "IIL", "OCL", "SKAVA", "SCL"], table = [];

    for(var i=0; i<labs.length; i++){
        var row = Array(to-from+1);
        row.fill("free");
        table.push(row);
    }

    var sql = `SELECT * FROM schedule WHERE period >= "${from}" AND period <= "${to}" AND _day = "${day}";`;

    db.query(sql, (err, result) => {
        if(err) throw err;
        // console.log(result);

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


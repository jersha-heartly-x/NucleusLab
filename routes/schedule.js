var db = require('../db');

exports.regularSchedule = function (req, res) {
    console.log(req.query['day']);

    const day = req.query.day!==undefined? req.query.day : new Date().toLocaleString('en-US', {weekday: "long"});
    
    //year and sem to be changed
    const year = 2022, sem= "even";

    const labs=["CSL1", "CSL2", "CSL3", "DSL", "NSL", "IIL", "OCL", "SKAVA", "SCL"];
    
    const table = [];

    for(var i=0; i<labs.length; i++){
        var row = Array(10);
        row.fill("free");
        table.push(row);
    }
    
    const q = `select lab, period, _year, programme from schedule where _day="${day}" and academicYear=${year} and sem="${sem}";`;
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
                day: day,
                table: table
            }

            res.render("regular_schedule", data);
        }
    });
}
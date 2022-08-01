const con = require('../db');

exports.addSchedule = function(req, res) {

    const academicYear = parseInt(req.body.acadamic_year),
        sem = req.body.semester,
        year = req.body.year,
        programme = req.body.programme,
        lab = req.body.lab,
        day = req.body.day,
        from = req.body.from,
        to = req.body.to;
    
    for(var i = from; i <= to; i++) {
        var sql = `INSERT INTO schedule VALUES(${academicYear}, "${sem}", ${year}, "${programme}", "${lab}", "${day}", ${i});`;
        con.query(sql, (err, res) => {
            if(err) throw err;
            console.log("Schedule added!");
        });
    }
    res.redirect("/add_regular_schedule");
}





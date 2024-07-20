const db = require("../db");

exports.add_date = (req, res) => {
    let q = `INSERT INTO course_dates values('${req.body.year}', '${req.body.class}', '${req.body.semester}', '${req.body.start_date}', '${req.body.end_date}');`;
    db.query(q, (err, result) => {
        if (err) {
            if (err.errno == 1062) {
                q = `UPDATE course_dates SET start_date = '${req.body.start_date}', end_date = '${req.body.end_date}';`;
                db.query(q, (err, result) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                        res.render("course_date", { title: "Schedule", menu: "Course Date", success: "Course dates updated" });
                    }
                })
            }
        }
        else {
            console.log(result);
            res.render("course_date", { title: "Schedule", menu: "Course Date", success: "Course dates added!" });
        }
    })
}
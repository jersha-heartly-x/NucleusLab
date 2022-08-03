const db = require("../db");

exports.add_date = (req, res)=>{
    const q = `INSERT INTO course_dates values('${req.body.year}', '${req.body.class}', '${req.body.semester}', '${req.body.start_date}', '${req.body.end_date}');`;
    db.query(q, (err, res)=>{
        if(err){
            console.log(err);
        }
        console.log(res);
    })
    res.render("course_date", {title: "Schedule", menu: "Course Date"});
}
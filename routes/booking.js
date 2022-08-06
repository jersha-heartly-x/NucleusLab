var db = require('../db');

exports.toBook = function(req, res) {
    
    const q = `SELECT academic_year, semester from course_dates where '${new Date().toISOString().slice(0, 10)}' BETWEEN start_date and end_date;`;
    db.query(q, (err, result)=>{
        if(err){
            console.log(err);
        }
        // console.log(result);
        res.render("to_book", {title: "Lab Booking", menu: "To Book", defaultOptions :result[0]});
    })

}
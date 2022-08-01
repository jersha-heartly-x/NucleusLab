const con = require('../db');

exports.registerComplaint = function(req, res) {
    const lab = req.body.lab,
        row = req.body.row,
        col = req.body.col,
        sys = req.body.system,
        desc = req.body.desc,
        dateTime = new Date().toLocaleString();
    
    var sql = `INSERT INTO complaints VALUES ("C3391", "${lab}", "${row}", "${col}", "${sys}", "${desc}", "${dateTime}");`;

    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log('Record inserted');
    });

    res.redirect("/register_complaint");
}

exports.viewComplaints = function(req, res) {
    const empId = "C3391";

    var sql = `SELECT * FROM complaints WHERE staffId = "${empId}";`;

    con.query(sql, function(err, result) {
        if (err) throw err;
        // console.log(result);
        res.render("view_complaints", {title: "Complaints" , menu: "View Complaints", complaints: result});
    });
}
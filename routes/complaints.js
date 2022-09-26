const { request } = require('express');
const con = require('../db');

exports.registerComplaint = function(req, res) {
    const lab = req.body.lab,
        row = req.body.row,
        col = req.body.col,
        sys = req.body.system,
        desc = req.body.desc,
        dateTime = new Date(new Date().getTime()+330*60*1000).toISOString().slice(0, 19).replace('T', ' ');
    
    // console.log(dateTime);

    var sql = `INSERT INTO complaints VALUES ("C3391", "${lab}", "${row}", "${col}", "${sys}", "${desc}", "${dateTime}");`;

    con.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Record inserted');
        }
    });

    res.redirect("/register-complaint");
}

exports.viewComplaints = function(req, res) {
    const empId = "C3391";

    var sql = `SELECT * FROM complaints WHERE staffId = "${empId}";`;

    con.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result);
        else {
            res.render("view_complaints", {title: "Complaints" , menu: "View Complaints", complaints: result, role: res.locals.role});
        }
    });
}

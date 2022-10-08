const db = require("../db");

exports.wifi = (req, res) => {

    const rollNo = res.locals.userDetails.id;

    const q = `SELECT * FROM wifi WHERE rollNo = "${rollNo}"`;

    db.query(q, (err, result)=>{
        if(err) {
            console.log(err);
        }
        else {
            let mac = "";
            if(result.length != 0)
                mac = result[0].mac;
            res.render("wifi", { title: "WiFi", menu: "", mac: mac});
        }
    })
}

exports.postWifi = (req, res) => {

    const rollNo = res.locals.userDetails.id, 
        name = res.locals.userDetails.firstName, 
        mobile = res.locals.userDetails.mobileNo;

    const mac = req.body.mac, 
        model = req.body.model;

    const q = `SELECT * FROM wifi WHERE rollNo = "${rollNo}"`;

    let sql;

    db.query(q, (err, result)=>{
        if(err) {
            console.log(err);
        }
        else {

            if(result.length === 0 ) {
                
                sql = `INSERT INTO wifi VALUES ("${rollNo}", "${name}", "${mac}", "${model}", "new", "${mobile}", "Pending", "NOT VERIFIED", "Inactive") `;
                db.query(sql, (err, result) => {
                    if(err) {
                        console.log(err);
                    }
                    else {
                        res.render("wifi", { title: "WiFi", menu: "", success: "Request successful! Visit VSK Sir!"});
                    }
                })
            }
            else {
                sql = `UPDATE wifi SET mac = "${mac}", model = "${model}", _type = "modified", routerName = "Pending", verify = "NOT VERIFIED", _status = "Inactive" WHERE rollNo = "${rollNo}"`;
                db.query(sql, (err, result) => {
                    if(err) {
                        console.log(err);
                    }
                    else {
                        res.render("wifi", { title: "WiFi", menu: "", success: "Request successful! Visit VSK Sir!"});
                    }
                })
            }
        }
    })
}

exports.getWifi = (req, res) => {

    const rollNo = res.locals.userDetails.id;

    const q = `SELECT * FROM wifi WHERE rollNo = "${rollNo}" AND verify="VERIFIED"`;

    db.query(q, (err, result)=>{
        if(err) {
            console.log(err);
        }
        else {
            res.render("view_wifi", {title: "View WiFi", menu: "", details: result[0] });
        }
    })

}

exports.macRequest = (req, res) => {

    const q = `SELECT * FROM wifi WHERE verify = "NOT VERIFIED"`;

    db.query(q, (err, result)=>{
        if(err) {
            console.log(err);
        }
        else {
            res.render("mac_request", {title: "WiFi", menu: "MAC Request", requests: result});
        }
    })
}

exports.verifyMAC = (req, res) => {
    
    const rollNo = req.body.rno;

    let verify = req.body.submit ? "VERIFIED" : "REJECTED";

    const q = `UPDATE wifi SET verify="${verify}" WHERE rollNo="${rollNo}"`;

    db.query(q, (err, result)=>{
        if(err) {
            console.log(err);
        }
        else {
            res.redirect("/mac-request");
        }
    })
}

exports.userList = (req, res) => {

    const sql = `SELECT * FROM wifi WHERE _status="Live"`;

    db.query(sql, (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.render("view_users", {title: "WiFi", menu: "View Users", users: result, filter: "All", acyear: "All", course: "All" });
        }
    })

}

exports.filter_requests = (req, res) => {

    const device = req.body.device,
        year = req.body.year,
        acyear = year.substring(2, 4),
        course = req.body.course;

    let sql;

    if(device && year && course)
        sql = `SELECT * FROM wifi WHERE routerName = "${device}" AND SUBSTRING(rollNo, 3, 2) = "${course}" AND SUBSTRING(rollNo, 1, 2) = "${acyear}"`;
    else
        res.redirect("/view-users");

    db.query(sql, (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.render("view_users", {title: "WiFi", menu: "View Users", users: result, filter: device, acyear: year, course: course});
        }
    })
}
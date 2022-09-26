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

    const rollNo = res.locals.userDetails.id, name = res.locals.userDetails.firstName+" "+res.locals.userDetails.lastName;

    const mac = req.body.mac, 
        model = req.body.model,
        dateTime = new Date(new Date().getTime()+330*60*1000).toISOString().slice(0, 19).replace('T', ' ');

    const q = `SELECT * FROM wifi WHERE rollNo = "${rollNo}"`;

    let sql;

    db.query(q, (err, result)=>{
        if(err) {
            console.log(err);
        }
        else {
            let status = "Inactive";

            if(result.length === 0 ) {
                
                sql = `INSERT INTO wifi VALUES ("${rollNo}", "${name}", "${mac}", "${model}", "${dateTime}", "${status}") `;
                db.query(sql, (err, result) => {
                    if(err) {
                        console.log(err);
                    }
                    else {
                        res.redirect("/view-wifi");
                    }
                })
            }
            else {
                sql = `UPDATE wifi SET mac = "${mac}", model = "${model}", date_timeReq = "${dateTime}", _status = "${status}" WHERE rollNo = "${rollNo}"`;
                db.query(sql, (err, result) => {
                    if(err) {
                        console.log(err);
                    }
                    else {
                        res.redirect("/view-wifi");
                    }
                })
            }
        }
    })
}

exports.getWifi = (req, res) => {

    const rollNo = res.locals.userDetails.id;

    const q = `SELECT * FROM wifi WHERE rollNo = "${rollNo}"`;

    db.query(q, (err, result)=>{
        if(err) {
            console.log(err);
        }
        else {
            res.render("view_wifi", {title: "View WiFi", menu: "", details: result[0] });
        }
    })

}


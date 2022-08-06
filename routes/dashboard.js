const db = require("../db");

exports.dashboard = (req, res)=>{
    const staffid = "C3391";
    const q = `select class, dateneeded, fromperiod, toperiod, _status from login_requests where staffid="${staffid}" and daterequested > "${new Date(new Date().getTime() -2*24*60*60*1000).toISOString().slice(0, 10)}" order by dateneeded;`;

    db.query(q, (err, result)=>{
        if(err){
            throw err;
        }
        res.render("dashboard", {title: "Dashboard", menu: "", login_requests: result});
    })
}
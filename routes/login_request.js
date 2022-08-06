const db = require("../db");

exports.make_request = (req, res)=>{
    const staffid= "C3391",
    _class = (req.body.year.slice(2) + req.body.programme),
    dateRequested = new Date(new Date().getTime()+ 330*60*1000).toISOString().slice(0, 19).replace('T', ' '),
    dateNeeded = req.body.date,
    from = req.body.from,
    to= req.body.to,
    type= req.body.type,
    noOfLogins = req.body.noOfLogins,
    tools = req.body.tools;

    q = `insert into login_requests values("${staffid}", "${_class}", "${dateRequested}", "${dateNeeded}", ${from}, ${to}, "${type}", ${noOfLogins}, "${tools}", "", "Pending");`;
    db.query(q, (err, res)=>{
        if(err) {
            console.log(err);
        } 
        else {
            console.log(res);
        }
    })

    res.redirect("/view_login_request");
};

exports.view_request = (req, res)=>{
    const staffid= "C3391";
    const date = new Date().toISOString().slice(0, 10);
    const q = `select * from login_requests where staffid = "${staffid}" and dateneeded > "${date}" order by daterequested;`;

    db.query(q, (err, result)=>{
        if(err) {
            console.log(err);
        }
        else {
            res.render("view_login_request", {title: "Login Request" , menu: "View Requests", requests: result});
        }
    })
}
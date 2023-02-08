const db = require("../db");

exports.make_request = (req, res)=>{
    const staffid = res.locals.userDetails.id,
    staffname = res.locals.userDetails.firstName + " " + res.locals.userDetails.lastName,
    staffemail = res.locals.userDetails.email,
    _class = (req.body.year.slice(2) + req.body.programme),
    dateRequested = new Date(new Date().getTime()+ 330*60*1000).toISOString().slice(0, 19).replace('T', ' '),
    dateNeeded = req.body.date,
    from = req.body.from,
    to= req.body.to,
    type= req.body.type,
    noOfLogins = req.body.noOfLogins,
    tools = req.body.tools;

    q = `insert into login_requests (staffid ,staffname, staffemail, class,daterequested,dateneeded,fromperiod,toperiod,_type,nooflogins,tools,series,_status) values("${staffid}", "${staffname}", "${staffemail}", "${_class}", "${dateRequested}", "${dateNeeded}", ${from}, ${to}, "${type}", ${noOfLogins}, "${tools}", "", "Pending");`;
    db.query(q, (err, res)=>{
        if(err) {
            console.log(err);
        } 
        else {
            console.log(res);
        }
    })

    res.redirect("/view-login-request");
};

exports.view_request = (req, res)=>{
    const staffid = res.locals.userDetails.id;
    const date = new Date().toISOString().slice(0, 10);
    var q, filter = "";

    if(res.locals.role === "teacher")
        q = `select * from login_requests where staffid = "${staffid}" order by daterequested desc;`;
    else {
        q = `select * from login_requests order by daterequested desc;`;
        filter = "All"
    }

    db.query(q, (err, result)=>{
        if(err) {
            console.log(err);
        }
        else {
            res.render("view_login_request", {title: "Login Request" , menu: "View Requests", requests: result, filter: filter});
        }
    })
}


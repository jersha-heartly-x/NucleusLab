const db = require("../db");

exports.examLogin = (req, res)=>{
    let q = `select * from login_requests order by daterequested desc`;

    db.query(q, (err, result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.render("exam_login_admin", {title: "Exam Login" , menu: "", filter: "All", date: "", requests: result});
        }
    })
}

exports.update = (req, res)=>{
    // console.log(req.body);
    if(req.body.hasOwnProperty("reject")){
        let q = `UPDATE login_requests SET _status = 'Rejected' WHERE (requestId = ${req.body["id"]});`;
        db.query(q, (err, result)=>{
            if(err){
                console.log(err);
            }
            else{
                res.redirect("/exam-login");
            }
        })
    }
    else{
        let q=``;
        if(req.body["series"]!=""){
        q = `UPDATE login_requests SET series = "${req.body["series"]}", _status = "Confirmed" WHERE (requestId =  ${req.body["id"]});`;
        }else{
        q = `UPDATE login_requests SET series = "${req.body["series"]}", _status = "Pending" WHERE (requestId =  ${req.body["id"]});`;
        }
        db.query(q, (err, result)=>{
            if(err){
                console.log(err);
            }
            else{
                res.redirect("/exam-login");
            }
        })
    }
}

exports.filter_requests = (req, res) =>{
    //console.log(req.body);
    const filter=req.body["filter_status"];
    const date = req.body["_date"];

    if(date && filter){
        let q="";
        if(filter==="All"){
            q = `select * from login_requests where dateneeded="${date}" order by daterequested desc;`;
        }
        else{
            q = `select * from login_requests where dateneeded="${date}" and _status="${filter}" order by daterequested desc;`;
        }
        db.query(q, (err, result)=>{
            if(err){
                console.log(err);
            }
            else{
                res.render("exam_login_admin", {title: "Exam Login" , menu: "", filter: filter, date: date, requests: result});
            }
        })
    }

    else if(filter){
        if(filter==="All"){
            res.redirect("/exam-login");
        }
        else{
            const q = `select * from login_requests where _status="${filter}" order by daterequested desc;`;
            db.query(q, (err, result)=>{
                if(err){
                    console.log(err);
                }
                else{
                    res.render("exam_login_admin", {title: "Exam Login" , menu: "", filter: filter, date: date, requests: result});
                }
            })
        }
    }
}
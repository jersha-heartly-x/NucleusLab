const db = require("../db");

exports.examLogin = (req, res)=>{
    let q = `select * from login_requests order by daterequested desc`;

    db.query(q, (err, result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.render("exam_login_admin", {title: "Exam Login" , menu: "", requests: result});
        }
    })
}

exports.update = (req, res)=>{
    console.log(req.body);
    if(req.body.hasOwnProperty("reject")){
        let q = `UPDATE login_requests SET _status = 'Rejected' WHERE (requestId = ${req.body["id"]});`;
        db.query(q, (err, result)=>{
            if(err){
                console.log(err);
            }
            else{
                res.redirect("/exam_login");
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
                res.redirect("/exam_login");
            }
        })
    }
}
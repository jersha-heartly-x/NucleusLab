const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var con = mysql.createConnection({
    host: "sql6.freesqldatabase.com",
    user: "sql6508890",
    password: "xVPSvpRjTv",
    database: "sql6508890"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get("/", (req, res) => {
    res.redirect("/dashboard");
})

app.get("/dashboard", (req, res) => {
    res.render("dashboard");
})

app.get("/login_request", (req, res) => {
    res.render("login_request");
})

app.post("/login_request", (req, res) => {
    // console.log(req.body);
    const year = req.body.year,
        programme = req.body.programme,
        date = req.body.date,
        from = req.body.from,
        to = req.body.to,
        type = req.body.type,
        logins = req.body.noOfLogins,
        tools = req.body.tools;

        var sql = `INSERT INTO loginRequests VALUES ("C3391", "${year}", "${programme}", "${date}", "${from}", "${to}", "${type}", "${logins}", "${tools}")`;
    
        con.query(sql, function(err, result) {
            if (err) throw err;
            console.log('Record inserted');
        });
    
        res.redirect("/login_request");
})

app.post("/login_request", (req, res) => {
    console.log(req.body);
    res.send("Request processing");
})

app.get("/regular_schedule", (req, res) => {
    res.render("regular_schedule");
})

app.get("/biometric", (req, res) => {
    res.render("biometric");
})

app.get("/register_complaint", (req, res) => {
    res.render("register_complaint");
})

app.post("/register_complaint", (req, res) => {

    const lab = req.body.lab, 
        row = req.body.row, 
        col = req.body.col, 
        system = req.body.system, 
        desc = req.body.desc,
        dateTime = new Date().toUTCString();
    
    var sql = `INSERT INTO complaints VALUES ("C3391", "${lab}", "${row}", "${col}", "${system}", "${desc}", "${dateTime}")`;
    
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log('Record inserted');
    });

    res.redirect("/register_complaint");

})

app.listen(3000, () => {
    console.log("App running on port 3000");
})





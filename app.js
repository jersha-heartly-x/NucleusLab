const express = require("express");
const bodyParser = require("body-parser");

const schedule = require("./routes/schedule");
const scheduleAdmin = require("./routes/schedule_admin");
const complaint = require("./routes/complaints");

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.redirect("/dashboard");
})

app.get("/dashboard", (req, res) => {
    res.render("dashboard");
})

app.get("/login_request", (req, res) => {
    res.render("login_request");
})

app.get("/regular_schedule", schedule.regularSchedule);

app.get("/add_regular_schedule", (req, res) => {
    res.render("add_regular_schedule");
})

app.get("/biometric", (req, res) => {
    res.render("biometric");
})

app.get("/register_complaint", (req, res) => {
    res.render("register_complaint");
})

app.post("/register_complaint", complaint.registerComplaint)

app.get("/view_complaints", complaint.viewComplaints)

app.get("/view_booking", (req, res) => {
    res.render("view_booking");
})

app.get("/to_book", (req, res) => {
    res.render("to_book");
})

app.get("/check_available", (req, res) => {
    res.render("check_available");
})

app.post("/check_available", schedule.checkAvailability)

app.get("/add_regular_schedule", (req, res) => {
    res.render("add_regular_schedule");
})

app.post("/add_regular_schedule", scheduleAdmin.addSchedule);

app.get("/cancel_booking", (req, res) => {
    res.render("cancel_booking");
})

app.listen(3000, () => {
    console.log("App running on port 3000");
})










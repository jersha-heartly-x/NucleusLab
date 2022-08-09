const express = require("express");
const bodyParser = require("body-parser");

const schedule = require("./routes/schedule");
const login_request = require("./routes/login_request");
const dashboard = require("./routes/dashboard");
const course_date = require("./routes/course_date");
const scheduleAdmin = require("./routes/schedule_admin");
const complaint = require("./routes/complaints");
const booking = require("./routes/booking");
const blocking = require("./routes/blocking");

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.redirect("/dashboard");
})

app.get("/dashboard", dashboard.dashboard);

app.get("/login_request", (req, res) => {
    res.render("login_request", {title: "Login Request", menu: "Create Request"});
})

app.get("/view_login_request", login_request.view_request);

app.get("/regular_schedule", schedule.regularSchedule);

app.get("/biometric", (req, res) => {
    res.render("biometric", {title: "Biometric", menu: ""});
})

app.get("/register_complaint", (req, res) => {
    res.render("register_complaint", {title: "Complaints", menu: "Register Complaints"});
})

app.post("/register_complaint", complaint.registerComplaint)

app.get("/view_complaints", complaint.viewComplaints)

app.get("/view_booking", booking.view_booking);

app.get("/to_book", (req, res) => {
    res.render("to_book", {title: "Lab Booking", menu: "To Book"});
})

app.post("/to_book", booking.booking);

app.get("/check_available", (req, res) => {
    res.render("check_available", {title: "Lab Booking", menu: "Check Availability"});
})

app.post("/login_request", login_request.make_request);

app.post("/check_available", schedule.checkAvailability);

app.post("/add_date", course_date.add_date);

app.get("/cancel_booking", (req, res) => {
    res.render("cancel_booking", {title: "Lab Booking", menu: "Cancel Booking"});
})






app.get("/dashboard_admin", (req, res) => {
    res.render("dashboard_admin", {title: "Admin", menu: ""});
})

app.get("/add_regular_schedule", schedule.add_schedule);
app.post("/add_regular_schedule", scheduleAdmin.addSchedule);

app.get("/course_date", (req, res) => {
    res.render("course_date", {title: "Schedule", menu: "Course Date"});
})

app.get("/booking_details", (req, res) => {
    res.render("booking_details", {title: "Lab booking", menu: "Booking Details"});
})

app.post("/booking_details", booking.bookingDetails);

app.get("/block_lab", blocking.blockLab);

app.post("/block_lab", blocking.toBlock);

app.get("/unblock_lab", (req, res) => {
    res.render("unblock_lab", {title: "Schedule", menu: "Unblock Lab"});
})




app.listen(3000, () => {
    console.log("App running on port 3000");
})






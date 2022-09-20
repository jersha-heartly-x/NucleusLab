const express    = require("express");
const bodyParser = require("body-parser");
const schedule   = require("./routes/schedule");
const login_request = require("./routes/login_request");
const login_request_admin = require("./routes/login_request_admin");
const dashboard = require("./routes/dashboard");
const course_date = require("./routes/course_date");
const scheduleAdmin = require("./routes/schedule_admin");
const complaint = require("./routes/complaints");
const booking = require("./routes/booking");
const blocking = require("./routes/blocking");
const biometric = require("./routes/biometric");
const getCookie = require("./middlewares/getcookie");


const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.redirect("/dashboard");
})

app.get("/dashboard", getCookie.getCookie, (req, res) => {
    switch(res.locals.role){
        case "admin":
            dashboard.dashboard_admin(req, res);
            break;
        case "teacher":
            dashboard.dashboard(req, res);
            break;
        case "student":
            res.render("dashboard_student", {title: "Student", menu: ""});
            break;
        default:
            res.render("denial");
    }    
})

app.get("/course-date", getCookie.getCookie, (req, res) => {
    if(res.locals.role === "admin")
        res.render("course_date", {title: "Schedule", menu: "Course Date"});
    else
        res.render("denial");
});

app.get("/regular-schedule", getCookie.getCookie, (req, res) => {
    switch(res.locals.role){
        case "admin":
            
        case "teacher":
            schedule.regularSchedule(req, res);
            break;
        default:
            res.render("denial");
    }
});

app.get("/check-availability", getCookie.getCookie, (req, res) => {
    switch(res.locals.role){
        case "admin":
            
        case "teacher":
            res.render("check_available", {title: "Lab Booking", menu: "Check Availability", role: res.locals.role});
            break;
        default:
            res.render("denial");
    }
});


app.get("/biometric", getCookie.getCookie, (req,res) => {
    switch(res.locals.role){
        case "teacher":
            res.render("biometric", {title: "Biometric", menu: ""});
            break;
        case "student":
            res.render("biometric_student", {title: "Biometric", menu: ""});
            break;
        default:
            res.sendStatus(404);
    } 
})

app.post("/biometric", getCookie.getCookie, (req, res)=>{
    switch(res.locals.role){
        case "teacher":
            biometric.biometric(req, res);
            break;
        case "student":
            biometric.biometricStudent(req, res);
            break;
        default:
            res.sendStatus(404);
    } 
});


app.get("/to-book", getCookie.getCookie, (req, res) => {
    switch(res.locals.role){
        case "admin":
            
        case "teacher":
            res.render("to_book", {title: "Lab Booking", menu: "To Book", role: res.locals.role});
            break;
        default:
            res.sendStatus(404);
    }
});

app.post("/to-book", getCookie.getCookie, (req, res)=>{
    switch(res.locals.role){
        case "admin":
        case "teacher":
            booking.booking(req, res);
            break;
        default:
            res.sendStatus(404);
    } 
});


app.get("/view-booking", getCookie.getCookie, (req, res)=>{
    switch(res.locals.role){
        case "admin":
        case "teacher":
            booking.view_booking(req, res);
            break;
        default:
            res.sendStatus(404);
    } 
});


app.get("/cancel-booking", getCookie.getCookie, (req, res)=>{
    switch(res.locals.role){
        case "admin":
        case "teacher":
            booking.cancelBooking(req, res);
            break;
        default:x
            res.sendStatus(404);
    } 
});

app.post("/cancel-booking", getCookie.getCookie, (req, res)=>{
    switch(res.locals.role){
        case "admin":
        case "teacher":
            booking.toCancel(req, res);
            break;
        default:
            res.sendStatus(404);
    } 
});


app.get("/login-request", getCookie.getCookie, (req, res) => {
    if(res.locals.role==="teacher")
        res.render("login_request", {title: "Login Request", menu: "Create Request"});
    else
        res.sendStatus(404);
});
app.post("/login-request", getCookie.getCookie, (req, res) => {
    if(res.locals.role==="teacher")
        login_request.make_request(req, res);
    else
        res.sendStatus(404);
});

app.get("/view-login-request", getCookie.getCookie, (req, res) => {
    if(res.locals.role==="teacher")
        login_request.view_request(req, res);
    else
        res.sendStatus(404);
});


app.get("/register-complaint", getCookie.getCookie, (req, res) => {
    switch(res.locals.role){
        case "student":
            
        case "teacher":
            res.render("register_complaint", {title: "Complaints", menu: "Register Complaints", role: res.locals.role});
            break;
        default:
            res.sendStatus(404);
    }
})
app.post("/register-complaint", getCookie.getCookie, (req, res) => {
    switch(res.locals.role){
        case "student":
            
        case "teacher":
            complaint.registerComplaint(req, res);
            break;
        default:
            res.sendStatus(404);
    }
} )

app.get("/view-complaints", getCookie.getCookie, (req, res) => {
    switch(res.locals.role){
        case "student":
        case "teacher":
            complaint.viewComplaints(req, res);
            break;
        default:
            res.sendStatus(404);
    }
})


app.get("/add-regular-schedule", getCookie.getCookie, (req, res)=>{
    if(res.locals.role === "admin")
        schedule.add_schedule(req, res);
    else
        res.sendStatus(404);
});
app.post("/add-regular-schedule", getCookie.getCookie, (req, res)=>{
    if(res.locals.role === "admin")
        scheduleAdmin.addSchedule(req, res);
    else
        res.sendStatus(404);
} );



app.get("/course-date", getCookie.getCookie, (req, res)=>{
    if(res.locals.role === "admin")
        res.render("course_date", {title: "Schedule", menu: "Course Date"});
    else
        res.sendStatus(404);
})
app.post("/add-date", getCookie.getCookie, (req, res)=>{
    if(res.locals.role === "admin")
        course_date.add_date(req, res);
    else
        res.sendStatus(404);
});



app.get("/block-lab", getCookie.getCookie, (req, res)=>{
    if(res.locals.role === "admin")
        blocking.blockLab(req, res);
    else
        res.sendStatus(404);
});
app.post("/block-lab", getCookie.getCookie, (req, res)=>{
    if(res.locals.role === "admin")
        blocking.toBlock(req, res);
    else
        res.sendStatus(404);
});


app.get("/unblock-lab", getCookie.getCookie, (req, res)=>{
    if(res.locals.role === "admin")
        blocking.unblockLab(req, res);
    else
        res.sendStatus(404);
});
app.post("/unblock-lab", getCookie.getCookie, (req, res)=>{
    if(res.locals.role === "admin")
        blocking.toUnblock(req, res);
    else
        res.sendStatus(404);
});


app.get("/exam-login", getCookie.getCookie, (req, res)=>{
    if(res.locals.role === "admin")
        login_request_admin.examLogin(req, res);
    else
        res.sendStatus(404);
});
app.post("/update-login-info", getCookie.getCookie, (req, res)=>{
    if(res.locals.role === "admin")
        login_request_admin.update(req, res);
    else
        res.sendStatus(404);
});
app.post("/filter-login-requests", getCookie.getCookie, (req, res)=>{
    if(res.locals.role === "admin")
        login_request_admin.filter_requests(req, res);
    else
        res.sendStatus(404);
});

// completed up until this part 
// PS: please save me... this is torture!  --tam :(  











app.get("/booking_details", (req, res) => {
    res.render("booking_details", {title: "Lab booking", menu: "Booking Details"});
})

app.get("/login_request", (req, res) => {
    res.render("login_request", {title: "Login Request", menu: "Create Request"});
})


app.get("/check_available", (req, res) => {
    res.render("check_available", {title: "Lab Booking", menu: "Check Availability"});
})

app.post("/check_available", schedule.checkAvailability);



app.post("/booking_details", booking.bookingDetails);


app.get("/wifi", (req, res) => {
    res.render("wifi", { title: "Wifi", menu: "" });
})


app.listen(3000, () => {
    console.log("App running on port 3000");
})




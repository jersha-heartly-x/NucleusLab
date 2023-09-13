const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const schedule = require("./routes/schedule");
const login_request = require("./routes/login_request");
const login_request_admin = require("./routes/login_request_admin");
const dashboard = require("./routes/dashboard");
const course_date = require("./routes/course_date");
const complaint = require("./routes/complaints");
const booking = require("./routes/booking");
const blocking = require("./routes/blocking");
const biometric = require("./routes/biometric");
const wifi = require("./routes/wifi");
const addstock = require("./routes/addstock");
const status = require("./routes/status");
const assemble = require("./routes/assemble");
const authorize = require("./routes/authorize");
const dump = require("./routes/dump");
const report = require("./routes/report");
const getCookie = require("./middlewares/getcookie");
const db = require("./db.js");
const app = express();
app.disable("x-powered-by");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect("/dashboard");
});

app.get("/dashboard", getCookie.getCookie, (req, res) => {
  switch (res.locals.role) {
    case "admin":
      dashboard.dashboard_admin(req, res);
      break;
    case "teacher":
      dashboard.dashboard(req, res);
      break;
    case "student":
      res.render("dashboard_student", {
        title: "Dashboard",
        menu: "",
        userDetails: res.locals.userDetails,
        isPR: res.locals.isPR,
      });
      break;
    case "lab_assistant":
      res.render("dashboard_lab", { title: "Dashboard", menu: "" });
      break;
    default:
      res.render("denial");
  }
});

app.get("/course-date", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "admin")
    res.render("course_date", { title: "Schedule", menu: "Course Date" });
  else res.render("denial");
});

app.get("/regular-schedule", getCookie.getCookie, (req, res) => {
  switch (res.locals.role) {
    case "admin":

    case "lab_assistant":

    case "teacher":
      schedule.regularSchedule(req, res);
      break;
    default:
      res.render("denial");
  }
});

app.get("/check-availability", getCookie.getCookie, (req, res) => {
  switch (res.locals.role) {
    case "student":
      if (res.locals.isPR) {
        res.render("check_available", {
          title: "Lab Booking",
          menu: "Check Availability",
          role: res.locals.role,
          isPR: res.locals.isPR,
        });
      } else {
        res.render("denial");
      }
      break;
    case "admin":

    case "lab_assistant":

    case "teacher":
      res.render("check_available", {
        title: "Lab Booking",
        menu: "Check Availability",
        role: res.locals.role,
      });
      break;

    default:
      res.render("denial");
  }
});

app.post("/check-availability", getCookie.getCookie, (req, res) => {
  switch (res.locals.role) {
    case "student":
      if (res.locals.isPR) {
        schedule.checkAvailability(req, res);
      } else {
        res.render("denial");
      }
      break;
    case "admin":

    case "lab_assistant":

    case "teacher":
      schedule.checkAvailability(req, res);
      break;
    default:
      res.render("denial");
  }
});

app.get("/biometric", getCookie.getCookie, (req, res) => {
  switch (res.locals.role) {
    case "admin":
    case "lab_assistant":
    case "teacher":
      res.render("biometric", { title: "Biometric", menu: "" });
      break;
    case "student":
      res.render("biometric_student", { title: "Biometric", menu: "" });
      break;
    default:
      res.render("denial");
  }
});

app.post("/biometric", getCookie.getCookie, (req, res) => {
  switch (res.locals.role) {
    case "admin":
    case "lab_assistant":
    case "teacher":
      biometric.biometric(req, res);
      break;
    case "student":
      biometric.biometricStudent(req, res);
      break;
    default:
      res.render("denial");
  }
});

app.get("/to-book", getCookie.getCookie, (req, res) => {
  switch (res.locals.role) {
    case "student":
      if (res.locals.isPR) {
        res.render("to_book", {
          title: "Lab Booking",
          menu: "To Book",
          role: res.locals.role,
          isPR: res.locals.isPR,
        });
      } else {
        res.render("denial");
      }
      break;
    case "admin":

    case "lab_assistant":

    case "teacher":
      res.render("to_book", {
        title: "Lab Booking",
        menu: "To Book",
        role: res.locals.role,
      });
      break;
    default:
      res.render("denial");
  }
});

app.post("/to-book", getCookie.getCookie, (req, res) => {
  switch (res.locals.role) {
    case "student":
      if (res.locals.isPR) {
        booking.booking(req, res);
      } else {
        res.render("denial");
      }
      break;
    case "admin":

    case "lab_assistant":

    case "teacher":
      booking.booking(req, res);
      break;
    default:
      res.render("denial");
  }
});

app.get("/view-booking", getCookie.getCookie, (req, res) => {
  switch (res.locals.role) {
    case "student":
      if (res.locals.isPR) {
        booking.view_booking(req, res);
      } else {
        res.render("denial");
      }
      break;

    case "admin":

    case "lab_assistant":

    case "teacher":
      booking.view_booking(req, res);
      break;
    default:
      res.render("denial");
  }
});

app.get("/cancel-booking", getCookie.getCookie, (req, res) => {
  switch (res.locals.role) {
    case "student":
      if (res.locals.isPR) {
        booking.cancelBooking(req, res);
      } else {
        res.render("denial");
      }
      break;

    case "admin":

    case "lab_assistant":

    case "teacher":
      booking.cancelBooking(req, res);
      break;
    default:
      res.render("denial");
  }
});

app.post("/cancel-booking", getCookie.getCookie, (req, res) => {
  switch (res.locals.role) {
    case "student":
      if (res.locals.isPR) {
        booking.toCancel(req, res);
      } else {
        res.render("denial");
      }
      break;

    case "admin":

    case "lab_assistant":

    case "teacher":
      booking.toCancel(req, res);
      break;
    default:
      res.render("denial");
  }
});

app.get("/login-request", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "teacher")
    res.render("login_request", {
      title: "Login Request",
      menu: "Create Request",
    });
  else res.render("denial");
});

app.post("/login-request", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "teacher") login_request.make_request(req, res);
  else res.render("denial");
});

app.get("/view-login-request", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "teacher" || res.locals.role === "admin")
    login_request.view_request(req, res);
  else res.render("denial");
});

app.get("/register-complaint", getCookie.getCookie, (req, res) => {
  switch (res.locals.role) {
    case "student":

    case "admin":

    case "lab_assistant":

    case "teacher":
      res.render("register_complaint", {
        title: "Complaints",
        menu: "Register Complaint",
        role: res.locals.role,
      });
      break;
    default:
      res.render("denial");
  }
});

app.post("/register-complaint", getCookie.getCookie, (req, res) => {
  switch (res.locals.role) {
    case "student":

    case "admin":

    case "lab_assistant":

    case "teacher":
      complaint.registerComplaint(req, res);
      break;
    default:
      res.render("denial");
  }
});

app.get("/view-complaints", getCookie.getCookie, (req, res) => {
  switch (res.locals.role) {
    case "student":
    case "admin":
    case "teacher":
      complaint.viewComplaints(req, res);
      break;
    default:
      res.render("denial");
  }
});

app.get("/add-regular-schedule", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "admin") schedule.add_schedule(req, res);
  else res.render("denial");
});

app.post("/add-regular-schedule", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "admin") schedule.addSchedule(req, res);
  else res.render("denial");
});

app.get("/delete-regular-schedule", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "admin") schedule.delete_schedule(req, res);
  else res.render("denial");
});

app.post("/delete-regular-schedule", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "admin") schedule.deleteSchedule(req, res);
  else res.render("denial");
});

app.get("/course-date", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "admin")
    res.render("course_date", { title: "Schedule", menu: "Course Date" });
  else res.render("denial");
});

app.post("/add-date", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "admin") course_date.add_date(req, res);
  else res.render("denial");
});

app.get("/block-lab", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "admin") blocking.blockLab(req, res);
  else res.render("denial");
});

app.post("/block-lab", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "admin") blocking.toBlock(req, res);
  else res.render("denial");
});

app.get("/unblock-lab", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "admin") blocking.unblockLab(req, res);
  else res.render("denial");
});

app.post("/unblock-lab", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "admin") blocking.toUnblock(req, res);
  else res.render("denial");
});

app.get("/exam-login", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "lab_assistant")
    login_request_admin.examLogin(req, res);
  else res.render("denial");
});

app.post("/update-login-info", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "lab_assistant") login_request_admin.update(req, res);
  else res.render("denial");
});

app.post("/filter-login-requests", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "lab_assistant")
    login_request_admin.filter_requests(req, res);
  else res.render("denial");
});

app.post("/filter-complaints", getCookie.getCookie, (req, res) => {
  if (
    res.locals.role === "admin" ||
    res.locals.role === "teacher" ||
    res.locals.role === "student"
  )
    complaint.filter_complaints(req, res);
  else if (res.locals.role === "lab_assistant")
    complaint.filter_complaints_lab_assistant(req, res);
  else res.render("denial");
});

app.get("/wifi", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "student") wifi.wifi(req, res);
  else res.render("denial");
});

app.post("/wifi", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "student") wifi.postWifi(req, res);
  else res.render("denial");
});

app.get("/view-wifi", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "student") wifi.getWifi(req, res);
  else res.render("denial");
});

app.get("/booking-details", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "admin" || res.locals.role === "lab_assistant")
    res.render("booking_details", {
      title: "Lab Booking",
      menu: "Booking Details",
    });
  else res.render("denial");
});

app.post("/booking-details", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "admin" || res.locals.role === "lab_assistant")
    booking.bookingDetails(req, res);
  else res.render("denial");
});

app.get("/mac-request", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "admin") wifi.macRequest(req, res);
  else res.render("denial");
});

app.post("/verify-mac-request", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "admin") wifi.verifyMAC(req, res);
  else res.render("denial");
});

app.get("/view-users", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "admin" || res.locals.role === "lab_assistant")
    wifi.userList(req, res);
  else res.render("denial");
});

app.post("/filter-users", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "admin" || res.locals.role === "lab_assistant")
    wifi.filter_requests(req, res);
  else res.render("denial");
});

app.get("/wifi-requests", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "lab_assistant") wifi.getWifiLab(req, res);
  else res.render("denial");
});

app.post("/wifi-requests", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "lab_assistant") wifi.updateRouter(req, res);
  else res.render("denial");
});

app.get("/resolve-complaints", getCookie.getCookie, (req, res) => {
  if (res.locals.role == "lab_assistant")
    complaint.viewComplaintsResolve(req, res);
  else res.render("denial");
});

app.post("/resolve-complaints", getCookie.getCookie, (req, res) => {
  if (res.locals.role == "lab_assistant") complaint.resolveComplaints(req, res);
  else res.render("denial");
});

app.get("/addstock", getCookie.getCookie, (req, res) => {
  switch (res.locals.role) {
    case "lab_assistant":
      db.query("SELECT DISTINCT devicetype FROM device", (err, result) => {
        if (err) {
          console.log(err);
        } else {
          const deviceTypes = [];
          for (let i = 0; i < result.length; i++) {
            deviceTypes.push(result[i].devicetype);
          }
          res.render("addstock", {
            title: "Add Stock",
            devices: deviceTypes,
            role: res.locals.role,
            isPR: res.locals.isPR,
          });
        }
      });

      break;
    default:
      res.render("denial");
  }
});

app.post("/addstock", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "lab_assistant") {
    addstock.addstock(req, res);
  } else {
    res.render("denial");
  }
});

app.post("/addstock", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "lab_assistant") {
    addstock.displayDevice(req, res);
  } else {
    res.render("denial");
  }
});

app.post("/add_device", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "lab_assistant") {
    addstock.addDevice(req, res);
  } else {
    res.render("denial");
  }
});

app.get("/addcomputer", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "lab_assistant")
    res.render("addcomputer", {
      title: "Add Computer",
      menu: "Add computer",
    });
  else res.render("denial");
});

app.post("/addcomputer", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "lab_assistant") {
    addstock.addcomputer(req, res);
  } else {
    res.render("denial");
  }
});

app.get("/auth", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "admin") authorize.auth(req, res);
  else res.render("denial");
});

app.post("/auth", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "admin") authorize.auth(req, res);
  else res.render("denial");
});

app.post("/verify-stock", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "admin") authorize.authorizeStock(req, res);
  else res.render("denial");
});

app.get("/authorize_dump", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "admin") authorize.authorize_dump(req, res);
  else res.render("denial");
});

app.post("/authorize_dump", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "admin") authorize.authorize_dump(req, res);
  else res.render("denial");
});

app.post("/verify-dump", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "admin") authorize.authorize_dumpList(req, res);
  else res.render("denial");
});

app.get("/status", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "lab_assistant")
    res.render("status", {
      title: "Update Status",
      menu: "Update Status",
    });
  else res.render("denial");
});

app.post("/status", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "lab_assistant") {
    status.status(req, res);
  } else {
    res.render("denial");
  }
});

app.get("/location", getCookie.getCookie, (req, res) => {
  switch (res.locals.role) {
    case "lab_assistant":
      status.getLocationDropdown((err, locationDropdown) => {
        if (err) {
          console.log(err);
          res.render("error", { errorMessage: "An error occurred" });
        } else {
          res.render("location", {
            location: locationDropdown,
            title: "Location",
            menu: "Location",
          });
        }
      });
      break;
    default:
      res.render("denial");
  }
});

app.get("/assemble", getCookie.getCookie, (req, res) => {
  switch (res.locals.role) {
    case "lab_assistant":
      status.getLocationDropdown((err, locationDropdown) => {
        if (err) {
          console.log(err);
          res.render("error", { errorMessage: "An error occurred" });
        } else {
          res.render("assemble", {
            title: "Assemble Computer",
            menu: "",
            location: locationDropdown,
          });
        }
      });
      break;
    default:
      res.render("denial");
  }
});

app.post("/assemble", getCookie.getCookie, (req, res) => {
  switch (res.locals.role) {
    case "lab_assistant":
      assemble.assemble(req, res);
      break;
    default:
      res.render("denial");
  }
});

app.get("/location", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "lab_assistant")
    res.render("location", {
      title: "Location",
      menu: "Location",
      location: labLoc,
    });
  else res.render("denial");
});

app.post("/location", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "lab_assistant") {
    status.location(req, res);
  } else {
    res.render("denial");
  }
});

app.post("/add-location", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "lab_assistant") {
    status.addLocation(req, res);
  } else {
    res.render("denial");
  }
});

app.get("/dump", getCookie.getCookie, (req, res) => {
  switch (res.locals.role) {
    case "lab_assistant":
      res.render("dump", { title: "Dump", menu: "" });
      break;
    default:
      res.render("denial");
  }
});

app.post("/dump", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "lab_assistant") {
    dump.dump(req, res);
  } else {
    res.render("denial");
  }
});

app.get("/report", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "lab_assistant" || res.locals.role === "admin") {
    status.getLocationDropdown((err, locationDropdown) => {
      if (err) {
        console.log(err);
        res.render("error", { errorMessage: "An error occurred" });
      } else {
        res.render("report", {
          title: "Report",
          menu: "Report",
          filter: req.query.reportBy || "All",
          status: req.query.status || "All",
          location: req.query.location || "All",
          locationDropdown: locationDropdown,
          location: locationDropdown,
          stock: [],
          locationDropdowns: locationDropdown,
        });
      }
    });
  } else {
    res.render("denial");
  }
});

app.post("/report", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "admin" || res.locals.role === "lab_assistant") {
    report.filterRequest(req, res);
  } else {
    res.render("denial");
  }
});

app.post("/download", getCookie.getCookie, (req, res) => {
  if (res.locals.role === "admin" || res.locals.role === "lab_assistant") {
    report.downloadReport(req, res);
  } else {
    res.render("denial");
  }
});

app.get("*", (req, res) => {
  res.render("denial");
});

app.listen(8017, () => {
  console.log("App running on port 8017");
});

const con = require("../db");
const db = require("../db");

exports.dashboard = (req, res) => {
  const staffid = res.locals.userDetails.id;

  let q = `select * from booking where staffId="${staffid}" and entryDate >="${new Date(new Date().getTime() + 330 * 60 * 1000 - 3 * 24 * 3600 * 1000).toISOString().slice(0, 10)}" order by bookingDate limit 4; `;

  db.query(q, (err, bookings) => {
    if (err) {
      console.log(err);
    } else {
      q = `select class, dateneeded, fromperiod, toperiod, _status from login_requests where staffid="${staffid}" and daterequested > "${new Date(
        new Date().getTime() - 3 * 24 * 60 * 60 * 1000
      )
        .toISOString()
        .slice(0, 10)}" order by dateneeded;`;

      db.query(q, (err, logins) => {
        if (err) {
          console.log(err);
        } else {
          res.render("dashboard", {
            title: "Dashboard",
            menu: "",
            login_requests: logins,
            bookings: bookings,
            userDetails: res.locals.userDetails
          });
        }
      });

    }

  });
};

exports.dashboard_admin = (req, res) => {
  const staffid = "admin";

  let q = `select * from booking where staffId="${staffid}" and entryDate >="${new Date(new Date().getTime() + 330 * 60 * 1000 - 4 * 24 * 3600 * 1000).toISOString().slice(0, 10)}" order by bookingDate; `;

  db.query(q, (err, your_bookings) => {
    if (err) {
      console.log(err);
    } else {
      q = `select class, dateneeded, fromperiod, toperiod, _status from login_requests where _status="Pending" order by dateneeded;`;

      db.query(q, (err, logins) => {
        if (err) {
          console.log(err);
        } else {
          q = `select * from booking where entryDate >="${new Date(new Date().getTime() + 330 * 60 * 1000 - 4 * 24 * 3600 * 1000).toISOString().slice(0, 10)}" order by bookingDate; `;
          db.query(q, (err, all_bookings) => {
            if (err) {
              console.log(err);
            }
            else {
              res.render("dashboard_admin", {
                title: "Dashboard",
                menu: "",
                login_requests: logins,
                your_bookings: your_bookings,
                all_bookings: all_bookings
              })
            }
          })
        }
      }
      );
    }
  });
};
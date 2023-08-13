const db = require("../db");

exports.status = function(req, res) {
  const serialno = req.body["serialno"].toUpperCase();
  const status = req.body["deviceStatus"];
  const checkQuery = `SELECT COUNT(*) AS count FROM device_master WHERE serialno = "${serialno}"`;

  db.query(checkQuery, (checkErr, checkResult) => {
    if (checkErr) {
      console.log(checkErr);
    } else {
      const count = checkResult[0].count;
      if (count === 0) {
        console.log("Serialno not found in device_master table");
        res.render("status", {
          title: "Update Status",
          menu: "Update Status",
          alert: "Serial Number Not Found",
        });
      } else {
        const updateQuery = `UPDATE device_master SET status = "${status}" WHERE serialno = "${serialno}"`;
        db.query(updateQuery, (updateErr, updateResult) => {
          if (updateErr) {
            console.log(updateErr);
            res.render("status", {
              title: "Update Status",
              menu: "Update Status",
              alert: "Failed to update status",
            });
          } else {
            console.log("Updated status successfully");
            res.render("status", {
              title: "Update Status",
              menu: "Update Status",
              success: "Status Updated Successfully!",
            });
          }
        });
      }
    }
  });
};


exports.getLocationDropdown = function(callback) {
  db.query("SELECT DISTINCT lab FROM location", (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      const labLoc = [];
      for (let i = 0; i < result.length; i++) {
        labLoc.push(result[i].lab);
      }
      callback(null, labLoc);
    }
  });
};

exports.location = function(req, res) {
  const serialno = req.body["serialno"].toUpperCase();
  const location = req.body["location"];
  const checkQuery = `SELECT COUNT(*) AS count FROM device_master WHERE serialno = "${serialno}"`;
  const locationDropdownQuery = `SELECT DISTINCT lab FROM location`;

  console.log("Received Serial Number:", serialno);
  console.log("Received Location:", location);
    db.query(locationDropdownQuery, (err, locations) => {
    if (err) {
      console.log(err);
      res.render("location", {
        title: "Location",
        menu: "Location",
        alert: "An error occurred while fetching locations. Please try again later.",
        location: [], // Add an empty array as the default value
      });
    } else {
      const locationDropdown = locations
        .map((item) => item.lab)
        .filter((lab) => lab && lab.trim() !== ''); // Filter out empty and null values

      db.query(checkQuery, (checkErr, checkResult) => {
        if (checkErr) {
          console.log(checkErr);
        } else {
          const count = checkResult[0].count;
          if (count === 0) {
            console.log("Serialno not found in device_master table");
            res.render("location", {
              title: "Location",
              menu: "Location",
              alert: "Serial Number Not Found",
              location: locationDropdown,
            });
          } else { 
            const updateQuery = `UPDATE device_master SET location = "${location}" WHERE serialno = "${serialno}"`;
            db.query(updateQuery, (updateErr, updateResult) => {
              if (updateErr) {
                console.log(updateErr);
              } else {
                console.log("Updated location successfully");
                res.render("location", {
                  title: "Location",
                  menu: "Location",
                  success: "Location Updated Successfully!",
                  location: locationDropdown,
                });
              }
            });
          }
        }
      });
    }
  });
};


exports.addLocation = function(req, res) {
  const lab = req.body.newlocation.toUpperCase(); // Convert device name to lowercase
  const q = `SELECT * FROM location WHERE UPPER(lab) = ?`; // Query to check if device already exists

  db.query(q, [lab], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.length > 0) {
        console.log("Lab already exists");
        res.redirect("/location");

      } else {
        const insertQuery = `INSERT INTO location (lab) VALUES (?)`;
        db.query(insertQuery, [lab], (insertErr, insertResult) => {
          if (insertErr) {
            console.log(insertErr);
          } else {
            console.log("Inserted successfully");
            res.redirect("/location");
          }
        });
      }
    }
  });
};


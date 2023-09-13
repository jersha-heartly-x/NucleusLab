const db = require("../db");

exports.status = function(req, res) {
  const serialno = req.body["serialno"].toUpperCase();
  const status = req.body["deviceStatus"];
  const checkQuery = `SELECT COUNT(*) AS count FROM device_master WHERE serialno = "${serialno}"`;
  db.query(checkQuery, (checkErr, checkResult) => {
    if (checkErr) {
      console.log(checkErr);
      res.render("status", {
        title: "Update Status",
        menu: "Update Status",
        alert: "Error occurred while checking the serial number",
      });
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
            
            const computerCheckQuery = `
              SELECT COUNT(*) AS compCount
              FROM computer_master
              WHERE monitorsno = "${serialno}"
                OR mousesno = "${serialno}"
                OR keyboardsno = "${serialno}"
                OR cpusno = "${serialno}"
            `;

            db.query(computerCheckQuery, (compCheckErr, compCheckResult) => {
              if (compCheckErr) {
                console.log(compCheckErr);
                res.render("status", {
                  title: "Update Status",
                  menu: "Update Status",
                  alert: "Error occurred while checking computer_master",
                });
              } else {
                const compCount = compCheckResult[0].compCount;
                if (compCount > 0) {
                  const deleteQuery = `
                    UPDATE computer_master 
                    SET 
                        mousesno = CASE WHEN mousesno = "${serialno}" THEN NULL ELSE mousesno END,
                        keyboardsno = CASE WHEN keyboardsno = "${serialno}" THEN NULL ELSE keyboardsno END,
                        monitorsno = CASE WHEN monitorsno = "${serialno}" THEN NULL ELSE monitorsno END,
                        cpusno = CASE WHEN cpusno = "${serialno}" THEN NULL ELSE cpusno END
                    WHERE 
                        monitorsno = "${serialno}"
                        OR mousesno = "${serialno}"
                        OR keyboardsno = "${serialno}"
                        OR cpusno = "${serialno}"
                  `;

                  db.query(deleteQuery, (deleteErr, deleteResult) => {
                    if (deleteErr) {
                      console.log(deleteErr);
                      res.render("status", {
                        title: "Update Status",
                        menu: "Update Status",
                        alert: "Failed to update computer_master",
                      });
                    } else {
                      console.log("Updated computer_master successfully");
                      res.render("status", {
                        title: "Update Status",
                        menu: "Update Status",
                        success: "Status Updated",
                      });
                    }
                  });
                } else {
                  res.render("status", {
                    title: "Update Status",
                    menu: "Update Status",
                    success: "Status Updated Successfully!",
                  });
                }
              }
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
        location: [],
      });
    } else {
      const locationDropdown = locations
        .map((item) => item.lab)
        .filter((lab) => lab && lab.trim() !== ''); 

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
  const lab = req.body.newlocation.toUpperCase(); 
  const q = `SELECT * FROM location WHERE UPPER(lab) = ?`; 

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


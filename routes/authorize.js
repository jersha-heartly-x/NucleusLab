const db = require("../db");

exports.auth = (req, res) => {
  const q = `SELECT * FROM device_master WHERE verify = "not verified"`;

  db.query(q, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render("auth", {
        title: "Authorize Stock",
        menu: "Authorize Stock",
        stock: result,
      });
    }
  });
};
exports.authorizeStock = (req, res) => {
  const q = `UPDATE device_master SET verify = "verified" WHERE  verify = "not verified"`;

  db.query(q, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Stock verification updated successfully");
      res.redirect("/auth");
    }
  });
};

exports.authorize_dump = (req, res) => {
  const q = `SELECT d.*, dm.devicetype FROM dump AS d
    LEFT JOIN device_master AS dm ON d.serialno = dm.serialno
    WHERE d.verify = "not verified"`;
  db.query(q, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render("authorize_dump", {
        title: "Authorize Dump",
        menu: "Authorize Dump",
        dump: result,
      });
    }
  });
};
exports.authorize_dumpList = (req, res) => {
  const updateDumpQ = `UPDATE dump SET verify = "verified" WHERE verify = "not verified"`;

  db.query(updateDumpQ, (err, dumpResult) => {
    if (err) {
      console.log(err);
    } else {
      const updateDeviceQ = `UPDATE device_master SET location = "Dump" WHERE serialno IN (SELECT serialno FROM dump WHERE verify = "verified")`;

      db.query(updateDeviceQ, (err, deviceResult) => {
        if (err) {
          console.log(err);
        } else {
          const deleteComputerQ = `
          UPDATE computer_master 
          SET 
              mousesno = CASE WHEN mousesno IN (SELECT serialno FROM dump WHERE verify = "verified") THEN NULL ELSE mousesno END,
              keyboardsno = CASE WHEN keyboardsno IN (SELECT serialno FROM dump WHERE verify = "verified") THEN NULL ELSE keyboardsno END,
              monitorsno = CASE WHEN monitorsno IN (SELECT serialno FROM dump WHERE verify = "verified") THEN NULL ELSE monitorsno END,
              cpusno = CASE WHEN cpusno IN (SELECT serialno FROM dump WHERE verify = "verified") THEN NULL ELSE cpusno END
          WHERE 
              mousesno IN (SELECT serialno FROM dump WHERE verify = "verified")
              OR keyboardsno IN (SELECT serialno FROM dump WHERE verify = "verified")
              OR monitorsno IN (SELECT serialno FROM dump WHERE verify = "verified")
              OR cpusno IN (SELECT serialno FROM dump WHERE verify = "verified")
      `;

          db.query(deleteComputerQ, (err, computerResult) => {
            if (err) {
              console.log(err);
            } else {
              res.redirect("/authorize_dump");
            }
          });
        }
      });
    }
  });
};

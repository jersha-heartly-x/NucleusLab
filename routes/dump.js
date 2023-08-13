const db = require("../db");

exports.dump = (req, res) => {
  const serialNos = Array.isArray(req.body["serialno"]) ? req.body["serialno"] : [req.body["serialno"]];
  const dumpDate = req.body["fdate"];

  const successSerialNos = []; 
  const errorMessages = [];

  const promises = serialNos.map((serialNo, index) => {
    const checkQuery = `SELECT * FROM dump WHERE serialno = "${serialNo}"`;

    return new Promise((resolve, reject) => {
      db.query(checkQuery, (checkErr, checkResult) => {
        if (checkErr) {
          console.log(checkErr);
          reject(checkErr);
        } else if (checkResult.length > 0) {
          const errorMsg = `Serial number ${serialNo} already exists in row ${index + 1}`;
          console.log(errorMsg);
          errorMessages.push(errorMsg);
          resolve();
        } else {
          const insertQuery = `INSERT INTO dump (serialno, disposaldate) VALUES ('${serialNo}', '${dumpDate}')`;
          db.query(insertQuery, (insertErr) => {
            if (insertErr) {
              console.log(`Error inserting serial number ${serialNo}: ${insertErr}`);
              reject(insertErr);
            } else {
              const updateLocationQuery = `UPDATE device_master SET location = 'dump' WHERE serialno = '${serialNo}'`;
              db.query(updateLocationQuery, (updateErr) => {
                if (updateErr) {
                  console.log(`Error updating location for serial number ${serialNo}: ${updateErr}`);
                  reject(updateErr);
                } else {
                  console.log(`Inserted serial number ${serialNo} successfully and updated location`);
                  successSerialNos.push(serialNo);
                  resolve();
                }
              });
            }
          });
        }
      });
    });
  });

  Promise.all(promises)
    .then(() => {
      if (errorMessages.length > 0) {
        const notInsertedSerialNumbers = errorMessages.map((errorMsg) => {
          const match = /Serial number (\S+) already exists in/.exec(errorMsg);
          return match ? match[1] : null;
        });
        const alert = `Serial numbers ${notInsertedSerialNumbers.join(", ")} are already inserted, others inserted successfully`;

        res.render("dump", {
          title: "Dump",
          alert,
          role: res.locals.role,
          isPR: res.locals.isPR,
          errors: errorMessages,
        });
      } else {
        const success = "Serial numbers sent to dump successfully";

        res.render("dump", {
          title: "Dump",
          success,
          role: res.locals.role,
          isPR: res.locals.isPR,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.render("dump", {
        title: "Dump",
        alert: "Insertion unsuccessful",
        errors: ["An error occurred while processing your request. Please try again later."],
      });
    });
};
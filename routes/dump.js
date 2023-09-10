const db = require("../db");

exports.dump = (req, res) => {
  const serialNos = Array.isArray(req.body["serialno"]) ? req.body["serialno"] : [req.body["serialno"]];
  const dumpDate = req.body["fdate"];

  const successSerialNos = [];
  const errorMessages = [];

  const promises = serialNos.map((serialNo, index) => {
    const checkStatusQuery = `SELECT status FROM device_master WHERE serialno = "${serialNo}"`;

    return new Promise((resolve, reject) => {
      db.query(checkStatusQuery, (statusErr, statusResult) => {
        if (statusErr) {
          console.log(statusErr);
          reject(statusErr);
        } else if (statusResult.length === 0) {
          errorMessages.push(errorMsg);
          resolve();
        } else {
          const status = statusResult[0].status;
          if (status === 'Not Working') {
            const insertQuery = `INSERT INTO dump (serialno, disposaldate) VALUES ('${serialNo}', '${dumpDate}')`;
            db.query(insertQuery, (insertErr) => {
              if (insertErr) {
                reject(insertErr);
              } else {
                successSerialNos.push(serialNo);
                resolve();
              }
            });
          } else {
            const errorMsg = `Serial number ${serialNo} has status '${status}' and cannot be sent to dump`;
            errorMessages.push(errorMsg);
            resolve();
          }
        }
      });
    });
  });

  Promise.all(promises)
    .then(() => {
      if (errorMessages.length > 0) {
        const alert = errorMessages.join(", ");
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
      res.render("dump", {
        title: "Dump",
        alert: "Insertion unsuccessful",
        errors: ["An error occurred while processing your request. Please try again later."],
      });
    });
};

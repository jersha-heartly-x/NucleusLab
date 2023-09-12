//js
const db = require("../db");

exports.displayDevice = function(req, res) {
  db.query("SELECT DISTINCT devicetype FROM device", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      const deviceTypes = [];
      for (let i = 0; i < result.length; i++) {
        deviceTypes.push(result[i].devicetype);
      }  
      res.render("addstock", { 
        title: "Add Device", 
        devices: deviceTypes,
        menu: "Add device",
      });
    }
  });
};

exports.addstock = function (req, res) {
  
  const invoiceNo = req.body["Inv_no"];
  const invoiceDate = req.body["fdate"];
  const deviceTypes = Array.isArray(req.body["devicetype"]) ? req.body["devicetype"] : [req.body["devicetype"]];
  const serialNos = Array.isArray(req.body["serial_no"]) ? req.body["serial_no"]: [req.body["serial_no"]];
  const models = Array.isArray(req.body["Model"]) ? req.body["Model"] : [req.body["Model"]];
  const specifications = Array.isArray(req.body["Specification"]) ? req.body["Specification"] : [req.body["Specification"]];

  let errorMessages = [];
  let successSerialNumbers = [];

  Promise.all(
    serialNos.map((serialNo, index) => {
      const deviceType = deviceTypes[index];
      const model = models[index];
      const specification = specifications[index];

      const q = `INSERT INTO device_master (serialno, devicetype, model, specification, invoiceNo, invoiceDate) VALUES ("${serialNo}", "${deviceType}", "${model}", "${specification}", "${invoiceNo}", "${invoiceDate}")`;

      return new Promise((resolve, reject) => {
        const checkQuery = `SELECT * FROM device_master WHERE serialno = "${serialNo}"`;
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
            db.query(q, (inserterr) => {
              if (inserterr) {
                console.log(`Error inserting serial number ${serialNo}: ${inserterr}`);
                reject(inserterr);
              } else {
                console.log(`Inserted serial number ${serialNo} successfully`);
                successSerialNumbers.push(serialNo);
                resolve();
              }
            });
          }
        });
      });
    })
  )
    .then(() => {
      if (errorMessages.length > 0) {
        const notInsertedSerialNumbers = errorMessages.map((errorMsg) => {
          const match = /Serial number (\S+) already exists in/.exec(errorMsg);
          return match ? match[1] : null;
        });
        const alert = `Serial numbers ${notInsertedSerialNumbers.join(", ")} are already inserted, others inserted successfully`;

        res.render("addstock", {
          title: "Add Stock",
          alert,
          devices: deviceTypes,
          role: res.locals.role,
          isPR: res.locals.isPR,
          errors: errorMessages,
        });
      } else {
        // After successful form submission, fetch the latest list of devices from the database
        db.query('SELECT DISTINCT devicetype FROM device', (err, devicesFromDB) => {
          if (err) {
            console.log(err);
            res.render("addstock", {
              title: "Add Stock",
              devices: [], // Pass an empty array in case of an error
              alert: "An error occurred while fetching devices. Please try again later.",
            });
          } else {
            const devices = devicesFromDB.map(device => device.devicetype);
            // Now render the view with the updated list of devices
            res.render("addstock", {
              title: "Add Stock",
              devices: devices, // Pass the updated devices array to the view
              success: "Inserted Successfully!",
              successSerialNumbers,
            });
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.render("addstock", {
        title: "Add Stock",
        devices: deviceTypes,
        alert: "Insertion unsuccessful",
        errors: ["An error occurred while processing your request. Please try again later."],
      });
    });
};

exports.addDevice = function(req, res) {
  const device = req.body.newdevice.toLowerCase(); 
  const q = `SELECT * FROM device WHERE LOWER(devicetype) = ?`; 

  db.query(q, [device], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.length > 0) {
        console.log("Device already exists");
        res.redirect("/addstock");

      } else {
        const insertQuery = `INSERT INTO device (devicetype) VALUES (?)`;

        db.query(insertQuery, [device], (insertErr, insertResult) => {
          if (insertErr) {
            console.log(insertErr);
          } else {
            console.log("Inserted successfully");
            res.redirect("/addstock");
          }
        });
      }
    }
  });
};
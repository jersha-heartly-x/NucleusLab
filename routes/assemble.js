const db = require("../db");

exports.assemble = function(req, res) {
  const systemnoArr = Array.isArray(req.body["systemno"]) ? req.body["systemno"] : [req.body["systemno"]];
  const locationArr = Array.isArray(req.body["location"]) ? req.body["location"] : [req.body["location"]];
  const mousesnoArr = Array.isArray(req.body["mousesno"]) ? req.body["mousesno"] : [req.body["mousesno"]];
  const monitorsnoArr = Array.isArray(req.body["monitorsno"]) ? req.body["monitorsno"] : [req.body["monitorsno"]];
  const cpusnoArr = Array.isArray(req.body["cpusno"]) ? req.body["cpusno"] : [req.body["cpusno"]];
  const keyboardsnoArr = Array.isArray(req.body["keyboardsno"]) ? req.body["keyboardsno"] : [req.body["keyboardsno"]];
  let count = 0;
  const totalRecords = systemnoArr.length;

  for (let i = 0; i < totalRecords; i++) {
    const systemno = systemnoArr[i];
    const location = locationArr[i];
    const mousesno = mousesnoArr[i].toUpperCase();
    const monitorsno = monitorsnoArr[i].toUpperCase();
    const cpusno = cpusnoArr[i].toUpperCase();
    const keyboardsno = keyboardsnoArr[i].toUpperCase();

    const selectQuery = `
      SELECT mousesno, monitorsno, cpusno, keyboardsno
      FROM computer_master
      WHERE systemno = "${systemno}" AND location = "${location}"
    `;
    db.query(selectQuery, (selectErr, selectResult) => {
      if (selectErr) {
        console.log(selectErr);
      } else {
        if (selectResult.length > 0) {
          const existingValues = selectResult[0];
        const updatedMousesno = mousesno || existingValues.mousesno;
        const updatedMonitorsno = monitorsno || existingValues.monitorsno;
        const updatedCpusno = cpusno || existingValues.cpusno;
        const updatedKeyboardsno = keyboardsno || existingValues.keyboardsno;

        const isSingleSerialInput = (
          (existingValues.mousesno === null || existingValues.mousesno === "") &&
          (existingValues.monitorsno === null || existingValues.monitorsno === "") &&
          (existingValues.cpusno === null || existingValues.cpusno === "") &&
          (existingValues.keyboardsno === null || existingValues.keyboardsno === "") &&
          (updatedMousesno !== "" || updatedMonitorsno !== "" || updatedCpusno !== "" || updatedKeyboardsno !== "")
        );

        if (isSingleSerialInput) {
          console.log("Error: New entry requires all serial numbers to be provided.");
        } else {
          const updateQuery = `
            UPDATE computer_master 
            SET 
              mousesno = "${updatedMousesno}",
              monitorsno = "${updatedMonitorsno}",
              cpusno = "${updatedCpusno}",
              keyboardsno = "${updatedKeyboardsno}"
            WHERE systemno = "${systemno}" AND location = "${location}"
          `;

          db.query(updateQuery, (updateErr, updateResult) => {
            if (updateErr) {
              console.log(updateErr);
            } else {
              if (updateResult.affectedRows > 0) {
                console.log("Updated successfully in Computer Master");
              } else {
                console.log("No matching record found in Computer Master. Inserting a new row instead.");
                const insertQuery = `
                  INSERT INTO computer_master (systemno, location, mousesno, monitorsno, cpusno, keyboardsno)
                  VALUES ("${systemno}", "${location}", "${updatedMousesno}", "${updatedMonitorsno}", "${updatedCpusno}", "${updatedKeyboardsno}")
                `;
                db.query(insertQuery, (insertErr, insertResult) => {
                  if (insertErr) {
                    console.log(insertErr);
                  } else {
                    console.log("Inserted successfully in Computer Master");
                  }
                });

                const updateLocationQuery = `
                  UPDATE device_master
                  SET location = "${location}"
                  WHERE serialno IN ("${updatedMousesno}", "${updatedMonitorsno}", "${updatedCpusno}", "${updatedKeyboardsno}")
                `;

                db.query(updateLocationQuery, (updateLocationErr, updateLocationResult) => {
                  if (updateLocationErr) {
                    console.log(updateLocationErr);
                  } else {
                    console.log("Updated location successfully in Device Master");
                  }
                });
              }
              count++;

              if (count === totalRecords) {
                res.redirect("/assemble");
              }
            }
          });
        }
      }
    
  }
  });
}
}
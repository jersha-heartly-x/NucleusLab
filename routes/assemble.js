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
      WHERE systemno = ${systemno} AND location = "${location}"
    `;

    db.query(selectQuery, (selectErr, selectResult) => {
      if (selectErr) {
        console.log("error1");
      } else {
        if (selectResult.length > 0) {
          const existingValues = selectResult[0];
          const updatedMousesno = mousesno || existingValues.mousesno;
          const updatedMonitorsno = monitorsno || existingValues.monitorsno;
          const updatedCpusno = cpusno || existingValues.cpusno;
          const updatedKeyboardsno = keyboardsno || existingValues.keyboardsno;

          const updateQuery = `
            UPDATE computer_master 
            SET 
              mousesno = "${updatedMousesno}",
              monitorsno = "${updatedMonitorsno}",
              cpusno = "${updatedCpusno}",
              keyboardsno = "${updatedKeyboardsno}"
            WHERE systemno = ${systemno} AND location = "${location}"
          `;

          db.query(updateQuery, (updateErr, updateResult) => {
            if (updateErr) {
              res.redirect("/assemble");

            } else {
              const updateLocationQuery = `
                UPDATE device_master
                SET location = "${location}"
                WHERE serialno IN ("${updatedMousesno}", "${updatedMonitorsno}", "${updatedCpusno}", "${updatedKeyboardsno}")
              `;

              db.query(updateLocationQuery, (updateLocationErr, updateLocationResult) => {
                count++;
                if (count === totalRecords) {
                  res.redirect("/assemble");
                }
              });
            }
          });
        } else {
          const insertQuery = `
            INSERT INTO computer_master (systemno, location, mousesno, monitorsno, cpusno, keyboardsno)
            VALUES (${systemno}, "${location}", "${mousesno}", "${monitorsno}", "${cpusno}", "${keyboardsno}")
          `;

          db.query(insertQuery, (insertErr, insertResult) => {
            if (insertErr) {
              res.redirect("/assemble");
            } else {
              const updateLocationQuery = `
                UPDATE device_master
                SET location = "${location}"
                WHERE serialno IN ("${mousesno}", "${monitorsno}", "${cpusno}", "${keyboardsno}")
              `;

              db.query(updateLocationQuery, (updateLocationErr, updateLocationResult) => {
                count++;
                if (count === totalRecords) {
                  res.redirect("/assemble");
                }
              });
            }
          });
        }
      }
    });
  }
}

const db = require("../db");

function timeConversion(item) {
  let [year, month, date] = item.DATE_.split("-");
  item.DATE_ = [date, month, year].join("/");
  const itime_part_array = item.IN_TIME.split(":");
  const otime_part_array = item.OUT_TIME.split(":");

  let ampm = "AM";
  if (itime_part_array[0] >= 12) {
    ampm = "PM";
  }
  if (itime_part_array[0] > 12) {
    itime_part_array[0] = itime_part_array[0] - 12;
  }

  if (item.IN_TIME != "None")
    item.IN_TIME = itime_part_array[0] + ":" + itime_part_array[1] + " " + ampm;

  if (otime_part_array[0] >= 12) {
    ampm = "PM";
  }
  if (otime_part_array[0] > 12) {
    otime_part_array[0] = otime_part_array[0] - 12;
  }

  if (item.OUT_TIME != "None")
    item.OUT_TIME =
      otime_part_array[0] + ":" + otime_part_array[1] + " " + ampm;
  return item;
}

exports.biometricStudent = (req, res) => {
  const rno = res.locals.userDetails.id;

  const month = req.body.month,
    fdate = req.body.fdate,
    tdate = req.body.tdate,
    course = rno.substring(2, 4),
    substr = rno[0] + rno[1] + rno[4] + rno[5];

  let userId = "";

  switch (course) {
    case "PW":
      userId += "1" + substr;
      break;
    case "PT":
      userId += "2" + substr;
      break;
    case "PD":
      userId += "3" + substr;
      break;
    case "PC":
      userId += "4" + substr;
      break;
    case "PA":
      userId += "5" + substr;
      break;
    case "X0":
      userId += "6" + substr;
      break;
    default:
      break;
  }

  let sql;

  if (fdate && tdate) {
    sql = `SELECT * FROM attendance NATURAL JOIN master where DATE_ between ? and ? AND USERID = ? ORDER BY DATE_ DESC;`;

    db.query(sql, [fdate, tdate, userId], (err, data) => {
      if (err) {
        console.log(err);
      } else {
        data.forEach((item) => {
          item = timeConversion(item);
        });
        res.render("biometric_student", {
          title: "Biometric",
          menu: "",
          table: data,
        });
      }
    });
  } else if (month) {
    sql = `SELECT * FROM attendance NATURAL JOIN master where MONTHNAME(DATE_) = ? AND USERID = ? ORDER BY DATE_ DESC;`;
    db.query(sql, [month, userId], (err, data) => {
      if (err) {
        console.log(err);
      } else {
        data.forEach((item) => {
          item = timeConversion(item);
        });
        res.render("biometric_student", {
          title: "Biometric",
          menu: "",
          table: data,
        });
      }
    });
  } else {
    res.redirect("/biometric");
  }
};

//staff side

exports.biometric = (req, res) => {
  const month = req.body.month,
    fdate = req.body.fdate,
    tdate = req.body.tdate,
    batchyear = req.body.batchyear.substring(2, 4),
    course = req.body.course;

  let sql;

  if (fdate && tdate && batchyear && course) {
    sql = `SELECT * FROM attendance NATURAL JOIN master where DATE_ between ? and ? AND SUBSTRING(USERID, 2, 2) = ? AND SUBSTRING(USERID,1, 1) = ? ORDER BY DATE_ DESC;`;

    db.query(sql, [fdate, tdate, batchyear, course], (err, data) => {
      if (err) {
        console.log(err);
      } else {
        data.forEach((item) => {
          item = timeConversion(item);
        });
        res.render("biometric", { title: "Biometric", table: data, menu: "" });
      }
    });
  } else if (month && batchyear && course) {
    sql = `SELECT * FROM attendance NATURAL JOIN master where MONTHNAME(DATE_) = ? AND SUBSTRING(USERID, 2, 2) = ? AND SUBSTRING(USERID,1, 1) = ? ORDER BY DATE_ DESC;`;

    db.query(sql, [month, batchyear, course], (err, data) => {
      if (err) {
        console.log(err);
      } else {
        data.forEach((item) => {
          item = timeConversion(item);
        });

        res.render("biometric", { title: "Biometric", table: data, menu: "" });
      }
    });
  } else if (fdate && tdate && batchyear) {
    sql = `SELECT * FROM attendance NATURAL JOIN master where DATE_ between ? and ?  AND SUBSTRING(USERID, 2, 2) = ? ORDER BY DATE_ DESC;`;

    db.query(sql, [fdate, tdate, batchyear], (err, data) => {
      if (err) {
        console.log(err);
      } else {
        data.forEach((item) => {
          item = timeConversion(item);
        });
        res.render("biometric", { title: "Biometric", table: data, menu: "" });
      }
    });
  } else if (fdate && tdate && course) {
    sql = `SELECT * FROM attendance NATURAL JOIN master where DATE_ between ? and ?  AND SUBSTRING(USERID, 1, 1) = ? ORDER BY DATE_ DESC;`;

    db.query(sql, [fdate, tdate, course], (err, data) => {
      if (err) {
        console.log(err);
      } else {
        data.forEach((item) => {
          item = timeConversion(item);
        });
        res.render("biometric", { title: "Biometric", table: data, menu: "" });
      }
    });
  } else if (month && batchyear) {
    sql = `SELECT * FROM attendance NATURAL JOIN master where MONTHNAME(DATE_) = ?  AND SUBSTRING(USERID, 2, 2) = ? ORDER BY DATE_ DESC;`;

    db.query(sql, [month, batchyear], (err, data) => {
      if (err) {
        console.log(err);
      } else {
        data.forEach((item) => {
          item = timeConversion(item);
        });
        res.render("biometric", { title: "Biometric", table: data, menu: "" });
      }
    });
  } else if (month && course) {
    sql = `SELECT * FROM attendance NATURAL JOIN master where MONTHNAME(DATE_) = ?  AND SUBSTRING(USERID, 1, 1) = ? ORDER BY DATE_ DESC;`;

    db.query(sql, [month, course], (err, data) => {
      if (err) {
        console.log(err);
      } else {
        data.forEach((item) => {
          item = timeConversion(item);
        });
        res.render("biometric", { title: "Biometric", table: data, menu: "" });
      }
    });
  } else if (fdate && tdate) {
    sql = `SELECT * FROM attendance NATURAL JOIN master where DATE_ between ? and ? ORDER BY DATE_ DESC;`;

    db.query(sql, [fdate, tdate], (err, data) => {
      if (err) {
        console.log(err);
      } else {
        data.forEach((item) => {
          item = timeConversion(item);
        });
        res.render("biometric", { title: "Biometric", table: data, menu: "" });
      }
    });
  } else if (month) {
    sql = `SELECT * FROM attendance NATURAL JOIN master where MONTHNAME(DATE_) = ? ORDER BY DATE_ DESC;`;
    db.query(sql, [month], (err, data) => {
      if (err) {
        console.log(err);
      } else {
        data.forEach((item) => {
          item = timeConversion(item);
        });
        res.render("biometric", { title: "Biometric", table: data, menu: "" });
      }
    });
  } else {
    res.redirect("/biometric");
  }
};

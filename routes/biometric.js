const db = require("../db");

function timeConversion(item) {
  let [year, month, date] = item.DATE_.split("-");
  item.DATE_ = [date, month, year].join("/");

  let ampm = "AM";//fgh
  if (item.IN_TIME != "None") {
    const itime_array = item.IN_TIME.split(":");

    if (itime_array[0] >= 12) {
      ampm = "PM";
      if (itime_array[0] > 12) itime_array[0] = itime_array[0] - 12;
    }
    item.IN_TIME = itime_array[0] + ":" + itime_array[1] + " " + ampm;
  }
  ampm = "AM";
  if (item.OUT_TIME != "None") {
    const otime_array = item.OUT_TIME.split(":");

    if (otime_array[0] >= 12) {
      ampm = "PM";
      if (otime_array[0] > 12) otime_array[0] = otime_array[0] - 12;
    }
    item.OUT_TIME = otime_array[0] + ":" + otime_array[1] + " " + ampm;
  }

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

  if (fdate && tdate)
    sql = `SELECT * FROM attendance NATURAL JOIN master where DATE_ between "${fdate}" and "${tdate}" AND USERID = "${userId}" ORDER BY DATE_ DESC;`;
  else if (month)
    sql = `SELECT * FROM attendance NATURAL JOIN master where MONTHNAME(DATE_) = "${month}" AND USERID = "${userId}" ORDER BY DATE_ DESC;`;
  else res.redirect("/biometric");

  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      data.forEach((item) => {
        timeConversion(item);
      });
      res.render("biometric_student", {
        title: "Biometric",
        menu: "",
        table: data,
      });
    }
  });
};

function getSQL(fdate, tdate, batchyear, course, month) {
  let sql = null;
  if (fdate && tdate && batchyear && course)
    sql = `SELECT * FROM attendance NATURAL JOIN master where DATE_ between "${fdate}" and "${tdate}" AND SUBSTRING(USERID, 2, 2) = "${batchyear}" AND SUBSTRING(USERID,1, 1) = "${course}" ORDER BY DATE_ DESC;`;
  else if (month && batchyear && course)
    sql = `SELECT * FROM attendance NATURAL JOIN master where MONTHNAME(DATE_) = "${month}" AND SUBSTRING(USERID, 2, 2) = "${batchyear}" AND SUBSTRING(USERID,1, 1) = "${course}" ORDER BY DATE_ DESC;`;
  else if (fdate && tdate && batchyear)
    sql = `SELECT * FROM attendance NATURAL JOIN master where DATE_ between "${fdate}" and "${tdate}" AND SUBSTRING(USERID, 2, 2) = "${batchyear}" ORDER BY DATE_ DESC;`;
  else if (fdate && tdate && course)
    sql = `SELECT * FROM attendance NATURAL JOIN master where DATE_ between "${fdate}" and "${tdate}" AND SUBSTRING(USERID, 1, 1) = "${course}" ORDER BY DATE_ DESC;`;
  else if (month && batchyear)
    sql = `SELECT * FROM attendance NATURAL JOIN master where MONTHNAME(DATE_) = "${month}"  AND SUBSTRING(USERID, 2, 2) = "${batchyear}" ORDER BY DATE_ DESC;`;
  else if (month && course)
    sql = `SELECT * FROM attendance NATURAL JOIN master where MONTHNAME(DATE_) = "${month}"  AND SUBSTRING(USERID, 1, 1) = "${course}" ORDER BY DATE_ DESC;`;
  else if (fdate && tdate)
    sql = `SELECT * FROM attendance NATURAL JOIN master where DATE_ between "${fdate}" and "${tdate}" ORDER BY DATE_ DESC;`;
  else if (month)
    sql = `SELECT * FROM attendance NATURAL JOIN master where MONTHNAME(DATE_) = "${month}" ORDER BY DATE_ DESC;`;

  return sql;
}

//staff side
exports.biometric = (req, res) => {
  const month = req.body.month,
    fdate = req.body.fdate,
    tdate = req.body.tdate,
    batchyear = req.body.batchyear.substring(2, 4),
    course = req.body.course;

  let sql = getSQL(fdate, tdate, batchyear, course, month);

  if (sql == null) {
    res.redirect("/biometric");
  } else {
    db.query(sql, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        data.forEach((item) => {
          timeConversion(item);
        });
        res.render("biometric", { title: "Biometric", table: data, menu: "" });
      }
    });
  }
};

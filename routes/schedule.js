const db = require("../db");

exports.regularSchedule = function (req, res) {
  const day =
    req.query.day !== undefined
      ? req.query.day
      : new Date().toLocaleString("en-US", { weekday: "long" });

  let year, sem;

  const q = `SELECT academic_year, semester from course_dates where '${new Date()
    .toISOString()
    .slice(0, 10)}' BETWEEN start_date and end_date;`;

  db.query(q, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.length != 0) {
        year = result[0].academic_year;
        sem = result[0].semester;
        console.log(year, sem);
        const labs = [
          "CSL1",
          "CSL2",
          "CSL3",
          "DSL",
          "NSL",
          "IIL",
          "OCL",
          "SKAVA",
          "SCL",
          "CL",
        ];

        const table = [];

        for (let i = 0; i < labs.length; i++) {
          const row = Array(10);
          row.fill("free");
          table.push(row);
        }

        q = `select lab, period, _year, programme from schedule where _day="${day}" and academicYear="${year}" and semester="${sem}";`;

        db.query(q, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            for (let i = 0; i < result.length; i++) {
              const x = labs.indexOf(result[i].lab);
              const y = result[i].period - 1;
              table[x][y] = result[i]._year + " yr " + result[i].programme;
            }

            const q = `SELECT lab, fromperiod, toperiod from blocking where _day="${day}" and academic_year="${year}" and semester="${sem}";`;

            db.query(q, (err, result) => {
              if (err) {
                console.log(err);
              } else {
                for (let i = 0; i < result.length; i++) {
                  const x = labs.indexOf(result[i].lab);

                  for (
                    let j = result[i].fromperiod;
                    j <= result[i].toperiod;
                    j++
                  ) {
                    const y = j - 1;
                    table[x][y] = "blocked";
                  }
                }

                const data = {
                  role: res.locals.role,
                  title: "Lab Booking",
                  menu: "Regular Schedule",
                  day: day,
                  table: table,
                };

                res.render("regular_schedule", data);
              }
            });
          }
        });
      } else {
        const data = {
          role: res.locals.role,
          title: "Lab Booking",
          menu: "Regular Schedule",
          day: day,
          table: [],
        };

        res.render("regular_schedule", data);
      }
    }
  });
};

exports.add_schedule = (req, res) => {
  const q = `SELECT academic_year, semester from course_dates where '${new Date()
    .toISOString()
    .slice(0, 10)}' BETWEEN start_date and end_date;`;
  db.query(q, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.length != 0)
        res.render("add_regular_schedule", {
          title: "Schedule",
          menu: "Add Schedule",
          defaultOptions: result[0],
        });
      else
        res.render("add_regular_schedule", {
          title: "Schedule",
          menu: "Add Schedule",
        });
    }
  });
};

exports.delete_schedule = (req, res) => {
  const q = `SELECT academic_year, semester from course_dates where '${new Date()
    .toISOString()
    .slice(0, 10)}' BETWEEN start_date and end_date;`;

  db.query(q, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.length != 0)
        res.render("delete_schedule", {
          title: "Schedule",
          menu: "Delete Schedule",
          defaultOptions: result[0],
        });
      else
        res.render("delete_schedule", {
          title: "Schedule",
          menu: "Delete Schedule",
        });
    }
  });
};

exports.deleteSchedule = (req, res) => {
  const day = req.body.day,
    lab = req.body.lab,
    from = req.body.from,
    to = req.body.to,
    acYear = req.body.academic_year,
    sem = req.body.semester;

  let sql = `DELETE FROM schedule WHERE academicYear = "${acYear}" AND semester = "${sem}" AND _day = "${day}" AND lab = "${lab}" AND period >= ${from} AND period <= ${to}`;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      sql = `SELECT academic_year, semester from course_dates where '${new Date()
        .toISOString()
        .slice(0, 10)}' BETWEEN start_date and end_date;`;

      db.query(sql, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.render("delete_schedule", {
            title: "Schedule",
            menu: "Delete Schedule",
            defaultOptions: result[0],
            success: "Deleted successfully!",
          });
        }
      });
    }
  });
};

exports.checkAvailability = function (req, res) {
  const date = req.body.date,
    from = req.body.from,
    to = req.body.to,
    day = new Date(date).toLocaleString("en-US", { weekday: "long" }),
    labs = [
      "CSL1",
      "CSL2",
      "CSL3",
      "DSL",
      "NSL",
      "IIL",
      "OCL",
      "SKAVA",
      "SCL",
      "CL",
    ],
    table = [];

  for (let i = 0; i < labs.length; i++) {
    const row = Array(10);
    row.fill("free");
    table.push(row);
  }

  let sql = `SELECT * FROM schedule WHERE period >= "${from}" AND period <= "${to}" AND _day = "${day}";`;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      for (let i = 0; i < result.length; i++) {
        const x = labs.indexOf(result[i].lab);
        const y = result[i].period - 1;
        table[x][y] = result[i]._year + " yr " + result[i].programme;
      }

      sql = `SELECT * FROM booking WHERE bookingDate="${date}" AND (((${from} BETWEEN fromperiod AND toperiod) OR (${to} BETWEEN fromperiod AND toperiod)) OR (fromperiod>=${from} AND toperiod<=${to}));`;

      db.query(sql, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          for (let i = 0; i < result.length; i++) {
            const x = labs.indexOf(result[i].lab);
            let f = Math.max(result[i].fromperiod, from),
              t = Math.min(result[i].toperiod, to);
            for (let j = f - 1; j < t; j++) {
              const y = j;
              table[x][y] = result[i]._year + " yr " + result[i].programme;
            }
          }

          const data = {
            title: "Lab Booking",
            menu: "Check Availability",
            table: table,
            from: from,
            to: to,
            role: res.locals.role,
            isPR: res.locals.isPR,
          };
          res.render("check_available", data);
        }
      });
    }
  });
};

exports.addSchedule = function (req, res) {
  const academicYear = req.body.academic_year,
    sem = req.body.semester,
    year = req.body.year,
    programme = req.body.programme,
    lab = req.body.lab,
    day = req.body.day,
    from = parseInt(req.body.from),
    to = parseInt(req.body.to);

  let q = `SELECT * FROM schedule WHERE academicYear="${academicYear}" AND semester="${sem}" AND lab="${lab}" AND _day="${day}" AND period>=${from} AND period<=${to};`;

  db.query(q, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.length != 0) {
        console.log("Already Scheduled");
        res.render("add_regular_schedule", {
          title: "Schedule",
          menu: "Add Schedule",
          alert: "Already Scheduled!",
          defaultOptions: { academic_year: academicYear, semester: sem },
        });
      } else {
        q = `SELECT * FROM blocking WHERE academic_year="${academicYear}" AND semester="${sem}" AND lab="${lab}" AND _day="${day}" AND (((${from} BETWEEN fromperiod AND toperiod) OR (${to} BETWEEN fromperiod AND toperiod)) OR (fromperiod>=${from} AND toperiod<=${to}));`;

        db.query(q, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            if (result.length != 0) {
              console.log("Already Blocked");
              res.render("add_regular_schedule", {
                title: "Schedule",
                menu: "Add Schedule",
                alert: "Already Blocked!",
                defaultOptions: { academic_year: academicYear, semester: sem },
              });
            } else {
              for (let i = from; i <= to; i++) {
                const sql = `INSERT INTO schedule VALUES("${academicYear}", "${sem}", ${year}, "${programme}", "${lab}", "${day}", ${i});`;

                db.query(sql, (err, res) => {
                  if (err) {
                    console.log(err);
                  } else {
                    console.log("Schedule added!");
                  }
                });
              }

              res.render("add_regular_schedule", {
                title: "Schedule",
                menu: "Add Schedule",
                success: "Schedule added!",
                defaultOptions: { academic_year: academicYear, semester: sem },
              });
            }
          }
        });
      }
    }
  });
};

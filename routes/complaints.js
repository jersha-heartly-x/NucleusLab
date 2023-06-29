const con = require("../db");

exports.registerComplaint = function (req, res) {
  const userId = res.locals.userDetails.id,
    lab = req.body.lab,
    row = req.body.row,
    col = req.body.col,
    sys = req.body.system,
    desc = req.body.desc,
    dateTime = new Date(new Date().getTime() + 330 * 60 * 1000)
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

  let sql = `INSERT INTO complaints (userId, lab, _row, _col, systemNo, requirement, date_time, _status) VALUES ("${userId}", "${lab}", ${
    row == "NA" ? "NULL" : row
  }, ${col == "NA" ? "NULL" : col}, ${
    sys == "NA" ? "NULL" : sys
  }, "${desc}", "${dateTime}", "Pending");`;
  //   console.log(sql);
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log("Record inserted");
    }
  });

  res.redirect("/register-complaint");
};

exports.viewComplaints = function (req, res) {
  const userId = res.locals.userDetails.id;
  let sql;
  if (res.locals.role === "admin") {
    sql = `SELECT * FROM complaints order by date_time desc;`;
  } else {
    sql = `SELECT * FROM complaints WHERE userId = "${userId}" order by date_time desc;`;
  }
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.render("view_complaints", {
        title: "Complaints",
        menu: "View Complaints",
        filter: "All",
        complaints: result,
        role: res.locals.role,
      });
    }
  });
};

exports.viewComplaintsResolve = function (req, res) {
  let sql = `SELECT * FROM complaints order by date_time desc`;

  con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.render("resolve_complaints.ejs", {
        title: "Complaints",
        menu: "Resolve Complaints",
        filter: "All",
        complaints: result,
      });
    }
  });
};

exports.resolveComplaints = function (req, res) {
  const complaintId = req.body["complaintId"],
    resolvedBy = req.body["resolvedBy"],
    remarks = req.body.remarks,
    resolvedDate = new Date(new Date().getTime() + 330 * 60 * 1000)
      .toISOString()
      .slice(0, 10);

  const q = `UPDATE complaints SET  _status = "Resolved", remarks="${remarks}", resolvedBy = "${resolvedBy}", resolvedDate="${resolvedDate}" WHERE (complaintId =  ${complaintId});`;
  con.query(q, (err, result) => {
    if (err) console.log(err);
    else res.redirect("/resolve-complaints");
  });
};

exports.filter_complaints = (req, res) => {
  //console.log(req.body);
  const filter = req.body["filter_status"];
  const userId = res.locals.userDetails.id;

  let q;
  if (filter === "All") {
    res.redirect("/view-complaints");
  } else {
    if (res.locals.role === "admin") {
      q = `SELECT * FROM complaints where _status="${filter}" order by date_time desc;`;
    } else {
      q = `SELECT * FROM complaints WHERE userId = "${userId}" and _status="${filter}" order by date_time desc;`;
    }
    con.query(q, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.render("view_complaints", {
          title: "Complaints",
          menu: "View Complaints",
          filter: filter,
          complaints: result,
          role: res.locals.role,
        });
      }
    });
  }
};

exports.filter_complaints_lab_assistant = (req, res) => {
  //console.log(req.body);
  const filter = req.body["filter_status"];

  let q;
  if (filter === "All") {
    res.redirect("/resolve-complaints");
  } else {
    q = `SELECT * FROM complaints where _status="${filter}" order by date_time desc;`;

    con.query(q, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.render("resolve_complaints", {
          title: "Complaints",
          menu: "View Complaints",
          filter: filter,
          complaints: result,
          role: res.locals.role,
        });
      }
    });
  }
};

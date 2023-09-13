const db = require("../db");
const fs = require("fs");

exports.filterRequest = (req, res) => {

  const reportBy = req.body.reportBy || "All";
  const status = req.body.status || "All";
  const location = req.body.location || "All";
  let q = '';
  let params = [];
  const locationDropdownQuery = `SELECT DISTINCT lab FROM location`;
  db.query(locationDropdownQuery, (err, locations) => {
    if (err) {
      console.log(err);
    } else {
      const locationDropdown = locations
        .map((item) => item.lab)
        .filter((lab) => lab && lab.trim() !== ''); 

      if (reportBy === 'dump') {
        q = `SELECT d.serialno, d.disposaldate, m.devicetype 
             FROM dump d 
             JOIN device_master m ON d.serialno = m.serialno 
             ORDER BY devicetype`;
      } else if (reportBy === 'invoiceno') {
        q = `SELECT invoiceno, invoicedate, serialno, devicetype 
             FROM device_master 
             WHERE verify = 'verified' 
             ORDER BY devicetype`;
      } else if (status === 'working') {
        q = `SELECT serialno, devicetype, location 
             FROM device_master 
             WHERE verify = 'verified' AND status = 'Working' 
             ORDER BY devicetype`;
      } else if (status === 'Not Working') {
        q = `SELECT serialno, devicetype, location 
             FROM device_master 
             WHERE verify = 'verified' AND status = 'Not Working' 
             ORDER BY devicetype`;
      } else if (location !== 'All') {
        q = `SELECT * 
             FROM computer_master 
             WHERE location = ? 
             ORDER BY systemno`;
        params.push(location);
      } else if (reportBy === 'All' || status === 'All' || location === 'All') {        
        q = `SELECT * FROM device_master WHERE verify = 'verified' ORDER BY location`;
      }

      db.query(q, params, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.render('report', {
            title: 'Report',
            menu: 'Report',
            stock: result,
            filter: reportBy,
            status: status,
            reportBy: reportBy,
            location: location,
            locationDropdowns: locationDropdown
          });
        }
      });
    }
  });
};

exports.downloadReport = (req, res) => {
  const reportBy = req.body.reportBy || "All";
  const status = req.body.status || "All";
  const location = req.body.location || "All";
  let q = '';
  let params = [];

      if (reportBy === 'dump') {
        q = `SELECT d.serialno, d.disposaldate, m.devicetype
             FROM dump d
             JOIN device_master m ON d.serialno = m.serialno
             ORDER BY devicetype`;
      } else if (reportBy === 'invoiceno') {
        q = `SELECT invoiceno, invoicedate, serialno, devicetype
             FROM device_master
             WHERE verify = 'verified'
             ORDER BY devicetype`;
      } else if (status === 'working') {
        q = `SELECT serialno, devicetype, location
             FROM device_master
             WHERE verify = 'verified' AND status = 'Working'
             ORDER BY devicetype`;
      } else if (status === 'Not Working') {
        q = `SELECT serialno, devicetype, location
             FROM device_master
             WHERE verify = 'verified' AND status = 'Not Working'
             ORDER BY devicetype`;
      } else if (location !== 'All') {
        q = `SELECT *
             FROM computer_master
             WHERE location = ?
             ORDER BY systemno`;
        params.push(location);
      } else if (reportBy === 'All' || status === 'All' || location === 'All') {
        q = `SELECT serialno, devicetype, mac, ram, location, status, specification
             FROM device_master
             WHERE verify = 'verified'
             ORDER BY devicetype`;
      }
      function convertToCSV(data) {
        if (data.length === 0) {
          return ""; 
        }
        const headers = Object.keys(data[0]).join(",") + "\n";
        const rows = data.map((row) => Object.values(row).join(",") + "\n");
        return headers + rows.join("");
      }

      db.query(q, params, (err, result) => {
        if (err) {
          console.log(err);
        } else {    
          const csvData = convertToCSV(result);
          const fileName = "report.csv";
          res.setHeader("Content-Type", "text/csv");
          res.setHeader("Content-Disposition", `attachment; filename=report.csv`);
             
          res.send(csvData);
        }
      });
    };

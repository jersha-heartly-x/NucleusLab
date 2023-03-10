require("dotenv").config();
const mysql = require("mysql");

const con = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  port: process.env.PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database");
});

module.exports = con;

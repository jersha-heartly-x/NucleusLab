require("dotenv").config();
const mysql = require("mysql");

let con;

function connectToDatabase() {
  con = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
  });

  con.connect(function (err) {
    if (err) {
      console.error("Error connecting to database:", err.message);
      console.log("Attempting to reconnect...");
      connectToDatabase();
    } else {
      console.log("Connected to database");
    }
  });

  con.on("error", function (err) {
    console.error("Unexpected database error:", err.message);
    console.log("Attempting to reconnect...");
    connectToDatabase();
  });
}

connectToDatabase();

module.exports = con;

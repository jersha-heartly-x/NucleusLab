require('dotenv').config();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

con.connect(function (err) {
    try {
        if (err) throw err;
        console.log("Connected to database");
    }
    catch(error) {
        console.log(error);
    }
});

module.exports = con;

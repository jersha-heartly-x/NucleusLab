require("dotenv").config();
const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DATABASE_HOST,
  port: process.env.PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

function queryDatabase(query, callback, params = []) {
  pool.getConnection((err, connection) => {
    if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('Database connection was closed.');
      } else if (err.code === 'ER_CON_COUNT_ERROR') {
        console.error('Database has too many connections.');
      } else if (err.code === 'ECONNREFUSED') {
        console.error('Database connection was refused.');
      } else {
        console.error('Database connection error:', err);
      }
      return callback(err);
    }

    connection.query(query, params, (error, results) => {
      connection.release(); // Always release the connection back to the pool
      if (error) {
        console.error('Query error:', error);
        return callback(error);
      }
      callback(null, results);
    });
  });
}

module.exports = { query: queryDatabase };

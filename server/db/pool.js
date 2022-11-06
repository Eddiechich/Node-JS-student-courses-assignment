const mysql = require('mysql');
const db_config = require('./config');

const pool  = mysql.createPool(db_config);

pool.getConnection(function(err, connection) {
  // connected! (unless `err` is set)
  if (err) throw err;
  console.log('[v] Successfully connected to database')
});

module.exports = pool;
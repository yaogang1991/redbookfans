'use strict';
// const mysql = require('mysql2');
const mysql = require('mysql2/promise');
const config = require('../config');

module.exports = {
  getData: async unit => {
    unit = unit || 'hour';
    let sql = '';
    switch (unit) {
      case 'hour':
        sql = 'select fans, collected, liked from record order by timestamp desc limit 60';
        break;
    }
    let result = {};
    const connection = await mysql.createConnection({
      host: config.conn.host,
      user: config.conn.user,
      password: config.conn.password,
      database: config.conn.database,
      charset: 'utf8'
    });
    // connection.query(sql, (err, res) => {
    //   if (err) {
    //     console.error(e);
    //   }
    //   connection.end();
    //   result = res;
    //   console.log(result);
    // });
    const [rows, fields] = await connection.execute(sql);
    // console.log(rows)
    return rows;
  }
};

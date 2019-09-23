'use strict';

const axios = require('axios');
const mysql = require('mysql2');
const schedule = require('node-schedule');
const config = require('./config/config.js');

const scheduleTask = () => {
  schedule.scheduleJob('0 * * * * *', () => {
    axios
      .get(config.url, {
        headers: {
          'x-sign': config.sign,
        }
      })
      .then(res => {
        const data = res.data.data;
        const params = {
          fans: data.fans,
          collected: data.collected,
          liked: data.liked
        };
        const connection = mysql.createConnection({
            host: config.conn.host,
            user: config.conn.user,
            password: config.conn.password,
            database: config.conn.database,
            charset: 'utf8',
        })
        connection.query('insert into record set ?', params, (err, res) => {
          if (err) {
            console.error(e);
          }
          connection.end();
          console.log(new Date().toLocaleString() + ' insert data: ' + JSON.stringify(params));
        });
      })
      .catch(e => console.error(e));
  });
};

scheduleTask();

'use strict';

const express = require('express');
const client = require('./dbClient');

const PORT = 8080;

function get_hit_count(callback) {
  client.incr('hits', (err) => {
    client.get('hits', (err, res) => {
      console.log(res)
      callback(res)
    })
  });
}

const app = express();
app.get('/', (req, res) => {
  get_hit_count((count) => {
    res.send('Hello World from Docker! I have been seen ' + count + ' times');
  })
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);

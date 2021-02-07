// ./config/express.js

const express = require('express');
const app = express();

// enviroment variables
app.set('host', 'localhost');
app.set('port', 3002);

// middlewares
app.use(express.static('./public'));

module.exports = app

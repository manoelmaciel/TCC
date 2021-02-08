// ./config/express.js

const express = require('express');
const home = require('../app/route/contacts.js');
const app = express();

// enviroment variables
app.set('host', 'localhost');
app.set('port', 3003); // só muda o número da porta

// middlewares
app.use(express.static('./public'));

home(app);

module.exports = app

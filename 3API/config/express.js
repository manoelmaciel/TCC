// ./config/express.js

const express = require('express')
const bodyParser = require('body-parser')
const home = require('../app/route/contacts.js')
const app = express()

// enviroment variablesH
app.set('host', 'localhost');
app.set('port', 3003); // só muda o número da porta

// middlewares
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

home(app);

module.exports = app

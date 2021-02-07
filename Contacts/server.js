// server.js

const http = require('http');
const app = require('./config/express');

const host = app.get('host');
const port = app.get('port');

const server = http.createServer(app);

server.listen(port, host, function(){
  console.log('Servidor ... Respondendo em: %s: %s!', host, port);
})

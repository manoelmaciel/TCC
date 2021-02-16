// server.js

const http = require('http');
const app = require('./config/express');
// require​(​'./config/dbMongo.js'​)(​'mongodb://localhost:27017/contact'​);
require('./config/dbMongo.js')('mongodb://localhost:27017/contact');

const host = app.get('host');
const port = app.get('port');

const server = http.createServer(app);

server.listen(port, host, () => {
  	console.log('Servidor ... Respondendo em: %s: %s!', host, port);
	}
)

// server.js

const http = require('http');
const host = 'localhost';
const port = 3001;

const server = http.createServer(function(request, response){
  response.writeHead(200, {'content-Type': 'text/html'});
  response.write('<h1>Hello ... World!</h1>');
  response.end();
});

server.listen(port, host, function(){
  console.log('Servidor ... Respondendo em: %s: %s!', host, port);
})

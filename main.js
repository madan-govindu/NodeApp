// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello Madan!! \n");
});

// listen on localhost:8000
server.listen(8000);
console.log("Server listening on port 8000 :  http://192.168.0.120:8000/");

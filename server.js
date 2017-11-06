// server.js
// says that use the http package.
var http = require("http");
// getting the info file tasks
var tasks = require("./tasks");
http.createServer(function (request, response){
  response.writeHead(200, { "Content-type" : "text/plain"});
  response.write( tasks.task );
  response.end();
  // calling the server.
}).listen(3000);

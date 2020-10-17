const http = require('http');
const handler= require('./handler')

  
const server = http.createServer(handler);
server.listen(3030);



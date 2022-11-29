const http = require('http');
var url = require('url');
var file = require('file-system');
var fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
const path = "test.png";

const server = http.createServer((req, res) => {
  var q = url.parse(req.url, true);
  var searchData = q.query;
  if(searchData.src){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    fs.access(searchData.src, fs.constants.R_OK, (err) => {
      if (err){
        res.end('BABA FILE IS NOT FOUND');
        return false;
      }
      else{
        res.end('BABA FILE IS AVAILABLE');
        return false;
      }
    }); 
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
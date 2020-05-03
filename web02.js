// a web page is created from create server and viewed from localhost:8080

//import { createServer } from 'http';
// let val = hello();  // val is "Hello";

var http = require('http');
var funcs = require('./router');

http.createServer(function (req, res) {
    funcs.routeRequest(res, req);

}).listen(8080);
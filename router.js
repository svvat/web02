'use strict';



exports.routeRequest = function (res, req) {
  
  var rurl = req.url;

  var url = rurl.toUpperCase();
  if(url != null) {

    if(url==="/HELP") {
      helpPage(res);
    } 
    else 
    {
      var data = runRequest(req, res, url);
      var code = 400;
      if(data != null && data != '') {
        code = 200;
      }
      else {
        code = 400;
        data = "Bad Request";
      }
      res.writeHead(code, {'Content-Type': 'text/plain'});
      res.write(data);
    }
    res.end();
  }
};

function runRequest(req, res, url) {
  if ( url === "/GETDATE" ) {
    return myDateTime();
  }
  if ( url === "/GETADDRESS" ) {
    return getAddress(req);
  }
}



function getAddress(req) {
  return req.connection.remoteAddress;
};

function myDateTime() {
  return Date();
};

function helpPage(res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<html>');
  res.write('<head>');
  res.write('<title>NodeJS - Services Tutorial</title>');
  res.write('</head>');
  res.write('<body>');
  res.write('Available Services:');
  res.write('<ol>');
  res.write('<li><a href="GetDate">GetDate</a> - Get current Date & Time</li>');
  res.write('<li><a href="GetAddress">GetAddress</a> - Get IP Address</li>');
  res.write('</ol>');
  res.write('</body>');
  res.write('</html>');
}

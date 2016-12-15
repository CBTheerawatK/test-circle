var express = require('express');
var path = require('path');
var http = require('http');
var app = express();
var server = http.createServer(app);
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/published"));
app.get('/*', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/published/index.html'));
});

server.listen(port, function() {
  console.log('PlayPass3 is running on port ' + port);
});

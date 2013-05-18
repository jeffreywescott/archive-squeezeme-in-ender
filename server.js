var express = require('express'),
    app     = express(),
    server  = require('http').createServer(app),
    io      = require('socket.io').listen(server);


// set up the web server and socket.io
var port = process.env.PORT || 8181;
server.listen(port);
app.use(express.static(__dirname + '/public'));
// io.sockets.on('connection', function (socket) {
//   // do this whenever a client connects
// });

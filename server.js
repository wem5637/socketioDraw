var path = require('path');
var express = require('express');
var app = express(); // the app returned by express() is a JavaScript Function. Not something we can pass to our sockets!
var server = require('http').Server(app)
var io = require('socket.io')(server);

server.listen(1337);

// app.listen() returns an http.Server object
// http://expressjs.com/en/4x/api.html#app.listen

io.on('connection', function(socket){
	console.log("A new client has connected");

	socket.on('drawEvent', function(payload){
		socket.broadcast.emit('broadcast', payload)
		
	})

	socket.on('disconnect', function(){
		console.log("client has disconnect D:")
	})

});


app.use(express.static(path.join(__dirname, 'browser')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

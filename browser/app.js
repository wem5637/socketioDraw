// Never seen window.location before?
// This object describes the URL of the page we're on!
var socket = io(window.location.origin);

socket.on('connect', function () {
    console.log('I have made a persistent two-way connection to the server!');
    console.log("window location origin", window.location.origin)

	window.whiteboard.on('draw', function(payload){

		socket.emit('drawEvent', payload);
	})

	socket.on('broadcast', function(payload){
		//console.log(payload)
		// console.log("payload x,y", payload.x, payload.y);
		whiteboard.draw(payload, payload, black, false);
	})


});


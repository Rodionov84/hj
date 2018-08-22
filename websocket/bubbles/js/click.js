'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/mouse');
showBubbles(connection);

document.querySelector('canvas').addEventListener('click', (event) => {
	connection.send(JSON.stringify({x: event.clientX, y: event.clientY}));
});
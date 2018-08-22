'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/counter');
const counter = document.querySelector('span.counter');
const errors = document.querySelector('output.errors');

connection.addEventListener('message', (event) => {
	const info = JSON.parse(event.data);
	counter.textContent = info.connections;
	errors.textContent = info.errors;
});

window.addEventListener('beforeunload', (event) => {
	connection.close(1000);
});

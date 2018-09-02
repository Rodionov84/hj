'use strict';

const websocketNumbers = document.querySelectorAll('.websocket div');

const connection = new WebSocket('wss://neto-api.herokuapp.com/comet/websocket');
connection.addEventListener('message', (event) => {
	const number = parseInt(event.data);

    for(const num of websocketNumbers)
    {
    	num.classList.remove('flip-it');
    }
    websocketNumbers[number - 1].classList.add('flip-it');
});
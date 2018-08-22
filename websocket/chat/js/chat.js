'use strict';

const chat = document.getElementsByClassName('chat')[0];
const chatStatus = chat.querySelector('.chat-status');

const messagesContent = chat.querySelector('div.messages-content');

const messagesTemplates = chat.querySelector('.messages-templates');
const loading = messagesTemplates.querySelector('.loading');
const message = messagesTemplates.getElementsByClassName('message')[1];
const messagePersonal = messagesTemplates.querySelector('.message-personal');
const messageStatus = messagesTemplates.querySelector('.message-status');

const messageBox = chat.querySelector('.message-box');
const messageInput = messageBox.querySelector('.message-input');
const messageSubmit = messageBox.querySelector('.message-submit');

const connection = new WebSocket('wss://neto-api.herokuapp.com/chat');
connection.addEventListener('open', (event) => {
	messageSubmit.removeAttribute('disabled');

	showStatus('Пользователь появился в сети');
	setOnline(true);
});
connection.addEventListener('close', (event) => {
	messageSubmit.setAttribute('disabled', 'disabled');

	showStatus('Пользователь не в сети');
	setOnline(false);
});
connection.addEventListener('message', (event) => {
	if (event.data == '...') {
		chatStatus.innerHTML = 'Печатает...';
	}
	else {
		showMessage(event.data);
		setOnline();
	}
});
window.addEventListener('beforeunload', (event) => {
	connection.close();
});

messageBox.addEventListener('submit', (event) => {
	event.preventDefault();
	sendMessage();
});

function sendMessage() {
	if (messageInput.value.length > 0) {
		connection.send( messageInput.value );
		showMessage(messageInput.value, true);
		messageInput.value = '';
	}
}

function setOnline(isOnline = true) {
	chatStatus.innerHTML = chatStatus.getAttribute( isOnline ? "data-online" : "data-offline" );
}

function showStatus(text) {
	const status = messageStatus.cloneNode(true);
	status.querySelector('.message-text').innerHTML = text;

	addMessage(status);
}

function showMessage(text, isPersonal = false) {
	const msg = (isPersonal ? messagePersonal : message).cloneNode(true);
	msg.querySelector('.message-text').innerHTML = text;

	const date = new Date();
	msg.querySelector('.timestamp').innerHTML = date.getHours() + ":" + date.getMinutes();

	addMessage(msg);
}

function addMessage(message) {
	messagesContent.appendChild(message);
}
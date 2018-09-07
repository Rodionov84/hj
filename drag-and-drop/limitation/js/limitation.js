'use strict';

const block = document.querySelector('.block');
const message = document.querySelector('.message');
const textarea = document.querySelector('.textarea');

let timer = null;

textarea.addEventListener('focus', (event) => {
	block.classList.add('active');
});
textarea.addEventListener('blur', (event) => {
	block.classList.remove('active');
	message.classList.remove('view');
	clearTimeout(timer);
});
textarea.addEventListener('keypress', (event) => {
	clearTimeout(timer);
	block.classList.add('active');
	message.classList.remove('view');

	timer = setTimeout(()=>{
		block.classList.remove('active');
		message.classList.add('view');
	}, 2000);
});
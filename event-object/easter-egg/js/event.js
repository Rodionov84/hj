'use strict';

const nav = document.getElementsByTagName('nav')[0];
const secret = document.getElementsByClassName('secret')[0];
const password = ['KeyY', 'KeyT', 'KeyN', 'KeyJ', 'KeyK', 'KeyJ', 'KeyU', 'KeyB', 'KeyZ'];
let passwordState = 0;

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyT' && event.altKey && event.ctrlKey) {
    nav.classList.toggle('visible');
  }

  handleKey(event.code);
});

function handleKey(code) {
  if (code === password[passwordState]) {
    passwordState++;
  } else if (passwordState != 0) {
    passwordState = 0;
    handleKey(code);
  }

  if (passwordState === password.length) {
  	passwordState = 0;
    secret.classList.add('visible');
  }
}
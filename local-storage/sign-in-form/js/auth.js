'use strict';

const signInFrom = document.getElementsByClassName('sign-in-htm')[0];	
const signInErrorMessage = signInFrom.querySelector('.error-message');
const signInFromXhr = new XMLHttpRequest();

signInFromXhr.addEventListener('readystatechange', (event) => {
  if (signInFromXhr.status === 200 && signInFromXhr.readyState === 4) {
  	const response = JSON.parse(signInFromXhr.responseText);

  	if (response.error === true) {
  	  signInErrorMessage.innerHTML = response.message;
  	}
  	else {
  	  signInErrorMessage.innerHTML = 'Пользователь ' + response.name + ' успешно авторизован';
  	}
  }
});

signInFrom.addEventListener('submit', (event) => {
  event.preventDefault();
  signInErrorMessage.innerHTML = "";

  const formData = new FormData(signInFrom);
  const postData = {};
  for (const [k, v] of formData) {
  	postData[k] = v;
  }

  signInFromXhr.open('POST', 'https://neto-api.herokuapp.com/signin', true);
  signInFromXhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
  signInFromXhr.send(JSON.stringify(postData));
});



const signUpFrom = document.getElementsByClassName('sign-up-htm')[0];
const signUpErrorMessage = signUpFrom.querySelector('.error-message');
const signUpFromXhr = new XMLHttpRequest();

signUpFromXhr.addEventListener( 'readystatechange', (event) => {
  if (signUpFromXhr.status === 200 && signUpFromXhr.readyState === 4) {
  	const response = JSON.parse(signUpFromXhr.responseText);

  	if (response.error === true) {
  	  signUpErrorMessage.innerHTML = response.message;
  	}
  	else {
  	  signUpErrorMessage.innerHTML = 'Пользователь ' + response.name + ' успешно зарегистрирован';
  	}
  }
});

signUpFrom.addEventListener('submit', (event) => {
  event.preventDefault();
  signUpErrorMessage.innerHTML = "";

  const formData = new FormData(signUpFrom);
  const postData = {};
  for (const [k, v] of formData) {
  	postData[k] = v;
  }

  signUpFromXhr.open('POST', 'https://neto-api.herokuapp.com/signup', true);
  signUpFromXhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
  signUpFromXhr.send(JSON.stringify(postData));
});
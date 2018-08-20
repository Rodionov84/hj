'use strict';

let counter = document.getElementById('counter');
let increment = document.getElementById('increment');
let decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
const initValue = 0;

increment.addEventListener("click", doIncrement);
decrement.addEventListener("click", doDecrement);
reset.addEventListener("click", doReset);

function doIncrement() {
	localStorage.result ++;
  counter.textContent = localStorage.result;
}

function doDecrement() {
	if (localStorage.result > 0) {
	  localStorage.result --;
  }

	counter.textContent = localStorage.result;
}

function doReset() {
	localStorage.result = 0;
	counter.textContent = localStorage.result;
}

if (localStorage.result === undefined) {
  localStorage.result = initValue;
}

counter.textContent = localStorage.result;

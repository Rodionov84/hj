'use strict';

const longPoolingNumbers = document.querySelectorAll('.long-pooling div');
const longPoolingUrl = 'https://neto-api.herokuapp.com/comet/long-pooling';

const longPooling = new XMLHttpRequest();
longPooling.addEventListener("readystatechange", onGetLongPooling);

function onGetLongPooling() {
  if(longPooling.readyState != 4) return;

  if (longPooling.status == 202) {
	const number = parseInt(longPooling.responseText.trim());
    
    for(const num of longPoolingNumbers)
    {
    	num.classList.remove('flip-it');
    }
    longPoolingNumbers[number - 1].classList.add('flip-it');
  }

  longPooling.open('GET', longPoolingUrl);
  longPooling.send();
}

longPooling.open('GET', longPoolingUrl);
longPooling.send();
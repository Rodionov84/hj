'use strict';

const poolingInterval = 5000;
const poolingUrl = 'https://neto-api.herokuapp.com/comet/pooling';

const poolingNumbers = document.querySelectorAll('.pooling div');

const pooling = new XMLHttpRequest();
pooling.addEventListener("readystatechange", onGetPooling);

function onGetPooling() {
  if (pooling.status === 200 && pooling.readyState === 4) {
	const number = parseInt(pooling.responseText);

    for(const num of poolingNumbers)
    {
    	num.classList.remove('flip-it');
    }
    poolingNumbers[number - 1].classList.add('flip-it');
  }
}

/*pooling.open('GET', poolingUrl);
pooling.send();*/

setInterval(()=>{
	pooling.open('GET', poolingUrl);
	pooling.send();
}, poolingInterval);
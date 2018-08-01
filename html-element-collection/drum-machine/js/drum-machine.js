'use strict';

const drums = document.getElementsByClassName('drum-kit__drum');

for (let drum of drums) {
  drum.addEventListener('click', () => {
  	for (let element of drum.children) {
  	  if (element.nodeName === "AUDIO") {
  	    element.play();
  	  }
  	}
  });
}
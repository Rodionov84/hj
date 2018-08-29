'use strict';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'black';
ctx.fillRect(0,0,canvas.width,canvas.height);

canvas.addEventListener('click', event => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0,canvas.width,canvas.height);

  const starCount = random(200, 400);
    for (let i=0; i < starCount; i++) {
	    ctx.beginPath();
	    ctx.fillStyle = getRandomColor();
	    ctx.globalAlpha = random(0.8, 1, false);
	    ctx.arc( random(0, canvas.width), random(0, canvas.height), random(0, 1.1, false), 0, Math.PI*2);
	    ctx.fill();
	  }
});

function random(min, max, isRound = true) {
	let rand = Math.random() * (max - min) + min;
	if (isRound) {
	  rand = Math.round(rand);
	}
	return rand;
}

function getRandomColor() {
  switch (random(0, 2)) {
    case 0:
	  return '#ffffff';
	case 1:
	  return '#ffe9c4';
	case 2:
	  return '#d4fbff';
	}
}
'use strict';

const minShade = 0;
const maxShade = 359;
const minThickness = 5;
const maxThickness = 100;

const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');

let isDraw = false;
let shade = random(minShade, maxShade);
let thickness = 100;
let thicknessToMax = true;

window.addEventListener('resize', reSize);
reSize();

canvas.addEventListener('mousedown', (event) => {
  isDraw = true;
  ctx.beginPath();
});
canvas.addEventListener('mouseup', (event) => {
  isDraw = false;
});
canvas.addEventListener('mousemove', (event) => {
  if (isDraw) {
    shade++;
	  if (shade > maxShade) {
			shade = minShade;
	  } else if (shade <= minShade) {
			shade = maxShade;
		}
	  if (thickness > maxThickness)	{
			thicknessToMax = false;
	  }	else if (thickness <= minThickness)	{
			thicknessToMax = true;
	    }
	  if (thicknessToMax)	{
	    thickness++;
	  }
	  else {
	    thickness--;
	  }

	  ctx.lineJoin = 'round';
	  ctx.lineCap = 'round';
	  ctx.strokeStyle = 'hsl(' + shade + ',100%,50%)';
	  ctx.lineWidth = thickness;
	  ctx.lineTo(event.offsetX, event.offsetY);
	  ctx.stroke();
    }  
});

canvas.addEventListener('mouseout', (event) => {
	isDraw = false;
});

function reSize() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function random(min, max, isRound = true) {
	let rand = Math.random() * (max - min) + min;
	if (isRound) {
		rand = Math.round(rand);
	}
	return rand;
}
'use strict';

const fps = 20;

class obj {
  constructor(x, y, isRound) {
    this.isRound = isRound;
	this.size = random(0.1, 0.6, false);
	this.x = x;
	this.y = y;
	this.angle = random(0, 360);
	this.angleStep = random(-0.2, 0.2, false);

    if (random(0, 1) === 1)	{
	  this.getNewPosition = function (time = Date.now()) {
	  return {
	    x: this.x + Math.sin((50 + this.x + (time / 10)) / 100) * 3,
	    y: this.y + Math.sin((45 + this.x + (time / 10)) / 100) * 4
	    }
	  }
	}
	else {
	  this.getNewPosition = function (time = Date.now()) {
	  return {
	    x: this.x + Math.sin((this.x + (time / 10)) / 100) * 5,
	    y: this.y + Math.sin((10 + this.x + (time / 10)) / 100) * 2
	    }
	  }
	}
  }
}

const canvas = document.getElementById('wall');
const ctx = canvas.getContext('2d');

window.addEventListener('resize', reSize);
reSize();

const objects = [];
const objectsCount = random(50, 200);

for (let i = 0; i < objectsCount; i++) {
  objects.push( new obj(random(0, canvas.width), random(0, canvas.height), i < objectsCount / 2) );
}

setInterval(()=>{
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const object of objects)	{
    ctx.beginPath();
	const pos = object.getNewPosition();
	ctx.lineWidth = 5 * object.size;
	ctx.strokeStyle = "white";

	  if (object.isRound) {
	    ctx.arc( pos.x, pos.y, 12 * object.size, 0, Math.PI*2);
	  }	
	  else {
	    const size = 20 * object.size;
		ctx.lineJoin = 'round';
		ctx.lineCap = 'round';
		ctx.save();
		object.angle += object.angleStep;

		const angle = (object.angle % 360) * Math.PI / 180,
		          r = Math.sqrt(pos.x**2 + pos.y **2),
		  		  a = Math.atan(pos.y / pos.x),
				 x1 = r * Math.cos(a - angle),
		  		 y1 = r * Math.sin(a - angle);

		ctx.rotate(angle);

		ctx.moveTo(x1, y1);
		ctx.lineTo(x1, y1 + size);
		ctx.moveTo(x1 - size / 2, y1 + size / 2);
		ctx.lineTo(x1 + size / 2, y1 + size / 2);
	    ctx.restore();
      }

	  ctx.stroke();
  }
}, 1000 / fps);

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
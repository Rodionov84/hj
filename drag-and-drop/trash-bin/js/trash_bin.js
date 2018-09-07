'use strict';

const logos = document.getElementsByClassName('logo');
const trashBin = document.getElementById('trash_bin');

let activeLogo = null;

for (const logo of logos) {
  logo.addEventListener('mousedown', drag);
}

document.addEventListener('mousemove', moveAt);

function drag(event) {
  activeLogo = event.target;

  activeLogo.style.zIndex = 1000;
  activeLogo.classList.add('moving');

  document.onmouseup = drop;
}

function moveAt(event) {
  if (activeLogo !== null) {
    activeLogo.style.left = event.pageX - activeLogo.offsetWidth / 2 + 'px';
    activeLogo.style.top = event.pageY - activeLogo.offsetHeight / 2 + 'px';
  }
}

function drop(event) {
  document.onmouseup = null;
  activeLogo.classList.remove('moving');

  if (isInside(event.clientX, event.clientY, 
  trashBin.x, trashBin.y, trashBin.x + trashBin.width, trashBin.y + trashBin.height)) {
    	activeLogo.style.display = 'none';
  }

    activeLogo = null;
}

function isInside(x, y, z1, z2, z3, z4) {
	let x1 = Math.min(z1, z3);
	let x2 = Math.max(z1, z3);
	let y1 = Math.min(z2, z4);
	let y2 = Math.max(z2, z4);
	
	return (x1 <= x && x <= x2 && y1 <= y && y <= y2);
}
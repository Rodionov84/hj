'use strict';

const eyeLeft = document.querySelector('.cat_position_for_left_eye');
const eyeBallLeft = document.querySelector('.cat_eye_left');

const eyeRight = document.querySelector('.cat_position_for_right_eye');
const eyeBallRight = document.querySelector('.cat_eye_right');

const xLeftPupil = eyeLeft.getBoundingClientRect().left;
const yLeftPupil = eyeLeft.getBoundingClientRect().top;
const xRightPupil = eyeRight.getBoundingClientRect().right;
const yRightPupil = eyeRight.getBoundingClientRect().top;

const r = 9;
const l = 12.5;

document.addEventListener('mousemove', function(event) {
	const xMouse = event.pageX;
	const yMouse = event.pageY;

	const yLeft = ((r * (yMouse - yLeftPupil)) / Math.sqrt((xMouse - xLeftPupil) * (xMouse - xLeftPupil) + (yMouse - yLeftPupil) * (yMouse - yLeftPupil))) + yLeftPupil;
	const xLeft = ((r * (xMouse - xLeftPupil)) / Math.sqrt((yMouse - yLeftPupil) * (yMouse - yLeftPupil) + (xMouse - xLeftPupil) * (xMouse - xLeftPupil))) + xLeftPupil;

	eyeBallLeft.style.top = (yLeft - yLeftPupil + l ) + 'px';
	eyeBallLeft.style.left = (xLeft - xLeftPupil + l ) + 'px';

	const yRight = ((r * (yMouse - yRightPupil)) / Math.sqrt((xMouse - xRightPupil) * (xMouse - xRightPupil) + (yMouse - yRightPupil) * (yMouse - yRightPupil))) + yRightPupil;
	const xRight = ((r * (xMouse - xRightPupil)) / Math.sqrt((yMouse - yRightPupil) * (yMouse - yRightPupil) + (xMouse - xRightPupil) * (xMouse - xRightPupil))) + xRightPupil;

	eyeBallRight.style.top = (yRight - yRightPupil + l ) + 'px';
	eyeBallRight.style.left = (xRight - xRightPupil + l) + 'px';
});


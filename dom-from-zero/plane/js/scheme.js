'use strict';

let adultCount = 0;
let halfCount = 0;
let seats = [];

const request = new XMLHttpRequest();
request.addEventListener("readystatechange", onGetSeats);

const acSelect = document.getElementById('acSelect');
const btnSeatMap = document.getElementById('btnSeatMap');
const btnSetFull = document.getElementById('btnSetFull');
const btnSetEmpty = document.getElementById('btnSetEmpty');

const seatMapTitle = document.getElementById('seatMapTitle');
const totalPax = document.getElementById('totalPax');
const totalAdult = document.getElementById('totalAdult');
const totalHalf = document.getElementById('totalHalf');

const seatMapDiv = document.getElementById('seatMapDiv');

btnSetFull.setAttribute('disabled', 'disabled');
btnSetEmpty.setAttribute('disabled', 'disabled');

btnSeatMap.addEventListener('click', (event) => {
	event.preventDefault();

	request.open('GET', 'https://neto-api.herokuapp.com/plane/' + acSelect.value, true);
	request.send();
});

seatMapDiv.addEventListener('click', (event) => {
	event.preventDefault();

	let seat = event.target;
	if (!event.target.classList.contains('seat')) {
		seat = event.target.parentElement;
		if (!seat.classList.contains('seat')) {
			return;
		}
	}

	if (seat.classList.contains('adult')) {
		seat.classList.remove('adult');
		adultCount--;
	} else if (seat.classList.contains('half'))	{
		seat.classList.remove('half');
		halfCount--;
	} else if (event.altKey) {
		seat.classList.add('half');
		halfCount++;
	}
	else {
		seat.classList.add('adult');
		adultCount++;
	}

	setCounts();
});

btnSetFull.addEventListener('click', (event) => {
	event.preventDefault();

	for (const seat of seats) {
		if (!seat.classList.contains('seat')) {
			continue;
		}
		
		if (seat.classList.contains('half')) {
			halfCount--;
			seat.classList.remove('half');
		}
		
		if (!seat.classList.contains('adult')) {
			seat.classList.add('adult');
			adultCount++;
		}
	}

	setCounts();
});

btnSetEmpty.addEventListener('click', (event) => {
	event.preventDefault();

	for (const seat of seats) {
		if (!seat.classList.contains('seat')) {
			continue;
		}
		
		if (seat.classList.contains('adult')) {
			adultCount--;
			seat.classList.remove('adult');
		}
		else if (seat.classList.contains('half')) {
			halfCount--;
			seat.classList.remove('half');
		}
	}

	setCounts();
});

function onGetSeats() {
  if (request.status === 200 && request.readyState === 4) {
    const response = JSON.parse(request.responseText);

    adultCount = 0;
    halfCount = 0;

    setCounts();

    seatMapTitle.textContent = response.title + "(" + response.passengers + " пассажиров)";

    btnSetFull.removeAttribute('disabled');
    btnSetEmpty.removeAttribute('disabled');

    seatMapDiv.textContent = "";
    seats = [];
    response.scheme.forEach((seatCount, index)=>{
    	const row = document.createElement('div');
    	row.classList.add('row', 'seating-row', 'text-center');

    	const rowNumber = document.createElement('div');
    	rowNumber.classList.add('col-xs-1', 'row-number');
    	row.appendChild(rowNumber);

    	const rowTitle = document.createElement('h2');
    	rowTitle.textContent = index + 1;
    	rowNumber.appendChild(rowTitle);

    	const col_left = document.createElement('div');
	    col_left.classList.add('col-xs-5');
	    row.appendChild(col_left);

	    const col_right = document.createElement('div');
	    col_right.classList.add('col-xs-5');
	    row.appendChild(col_right);

    	for (let i=0; i < 6; i++) {
	    	const seat = document.createElement('div');
    		if (seatCount === 6 || ( seatCount === 4 && i > 0 && i < 50)) {
	    		seat.classList.add('col-xs-4', 'seat');

	    		const label = document.createElement('span');
	    		label.classList.add('seat-label');
	    		label.textContent = seatCount === 6 ? response.letters6[i] : response.letters4[i-1];
	    		seat.appendChild(label);
    		}
    		else {
	    		seat.classList.add('col-xs-4', 'no-seat');
    		}
    		
    		(i < 3 ? col_left : col_right).appendChild(seat);

    		seats.push(seat);
    	}

    	seatMapDiv.appendChild(row);
    });
  }
}

function setCounts() {
	totalAdult.textContent = adultCount;
    totalHalf.textContent = halfCount;

    totalPax.textContent = adultCount + halfCount;
}
'use strict';

function getJSONP(src)
{
	const script  = document.createElement('script');
	script.src = src;
	document.body.appendChild(script);
}

getJSONP('https://neto-api.herokuapp.com/food/42?callback=setProfile');
getJSONP('https://neto-api.herokuapp.com/food/42/rating?callback=setRating');
getJSONP('https://neto-api.herokuapp.com/food/42/consumers?callback=setConsumers');

function setProfile(response) {
  	document.querySelector('[data-title]').innerHTML = response.title;
  	document.querySelector('[data-pic]').style.backgroundImage = 'url('+ response.pic +')';
  	document.querySelector('[data-ingredients]').innerHTML = response.ingredients.join(', ');
}

function setRating(response) {
  	document.querySelector('[data-rating]').innerHTML = response.rating.toFixed(2);
  	document.querySelector('[data-star]').style.width = ( response.rating * 10 ) + "%";
  	document.querySelector('[data-votes]').innerHTML = response.votes + " оценок";
}

function setConsumers(response) {
	const consumers = document.querySelector('[data-consumers]');

	for(const consumer of response.consumers)
	{
		const img = document.createElement('img');
		img.src = consumer.pic;
		img.title = consumer.name;

		consumers.appendChild(img);
	}

	const span = document.createElement('span');
	span.innerHTML = response.total;

	consumers.appendChild(span);
}
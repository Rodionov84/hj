'use strict';

const script  = document.createElement('script');
script.src = 'https://neto-api.herokuapp.com/profile/me?callback=setProfile';
document.body.appendChild(script);

function setProfile(response) {

  	document.querySelector('[data-name]').innerHTML = response.name;
  	document.querySelector('[data-description]').innerHTML = response.description;
  	document.querySelector('[data-pic]').setAttribute('src', response.pic);
  	document.querySelector('[data-position]').innerHTML = response.position;

  	const script2  = document.createElement('script');
	script2.src = 'https://neto-api.herokuapp.com/profile/' + response.id + '/technologies?callback=setTechnologies';
	document.body.appendChild(script2);
}

function setTechnologies(response) {
	const technologies = document.querySelector('[data-technologies]');
	for(let technology of response) {
		const span = document.createElement('span');
		span.classList.add("devicons", "devicons-" + technology);

		technologies.appendChild(span);
	}

	document.querySelector('.content').style.display = 'initial';
}
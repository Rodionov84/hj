'use strict';

const profileXhr = new XMLHttpRequest();
profileXhr.open('GET', 'cors.php');
profileXhr.send();

profileXhr.addEventListener('readystatechange', (event) => {
  if (profileXhr.status === 200 && profileXhr.readyState === 4) {
  	const response = JSON.parse(profileXhr.responseText);

  	document.querySelector('[data-wallpaper]').setAttribute('src', response.wallpaper);
  	document.querySelector('[data-username]').innerHTML = response.username;
  	document.querySelector('[data-description]').innerHTML = response.description;
  	document.querySelector('[data-pic]').setAttribute('src', response.pic);
  	document.querySelector('[data-tweets]').innerHTML = response.tweets;
  	document.querySelector('[data-followers]').innerHTML = response.followers;
  	document.querySelector('[data-following]').innerHTML = response.following;
  }
});
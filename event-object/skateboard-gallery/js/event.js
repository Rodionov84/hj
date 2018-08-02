'use strict';

const galleryNav = document.getElementById('nav');
const view = document.getElementById('view');

for (let item of galleryNav.children) {
  item.addEventListener('click', (event) => {
    event.preventDefault();

  	view.src = item.href;

  	/* for( let item of galleryNav.children )
  	{
  		item.classList.remove("gallery-current");
  	} */

  	document.getElementsByClassName('gallery-current')[0].classList.remove('gallery-current');
  	item.classList.add('gallery-current');
  });
}
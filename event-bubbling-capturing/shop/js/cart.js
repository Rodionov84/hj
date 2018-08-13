'use strict';

const itemsList = document.getElementsByClassName('items-list')[0];
itemsList.addEventListener('click', handleClick);

function handleClick(event) {
  const button = event.target;
  if (!button.hasAttribute('data-title') || 
  	  !button.hasAttribute('data-price') || 
  	  !button.classList.contains('add-to-cart')) {
  	return;
  }

  event.preventDefault();

  const item = {
  	title: button.getAttribute('data-title'),
  	price: button.getAttribute('data-price')
  };

  addToCart(item);
}
let container;
let cartCount;
let cartTotalPrice;
let currentCartCount;
let currentCartTotalPrice;

function getPriceFormatted(value) {
  return  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function init() {
  container = document.getElementById('container');

  cartCount = document.getElementById('cart-count');
  cartTotalPrice = document.getElementById('cart-total-price');

  currentCartCount = 0;
  currentCartTotalPrice = 0;

  const addButtons = container.querySelectorAll('.add');
  addButtons.forEach((button) => {
  	button.addEventListener('click', addToCart)
  });
}

function addToCart(event) {
  event.preventDefault();

  const price = parseInt(event.currentTarget.dataset.price);

  currentCartCount++;
  currentCartTotalPrice += price;

  cartCount.innerHTML = currentCartCount;
  cartTotalPrice.innerHTML = getPriceFormatted(currentCartTotalPrice);
}

document.addEventListener('DOMContentLoaded', init);
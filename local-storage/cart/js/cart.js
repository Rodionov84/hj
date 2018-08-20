'use strict';

const cart = document.getElementById('quick-cart');
const addToCartForm = document.getElementById('AddToCartForm');
const addToCartXhr = new XMLHttpRequest();

addToCartForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(addToCartForm);
  formData.append('productId', addToCartForm.getAttribute('data-product-id'));

  addToCartXhr.open('POST', 'https://neto-api.herokuapp.com/cart');
  addToCartXhr.send(formData);
});

addToCartXhr.addEventListener('readystatechange', (event) => {
  if (addToCartXhr.status === 200 && addToCartXhr.readyState === 4) {
  	const response = JSON.parse(addToCartXhr.responseText);

  	if (response.error) {
  	  console.warn(response.message);
  	}
  	else {
  	  setCart(response);
  	}
  }
});

function setCart( products ) {
  cart.innerHTML = '';
  let cartSum = 0;

  for (const product of products) {
    cartSum += ( product.quantity ? product.quantity : 1 ) * product.price;

  	const divProduct = document.createElement('div');
  	divProduct.classList.add("quick-cart-product", "quick-cart-product-static");
  	divProduct.setAttribute("id", "quick-cart-product-" + product.id);
  	divProduct.setAttribute("style", "opacity: 1;");

  	const divWrap = document.createElement('div');
  	divWrap.classList.add("quick-cart-product-wrap");

  	const img = document.createElement('img');
  	img.src = product.pic;
  	img.title = product.title;

  	const s1 = document.createElement('span');
  	s1.classList.add("s1");
  	s1.setAttribute("style", "background-color: #000; opacity: .5");
  	s1.innerHTML = "$" + product.price;

  	const s2 = document.createElement('span');
  	s2.classList.add("s2");

  	const s3 = document.createElement('span');
  	s3.classList.add("count", "hide", "fadeUp");
  	s3.setAttribute("id", "quick-cart-product-count-" + product.id);
  	s3.innerHTML = product.quantity ? product.quantity : 1;

  	const s4 = document.createElement('span');
  	s4.classList.add("quick-cart-product-remove", "remove");
  	s4.setAttribute("data-id", product.id);
  	s4.addEventListener('click', (event) => {
  	  removeProduct( s4.getAttribute("data-id") );
  	});

  	divProduct.appendChild(divWrap);
  	divProduct.appendChild(s3);
  	divProduct.appendChild(s4);

  	divWrap.appendChild(img);
  	divWrap.appendChild(s1);
  	divWrap.appendChild(s2);

  	cart.appendChild(divProduct);
  }

  const a = document.createElement('a');
  a.setAttribute("id", "quick-cart-pay");
  a.setAttribute("quickbeam", "cart-pay");
  a.classList.add("cart-ico", "open");

  const s1 = document.createElement('span');

  const strong = document.createElement('strong');
  strong.classList.add("quick-cart-text");
  strong.innerHTML = "Оформить заказ<br>";

  const s2 = document.createElement('span');
  s2.setAttribute("id", "quick-cart-price");
  s2.innerHTML = "$" + cartSum;

  a.appendChild(s1);
  s1.appendChild(strong);
  s1.appendChild(s2);

  cart.appendChild(a);
}

const removeProductXhr = new XMLHttpRequest();
removeProductXhr.addEventListener('readystatechange', (event) => {
  if (removeProductXhr.status === 200 && removeProductXhr.readyState === 4) {
  	const response = JSON.parse(removeProductXhr.responseText);

  	if (response.error) {
  	  console.warn(response.message);
  	}
  	else {
  	  setCart(response);
  	}
  }
});

function removeProduct(productId) {
  const formData = new FormData();
  formData.append('productId', productId);

  removeProductXhr.open('POST', 'https://neto-api.herokuapp.com/cart/remove');
  removeProductXhr.send(formData);
}

const colorSwatch = document.getElementById('colorSwatch');
const colorSwatchXhr = new XMLHttpRequest();
colorSwatchXhr.open('GET', 'https://neto-api.herokuapp.com/cart/colors');
colorSwatchXhr.send();

colorSwatchXhr.addEventListener('readystatechange', (event) => {
  if (colorSwatchXhr.status === 200 && colorSwatchXhr.readyState === 4) {
  	const response = JSON.parse(colorSwatchXhr.responseText);

	let index = 0;
  	for (const color of response) {
      index++;
      const currentIndex = index;

  	  const divColor = document.createElement('div');
  	  divColor.setAttribute('data-value', color.type);
  	  divColor.classList.add('swatch-element', 'color', color.type, color.isAvailable ? 'available' : 'soldout' );

  	  const divTooltip = document.createElement('div');
  	  divTooltip.classList.add('tooltip');
  	  divTooltip.innerHTML = color.title;

  	  const input = document.createElement('input');
  	  input.setAttribute("quickbeam", "color");
  	  input.setAttribute("id", "swatch-" + index + "-" + color.type);
  	  input.setAttribute("type", "radio");
  	  input.setAttribute("name", "color");
  	  input.setAttribute("value", color.type);

  	  if (!color.isAvailable) {
  	  	input.setAttribute("disabled", "disabled");
  	  }
  	  if (localStorage.color === currentIndex) {
  	    input.setAttribute("checked", "checked");
  	  }

  	  const label = document.createElement('label');
  	  label.setAttribute("for", "swatch-" + index + "-" + color.type);
  	  label.setAttribute("style", "border-color: " + color.code + ";");

  	  label.addEventListener('click', (event) => {
  	  	if (!input.hasAttribute("disabled") ) {
  	  	  input.checked = !input.checked;
  	  	  localStorage.color = input.checked ? currentIndex : undefined;
  	    }
  	  });

  	  const span = document.createElement('span');
  	  span.setAttribute("style", "background-color: " + color.code + ";");
  	  label.appendChild(span);

  	  if (!color.isAvailable) {
	    const img = document.createElement('img');
	  	img.classList.add('crossed-out');
	  	img.src = "https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886";

	  	label.appendChild(img);
	  }

	  divColor.appendChild(divTooltip);
	  divColor.appendChild(input);
	  divColor.appendChild(label);

	  colorSwatch.appendChild(divColor);
  	}
  }
});


const sizeSwatch = document.getElementById('sizeSwatch');
const sizeSwatchXhr = new XMLHttpRequest();
sizeSwatchXhr.open('GET', 'https://neto-api.herokuapp.com/cart/sizes');
sizeSwatchXhr.send();

sizeSwatchXhr.addEventListener('readystatechange', (event) => {
  if (sizeSwatchXhr.status === 200 && sizeSwatchXhr.readyState === 4) {
  	const response = JSON.parse(sizeSwatchXhr.responseText);

	let index = 0;
  	for (const size of response) {
      index++;
      const currentIndex = index;

  	  const divSize = document.createElement('div');
  	  divSize.setAttribute('data-value', size.type);
  	  divSize.classList.add('swatch-element', 'plain', size.type, size.isAvailable ? 'available' : 'soldout' );

  	  const input = document.createElement('input');
  	  input.setAttribute("id", "swatch-" + index + "-" + size.type);
  	  input.setAttribute("type", "radio");
  	  input.setAttribute("name", "size");
  	  input.setAttribute("value", size.type);

  	  if (!size.isAvailable) {
  	  	input.setAttribute("disabled", "disabled");
  	  }
  	  if (localStorage.size == currentIndex) {
  	    input.setAttribute("checked", "checked");
  	  }

  	  const label = document.createElement('label');
  	  label.setAttribute("for", "swatch-" + index + "-" + size.type);
  	  label.innerHTML = size.title;
  	  label.addEventListener('click', (event) => {
        if( !input.hasAttribute("disabled") ) {
  	  	  input.checked = !input.checked;
  	  	  localStorage.size = input.checked ? currentIndex : undefined;
  	    }
  	  });

  	  if (!size.isAvailable) {
	    const img = document.createElement('img');
	  	img.classList.add('crossed-out');
	  	img.src = "https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886";

	  	label.appendChild(img);
	  }

	  divSize.appendChild(input);
	  divSize.appendChild(label);

	  sizeSwatch.appendChild(divSize);
  	}
  }
});

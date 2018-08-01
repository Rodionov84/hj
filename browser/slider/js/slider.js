'use strict'
const img = document.getElementById('slider');

const src=["https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-jump.png",
         "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-on-foot.png",
         "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-playground.png",
         "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-top-view.png",
         "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax.png"];

function startSlider(images, interval = 5000) {
  if (!Array.isArray( images )) {
  	throw new Error('Incorrect images array.');
  }
  if (images.length === 0) {
  	return;
  }

  img.src = images[0];
  let image_i = 1;
  setInterval(() => {
    img.src = images[image_i];
    image_i++;

  	if (image_i >= images.length) {
  	  image_i = 0;
  	}
  }, interval);
}

startSlider(src);

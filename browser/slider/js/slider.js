'use strict'
const img = document.getElementById('slider');

const src = ["./i/airmax-jump.png",
             "./i/airmax-on-foot.png",
             "./i/airmax-playground.png",
             "./i/airmax-top-view.png",
             "./i/airmax.png"];

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

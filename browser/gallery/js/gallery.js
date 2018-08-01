'use strict'

const img = document.getElementById('currentPhoto');
const prev = document.getElementById('prevPhoto');
const next = document.getElementById('nextPhoto');
let image_i = 0;

const src=["https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-jump.png",
         "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-on-foot.png",
         "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-playground.png",
         "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-top-view.png",
         "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax.png"];

setImage();

prev.onclick = () => {
  setImage( image_i - 1 );
};

next.onclick = () => {
  setImage( image_i + 1 );
};

function setImage(index = 0)
{
  if( index < 0 )
  {
  	index = src.length - 1;
  }
  if( index >= src.length )
  {
  	index = 0;
  }

  image_i = index;
  img.src = src[image_i];
}
'use strict'

const img = document.getElementById('currentPhoto');
const prev = document.getElementById('prevPhoto');
const next = document.getElementById('nextPhoto');
let image_i = 0;

const src = ["./i/breuer-building.jpg",
             "./i/guggenheim-museum.jpg",
             "./i/headquarters.jpg",
             "./i/IAC.jpg",
             "./i/new-museum.jpg"];

setImage();

prev.onclick = () => {
  setImage(image_i - 1);
};

next.onclick = () => {
  setImage(image_i + 1);
};

function setImage(index = 0) {
  if (index < 0) {
  	index = src.length - 1;
  } 
  if (index >= src.length) {
  	index = 0;
  }

  image_i = index;
  img.src = src[image_i];
}
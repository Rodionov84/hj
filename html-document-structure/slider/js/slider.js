const slider = document.getElementsByClassName('slider')[0];
const sliderNav = {
  prev: slider.querySelector('a[data-action=prev]'),
  next: slider.querySelector('a[data-action=next]'),
  first: slider.querySelector('a[data-action=first]'),
  last: slider.querySelector('a[data-action=last]')
};
const slides = slider.querySelectorAll('.slides .slide');
let currentSlide = 0;

sliderNav.prev.addEventListener('click', (event) => {
  event.preventDefault();

  if (currentSlide > 0) {
  	setSlide( currentSlide - 1 );
  }
});
sliderNav.next.addEventListener('click', (event) => {
  event.preventDefault();

  if (currentSlide < slides.length - 1) {
  	setSlide( currentSlide + 1 );
  }
});
sliderNav.first.addEventListener('click', (event) => {
  event.preventDefault();

  if (currentSlide > 0) {
  	setSlide( 0 );
  }
});
sliderNav.last.addEventListener('click', (event) => {
  event.preventDefault();

  if (currentSlide < slides.length - 1) {
  	setSlide( slides.length - 1 );
  }
});

setSlide(currentSlide);

function setSlide( slideNumber = 0 ) {
  currentSlide = slideNumber;

  for (let slide of slides) {
  	slide.classList.remove('slide-current');
  }
  slides[slideNumber].classList.add('slide-current');

  if (currentSlide === 0) {
  	sliderNav.prev.classList.add('disabled');
  	sliderNav.first.classList.add('disabled');
  }
  else {
  	sliderNav.prev.classList.remove('disabled');
  	sliderNav.first.classList.remove('disabled');
  }

  if (currentSlide === slides.length - 1) {
  	sliderNav.next.classList.add('disabled');
  	sliderNav.last.classList.add('disabled');
  }
  else {
  	sliderNav.next.classList.remove('disabled');
  	sliderNav.last.classList.remove('disabled');
  }
}
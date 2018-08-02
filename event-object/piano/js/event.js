'use strict';

const buttonsSet = document.getElementsByClassName('set')[0];

for (let button of buttonsSet.children) {
  button.addEventListener('click', () => {
  	button.firstElementChild.currentTime = 0.0;
  	button.firstElementChild.play();
  });
}

const buttonsSounds = {
  lower: [
    "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/first.mp3",
    "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/second.mp3",
    "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/third.mp3",
    "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fourth.mp3",
    "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fifth.mp3"
  ],
  middle: [
    "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/first.mp3",
    "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/second.mp3",
    "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/third.mp3",
    "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fourth.mp3",
    "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fifth.mp3"
    ],
  higher: [
    "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/first.mp3",
    "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/second.mp3",
    "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/third.mp3",
    "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fourth.mp3",
    "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fifth.mp3"
    ]
};

let pianoState;

document.addEventListener('keydown', (event) => {
  if (event.key === 'Shift' && pianoState !== 'lower') {
    setState('lower');
  } else if (event.key === 'Alt' && pianoState !== 'higher') {
    setState('higher');
  }
});

document.addEventListener('keyup', (event) => {
  if(pianoState !== 'middle' && (event.key === 'Shift' || event.key === 'Alt')) {
    setState('middle');
  }
});

function setState(stateName) {
  pianoState = stateName;

  buttonsSet.classList.remove('lower');
  buttonsSet.classList.remove('middle');
  buttonsSet.classList.remove('higher');

  buttonsSet.classList.add(stateName);

  let i = 0;
  for (let button of buttonsSet.children) {
    button.firstElementChild.src = buttonsSounds[stateName][i];
    i++;
  }
}

setState('middle');
'use strict';

const sounds = [
  { name: 'LA Chill Tour', src: 'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Chill Tour.mp3' },
  { name: 'This is it band', src: 'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This is it band.mp3' },
  { name: 'LA Fusion Jam', src: 'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Fusion Jam.mp3' }
];

let sound_i = 0;

const mediaplayer = document.getElementsByClassName('mediaplayer')[0];
const audio = mediaplayer.children[0];
const title = document.getElementsByClassName('title')[0];
const playstate = document.getElementsByClassName('playstate')[0];
const stop = document.getElementsByClassName('stop')[0];
const back = document.getElementsByClassName('back')[0];
const next = document.getElementsByClassName('next')[0];

HTMLAudioElement.prototype.stop = function() {
  this.pause();
  this.currentTime = 0.0;
}

audio.addEventListener('ended', () => {
  sound_i++;
  if (sound_i >= sounds.length) {
    sound_i = 0;
  }

  setSound(sounds[sound_i]);
  audio.play();
});

function setSound(sound) {
  const isPlay = !audio.paused;

  audio.src = sound.src;
  title.title = sound.name;

  if (isPlay) {
  	audio.play();
  }
}

playstate.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    mediaplayer.classList.add('play');
  } else {
  	audio.pause();
    mediaplayer.classList.remove('play');
  }
});

stop.addEventListener('click', () => {
  audio.stop();
  mediaplayer.classList.remove('play');
});

back.addEventListener('click', () => {
  sound_i--;
  if (sound_i < 0) {
    sound_i = sounds.length - 1;
  }

  setSound(sounds[sound_i]);
});

next.addEventListener('click', () => {
  sound_i++;
  if (sound_i >= sounds.length) {
    sound_i = 0;
  }

  setSound(sounds[sound_i]);
});

setSound(sounds[sound_i]);
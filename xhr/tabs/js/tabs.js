'use strict';

const request = new XMLHttpRequest();
request.addEventListener("readystatechange", onReadyTab);

const tabs = document.getElementsByClassName('tabs')[0];
const nav = tabs.getElementsByTagName('nav')[0].children;
const content = document.getElementById('content');
const preloader = document.getElementById('preloader');

for (let a of nav) {
  a.addEventListener('click', openTab);
}

tabs.querySelector('.active').click();

function openTab(event) {
  event.preventDefault();

  preloader.classList.remove('hidden');

  for (let a of nav) {
    a.classList.remove('active');
  }
  event.target.classList.add('active');

  request.open('GET', event.target.href, true);
  request.send();
}

function onReadyTab() {
  if (request.status === 200 && request.readyState === 4) {
    content.innerHTML = request.responseText;
  }
  preloader.classList.add('hidden');
}
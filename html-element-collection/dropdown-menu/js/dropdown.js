'use strict';

const list = document.getElementsByClassName('wrapper-dropdown');

for (let menu of list) {
  menu.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}
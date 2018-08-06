let container;
let contactsList;

function loadContacts() {
  return '[{"name":"Василий Николаев","email":"vnikola9999@gmail.com","phone":"+7 999 777 34 34"},{"name":"Елена Вишневская","email":"lenochka22333@yandex.ru","phone":"+7 888 777 11 11"},{"name":"Артём Кузнецов","email":"kuznya_foreva@gmail.com","phone":"+7 222 555 76 67"},{"name":"Алексей Гусенко","email":"jiznboliyaetoznayu@mail.com","phone":"+7 333 545 12 34"},{"name":"Маргарита Сотникова","email":"pobeditelnicapojizni111@gmail.com","phone":"+7 323 534 32 12"}]';
}

function contactClick(event) {
  let target = null;
  if (event.target.tagName === 'LI') {
    target = event.target;
  }
  if (event.target.parentNode.tagName === 'LI') {
    target = event.target.parentNode;
  }

  if (target) {
    target.classList.add('active');
    document.getElementById('card-email').innerHTML = target.dataset.email;
    document.getElementById('card-phone').innerHTML = target.dataset.phone;
    container.classList.add('details');
  }
}

function backClick() {
  container.classList.remove('details');
  const items = document.querySelectorAll('.list-view li');
  for (let item of items) {
      item.classList.remove('active');
  }
}

function init() {
  container = document.getElementById('container');
  container.querySelector('.back').addEventListener('click', backClick);
  contactsList = document.getElementsByClassName('contacts-list')[0];

  const contacts = JSON.parse(loadContacts());
  setContactsList(contacts);
}

function setContactsList(contacts) {
  contactsList.innerHTML = '';

  contacts.forEach((contact) => {
    let strong = document.createElement('strong');
    strong.innerHTML = contact.name;

    let li = document.createElement('li');
    li.setAttribute('data-email', contact.email);
    li.setAttribute('data-phone', contact.phone);
    li.appendChild(strong);
    li.addEventListener('click', contactClick);

    contactsList.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', init);

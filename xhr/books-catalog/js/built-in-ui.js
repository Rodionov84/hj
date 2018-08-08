/* Данный JS код */

const content = document.getElementById('content');

const request = new XMLHttpRequest();
request.addEventListener("readystatechange", onReadyBooks);
request.open('GET', 'https://neto-api.herokuapp.com/book/', true);
request.send();

document.getElementById('close').addEventListener('click', toggleCardVisible);

function onReadyBooks()
{
  content.innerHTML = '';
  if (request.status === 200 && request.readyState === 4) {
    const books = JSON.parse(request.responseText);

    for(let book of books)
    {
      let img = document.createElement('img');
      img.src = book.cover.small;

      let li = document.createElement('li');
      li.setAttribute('data-title', book.title);
      li.setAttribute('data-author', book.author.name);
      li.setAttribute('data-info', book.info);
      li.setAttribute('data-price', book.price);
      li.appendChild(img);

      li.addEventListener('click', openBook);

      content.appendChild(li);
    }
  }
}

// Регулируем видимость карточки
function toggleCardVisible () {
 document.getElementById('content').classList.toggle('hidden');
 document.getElementById('card').classList.toggle('hidden');
}

function openBook(event) {
    let target = null;
    if (event.target.tagName === 'LI') {
        target = event.target;
    }
    if (event.target.parentNode.tagName === 'LI') {
        target = event.target.parentNode;
    }

    if (target) {
      toggleCardVisible();
      document.getElementById('card-title').innerHTML = target.dataset.title;
      document.getElementById('card-author').innerHTML = target.dataset.author;
      document.getElementById('card-info').innerHTML = target.dataset.info;
      document.getElementById('card-price').innerHTML = target.dataset.price;
    }
}

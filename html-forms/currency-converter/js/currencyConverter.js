const content = document.getElementById('content');
const source = document.getElementById('source');
const sourceFrom = document.getElementById('from');
const sourceTo = document.getElementById('to');
const result = document.getElementById('result');
const loader = document.getElementById('loader');
let currencies;

const request = new XMLHttpRequest();
request.addEventListener("readystatechange", onReadyCurrency);
request.open('GET', 'https://neto-api.herokuapp.com/currency', true);
request.send();
loader.classList.remove('hidden');

source.addEventListener('keyup', calculate);
sourceFrom.addEventListener('change', calculate);
sourceTo.addEventListener('change', calculate);

function calculate() {
  const sourceValue = parseFloat(source.value);
  const sourceFromValue = parseFloat(sourceFrom.value);
  const sourceToValue = parseFloat(sourceTo.value);

  result.innerHTML = (sourceValue / sourceToValue * sourceFromValue).toFixed(2);
}

function onReadyCurrency() {
  if (request.status === 200 && request.readyState === 4) {
    currencies = JSON.parse(request.responseText);
    content.classList.remove('hidden');

    currencies.forEach((currency) => {
      const option = document.createElement('option');
      option.value = currency.value;
      option.innerHTML = currency.code;
      option.title = currency.title;

      sourceFrom.appendChild(option);
      sourceTo.appendChild(option.cloneNode(true));
    });

    calculate();
  }
  loader.classList.add('hidden');
}
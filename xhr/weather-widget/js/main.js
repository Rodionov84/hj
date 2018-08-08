const request = new XMLHttpRequest();
request.addEventListener("readystatechange", onReadyStateChange);
request.open('GET', 'https://netology-fbb-store-api.herokuapp.com/weather', true);
request.send();

function onReadyStateChange() {
  if (request.status === 200 && request.readyState === 4) {
    const response = JSON.parse(request.responseText);
    setData(response);
  }
}
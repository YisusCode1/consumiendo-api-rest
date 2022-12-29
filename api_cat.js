const URL = 'https://api.thecatapi.com/v1/images/search';

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  fetch(URL)
    .then(res => res.json())
    .then(data => {
      const img = document.querySelector('img');
      img.src = data[0].url;
    });
});

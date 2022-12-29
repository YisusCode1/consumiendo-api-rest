const URL = 'https://api.thecatapi.com/v1/images/search';
async function getData() {
    const response = await fetch(URL);
    return await response.json();
  }
  
  const btn = document.querySelector('#btn');
  
  btn.addEventListener('click', async () => {
    const data = await getData();
    const img = document.querySelector('img');
    img.src = data[0].url;
  });
  
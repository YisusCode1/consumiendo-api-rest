console.log('Hello world')

const URL = 'https://api.thecatapi.com/v1/images/search';

fetch(URL)  
// devuelve una promesa con el metodo then
//res es respuesta y lo convierte ese objeto a un metodo de js
// en data recibimos otra respuesta esta vez de la estructura con todas sus propiedades
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector('img');
        //modificando la propiedad src
        img.src = data[0].url;
    });
    
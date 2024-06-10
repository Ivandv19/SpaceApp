// Definición de la URL de la API de la NASA para obtener imágenes relacionadas con el espacio
const url = 'https://api.nasa.gov/planetary/apod?api_key=je5e0Ea2hTgbHjumbfYV7PxzWeGUXdVHntdsJY7G&count=15';

// Función asincrónica para obtener y mostrar las imágenes desde la API de la NASA
async function listaImagenes() {
    try {
        // Realiza una solicitud fetch a la URL de la API
        let fetchImagen = await fetch(url);

        // Convierte la respuesta a formato JSON
        let datosImagenes = await fetchImagen.json();

        // Selecciona el elemento del DOM donde se mostrarán las imágenes
        const card = document.querySelector('[data-ul]');

        // Itera sobre los datos obtenidos y genera el HTML para cada imagen
        datosImagenes.forEach(elemento => {
            const contenido = 
            `<li class="card">
                <img class="card__image" src="${elemento.url}" alt="imagen">
                <h3 class="card__title">${elemento.title}</h3>
            </li>`;
            // Agrega el HTML generado al contenido del elemento del DOM
            card.innerHTML = card.innerHTML + contenido;
        });
    } catch(error) {
        // Manejo de errores: muestra cualquier error en la consola
        console.log(error);
    }
}

// Llama a la función para obtener y mostrar las imágenes
listaImagenes();
// Variables
const form = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners() {
    // Cuando el usuario agrega un nuevo Tweet
    form.addEventListener('submit', agregarTweet);

    // Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        crearHTML();
    });
}

// Funciones
function agregarTweet(e) {
    e.preventDefault();

    // Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value.trim();

    // Validación 
    if (tweet === '') {
        mostrarError('El tweet no puede ir vacío');
        return; // Corta la línea de código
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    // Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    // Agregar al Html
    crearHTML();

    // Reiniciar el formulario
    form.reset();
}

// Mostrar Mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertar en el HTML
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Elimina alerta
    setTimeout(() => {
        mensajeError.remove();
    }, 2500);
}

// Muestra un listado de los tweets
function crearHTML() {
    limparHTML();

    if (tweets.length > 0) {
        tweets.forEach(tweet => {
            // Agregando boton de eliminar
            const btnDelete = document.createElement('A');
            btnDelete.classList.add('borrar-tweet');
            btnDelete.textContent = 'X';

            // Añadir la función de eliminar
            btnDelete.onclick = () => {
                borrarTweet(tweet.id);
            }

            // Crear HTML
            const li = document.createElement('LI');

            // Añadir el texto
            li.textContent = tweet.tweet;

            // Asingar texto
            li.appendChild(btnDelete);

            // Insertar en el HTML
            listaTweets.appendChild(li);
        })
    }

    sincronizarStorage();
}

// Agregar los tweets actuales a LocalStorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

// Eliminar un tweet
function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML();
}

// Limpiar el HTML
function limparHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}
// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners();

function cargarEventListeners() {
    // Cuando agregas un curso presionando el btn "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);
}

// Fuciones
function agregarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCard(cursoSeleccionado);
    }
}

// Lee el contendio HTML y extrae información
function leerDatosCard(curso) {
    console.log(curso);

    // Crear un objeto con el contenido del curso actual
    const infoCusro = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    console.log(infoCusro);
}


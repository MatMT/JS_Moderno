// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
    // Cuando agregas un curso presionando el btn "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; // Reseteamos el arreglo
        limpiarHTML();  // Eliminamos el HTML
    })
}

// Fuciones
function agregarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCard(cursoSeleccionado);
    }
}

// Elimina un curso del carrito
function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');
        const cursoSeleccionado = articulosCarrito.filter(curso => curso.id == cursoId);

        // Si la cantidad del articulo > 1 disminuye
        if (cursoSeleccionado[0].cantidad > 1) {
            // Actualizamos la cantidad en un nuevo arreglo
            const cursos = articulosCarrito.map(curso => {
                if (curso.id === cursoId) {
                    curso.cantidad--;
                    return curso; // Retorna el objeto acutalizado
                } else {
                    return curso; // Retorna los objetos que no son duplicados
                }
            });
            articulosCarrito = [...cursos];

        } else { // Sino lo EXCLUYE
            // Elimina del arreglo de articulosCarrito por el data-id
            articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        }

        carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
    }
}

// Lee el contendio HTML y extrae información
function leerDatosCard(curso) {
    // console.log(curso);

    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Comprobar si ya existe el articulo en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if (existe) {
        // Actualizamos la cantidad en un nuevo arreglo
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; // Retorna el objeto acutalizado
            } else {
                return curso; // Retorna los objetos que no son duplicados
            }
        });

        articulosCarrito = [...cursos];
    } else {
        // Agrega elementos al arreglo del carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    console.log(articulosCarrito);
    carritoHTML()
}

// Muestra el Carrito en el HTML
function carritoHTML() {
    // Limpiar el HTML
    limpiarHTML();

    // Recorre el carrito y genera HTML
    articulosCarrito.forEach(curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>               
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;

        // Agrega el HTML del carrito
        contenedorCarrito.appendChild(row);
    });
}

// Elimina los carritos del tbody
function limpiarHTML() {
    // Performance Lento
    // contenedorCarrito.innerHTML = '';

    // Performance mejor
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

console.log(carrito);
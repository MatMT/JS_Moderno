const cargarJsBtn = document.querySelector('#cargarJSON');
cargarJsBtn.addEventListener('click', cargarJs);

function cargarJs() {
    const url = 'data/empleado.json';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(respuesta => mostrarHTML(respuesta))
}

function mostrarHTML({ empresa, id, nombre, trabajo }) {
    const contenido = document.querySelector('.contenido');
    contenido.innerHTML = `
    <p>Empleado: ${nombre}</p>
    <p>ID: ${id}</p>
    <p>Empresa: ${empresa}</p>
    <p>Trabajo: ${trabajo}</p>
    `
}
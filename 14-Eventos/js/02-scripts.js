const nav = document.querySelector('.navegacion');

// Registrar un evento
nav.addEventListener('dblclick', () => {
    console.log('entrando en nav');
    nav.style.backgroundColor = 'white';
})

nav.addEventListener('mouseup', () => {
    console.log('saliendo en nav');
    nav.style.backgroundColor = 'transparent';
})

// mousedown - similar al click
// mouseuo - al soltar el mouse
// click
// dblclick = doble click
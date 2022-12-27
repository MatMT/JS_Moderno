const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('keydown', () => {
//     console.log('escribiendo...');
// })

// busqueda.addEventListener('keyup', () => {
//     console.log('dejando de escribir...');
// })

// busqueda.addEventListener('blur', () => {
//     console.log('Validación');
// })

// busqueda.addEventListener('copy', () => {
//     console.log('Copiando');
// })

// busqueda.addEventListener('paste', () => {
//     console.log('Pegando');
// })

// busqueda.addEventListener('cut', () => {
//     console.log('Cortando');
// })

// Recibe todos los eventos menos el de blur
busqueda.addEventListener('input', (e) => {
    if (e.target.value == '') {
        console.log('fallo la validación');
    }

    console.log(e.target.value);
})


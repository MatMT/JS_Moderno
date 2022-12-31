localStorage.setItem('nombre', 'Mateo');
sessionStorage.setItem('apellido', 'Elías');

const producto = { nombre: 'Teclado', precio: 50 }
const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);

const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses', JSON.stringify(meses));
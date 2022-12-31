const nombre = localStorage.getItem('nombre');
const productoJSON = localStorage.getItem('producto');
const meses = localStorage.getItem('meses');

console.log(nombre);
console.log(JSON.parse(productoJSON));
console.log(JSON.parse(meses));
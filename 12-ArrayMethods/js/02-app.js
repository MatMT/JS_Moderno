const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Encontrar el indice de Abril
const indiceMes = meses.findIndex(mes => mes === 'Diciembre');
console.log(indiceMes);

// -1 Denota que no lo encontro

// Encontrar el indice de un arreglo de objetos...
const indice = carrito.findIndex(producto => producto.nombre === 'Teclado');
console.log(indice);
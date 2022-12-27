const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//  ForEach
let resultado = '';
carrito.forEach((producto, index) => {
    if (producto.nombre === 'Tablet') {
        resultado = carrito[index]
    }
});

console.log(resultado);

// .find - retorna primer elemento de la condición
const resultado2 = carrito.find(producto => producto.nombre === 'Tablet');
console.log(resultado2);
const carrito = [
    { nombre: 'Monitor  20', precio: 500 },
    { nombre: 'Pantalla 22', precio: 600 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Televisión', precio: 100 }
];

// .Map
const nuevoArreglo = carrito.map(producto => `${producto.nombre} - Precio: ${producto.precio}`);

// ForEach
carrito.forEach(producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`));

console.log(nuevoArreglo);
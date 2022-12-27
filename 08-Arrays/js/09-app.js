const carrito = [
    { nombre: 'Monitor  20', precio: 500 },
    { nombre: 'Pantalla 22', precio: 600 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Televisión', precio: 100 }
];

// Iterador
for (let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

// ForEach
carrito.forEach(function (producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})
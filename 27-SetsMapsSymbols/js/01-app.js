const carrito = new Set();

carrito.add('Camisa');
carrito.add('Camisa 2');
carrito.add('Camisa 3');

carrito.forEach(producto => {
    console.log(producto);
})

carrito.delete('Camisa');
console.log(carrito.has('Camisa'));
console.log(carrito);
console.log(carrito.size);

// Eliminar duplicados
const numeros = [10, 20, 30, 40, 50, 10, 30];
const noDuplicados = new Set(numeros);

console.log(noDuplicados);
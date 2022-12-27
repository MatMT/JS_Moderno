const carrito = [];

// Definir un producto
const producto = {
    nombre: 'Monitor',
    precio: 20
}

const producto2 = {
    nombre: 'Teléfono',
    precio: 50
}

const producto3 = {
    nombre: 'Teclado',
    precio: 10
}

carrito.push(producto2, producto);
carrito.unshift(producto3);

// Eliminar último elemento de un arreglo...
// carrito.pop();

// Eliminar del inicio de un arreglo
// carrito.shift();

// Eliminar a patir de cierta 
carrito.splice(1, 1);

console.table(carrito);
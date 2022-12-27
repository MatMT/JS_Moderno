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

// | Forma Imperativa | 
// Agregar al carrito
carrito.push(producto2, producto);
carrito.unshift(producto3);

console.table(carrito);
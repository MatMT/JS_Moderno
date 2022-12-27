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

// | Forma Declarativa |
let resultado;

resultado = [...carrito, producto, producto2];
resultado = [producto3, ...resultado];

console.table(resultado);
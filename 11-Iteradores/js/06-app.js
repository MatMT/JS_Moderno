// forEach
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Js'];

pendientes.forEach(pendiente => console.log(pendiente))

console.log('\n');

pendientes.forEach((pendiente, indice) => {
    console.log(`${pendiente} - ${indice}`)
})

// Ejemplo con arreglo
const carrito = [
    { nombre: 'Monitor  20', precio: 500 },
    { nombre: 'Pantalla 22', precio: 600 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Televisión', precio: 100 }
];

console.log('\n');
carrito.forEach(productos => console.log(productos.nombre));

// Para crear una copia en un nuevo arreglo
console.log('\n');
carrito.map(productos => console.log(productos.nombre));
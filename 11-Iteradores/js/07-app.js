// for of
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Js'];

// Ejemplo con objetos
const carrito = [
    { nombre: 'Monitor  20', precio: 500 },
    { nombre: 'Pantalla 22', precio: 600 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Televisión', precio: 100 }
];

for (let pendiente of pendientes) {
    console.log(pendiente);
}

for (let producto of carrito) {
    console.log(producto.precio);

}
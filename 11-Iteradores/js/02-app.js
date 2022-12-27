// for (let i = 0; i <= 20; i++) {
//     if (i === 5) {
//         console.log('Este es el ' + i);
//         continue;
//     }
//     console.log(i);
// }

const carrito = [
    { nombre: 'Monitor  20', precio: 500 },
    { nombre: 'Pantalla 22', precio: 600, descuento: true },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Televisión', precio: 100 }
];

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log('Este producto tiene descuento ' + carrito[i].nombre);
        continue;
    }
    console.log(carrito[i].nombre);
}
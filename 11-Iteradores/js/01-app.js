// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }

// for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log('Es par ' + i);
//     } else {
//         console.log('Es impar ' + i);
//     }
// }

const carrito = [
    { nombre: 'Monitor  20', precio: 500 },
    { nombre: 'Pantalla 22', precio: 600 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Televisión', precio: 100 }
];

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}
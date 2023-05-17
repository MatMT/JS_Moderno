const ciudades = ['Londres', 'New York', 'Madrid'];
const ordenes = new Set([123, 231, 131]);
const datos = new Map();

datos.set('nombre', 'Juan');
datos.set('profesion', 'Desarrollo Web');

// Default
// for (let ciudad of ciudades) {
//     console.log(ciudad);
// }
// for (let orden of ordenes) {
//     console.log(orden);
// }
// for (let dato of datos) {
//     console.log(dato);
// }

// Keys Iterator
// for (let keys of ciudades.keys()) {
//     console.log(keys);
// }
// for (let keys of ordenes.keys()) {
//     console.log(keys);
// }
// for (let keys of datos.keys()) {
//     console.log(keys);
// }

// Values Iterator
// for (let value of ciudades.values()) {
//     console.log(value);
// }
// for (let value of ordenes.values()) {
//     console.log(value);
// }
// for (let value of datos.values()) {
//     console.log(value);
// }

// Entries Iterator
// for (let entry of ciudades.entries()) {
//     console.log(entry);
// }
// for (let entry of ordenes.entries()) {
//     console.log(entry);
// }
// for (let entry of datos.entries()) {
//     console.log(entry);
// }
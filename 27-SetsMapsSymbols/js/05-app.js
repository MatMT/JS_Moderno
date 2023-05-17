const sym = Symbol();
const sym2 = Symbol();

// if (sym === sym2) {
//     console.log('Son iguales');
// } else {
//     console.log('Son diferentes');
// }

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agrega el nombre y el apellido como las llaves del objeto
persona[nombre] = 'Oscar';
persona[apellido] = 'Elías';
persona.tipoCliente = 'Premium';

// console.log(persona[nombre]);
// Las propiedades que utilizan mediante un symbol no son iterables
for (let i in persona) {
    console.log(i);
}

// Definir una descripción del Symbol
const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {};

cliente[nombreCliente] = 'Pedro';
console.log(cliente[nombreCliente]);
console.log(nombreCliente);
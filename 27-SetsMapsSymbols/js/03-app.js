const cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');

// Evalua según llave
console.log(cliente.has('nombre'));
console.log(cliente.size);

const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]);
paciente.set('nombre', 'Antonio')

console.log(paciente);

paciente.forEach((datos, index) => {
    console.log(index);
});
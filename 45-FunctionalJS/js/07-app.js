// Funciones que retornan una función
const obtenerCliente = () => () => console.log('Mateo');
const fn = obtenerCliente();

fn();
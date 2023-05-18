import Alias, { nombre, ahorro, mostrarInfo, tieneSaldo, Cliente } from './cliente.js';
import { Empresa } from './empresa.js';

Alias();
console.log(nombre, ahorro);
console.log(mostrarInfo(nombre, ahorro));
tieneSaldo(ahorro);

const cliente = new Cliente(nombre, ahorro);
console.log(cliente.mostrarInfo());

// Importar empresa
const empresa = new Empresa('Óscar', 100, 'Web Desing');
console.log(empresa.mostrarInfo());
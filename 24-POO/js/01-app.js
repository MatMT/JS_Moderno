// Declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const juan = new Cliente('Juan', 400);
console.log(juan);

// Expressión
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const juan2 = new Cliente2('Mateo', 500);
console.log(juan2);

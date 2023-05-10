// Declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, saldo ${this.saldo}`;
    }

    // Desde la clase
    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

console.log(Cliente.bienvenida());

const juan = new Cliente('Juan', 400);
console.log(juan);
console.log(juan.mostrarInformacion());

// Expressión
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, saldo ${this.saldo}`;
    }
}

const juan2 = new Cliente2('Mateo', 500);
console.log(juan2);
console.log(juan2.mostrarInformacion());
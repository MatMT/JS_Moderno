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

// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        // Clase padre
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    // Reescribir método
    static bienvenida() {
        return `Bienvenido al cajero de empresas`;
    }
}
console.log(Empresa.bienvenida());
const empresa = new Empresa('CódigoMT', 500);

console.log(empresa.mostrarInformacion());
console.log(empresa);
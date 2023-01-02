function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
    let tipo;

    if (this.saldo > 1000) {
        tipo = 'Gold'
    } else if (this.saldo > 500) {
        tipo = 'Platino'
    } else {
        tipo = 'Normal'
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function (retira) {
    this.saldo -= retira;
}

// Instanciarlo 
const eli = new Cliente('Eías', 600);
console.log(eli.tipoCliente());
console.log(eli);

eli.retiraSaldo(1400);
console.log(eli.nombreClienteSaldo());

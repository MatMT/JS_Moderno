const cliente = {
    nombre: 'Mat',
    saldo: 100
}

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}
const mat = new Cliente('Mateo', 300);

console.log(mat);
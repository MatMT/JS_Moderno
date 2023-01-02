function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}
const mat = new Cliente('Mateo', 300);

function formatearCliente(cliente) {
    const { nombre, saldo } = cliente;
    return `El Cliente ${nombre} tiene un saldo de ${saldo}`;
};

function formatearEmpresa(cliente) {
    const { nombre, saldo, categoria } = cliente;
    return `El Cliente ${nombre} tiene un saldo de ${saldo}, y pertenece a la categoría ${categoria}`;
};

console.log(formatearCliente(mat));

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCM = new Empresa('Código con Mat', 4000, 'Cursos en línea');
console.log(formatearEmpresa(CCM));

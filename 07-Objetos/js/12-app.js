// Object Literal
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 200,
    disponible: true
}

// Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true
}

const producto2 = new Producto('Carro', 1200);

console.log(producto2);

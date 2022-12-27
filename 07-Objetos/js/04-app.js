const producto = {
    // Propiedad - llave del objeto
    nombre: "Monitor de 20 pulgadas",
    precio: 200,
    disponible: true
}

// const nombre = producto.nombre;
// console.log(nombre);

// Destructuring
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);

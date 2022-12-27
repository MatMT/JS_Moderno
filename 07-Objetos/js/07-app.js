const producto = {
    // Propiedad - llave del objeto
    nombre: "Monitor de 20 pulgadas",
    precio: 200,
    disponible: true
}

producto.disponible = false;
delete producto.precio;

console.log(producto);
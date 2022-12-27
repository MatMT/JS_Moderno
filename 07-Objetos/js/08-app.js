"use strict";

const producto = {
    // Propiedad - llave del objeto
    nombre: "Monitor de 20 pulgadas",
    precio: 200,
    disponible: true
}

Object.freeze(producto);
// producto.imagen = "Imagen.jpg";
// producto.disponible = false;
// delete producto.precio;

console.log(producto);
console.log(Object.isFrozen(producto));
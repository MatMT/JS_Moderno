"use strict";

const producto = {
    // Propiedad - llave del objeto
    nombre: "Monitor de 20 pulgadas",
    precio: 200,
    disponible: true
}

Object.seal(producto);

producto.disponible = false;


// Declaration
obtenerCliente('Juan');             // 2°

function obtenerCliente(nombre) {   // 1°
    console.log(`El nombre del cliente es ${nombre}`);
}

// Expressión
const obtenerCliente2 = function (nombre) {
    console.log(`El nombre del usuario es ${nombre}`);
}

obtenerCliente2('Óscar');

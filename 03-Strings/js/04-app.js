const producto = '   Monitor    ';
console.log(producto.length);

// Eliminar espacio blanco de inicio
console.log(producto.trimStart().length);
// Eliminar espacio blanco de final
console.log(producto.trimEnd().length);

// Ambos
console.log(producto.trimStart().trimEnd().length);

// Todo
console.log(producto.trim().length);

const producto = "Monitor 20 ";
const precio = "$20 USD ";

// Concatenar Strings
console.log(producto.concat(precio));
console.log(producto.concat('En descuento'));

// Con signos
console.log(producto + "con un precio de " + precio);
console.log(producto, "con un precio de ", precio);

// Ecma 6 - Templates String - Backtick
console.log(`El producto ${producto} tiene un precio de ${precio}`);
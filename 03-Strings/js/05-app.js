const producto = 'Monitor';

// .replace para reemplazar
console.log(producto);
console.log(producto.replace('Mo', 'Pantalla'));

// .slice para cortar
console.log(producto.slice(0, 2));
console.log(producto.slice(2));
console.log(producto.slice(2, 0));

// Alternativa a slice
console.log(producto.substring(0, 2));
console.log(producto.substring(2, 0));

const usuario = 'Mateo';
console.log(usuario.substring(0, 1));

// Cortar primera letra
console.log(usuario.charAt(0));

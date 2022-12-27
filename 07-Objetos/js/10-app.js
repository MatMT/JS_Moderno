const producto = {
    // Propiedad - llave del objeto
    nombre: "Monitor de 20 pulgadas",
    precio: 200,
    disponible: true
}

const medidas = {
    peso: '1kg',
    media: '1m'
}

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);
console.log(resultado);

// Spread Operator o Rest Operator
const resultado2 = { ...producto, ...medidas };
console.log(resultado2);

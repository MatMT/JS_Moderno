function sumar(a, b) {
    return a + b;
}

const resultado = sumar(2, 3);

// console.log(resultado);

// Ejemplo complejo

let total = 0;

function addCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return total = total + (total * .3);
}

total = addCarrito(200);
total = addCarrito(300);
total = addCarrito(500);

const totalPagar = calcularImpuesto(total);

console.log(total);
console.log(`El Total a pagar es de ${totalPagar}`);


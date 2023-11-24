// Probar 2 valores
function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

let resultado = suma(2, 2);
let esperado = 3;

if (resultado !== esperado) {
    console.error('Algo esta mal');
} else {
    console.log('La prueba paso correctamente');
}

// Ejemplo 2

let resultado2 = restar(10, 5);
let esperado2 = 6;

if (resultado2 !== esperado2) {
    console.error('Algo esta mal');
} else {
    console.log('La prueba paso correctamente');
}
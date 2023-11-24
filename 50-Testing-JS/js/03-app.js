// Probar 2 valores
function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

// Asíncrono
async function sumaAsync(a, b) {
    return Promise.resolve(suma(a, b));
}

async function test(mensaje, callback) {
    try {
        await callback();
        console.log(mensaje);
    } catch (error) {
        console.error('Error');
        console.error(error);
    }
}

test('10 + 20 = 30', async () => {
    const resultado = await sumaAsync(10, 20);
    esperado = 30;
    expected(esperado).toBe(resultado);
})


// Ejemplo | Similar a Jest =============

function expected(esperado) {
    return {
        toBe(resultado) {
            if (resultado !== esperado) {
                console.error('Algo esta mal');
            } else {
                console.log('La prueba paso correctamente');
            }
        },
        toEqual(resultado) {
            if (resultado !== esperado) {
                console.error('Algo esta mal');
            } else {
                console.log('La prueba paso correctamente');
            }
        }
    }
}

let resultado = suma(2, 2);
let esperado = 3;

let resultado2 = restar(10, 5);
let esperado2 = 5;

// =====
// expected(esperado2).toBe(resultado2);
// =====
// expected(esperado).toBe(resultado);
// expected(esperado).toEqual(resultado);



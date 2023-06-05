const paises = [];

function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`Agregado: ${pais}`);
    callback();
}

function mostrarPaises() {
    console.log(paises);
}

function initCallHell() {
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises)
        setTimeout(() => {
            nuevoPais('Francia', mostrarPaises)
        }, 3000);
    }, 3000);
}

initCallHell();
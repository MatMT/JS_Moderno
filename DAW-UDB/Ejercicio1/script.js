// Variables y selectores
const resultados = document.querySelector('.contenido');
let valores;

// Clase de Cantidad y sus aspectos a evaluar
class Cantidad {
    constructor(cantidad) {
        this.cantidad = Number(cantidad);
        // Funciones determinantes
        this.cantidadCifras(cantidad);
        this.cantidadCifrasPares(cantidad)
        this.cantidadCifrasImpares(cantidad)
        this.obtenerSumaCifrasPares(cantidad);
        this.obtenerSumaCifrasImpares(cantidad);
        this.obtenerSumaTodasCifras(cantidad);
        this.obtenerCifraMayor(cantidad);
        this.obtenerCifraMenor(cantidad);
    }

    cantidadCifras(cantidad) {
        let cantidadString = cantidad.toString();
        this.cifras = cantidadString.length;
    }

    cantidadCifrasPares(cantidad) {
        // Retorna un arreglo separando cada "número"
        let cifrasPares = cantidad.toString().split('');
        cifrasPares = cifrasPares.filter(cifra => parseInt(cifra) % 2 === 0).length;

        this.cifrasPares = cifrasPares;
    }

    cantidadCifrasImpares(cantidad) {
        // Retorna un arreglo separando cada "número"
        let cifrasImpares = cantidad.toString().split('');
        cifrasImpares = cifrasImpares.filter(cifra => parseInt(cifra) % 2 !== 0).length;

        this.cifrasImpares = cifrasImpares;
    }

    obtenerSumaCifrasPares(cifra) {
        const cifras = cifra.toString().split('');
        this.sumaCifraPar = cifras.reduce((suma, cifra) => {
            if (parseInt(cifra) % 2 === 0) {
                return suma + parseInt(cifra);
            }
            return suma;
        }, 0);
    }

    obtenerSumaCifrasImpares(cifra) {
        let cifras = cifra.toString().split('');
        this.sumaCifraImpar = cifras.reduce((suma, cifra) => {
            if (parseInt(cifra) % 2 !== 0) {
                return suma + parseInt(cifra);
            }
            return suma;
        }, 0);
    }

    obtenerSumaTodasCifras(cifra) {
        let cifras = cifra.toString().split('');
        this.sumaTodos = cifras.reduce((suma, cifra) => suma + parseInt(cifra), 0);
    }

    obtenerCifraMayor(cifra) {
        let cifras = cifra.toString().split('');
        this.mayor = Math.max(...cifras.map(cifra => parseInt(cifra)));
    }

    obtenerCifraMenor(cifra) {
        let cifras = cifra.toString().split('');
        this.menor = Math.min(...cifras.map(cifra => parseInt(cifra)));
    }
}

// Validación de prompt
function preguntarCantidad() {
    numUser = prompt('Ingrese un número a evaluar');
    if (numUser === '' || numUser === null || isNaN(numUser)) {
        window.location.reload();
    }

    // Instanciar la clase
    numUser = new Cantidad(numUser);
}

preguntarCantidad();

// Iterar llave valor de un objeto
for (let cifra in numUser) {
    const valor = numUser[cifra];
    const parrafoValor = document.createElement('P');
    parrafoValor.innerHTML = `<span class="font-semibold">${cifra} </span> : ${valor}`;

    // Imprimir
    resultados.appendChild(parrafoValor);
}



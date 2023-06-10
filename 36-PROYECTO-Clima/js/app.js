const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
})

// Funciones
function buscarClima(e) {
    e.preventDefault();

    // Validar
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    // Consultar
    if (ciudad === '' || pais === '') {
        imprimirAlerta('Los campos estan vacios');
        return;
    }

    // Consultar API
    consultarAPI(ciudad, pais);
}

function consultarAPI(ciudad, pais) {
    const appId = '4ed9281e98a292247b74a85f8e0e432a';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    Spinner(); // Muestra un Spinner de carga

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            limpiarHTML(); // Limpiar el HTML previo
            if (datos.cod === "404") {
                imprimirAlerta('Ciudad no encontrada');
                return;
            }

            // Imprimir respuesta en el HTML
            mostrarClima(datos);
        }
        );
}

function imprimirAlerta(mensaje) {
    // Crear alerta
    const alerta = document.querySelector('.alerta');

    if (!alerta) {
        const divAlerta = document.createElement('DIV');
        divAlerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center', 'alerta');
        divAlerta.innerHTML = `
        <strong class="font-bold">¡Error!</strong>
        <span class="block">${mensaje}</span>
        `;

        container.appendChild(divAlerta);

        // Eliminar alerta
        setTimeout(() => {
            divAlerta.remove();
        }, 3500);
    }
}

function mostrarClima(datos) {
    const { name, main: { temp, temp_max, temp_min } } = datos;
    const centigrados = formatTemp(temp);
    const max = formatTemp(temp_max);
    const min = formatTemp(temp_min);

    const nombreCiudad = document.createElement('p');
    nombreCiudad.textContent = `Clima en ${name}`;
    nombreCiudad.classList.add('font-bold', 'text-2xl');

    const actual = document.createElement('p');
    actual.innerHTML = `${centigrados} &#8451`;
    actual.classList.add('font-bold', 'text-6xl');

    const tempMaxima = document.createElement('p');
    tempMaxima.innerHTML = `Max: ${max} &#8451`;
    tempMaxima.classList.add('text-xl');

    const tempMinima = document.createElement('p');
    tempMinima.innerHTML = `Min: ${min} &#8451`;
    tempMaxima.classList.add('text-xl');


    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMaxima);
    resultadoDiv.appendChild(tempMinima);

    resultado.appendChild(resultadoDiv);

}

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function Spinner() {
    limpiarHTML();

    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML = `
    <div class="sk-circle1 sk-circle"></div>
    <div class="sk-circle2 sk-circle"></div>
    <div class="sk-circle3 sk-circle"></div>
    <div class="sk-circle4 sk-circle"></div>
    <div class="sk-circle5 sk-circle"></div>
    <div class="sk-circle6 sk-circle"></div>
    <div class="sk-circle7 sk-circle"></div>
    <div class="sk-circle8 sk-circle"></div>
    <div class="sk-circle9 sk-circle"></div>
    <div class="sk-circle10 sk-circle"></div>
    <div class="sk-circle11 sk-circle"></div>
    <div class="sk-circle12 sk-circle"></div>
     `;

    resultado.appendChild(divSpinner);
}

// Kelvin a Centigrados
const formatTemp = (grados) => parseInt(grados - 273.15);

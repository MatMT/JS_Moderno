const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedasSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}

// Crear un Promise
const obtenerCriptomonedas = criptomonedas => new Promise(resolve => {
    resolve(criptomonedas);
});

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptos();

    formulario.addEventListener('submit', submitForm);

    criptomonedasSelect.addEventListener('change', leerValor);
    monedasSelect.addEventListener('change', leerValor);
})

async function consultarCriptos() {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=5&tsym=USD`;

    // fetch(url)
    //     .then(respuesta => respuesta.json())
    //     .then(resultado => obtenerCriptomonedas(resultado.Data))
    //     .then(criptomonedas => selectCriptos(criptomonedas));

    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        const criptomonedas = await obtenerCriptomonedas(resultado.Data);
        selectCriptos(criptomonedas);
    } catch (error) {
        console.log(error);
    }
}

function selectCriptos(criptomonedas) {

    criptomonedas.forEach(cripto => {
        const { FullName, Name } = cripto.CoinInfo;
        const optionMoneda = document.createElement('OPTION');

        optionMoneda.value = Name;
        optionMoneda.textContent = FullName;
        criptomonedasSelect.appendChild(optionMoneda);
    });
}

function leerValor(e) {
    objBusqueda[e.target.name] = e.target.value;
}

function submitForm(e) {
    e.preventDefault();

    // Validar
    const { moneda, criptomoneda } = objBusqueda;

    if (moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }

    // Consultar API con los datos del usurio
    consultarAPI();
}

function mostrarAlerta(msg) {
    const existError = document.querySelector('.error');

    if (!existError) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');
        // Texto de error
        divMensaje.textContent = msg;
        formulario.appendChild(divMensaje);


        // Eliminar 
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}

async function consultarAPI() {
    const { moneda, criptomoneda } = objBusqueda;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    mostrarSpinner();

    // fetch(url)
    //     .then(respuesta => respuesta.json())
    //     .then(cotizacion => {
    //         mostrarCotizacion(cotizacion.DISPLAY[criptomoneda][moneda]);
    //     });
    try {
        const respuesta = await fetch(url);
        const cotizacion = await respuesta.json();
        mostrarCotizacion(cotizacion.DISPLAY[criptomoneda][moneda])
    } catch (error) {
        console.log(error);
    }


}

function mostrarCotizacion(cotizacion) {
    limpiarHTML();

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;
    const precio = document.createElement('P');
    precio.innerHTML = `El Precio es: <span>${PRICE}</span>`;

    const precioAlto = document.createElement('P');
    precioAlto.innerHTML = `Precio más alto del día <span>${HIGHDAY}</span>`;

    const precioBajo = document.createElement('P');
    precioBajo.innerHTML = `Precio más bajo del día <span>${LOWDAY}</span>`;

    const ultimasHoras = document.createElement('P');
    ultimasHoras.innerHTML = `Variación últimas 24 horas <span>${CHANGEPCT24HOUR}</span>`;

    const ultimoUpdate = document.createElement('P');
    ultimoUpdate.innerHTML = `Última actualización <span>${LASTUPDATE}</span>`;

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimoUpdate);

}

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarSpinner() {
    limpiarHTML();

    const spinner = document.createElement('DIV');
    spinner.classList.add('spinner');

    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `;

    resultado.appendChild(spinner);
}
// Variables
const buscador = document.querySelector('#buscador');
const resultado = document.querySelector('#resultado');
const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto con los datos de la búsqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    marca: '',
    color: ''
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); // Muestra los autos al cargar

    // Llena las opciones de años
    llenarSelect();
})

// Event listener Padre, Asinga a los valores del objeto con el id de los inputs
buscador.addEventListener('change', e => {
    datosBusqueda[e.target.id] = e.target.value;
    filtrarAuto();
});

// Funciones
function mostrarAutos(autos) {
    LimpiarHTML(); // Elimina HTML previo

    autos.forEach(auto => {
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('P');
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio : ${precio} - Color: ${color}
        `;

        // Insertar en el HTML
        resultado.appendChild(autoHTML);
    });
}

// Limpiar HTML
function LimpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

// Genera los años del select
function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('OPTION');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega las opciones de año al select
    }
}

// Función que filtra en base a la búsqueda
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    if (resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado()
    }
}

function noResultado() {
    LimpiarHTML();

    const noResultado = document.createElement('DIV');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultado, intenta con otros términos';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;

    if (marca) {
        return auto.marca === marca;
    } else {
        return auto;
    }
}

function filtrarYear(auto) {
    const { year } = datosBusqueda;

    if (year) {
        return auto.year === parseInt(year);
    } else {
        return auto;
    }
}

function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda;

    if (minimo) {
        return auto.precio >= minimo;
    } else {
        return auto;
    }
}

function filtrarMaximo(auto) {
    const { maximo } = datosBusqueda;

    if (maximo) {
        return auto.precio <= maximo;
    } else {
        return auto;
    }
}

function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda;

    if (puertas) {
        return auto.puertas === parseInt(puertas);
    } else {
        return auto;
    }
}

function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda;

    if (transmision) {
        return auto.transmision === transmision;
    } else {
        return auto;
    }
}

function filtrarColor(auto) {
    const { color } = datosBusqueda;

    if (color) {
        return auto.color === color;
    } else {
        return auto;
    }
}
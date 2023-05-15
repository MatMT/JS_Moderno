// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

// Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', () => preguntarPresupuesto());

    formulario.addEventListener('submit', agregarGasto);
}

// Classes
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    calcularRestante() {
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        this.calcularRestante();
    }


}

class UI {
    insertarPresupuesto(cantidad) {
        // Extrayendo los valores
        const { presupuesto, restante } = cantidad;

        // Agregar al HTMl
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo) {
        // crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'mensaje');

        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success')
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el HTML
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        // Quitar del HTML
        setTimeout(() => {
            divMensaje.remove();
        }, 2500);
    }

    mostarGastos(gastos) {
        this.limpiarHTML(); // Elimina el HTML previo

        // Iterar sobre los gastos
        gastos.forEach(gasto => {
            const { cantidad, nombre, id } = gasto;
            // Crear LI
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id;

            // Agregar al HTML
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> $${cantidad}</span>`;

            // Boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = `Borrar &times;`;
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);

            // Agregar al HTMl
            gastoListado.appendChild(nuevoGasto);
        });
    }

    limpiarHTML() {
        while (gastoListado.firstChild) {
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuest(presupuestObj) {
        const { presupuesto, restante } = presupuestObj;
        const restanteDiv = document.querySelector('.restante');

        // Comprobrar 25%
        if ((presupuesto / 4) > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if ((presupuesto) / 2 > restante) {
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('aler-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }

        // Si el total es 0 o menor
        if (restante <= 0) {
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
}

// Instanciar
const ui = new UI();
let presupuesto;

// Funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cúal es tu presupuesto?');
    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario)) {
        window.location.reload();
    }

    // Pesupuesto definido
    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto);
}

// Añade gastos
function agregarGasto(e) {
    e.preventDefault();

    // Leer datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    if (nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Cantidad no válida', 'error');
        return;
    }

    // Generar objeto tipo gasto
    const gasto = { nombre, cantidad, id: Date.now() }

    // Añade un nuevo gasto
    presupuesto.nuevoGasto(gasto);

    // Mensaje de éxito
    ui.imprimirAlerta('Gasto agregado Correctamente');

    // Imprimir gastos
    const { gastos, restante } = presupuesto;
    ui.mostarGastos(gastos);

    // Actualizar datos
    ui.actualizarRestante(restante);

    ui.comprobarPresupuest(presupuesto);

    // Reinicia formulario
    formulario.reset();
}

function eliminarGasto(id) {
    // Elimina del Objeto
    presupuesto.eliminarGasto(id);

    // Elimina del HTML
    const { gastos, restante } = presupuesto;
    ui.mostarGastos(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuest(presupuesto);
}
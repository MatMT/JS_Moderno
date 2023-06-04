let DB;
const formulario = document.querySelector('#formulario');

(function () {
    let idCliente;
    const nombreForm = document.querySelector('#nombre');
    const emailForm = document.querySelector('#email');
    const telefonoForm = document.querySelector('#telefono');
    const empresaForm = document.querySelector('#empresa');

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();
        // Actualiza el registro
        formulario.addEventListener('submit', actualizarCliente);

        // Verificar el ID de la URL
        const parametroURL = new URLSearchParams(window.location.search);
        idCliente = parametroURL.get('id');

        if (idCliente) {
            setTimeout(() => {
                obtenerCliente(idCliente);
            }, 100);
        }

    });

    function actualizarCliente(e) {
        e.preventDefault();

        if (nombreForm.value === '' || emailForm.value === '' || telefonoForm.value === '' || empresaForm.value === '') {
            imprimirAlerta('Existen campos vacios', 'error')
            return;
        }

        // Actualizar Cliente
        const clienteActualizado = {
            nombre: nombreForm.value,
            email: emailForm.value,
            telefono: telefonoForm.value,
            empresa: empresaForm.value,
            id: Number(idCliente)
        }

        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        // Actualiza automaticamente
        objectStore.put(clienteActualizado);

        transaction.oncomplete = function () {
            imprimirAlerta('Editado correctamente');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        }

        transaction.onerror = function () {
            imprimirAlerta('Algo esta mal en los datos del Cliente', 'error')
        }

        console.log(clienteActualizado);
    }

    function obtenerCliente(id) {
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        const cliente = objectStore.openCursor();
        cliente.onsuccess = function (e) {
            const cursor = e.target.result;
            if (cursor) {
                if (cursor.value.id === Number(id)) {
                    llenarFormulario(cursor.value);
                }
                cursor.continue();
            }
        }
    }

    function llenarFormulario(datosCliente) {
        const { nombre, email, telefono, empresa } = datosCliente;
        nombreForm.value = nombre;
        emailForm.value = email;
        telefonoForm.value = telefono;
        empresaForm.value = empresa;
    }

})();
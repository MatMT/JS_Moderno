document.addEventListener('DOMContentLoaded', function () {

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    // Seleecionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const form = document.querySelector('#formulario');

    // Asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    function validar(e) {
        const input = e.target.value;
        const type = e.target.id;
        const divReference = e.target.parentElement;

        if (input.trim() === '') {
            mostrarAlerta(type, divReference);
            return;
        }

        if (type === 'email' && !validarEmail(input)) {
            mostrarAlerta(type, divReference);
            return;
        }

        limpiarAlerta(divReference);

        // Asignar los valores
        email[type] = input.trim().toLowerCase();

        // Comprobar el objeto de email  
        comprobarEmail();

    }

    function mostrarAlerta(type, reference) {
        // Condicional si ya existe una alerta o no
        limpiarAlerta(reference);

        // Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = `El ${type} esta vacío o no es válido.`;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center', 'alerta');

        // Inyectar el error al formulario
        reference.appendChild(error);
    }

    function limpiarAlerta(reference) {
        const alerta = reference.querySelector('.alerta');
        if (alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {
        console.log(Object.values(email).includes(''));
    }

});
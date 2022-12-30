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
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    // Asignar eventos
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    form.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function (e) {
        e.preventDefault();
        resetForm();
    });

    function enviarEmail(e) {
        e.preventDefault();
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.add('hidden');
            resetForm();

            // Crear una alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Email enviado correctamente.'

            setTimeout(() => {
                alertaExito.remove();
            }, 3000);

            form.appendChild(alertaExito);
        }, 2500)
    }

    function validar(e) {
        const input = e.target.value;
        const type = e.target.id;
        const divReference = e.target.parentElement;

        if (input.trim() === '') {
            mostrarAlerta(type, divReference);
            email[type] = '';
            comprobarEmail();
            return;
        }

        if (type === 'email' && !validarEmail(input)) {
            mostrarAlerta(type, divReference);
            email[type] = '';
            comprobarEmail();
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
        if (Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        };
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    }

    function resetForm() {
        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        form.reset();
        comprobarEmail();
    }
});
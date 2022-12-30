document.addEventListener('DOMContentLoaded', function () {

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

        if (!(input.trim())) {
            mostrarAlerta(type, divReference);
        } else {

        }

        function mostrarAlerta(type, reference) {
            // Condicional si ya existe una alerta o no
            const alerta = reference.querySelector('.alerta');

            if (alerta) {
                alerta.remove();
            }

            // Generar alerta en HTML
            const error = document.createElement('P');
            error.textContent = `El campo ${type} esta vacío`;
            error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center', 'alerta');

            // Inyectar el error al formulario
            reference.appendChild(error);

            console.log(error);
        }
    }
});
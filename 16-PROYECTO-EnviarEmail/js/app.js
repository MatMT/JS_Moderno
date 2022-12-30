document.addEventListener('DOMContentLoaded', function () {

    // Seleecionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    // Asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    function validar(e) {
        const input = e.target.value;

        if (!(input.trim())) {
            console.log('vacio');
        } else {
            console.log('Algo');
        }
    }
});
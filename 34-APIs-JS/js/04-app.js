const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const salirBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click', pantallaCompleta);
salirBtn.addEventListener('click', cerrarpantallaCompleta);

function pantallaCompleta() {
    document.documentElement.requestFullscreen();
}

function cerrarpantallaCompleta() {
    document.exitFullscreen();
}
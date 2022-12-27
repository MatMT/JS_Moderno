iniciarApp();

function iniciarApp() {
    console.log('Iniciando App...');
    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda función');
    usuarioAuth('Mati');
}

function usuarioAuth(usuario) {
    console.log('Autenticado usuario... espere...');
    console.log(`Exito, ${usuario}`);
}
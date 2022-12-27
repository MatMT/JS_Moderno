// && Dos condiciones tendro de un if

const usuario = false;
const puedePagar = false;

if (usuario && puedePagar) {
    console.log('Si eres usuario');
}
else if (!usuario && !puedePagar) {
    console.log('No no puedes comprar');
}
else if (!usuario) {
    console.log('No eres usuario');
}
else if (!puedePagar) {
    console.log('Agrega un metodo de pago');
}
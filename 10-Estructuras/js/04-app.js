// Operador Mayor que y menos que
const dinero = 500;
const totalApagar = 500;
const tarjeta = true;

if (dinero >= totalApagar) {
    console.log('Si podemos pagar')
} else if (tarjeta) {
    console.log('Si trae tarjeta')
}
else {
    console.log('Fondos insuficientes')
}
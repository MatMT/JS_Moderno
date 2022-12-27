// Operador Mayor que y menos que
const metodo = 'tarjeta';

switch (metodo) {
    case 'efectivo':
        console.log(`Pago con ${metodo}`);
        break;
    case 'cheque':
        console.log(`Pago con ${metodo}`);
        break;
    default:
        console.log(`El método ${metodo} no es soportado`);
        break;
}
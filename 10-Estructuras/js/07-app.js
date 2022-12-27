const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const Total = 600;

if (efectivo > Total || credito > Total || disponible > Total) {
    console.log('Si se puede pagar')
} else {
    console.log('Fondos Innecesarios');
}
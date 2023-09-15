// FirstClass Function
const suma = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

// Función como argumento
const sumarOMultiplicar = fn => fn(10, 20);

// De manera más imperativa
console.log(sumarOMultiplicar(multiplicar));
console.log(sumarOMultiplicar(suma));
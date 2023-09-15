const suma = (a, b, c) => a + b + c;

// Dividiendo en partes
const parcialDiv = a => b => c => suma(a, b, c);
const result = parcialDiv(5)(4)(3);

console.log(result);
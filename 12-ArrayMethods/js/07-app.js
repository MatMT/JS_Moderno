const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre', 'Octubre'];
const meses3 = ['Noviembre', 'Diciembre'];

// .concat
const resultado = meses.concat(meses2, 'Otro mes');
console.log(resultado);

// spread operator
const resultado2 = [...resultado, ...meses3];
console.log(resultado2);
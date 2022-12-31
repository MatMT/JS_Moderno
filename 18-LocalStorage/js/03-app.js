localStorage.removeItem('nombre');

// Actualizar un registro
const meses = JSON.parse(localStorage.getItem('meses'));
meses.push('Abril');

localStorage.setItem('meses', JSON.stringify(meses));

localStorage.clear();
// Asterisco identificador
function* crearGenerador() {
    yield 1;
    yield 'Oscar';
    yield 3 + 3;
    yield true;
}

const iterador = crearGenerador();

// console.log(iterador);
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador);

// Generador para carrito de compras
function* generadorCarrito(carrito) {
    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

const carrito = ['1', '2', '3'];
const itera = generadorCarrito(carrito);
console.log(itera.next());
console.log(itera.next());
console.log(itera.next());
console.log(itera.next());
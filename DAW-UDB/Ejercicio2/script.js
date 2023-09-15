const tablaProductos = document.querySelector('#tablaProductos');
const tbody = tablaProductos.getElementsByTagName('tbody')[0];

function agregarProducto() {
    const producto = prompt("Ingrese el nombre del producto:");
    const precio = parseFloat(prompt("Ingrese el precio del producto:"));

    // Crear una nueva fila en la tabla
    const fila = document.createElement('tr');

    // Crear celdas para el nombre y precio del producto
    const celdaProducto = document.createElement('td');
    celdaProducto.classList.add('p-2');
    celdaProducto.textContent = '$' + producto;

    const celdaPrecio = document.createElement('td');
    celdaPrecio.classList.add('p-2');
    celdaPrecio.textContent = '$' + precio.toFixed(2); // Mostrar el precio con 2 decimales

    // Agregar las celdas a la fila
    fila.appendChild(celdaProducto);
    fila.appendChild(celdaPrecio);

    // Agregar la fila al cuerpo de la tabla
    tbody.appendChild(fila);

    // Preguntar si se van a ingresar más productos
    const continuar = confirm("¿Desea ingresar más productos?");
    if (!continuar) {
        mostrarTotalVenta();
    }
}

function mostrarTotalVenta() {
    let total = 0;
    const filas = tbody.getElementsByTagName('tr');

    for (let i = 0; i < filas.length; i++) {
        const celdaPrecio = filas[i].getElementsByTagName('td')[1];
        const precio = parseFloat(celdaPrecio.textContent);
        total += precio;
    }

    // Crear una nueva fila en la tabla
    const fila = document.createElement('tr');

    // Crear celdas para el nombre y precio del producto
    const celdaTotal = document.createElement('td');
    celdaTotal.classList.add('p-2', 'font-bold');
    celdaTotal.textContent = 'Total';

    const celdaPrecio = document.createElement('td');
    celdaPrecio.classList.add('p-2');
    celdaPrecio.textContent = '$' + total.toFixed(2); // Mostrar el precio con 2 decimales

    // Agregar las celdas a la fila
    fila.appendChild(celdaTotal);
    fila.appendChild(celdaPrecio);

    // Agregar la fila al cuerpo de la tabla
    tbody.appendChild(fila);
}

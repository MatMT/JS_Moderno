function ordenar() {
    const valoresInput = document.getElementById('valores').value;
    const ordenSelect = document.getElementById('orden').value;
    const listadoIngresado = document.getElementById('listadoIngresado');
    const listadoOrdenado = document.getElementById('listadoOrdenado');

    // Limpiar listados anteriores
    listadoIngresado.innerHTML = '';
    listadoOrdenado.innerHTML = '';

    // Convertir los valores ingresados en un array
    const valores = valoresInput.split(',').map(valor => parseInt(valor.trim()));

    // Mostrar el listado ingresado
    valores.forEach(valor => {
        const listItem = document.createElement('li');
        listItem.textContent = valor;
        listadoIngresado.appendChild(listItem);
    });

    // Ordenar los valores utilizando el algoritmo de burbuja
    const ordenados = ordenPorBurbuja(valores, ordenSelect);

    // Mostrar el listado ordenado
    ordenados.forEach(valor => {
        const listItem = document.createElement('li');
        listItem.textContent = valor;
        listadoOrdenado.appendChild(listItem);
    });
}

function ordenPorBurbuja(valores, orden) {
    const n = valores.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (orden === 'ascendente' && valores[j] > valores[j + 1]) {
                // Intercambiar valores para orden ascendente
                [valores[j], valores[j + 1]] = [valores[j + 1], valores[j]];
            } else if (orden === 'descendente' && valores[j] < valores[j + 1]) {
                // Intercambiar valores para orden descendente
                [valores[j], valores[j + 1]] = [valores[j + 1], valores[j]];
            }
        }
    }

    return valores;
}

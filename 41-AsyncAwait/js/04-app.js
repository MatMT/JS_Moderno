function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando C');

        setTimeout(() => {
            resolve('Clientes');
        }, 3000);
    })
}


function descargarNuevosPedidos() {
    return new Promise(resolve => {
        console.log('Descargando P');

        setTimeout(() => {
            resolve('Pedidos');
        }, 1000);
    })
}

const app = async () => {
    try {
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);

        console.log(respuesta[0]);
        console.log(respuesta[1]);
    } catch (error) {
        console.log(error);
    }
}

app();
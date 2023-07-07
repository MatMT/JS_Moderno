function descargarClientes() {

    return new Promise((resolve, reject) => {
        const error = true;

        setTimeout(() => {

            if (!error) {
                resolve('Listado exito');
            } else {
                reject('Error');
            }

        }, 3000);

    })
}

// Async await


async function ejecutar() {

    try {
        const respuesta = await descargarClientes();

        console.log(2 + 2);
        console.log(respuesta);

    } catch (error) {
        console.log(error);
    }
}

ejecutar();
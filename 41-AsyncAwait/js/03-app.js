function descargarClientes() {

    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {

            if (!error) {
                resolve('Listado exito');
            } else {
                reject('Error');
            }

        }, 3000);

    })
}

// Async await || Exoression
const ejecutar = async () => {

    try {
        const respuesta = await descargarClientes();
        console.log(2 + 2);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}

ejecutar();
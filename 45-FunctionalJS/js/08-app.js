const obtenerCliente = () => {
    const nombre = "Elías";

    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();

cliente();


// Se definen las funciones
const obtenerNombre = info => ({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`);
    }
});

const guardarEmail = info => ({
    agregarEmail(email) {
        console.log(`Guargando email en: ${info.nombre}`);
        info.email = email;
    }
})

const obtenerEmail = info => ({
    mostarEmail() {
        console.log(`Correo: ${info.email}`);
    }
})

const obtenerEmpresa = info => ({
    mostrarEmpresa() {
        console.log(info.empresa);
    }
})

const obtenerPuesto = info => ({
    mostrarPuesto() {
        console.log(info.puesto);
    }
})

// Objetos
function Cliente(nombre, email, empresa) {
    let info = {
        nombre,
        email,
        empresa
    }

    // Toma una función y la copia hacía dentro del objeto
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
    )
}

function Empleado(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto
    }

    // Toma una función y la copia hacía dentro del objeto
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )
}

const cliente = Cliente('Mateo', null, 'MT');
cliente.agregarEmail('cliente@');
cliente.mostarEmail();
cliente.mostrarEmpresa();

console.log('====================================');

const empleado = Empleado('Elías', null, "Empleado");
empleado.agregarEmail('empleado@');
empleado.mostarEmail();
empleado.mostrarPuesto();


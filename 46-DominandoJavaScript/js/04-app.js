// Implicit Binding
const usuario = {
    nombre: "Elías",
    edad: 18,
    clientInformation() {
        console.log(`Mi nombre es ${this.nombre} `);
    },
    mascota: {
        nombre: "Hook",
        informacion() {
            console.log(`El nombre es ${this.nombre}`);
        }
    }
}

usuario.clientInformation();
usuario.mascota.informacion();
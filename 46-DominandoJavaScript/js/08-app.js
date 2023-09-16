self.onload = () => {
    console.log("Ventana lista");
}

window.nombre = "Carro";

const producto = {
    mostrarInfo: function () {
        return `El nombre es ${self.nombre}`
    }
}

console.log(producto.mostrarInfo());
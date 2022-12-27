const producto = {
    // Propiedad - llave del objeto
    nombre: "Monitor de 20 pulgadas",
    precio: 200,

    mostrarInfo: function () {
        console.log(`El producto: ${this.nombre} tiene un precio de:${this.precio}`)
    }
}

producto.mostrarInfo();

const producto = {
    // Propiedad - llave del objeto
    nombre: "Monitor de 20 pulgadas",
    precio: 200,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

const { nombre, informacion, informacion: { fabricacion: { pais } } } = producto;

console.log(nombre);
console.log(informacion);
console.log(pais);
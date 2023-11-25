import Citas from "../js/classes/Citas";

describe('Probar la clase de Citas', () => {

    const citas = new Citas;
    const id = Date.now();

    test('should Nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'Hook',
            propietario: 'Mat',
            telefono: '22224444',
            fecha: '24-11-2023',
            hora: '10:50',
            sintomas: 'Sleepy'
        }

        citas.agregarCita(citaObj);

        // Prueba
        expect(citas).toMatchSnapshot();
    });

    test('should Actualizar Cita', () => {
        const citaActualizada = {
            id,
            mascota: 'Happy',
            propietario: 'Mat',
            telefono: '22224444',
            fecha: '24-11-2023',
            hora: '10:50',
            sintomas: 'Sleepy'
        }

        citas.editarCita(citaActualizada);

        // Prueba
        expect(citas).toMatchSnapshot();
    })

    test('should Eliminar Cita', () => {
        citas.eliminarCita(id);

        // Prueba
        expect(citas).toMatchSnapshot();
    })
})
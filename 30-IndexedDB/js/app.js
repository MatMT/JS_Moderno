let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        clearCliente();
    }, 5000);
})

function crmDB() {
    // Crear base de datos version 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    // Si hay un error
    crmDB.onerror = function () {
        console.log('Hubo un error a la hora de crear la DB');
    }

    // Si se creo bien
    crmDB.onsuccess = function () {
        console.log('Base de datos creada');

        DB = crmDB.result;
    }

    // Configuración de la base de datos
    crmDB.onupgradeneeded = function (e) {
        const db = e.target.result;
        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        // Definir las columnas
        objectStore.createIndex('name', 'name', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: false });

        console.log(db);
    }
}

function clearCliente() {
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function () {
        console.log('Transacción completada');
    }

    transaction.onerror = function () {
        console.log('Hubo un error en la transacción');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        nombre: 'Oscar',
        email: 'correo@correo.com',
        telefono: 60505363
    }

    const peticion = objectStore.add(nuevoCliente);
    console.log(peticion);
}
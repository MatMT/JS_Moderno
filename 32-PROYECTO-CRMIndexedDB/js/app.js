(
    function () {
        document.addEventListener('DOMContentLoaded', () => {
            crearDB();
        });

        // Crea la Base de datos de IndexDB
        function crearDB() {
            const crearDB = window.indexedDB.open('crm', 1);

            crearDB.onerror = function () {
                console.log('Hubo un error');
            }

            crearDB.onsuccess = function () {
                DB = crearDB.result;
            }

            crearDB.onupgradeneeded = function (e) {
                const db = e.target.result;
                const objectStore = db.objectStore('crm', { keyPath: 'id' });
            }
        }
    }
)();
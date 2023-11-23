const nombreCache = 'apv-v5';
const archivos = [
    '/',
    '/index.html',
    '/error.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js'
];

// Al instalar el SW
self.addEventListener('install', e => {
    console.log('Instalado el Service Worker');

    // Función que espera
    e.waitUntil(
        caches.open(nombreCache)
            .then(cache => {
                console.log('Cacheando');
                // Arreglo de archivos
                cache.addAll(archivos)
            })
    )
})

// Activar el Service Worker
self.addEventListener('activate', e => {
    console.log('Service Worker Activado');
    e.waitUntil(
        caches.keys()
            .then(keys => {
                return Promise.all(
                    keys.filter(key => key !== nombreCache)
                        // Borra las versiones anteriores
                        .map(key => caches.delete(key))
                )
            })
    )
})

// Evento fetch para descargar archivo estatico
self.addEventListener('fetch', e => {
    console.log('Fetch...', e);

    // Dale una respuesta al fetch
    e.respondWith(
        // Indentificar el request que se esta haciendo
        caches
            .match(e.request)
            .then(cacheResponse =>
                (cacheResponse ? cacheResponse : caches.match('error.html'))
            )
    );
})

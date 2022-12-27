const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo canción...#${id}`);
    },
    pausar: function () {
        console.log('pausando...');
    },
    crearPlaylist: function (nombrePlay) {
        console.log(`Creando la Playlist de ${nombrePlay}`);
    },
    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo la Playlist de ${nombre}`);

    }
}

reproductor.borrar = function (id) {
    console.log(`Borrando canción ${id}`)
}

reproductor.reproducir(30);
reproductor.reproducir(3);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("My Like's")
reproductor.reproducirPlaylist("My Like's")
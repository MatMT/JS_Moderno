const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción...#${id}`),
    borrar: id => console.log(`Borrando canción ${id}`),
    crearPlaylist: nombrePlay => console.log(`Creando la Playlist de ${nombrePlay}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la Playlist de ${nombre}`),
    pausar: () => console.log('pausando...'),
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log('Añadiendo')
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevaCancion = 'SleepSong';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(3);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("My Like's")
reproductor.reproducirPlaylist("My Like's")
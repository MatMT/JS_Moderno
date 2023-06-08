const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(resultado => {
            console.log(resultado);
        })
});

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const notificacion = new Notification("D'lish", {
            icon: 'img/4.png',
            body: "¡Tu pedido está listo!"
        });

        notificacion.onclick = function () {
            window.open('https://google.com')
        }
    }
})
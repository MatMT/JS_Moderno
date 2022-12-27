window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    console.log(ubicacion);

    if (ubicacion.top < 784) {
        console.log('Elemento ya visible');
    } else {
        console.log('Aún no');
    }
})
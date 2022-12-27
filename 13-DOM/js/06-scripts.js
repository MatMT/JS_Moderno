const encabezado = document.querySelector('.contenido-hero h1').textContent;

// console.log(encabezado.innerText); // No encuentra con Css - Visibility : hidden
// console.log(encabezado.textContent); // Si encuentra el contenido
// console.log(encabezado.innerHTML); // Extrae el HTMl
// document.querySelector('.contenido-hero h1').textContent = 'Nuevo Heading';
console.log(encabezado);

// Cambiando imagen
const imagenCard = document.querySelector('.card img');
imagenCard.src = 'img/hacer2.jpg';
const navegacion = document.querySelector('.navegacion');
console.log(navegacion);

console.log(navegacion.childNodes); // Los espacios en blanco son cosiderados elementos
console.log(navegacion.children); // Retorna unicamente los elementos - HtmlCollection

console.log(navegacion.firstElementChild); // Primer elemento
console.log(navegacion.lasttElementChild); // Segundo elemento

console.log(navegacion.children[1].nodeName);
// Nombre de la etiqueta

console.log(navegacion.children[1].nodeType);
// Nodo 1 - Etiqueta HTML

// Traversing The Dom
const card = document.querySelector('.card');
card.children[1].children[1].textContent = 'Nuevo Heading desde TTD';
// console.log(card.children[1].children[1].textContent);
card.children[0].src = 'img/hacer2.jpg';
console.log(card.children[0]);

// Traversing del hijo al padre
console.log(card.parentNode);
console.log(card.parentElement.parentElement);

// Siguiente elemento - Hermano
console.log(card.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);


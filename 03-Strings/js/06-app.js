const producto = 'Monitor 20';

// .repeat va a repetir una cadena de texto
const texto = ' en Promoción'.repeat(3);

console.log(texto);
console.log(`${producto}${texto} !!!`);

// Split, dividir un string
const actividad = "Estoy aprendiendo pero tengo sueñooooo";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, cocinar';
console.log(hobbies.split(", "));

const tweet = "Strings o Cadenas de Texto #JSModernoConJuan"
console.log(tweet.split("#"));
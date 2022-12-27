// Normal
const aprendiendo = function (lenguaje, framework) {
    console.log(`Aprendiendo ${lenguaje}... con ${framework}`);
}
aprendiendo('Js', 'NodeJs');

// Dan por implicito el return
const aprendiendo2 = (lenguaje, framework) => `Aprendiendo ${lenguaje} con ${framework}`;

console.log(aprendiendo2('JavaScript', 'NodeJs'));
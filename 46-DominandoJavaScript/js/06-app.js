// New Binding
function Auto(modelo, color) {
    this.modelo = modelo;
    this.color = color;
}

const auto = new Auto('Camaro', 'Negro');
console.log(auto);

// Window Binding
window.color = "negro";

function hola() {
    console.log(color);
}

hola();
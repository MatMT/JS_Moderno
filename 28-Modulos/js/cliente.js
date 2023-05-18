// IIFE
// (function () {
//     console.log('Desde un IIFE');
//     window.nombre = 'Oscar';
// })();

export const nombre = 'Elías';
export const ahorro = 200;

export function mostrarInfo(nombre, ahorro) {
    return `Cliente ${nombre} - Ahorro ${ahorro}`;
}

export function tieneSaldo(ahorro) {
    if (ahorro > 0) {
        console.log('Si tiene');
    } else {
        console.log('No tiene');
    }
}

export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInfo() {
        return `Cliente ${this.nombre} - Ahorro ${this.ahorro}`;
    }
}

export default function nuevaFuncion() {
    console.log('Export default :0');
}
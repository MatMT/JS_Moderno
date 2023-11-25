import { suma } from "../js/funciones";

describe('Suma de 2 números', () => {
    test('Sumar 10 y 20, debe ser 30', () => {
        expect(suma(10, 20)).toBe(30);
    })
})
const car = ['Product 1', 'Product 2', 'Product 3'];

describe('Testing car', () => {
    test('Testing cart has 3 elements', () => {
        expect(car).toHaveLength(3);
    })

    test('Verifiying cart is not empty', () => {
        expect(car).not.toHaveLength(0);
    })
}) 
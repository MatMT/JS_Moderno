const customer = {
    name: 'Mateo',
    balance: 500
}

describe('Testing to customer', () => {
    test('Premium customer', () => {
        expect(customer.balance).toBeGreaterThan(400);
    });
    test('Customer name: Mateo', () => {
        expect(customer.name).toBe('Mateo');
    });
    test('Is not another customer', () => {
        expect(customer.name).toBe('Mateo');
    });
    test('Dont has 500', () => {
        expect(customer.balance).not.toBe(400);
    })
})
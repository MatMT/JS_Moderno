const cliente = {
    nombre: 'Mateo',
    balance: 500,
    tipo: 'Premium'
};

describe('Testing al cliente', () => {
    test('Es Mateo', () => {
        expect(cliente).toMatchSnapshot();
    });
});
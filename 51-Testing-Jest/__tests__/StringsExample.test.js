const password = "123456";

describe('Password is not empty and his length is bigger than 5', () => {
    test('Password must be 6 characters long', () => {
        expect(password).toHaveLength(6);
    })

    test('Password not empty', () => {
        expect(password).not.toHaveLength(0);
    })
})
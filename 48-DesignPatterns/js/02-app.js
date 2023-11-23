// Constructor Pattern

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Customer extends Person {
    constructor(name, email, company) {
        // Referencia a los atributos de la clase padre
        super(name, email);
        // nuevo atributo
        this.company = company;
    }
}
const person = new Person('Elías', 'email2@email.com');
console.log(person);
const customer = new Customer('Mateo', 'email@email.com', 'Elaniin');
console.log(customer);
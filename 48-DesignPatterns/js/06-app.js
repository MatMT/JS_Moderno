// Mixin Pattern

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

// Por sí sola no tiene acceso a la información
const functionsPerson = {
    showInfo() {
        console.log(`Person Name: ${this.name} Person Email: ${this.email}`);
    },
    showName() {
        console.log(`Person Name: ${this.name}`);
    }
}

// Añadir funciones a la clase persona
Object.assign(Person.prototype, functionsPerson);
Object.assign(Customer.prototype, functionsPerson);

const customer = new Person('Mateo', 'email@email.com');
const customer2 = new Customer('Elías', 'email2@email.com');

customer.showInfo();
customer2.showName();

console.log(customer);
console.log(customer2);
// Singleton
let instancia = null;

class Person {
    constructor(name, email) {
        // Prevención de más instancias
        if (!instancia) {
            this.name = name;
            this.email = email;
            instancia = this;
        } else {
            return instancia;
        }
    }
}

const person = new Person('Mateo', 'email@email.com');
console.log(person);

const person2 = new Person('Elías', 'email@email.com');
console.log(person2);
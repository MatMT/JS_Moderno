// Factory

class InputHTML {
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }

    makeInput() {
        return `<input type="${this.type}" name="${this.name}" id="${this.name}>"`;
    }
}

class HTMLFactory {
    makeElement(type, name) {
        switch (type) {
            case 'text':
                return new InputHTML('text', name);
            case 'tel':
                return new InputHTML('tel', name);
            case 'email':
                return new InputHTML('email', name)
            default:
                return;
        }
    }
}

const element = new HTMLFactory();
const inputText = element.makeElement('text', 'name-customer');
console.log(inputText.makeInput());

const element2 = new HTMLFactory();
const inputText2 = element.makeElement('tel', 'tel-customer');
console.log(inputText2.makeInput());

const element3 = new HTMLFactory();
const inputText3 = element.makeElement('email', 'email-customer');
console.log(inputText3.makeInput());
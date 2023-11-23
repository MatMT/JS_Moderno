// Anterior forma
// const module1 = (function () {
//     const name = 'Mateo';
//     function hello() {
//         console.log('hello');
//     }
//     return {
//         name,
//         hello
//     }
// })();

// Module Pattern
const showCustomer = name => {
    console.log(name);
}

export default showCustomer;
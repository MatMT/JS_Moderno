// Namespace
const restaurantApp = {};

restaurantApp.dishes = [
    {
        dish: 'Pizza',
        price: 25
    },
    {
        dish: 'Hamburger',
        price: 20
    }
    ,
    {
        dish: 'Hot Dog',
        price: 18
    }
];

restaurantApp.functions = {
    showMenu: dishes => {
        console.log('Welcome to our menu');

        dishes.forEach((dish, index) => {
            console.log(`${index} : ${dish.dish} ${dish.price}`);
        });
    },
    order: id => {
        console.log(`Your dish: ${restaurantApp.dishes[id].dish}`);
    },
    addDish: (dish, price) => {
        const adding = {
            dish,
            price
        };

        restaurantApp.dishes.push(adding);
    }
}

restaurantApp.functions.addDish('Taco', 10);

// Desctructuring
const { dishes } = restaurantApp;
restaurantApp.functions.showMenu(dishes);
restaurantApp.functions.order(1);

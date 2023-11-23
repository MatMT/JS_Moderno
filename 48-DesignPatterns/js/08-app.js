// Mediator
function Seller(name) {
    this.name = name;
    this.room = null;
}

Seller.prototype = {
    offer: (article, price) => {
        console.log(`We have the next article ${article}, and we start with this price ${price}`);
    },
    sold: buyer => {
        console.log(`Sold it to ${buyer}`);
    }
}

function Buyer(name) {
    this.name = name;
    this.room = null;
}

Buyer.prototype = {
    offer: (amount, buyer) => {
        console.log(`${buyer.name} : ${amount}`);
    }

}

function Auction() {
    let buyers = {};

    return {
        register: user => {
            buyers[user.name] = user;
            user.room = this;
        }
    }
}

// Crear objetos
const Mat = new Buyer('Mat');
const Eli = new Buyer('Eli');
const seller = new Seller('Cars Seller');
const auction = new Auction();

// Tiene que haber un registro
auction.register(Mat);
auction.register(Eli);
auction.register(seller);

seller.offer('Mustang 66', 300);

Mat.offer(350, Mat);
Eli.offer(350, Eli);
Mat.offer(400, Mat);
Eli.offer(500, Eli);

seller.sold('Eli')
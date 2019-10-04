class Kitchen {
    constructor(budget) {
        this.budget = +budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(arrOfStrings) {
        //{productName} {productQuantity} {productPrice}
        
        for (let line of arrOfStrings) {
            let [productName, productQuantity, productPrice] = line.split(' ');
            if (this.budget >= productPrice) {
                this.budget -= productPrice;
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
                if (!this.productsInStock[productName]) {
                    this.productsInStock[productName] = 0;
                }
                this.productsInStock[productName] += +productQuantity;
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }
        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, products, price) {
        // / meal (string), needed products (array from strings) and price (number)
        //needed products -> {productName} {productQuantity} separated by a single space
        if (!this.menu[meal]) {
            this.menu[meal] = {
                meal,
                products,
                price: +price
            }
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        } else {
            return `The ${meal} is already in our menu, try something different.`;
        }
    }

    showTheMenu() {
        let meals = Object.keys(this.menu);
        if (meals.length > 0) {
            return meals
            .map(meal=> `${meal} - $ ${this.menu[meal].price}`)
            .join('\n') + '\n';
        } else {
            return 'Our menu is not ready yet, please come later...';
        }
    }

    makeTheOrder(meal) {
        let readyToPrepare = true;
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            let productsToPrepare = this.menu[meal].products;
            for (let product of productsToPrepare) {
                let [typeOfProduct, quantityOfProduct] = product.split(' ');
                if (this.productsInStock[typeOfProduct]) {
                    if (this.productsInStock[typeOfProduct] - quantityOfProduct < 0) {
                        readyToPrepare = false;
                    }
                } else {
                    readyToPrepare = false;
                }
            }
            if (readyToPrepare) {
                let productsToPrepare = this.menu[meal].products;
                for (let product of productsToPrepare) {
                    let [typeOfProduct, quantityOfProduct] = product.split(' ');
                    this.productsInStock[typeOfProduct] -= quantityOfProduct;
                    this.budget += +this.menu[meal].price;
                    return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
                }
            } else {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
        }
    }

}
let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1',
    'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'
], 15.55));
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('Pizza'));
function result() {
    let stock = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0
    };

    function robot(input) {
        for (let argument of arguments) {
            
            if (argument == 'report') {
                return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
            } else {
                let [command, type, quantity] = argument.split(' ');
                quantity = Number(quantity);
                if (command === 'restock') {
                    stock[type] += quantity;
                    return 'Success';
                } else if (command === 'prepare') {
                    if (type === 'apple') {
                        //1 carb and 2 flavour 
                        if ((stock.carbohydrate - (quantity * 1)) >= 0 &&
                            (stock.flavour - (quantity * 2)) >= 0) {
                            stock.carbohydrate -= (quantity * 1);
                            stock.flavour -= (quantity * 2);
                            return 'Success';
                        } else {
                            if ((stock.carbohydrate - (quantity * 1)) < 0) {
                                return 'Error: not enough carbohydrate in stock';
                            } else if ((stock.flavour - (quantity * 2)) < 0) {
                                return 'Error: not enough flavour in stock';
                            }
                        }
                    } else if (type === 'lemonade') {
                        //10 carb and 20 flavour 
                        if ((stock.carbohydrate >= (quantity * 10)) &&
                            (stock.flavour >= (quantity * 20))) {
                            stock.carbohydrate -= (quantity * 10);
                            stock.flavour -= (quantity * 20);
                            return 'Success';
                        } else {
                            if ((stock.carbohydrate - (quantity * 10)) < 0) {
                                return 'Error: not enough carbohydrate in stock';
                            } else if ((stock.flavour - (quantity * 20)) < 0) {
                                return 'Error: not enough flavour in stock';
                            }
                        }

                    } else if (type === 'burger') {
                        //5 carb, 7 fat and 3 flavour
                        if ((stock.carbohydrate - (quantity * 5)) >= 0 &&
                            (stock.fat - (quantity * 7)) >= 0 &&
                            (stock.flavour - (quantity * 3)) >= 0) {
                            stock.carbohydrate -= (quantity * 5);
                            stock.fat -= (quantity * 7);
                            stock.flavour -= (quantity * 3);
                            return 'Success';
                        } else {
                            if ((stock.carbohydrate - (quantity * 5)) < 0) {
                                return 'Error: not enough carbohydrate in stock';
                            } else if ((stock.fat - (quantity * 7)) < 0) {
                                return 'Error: not enough fat in stock';
                            } else if ((stock.flavour - (quantity * 3)) < 0) {
                                return 'Error: not enough flavour in stock';
                            }
                        }

                    } else if (type === 'eggs') {
                        //5 protein, 1 fat and 1 flavour 
                        if ((stock.protein - (quantity * 5)) >= 0 &&
                            (stock.fat - (quantity * 1)) >= 0 &&
                            (stock.flavour - (quantity * 1)) >= 0) {
                            stock.protein -= (quantity * 5);
                            stock.fat -= (quantity * 1);
                            stock.flavour -= (quantity * 1);
                            return 'Success';
                        } else {
                            if ((stock.protein - (quantity * 5)) < 0) {
                                return `Error: not enough protein in stock`;
                            } else if ((stock.fat - (quantity * 1)) < 0) {
                                return `Error: not enough fat in stock`;
                            } else if ((stock.flavour - (quantity * 1)) < 0) {
                                return `Error: not enough flavour in stock`;
                            }
                        }
                    } else if (type === 'turkey') {
                        //10 protein, 10 carb, 10 fat and 10 flavour 
                        if ((stock.protein - (quantity * 10)) >= 0 &&
                            (stock.carbohydrate - (quantity * 10)) >= 0 &&
                            (stock.fat - (quantity * 10)) >= 0 &&
                            (stock.flavour - (quantity * 10)) >= 0) {
                            stock.protein -= (quantity * 10);
                            stock.carbohydrate -= (quantity * 10);
                            stock.fat -= (quantity * 10);
                            stock.flavour -= (quantity * 10);
                            return 'Success';
                        } else {
                            if ((stock.protein - (quantity * 10)) < 0) {
                                return `Error: not enough protein in stock`;
                            } else if ((stock.carbohydrate - (quantity * 10)) < 0) {
                                return `Error: not enough carbohydrate in stock`;
                            } else if ((stock.fat - (quantity * 10)) < 0) {
                                return `Error: not enough fat in stock`;
                            } else if ((stock.flavour - (quantity * 10)) < 0) {
                                return `Error: not enough flavour in stock`;
                            }
                        }
                    }
                }
            }
        }
    }
    return robot;
}
let init = result();
console.log(init('restock flavour 50'));
console.log(init('restock carbohydrate 50'));
console.log(init('report'));
console.log(init('prepare lemonade 1'));
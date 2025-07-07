const products = {
    apple: 0.5,
    banana: 0.5,
    bagOfChips: 1.5,
    candy: 2,
    meat: 20.99
};

const myCart = ['meat', 'apple', 'bagOfChips', 'bagOfChips', 'candy'];

function cashier(x){
    let total = 0
    for(let item of x) {
        total = total + products[item];
    }
    return total;
}

console.log("Total: $" + cashier(myCart));

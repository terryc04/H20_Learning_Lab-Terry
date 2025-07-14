const products = {
    bread: 5.75,
    oreos: 2.50,
    coffee: 6.25
};

let total = 0;

const ItemsContainer = document.getElementById("store-items");
const CartContainer = document.getElementById("cart");
const TotalContainer = document.getElementById("cart-total");

const BreadBTN = document.createElement("button");
BreadBTN.textContent = "bread";
ItemsContainer.appendChild(BreadBTN);

const OreosBTN = document.createElement("button");
OreosBTN.textContent = "oreo";
ItemsContainer.appendChild(OreosBTN);

const CoffeeBTN = document.createElement("button");
CoffeeBTN.textContent = "coffee";
ItemsContainer.appendChild(CoffeeBTN);

function AddToCart (item){
    const price = products[item];
    const itemList = document.createElement("li");
    itemList.textContent = item;
    CartContainer.appendChild(itemList);

    total = total + price;
    TotalContainer.textContent = total;
};

BreadBTN.addEventListener("click", () => {
    AddToCart("bread");
});
OreosBTN.addEventListener("click", () => {
    AddToCart("oreos");
});
CoffeeBTN.addEventListener("click", () => {
    AddToCart("coffee");
});


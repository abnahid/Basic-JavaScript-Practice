/**
 * shirt price ----> 500
 * pant price ----> 300
 * shoe price ---->900
 * */ 


function totalItemPrice(shirtQuantity, pantQuantity, shoeQuantity) {
    const perShirtPrice = 500;
    const perPantPrice = 300;
    const perShoePrice = 900;

    totalShirtPrice = shirtQuantity * perShirtPrice;
    totalPantPrice = pantQuantity * perPantPrice;
    totalShoePrice = shoeQuantity * perShoePrice;

    allItemPrice = totalShirtPrice + totalPantPrice + totalShoePrice;

    return allItemPrice

};

const price = totalItemPrice(2, 2, 4);
console.log(price);
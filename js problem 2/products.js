const numbers = [300, 100, 700, 1200]

const products = [
    {name: 'shampoo', price: '300'},
    {name: 'chirui', price: '100'},
    {name: 'shirt', price: '700'},
    {name: 'pant', price: '1200'},
]

function getShoppingTotal(products) {
    let total = 0;
    for(const product of products){
        total += product.price;
    }
    return total;
};

const total = getShoppingTotal(products)
console.log('Total sesab: ', total);
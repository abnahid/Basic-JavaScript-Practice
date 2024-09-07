const numbers = [300, 100, 700, 1200]

const products = [
    {name: 'shampoo', price: '300', quantity:2  },
    {name: 'chirui', price: '100', quantity:2 },
    {name: 'shirt', price: '700', quantity:3 },
    {name: 'pant', price: '1200', quantity:1 },
]

function getShoppingTotal(products) {
    let total = 0;
    for(const product of products){
        const totalProductCost = product.price * product.quantity;
        total = total + totalProductCost;
    }
    return total;
};

const total = getShoppingTotal(products)
console.log('Total sesab: ', total);
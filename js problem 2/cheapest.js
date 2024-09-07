const mobiles = [
    {
        name: 'samsung',
        price: 20000,
        camera: '12p',
        color: 'black'
    },
    {
        name: 'xoami',
        price: 18000,
        camera: '12p',
        color: 'black'
    },
    {
        name: 'Oppp',
        price: 30000,
        camera: '12p',
        color: 'black'
    },
    {
        name: 'Iphone',
        price: 150000,
        camera: '12p',
        color: 'black'
    }
]


function getCheapestObject(phones) {
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
};

const  cheap = getCheapestObject(mobiles);
console.log('cheap one is:', cheap);
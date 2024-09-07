let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for (let key in myObject) {
    if(myObject.hasOwnProperty(key)) {
        console.log(`key: ${key} | type: ${typeof myObject[key]} `);
    }
}
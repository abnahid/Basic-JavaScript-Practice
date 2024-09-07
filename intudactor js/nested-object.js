let student = {
    name: "Bob",
    age: 20,
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    }
};

for (let key in student) {
    console.log(key + ": " + student[key]);
}
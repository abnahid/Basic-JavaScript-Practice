const age = 20;
const  price = 800

if (age < 10){
    console.log("Free");
}
else if ( age >= 10 && age < 60){
    //  50% discount for students
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else if (age >= 60){
    // 15% discount for senior citizens
    const discount = price * 25 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else {
    console.log(price);
}
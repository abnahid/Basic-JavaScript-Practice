// 12 inch to 1 Feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
};

function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + 'ft' + inchRemaining + 'inch.';
    return result;
};

// const nahidHight = inchToFeet (64)
// const nahidHight2 = inchToFeet2 (64)
// console.log(nahidHight2);

function mileToKilometer(mile) {
    const kilo =  mile * 1.60934;
    return kilo;
};

function KilometerToMile(kilo) {
    const mile =  kilo * 0.621371;
    return mile;
};
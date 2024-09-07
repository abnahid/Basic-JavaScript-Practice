var weight = 65;
var height = 1.575;

// Extra use
var feet = 5;     // Replace with your value for feet
var inches = 5;   // Replace with your value for inches

var heightInMeters = (feet * 0.3048) + (inches * 0.0254);


var bmi = weight / (heightInMeters ** 2);

if (bmi < 18.5) {
    console.log("You are underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("You are normal");
} else if (bmi >= 25 && bmi <= 29.9) {
    console.log("You are overweight");
} else {
    console.log("You are obese");
}

// let fruits = ["apple", "banana", "orange"];
// let fruitsArray = fruits.split("1,2");
const sentence = "i am a good coder"
console.log(sentence.split(' '));

let reverse = ''
for ( const letter of  sentence){
    reverse = letter + reverse;
}
console.log(reverse);
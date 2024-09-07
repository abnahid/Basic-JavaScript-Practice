function sumOfNumbers (numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
    sum = sum + number;
    }
    return sum; 
}

const numbs = [15, 54, 15, 44] 
const sum = sumOfNumbers(numbs);
console.log('sum of number is', sum);
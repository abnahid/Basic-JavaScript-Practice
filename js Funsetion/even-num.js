function evenNumber ( numbers){
    const evens = [];
    for ( const number of numbers){
        if (number % 2 === 0){
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}
const numbers = [15, 54, 15, 44] 
// const evens = evenNumber(numbers)
// console.log('even number', evens);


function sumOfEven (numbers){
    let sum = 0;
    for (const number of numbers){
        if ( number % 2 == 0){
            console.log(number);
            sum += number;
        }
    }
    return sum;
}

const sum = sumOfEven(numbers);
console.log('Sum Of Even Number', sum);
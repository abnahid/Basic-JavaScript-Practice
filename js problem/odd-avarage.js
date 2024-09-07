/**
 * Function 
 * 
 * */ 

function oddAverage(numbers) {
    const odd = [];
    for( const  number of numbers){
        if(number % 2 === 1){
            // console.log(number);
            odd.push(number)
        }
    }
    let sum = 0;
    for(const number of odd){
        sum += number;
    }
    const count = odd.length;
    console.log(sum);
    const avg = sum / count;
    return avg
};

const numbers = [14, 65, 54, 55, 54];
const avg = oddAverage(numbers);
console.log('Average number:', avg);
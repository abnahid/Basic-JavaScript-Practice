const hights = [65, 65, 54, 88, 89, 79]

function getMax(number) {
    let max = number[0];
    for(const num of number){
        if(num > max){
            max = num;
        }
    }
    return max;
}; 

const max = getMax(hights)
console.log('max of two is :', max);
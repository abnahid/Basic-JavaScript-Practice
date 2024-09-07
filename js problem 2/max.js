const nahid = 56;
const naeema = 78;

if(nahid > naeema){
    console.log('nahid will get the strawbrry');
}

else{
    console.log('naeema will get one kiss');
}

// inside a function
function getMax(num1, num2) {
    if(num1 > num2){
        return num1;
    }
    else{
        return num2
    }
}; 

const max = getMax(56, 78)
console.log('max of two is :', max);
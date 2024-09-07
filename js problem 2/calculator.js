function add(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please Provide a Number'
    }
    return num1 + num2
    
};
function subtract(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please Provide a Number'
    }
    return num1 - num2
    
};
function multiply(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please Provide a Number'
    }
    return num1 * num2
    
};
function divide (num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please Provide a Number'
    }
    return num1 / num2
};

function calculator(a, b, operation) {
    if(operation === 'add') {
        const result = add(a, b);
        return result;
    }
    else if(operation === 'subtract') {
        const result = subtract(a, b);
        return result;
    }
    else if(operation === 'multiply') {
        const result = multiply(a, b);
        return result;
    }
    else if(operation === 'divide') {
        return divide(a, b);
    }
    else{
        return 'operation is no Allowed'
    }
};

const result = calculator(5 , 7 , 'add');
console.log(result);
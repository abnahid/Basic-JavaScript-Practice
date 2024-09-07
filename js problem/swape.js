let a = 5;
let b = 7;

const temp = a;
a = b;
b = temp;
console.log(a, b);

let x = 5;
let y = 7;
console.log(x, y);
[x, y] = [y, x]
console.log(x, y);
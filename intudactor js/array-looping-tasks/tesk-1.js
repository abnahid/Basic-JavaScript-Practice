const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const length = colors.length;
for (let i = 0; i < Math.floor(length / 2); i++) {
    let temp = colors[i];
    colors[i] = colors[length - 1 - i];
    colors[length - 1 - i] = temp;
  }
console.log(colors);
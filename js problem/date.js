const today = new Date ();
const date = new Date ('2024-9-09');
console.log(date.getMonth());
console.log(date.getDay());
const specificDate = new Date (2058, 0, 26)
console.log(specificDate);
specificDate.setMonth(10)
console.log(specificDate.toLocaleString('en-GB'));
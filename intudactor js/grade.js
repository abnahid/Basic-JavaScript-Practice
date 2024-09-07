var totalMark = 90;

if (totalMark >= 90 && totalMark <= 100) {
    console.log("A");
} 
else if (totalMark >= 80 && totalMark <= 89) {
    console.log("B");
} 
else if (totalMark >= 70 && totalMark <= 79) {
    console.log("C");
} 
else if (totalMark >= 60 && totalMark <= 69) {
    console.log("D");
} 
else if (totalMark >= 0 && totalMark <= 59) {
    console.log("F");
} 
else {
    console.log("Invalid mark");
}

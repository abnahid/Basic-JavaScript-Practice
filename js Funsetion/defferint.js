function doubleNo( number, doDouble){
    if (doDouble === true){
        const result = number * 2;
        return result;
    }
    else {
        const result = number * 3;
        return result;

    }
}
// console.log(doubleNo(8, true));

function numberOfElement( number){
    const len = number.length;
    return len
}
// numberOfElement ([12, 5, 25, 49, 4])
console.log(numberOfElement([12, 5, 25, 49, 4]));
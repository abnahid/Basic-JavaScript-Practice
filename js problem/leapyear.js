/*
Year Will Be leap Year if the year is divisible by 4
*/ 
function isLeapYear ( year ) {
    if  (year % 4 === 0){
        return true;
    }
    else{
        return false; 
    }
};

// const  isLeapi = isLeapYear (2056);
// console.log(isLeapi);

function isLeapYear1(year) {
    if( year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else{

        return false;
    }
};

const  isLeap = isLeapYear1 (2056);
const  isLeap1 = isLeapYear1 (2075);
const  isLeap2 = isLeapYear1 (2085);
const  isLeap3 = isLeapYear1 (2093);
console.log(isLeap, isLeap1, isLeap2, isLeap3);
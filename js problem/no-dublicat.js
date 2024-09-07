
const beryakur = ['nahid', 'sami', 'nahid', 'nabil', 'nayeem', 'nabil'];
const numbers = [5, 5, 32, 65, 34, 5, 24, 32];

function noDuplicate(array) {
    const unique = []
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item)
        }
    }
    return unique;
};

const uniqearray = noDuplicate(beryakur)
console.log(uniqearray);
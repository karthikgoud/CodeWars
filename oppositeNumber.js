// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(num){
    return (num < 0)?-1*num:-1*num;
}

console.log(opposite(-4));
console.log(opposite(5));

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
// (sumMix([9, 3, '7', '3']), 22)
function sumMix(x){

    console.log(x);
    let newArr = x.map(n => parseInt(n)) //converts to string
    console.log(newArr);
    return newArr.reduce((a,c) => a+c);// summation
}
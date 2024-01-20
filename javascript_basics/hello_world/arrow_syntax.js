// named function with multiple params
function sum(a,b){
    return a+b;
}

// arrow function
let sum2 = (a,b) =>{
    return a+b;
}

// for only 1 line of code returning something
let sum3 = (a,b) => a+b;


// named funtion with single parameter

function isPositive(num){
    return num>0
}

// arrow function

let isPositive2 = (num) => {
    return num>0
}

// arrow function with single line 
let isPositive3 = num => num>0


// running code


const a = 5;
const b=7;

console.log(sum(a,b));
console.log(sum2(a,b));

console.log(isPositive3(a));
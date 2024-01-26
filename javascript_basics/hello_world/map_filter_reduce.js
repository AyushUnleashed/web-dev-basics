let names = ["Ayush","karishma","Rohan"];


// for each just prints

names.forEach( (name)=>{
    console.log(name)
})


// map, append 1 , doesn't modify the actual array
// returns new array
// we save it in names2

// map( (value,index,array))
const names2 = names.map( (name,index)=>{
    return name + index
})

console.log("\n")

console.log(names2)

// filter => applying filter 

let nums = [12,5,6]

const numsModified = nums.filter((num)=>{
    return num>5
})

console.log(numsModified)


// Array reduce method

// runs on 2 consecutive values at a time
// combine all the values & return it
let arr3 =[1,2,3,4,5]

let reducedResult = arr3.reduce ( (val1,val2) =>{
    return val1 + val2; 
})

// 1+2+3+4+5=> 15
console.log(reducedResult)
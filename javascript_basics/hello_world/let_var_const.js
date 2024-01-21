// TLDR -> try to use const, if variable changes use let, never use var

// var can be redefined from oustside scopes & accessed
// var can be accessed before declartion it would just be undefined



console.log(varVariable)

if(true){

    var varVariable = "This is true"
}

//var varVariable = "This is false"


// let can only be accessed inside the block scope
// let cannot be accessed before definition, will give error & same for const
// const can  also only be accessed inside the block scope + const doesn't allow change of value, but it's properites can change


if(true){
    let letVariable = "This is true"
    letVariable = "This is now more true"
    console.log(letVariable)
}

//var letVariable = "This is false"

console.log(varVariable)
// console.log(letVariable)




const constMap = {
    name: "Ayush"
}

constMap.name="Bot Ayush"
console.log(constMap)

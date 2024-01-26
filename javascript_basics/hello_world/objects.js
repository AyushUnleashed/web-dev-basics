
const person = {
    name :"John",
    age : 30,
    isMarried : true,
}

// destructuring into variables
const {pName, pAge, pIsMarried} = person;

// spread operator
const person2 = {...person}

// copy person to person3 but change the name
const person3 ={...person,name: "Robin"}
console.log(person3)


// spread operator with array
const names =["ayush","khushi","yash"];
const names2 = [...names,"Joe"];

console.log(names2)

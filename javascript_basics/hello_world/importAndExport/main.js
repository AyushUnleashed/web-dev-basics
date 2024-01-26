// import defaults by just specifying name, without curly braces

//import User from './userjs'

// import other exports by using { } braces.

// paths are relative from 

// ../ -> go to parent of current folder, which is hello_world, es6/ -> go to es6 folder, users.js -> go to user.js inside es6
import User from "./user.js";
import {printAge,printName as printUserName } from "./user.js";

const user = new User("Bob",10)
console.log("something")
printAge(user)
printUserName(user)
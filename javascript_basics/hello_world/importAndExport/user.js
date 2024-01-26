class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

function printName(user){
    console.log("User name is:",user)
}

function printAge(user){
    console.log("Age is:",user.age)
}

// or you can add export before function or class

// export User as default export for user.js file
export default User

// export individually
export { printName,printAge }
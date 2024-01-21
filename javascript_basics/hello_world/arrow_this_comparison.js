// always use arrow functions for the correct scoping for 'this'
// time out function, print after x mili seconds

class Person{
    constructor(name){
        this.name = name
    }

    printNameFunction(){
        // 'this' is redefined from where function is called
        setTimeout(
            
            function handlerFunction(){
                console.log("name function:",this.name)
            },
            100
        )
    }

    printArrowFunction(){
        // 'this' here, will not get redefined, so what I can access right now in class,
        // is same as what I'll be able to access when I call it.

        setTimeout(

            () => {
                console.log("Arrow function:",this.name)
            }
        )
    }
}

let person = new Person("Ayush");

console.log(person)

person.printNameFunction()
person.printArrowFunction()




//time out function, print after x seconds

class Person{
    constructor(name){
        this.name = name
    }

    printNameFunction(){

        setTimeout(
            function handlerFunction(){
                console.log("name function:",this.name)
            },
            100
        )
    }

    printArrowFunction(){

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



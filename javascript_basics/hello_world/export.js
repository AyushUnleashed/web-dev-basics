// to export this we use default
export default function DoSomething(){
    console.log("Doing something")
}

// to export this we don't need to use default
export const DoSomethingArrow = () =>{
    console.log("Doing something with arrow")
}
// any promise can be resolved by using then & catch it's error by using catch
// so eg a function that returns promise, now the resolved promise could be another promised,
// in that case we will chain .then() , we can do that 


const a =5
const b = 5

const isSum12 = () =>{

    return new Promise( (resolve, reject) =>{

        if(a+b==12){
            resolve("Yes")
        }else{
            reject("No it's not")
        }
    } 

    )
}

const sumPromise  = isSum12()

sumPromise.then(
    (result) =>{
        console.log("Promise resolved successfully", result)
    }
).catch((result) => {
    console.log("Promise rejected", result)
})
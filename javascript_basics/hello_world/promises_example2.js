// example, we are recording multiple videos simultaneously

// Promise.all( [] )  | runs when all promises are resolved | we pass array of all promises 
// Promise.race( [] )  | runs when any of the promise is resolved | we pass array of all promises | we get single item in then



const recordVideoOne = new Promise( (resolve, reject) =>
    {
        resolve("Video one recorded successfully")
    } 
)

const recordVideoTwo = new Promise( (resolve, reject) =>
    {
        resolve("Video two recorded successfully")
    }
)

const recordVideoThree = new Promise( (resolve, reject) =>
    {
        resolve("Video three recorded successfully")
    }
)

const multiPromise = Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then( (messages) =>

    messages.forEach( (currMessage) =>
        {
            console.log(currMessage)
        }
    )

).catch( (reason) => console.log("rejected ", reason))

console.log(multiPromise)
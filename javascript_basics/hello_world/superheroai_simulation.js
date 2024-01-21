
// supeheroai simulation

// async await makes resolving promises cleaner
// for the reject part of promise, we use try & catch to handle errors

// aysnc await needs to be inside function

// without await we just get a promise, with await we get resolved result of the promise

let server = "Colab"
server = "HF"

userImage = "Ayush's headshot"

const makeSDRequest = (userImage) => {

    return new Promise( (resolve,reject) => {

        console.log("Making request to ",server)
        if(server=="Colab"){
            resolve("Superhero Avatar of " + userImage)
        }else{
            reject("We can only get free GPUS from Google colab :( ")
        }
    }
    )
}

const processRequest = (superheroAvatar) => {
    return new Promise( (resolve) => resolve("Processed "+superheroAvatar) ) 
}

// makeSDRequest(userImage).then( (superheroAvatar) =>
//     {
//         console.log(superheroAvatar)
//         return processRequest(superheroAvatar)
//     }
// ).then( (processedAvatar) =>
//     {
//         console.log("Final superhero:",processedAvatar)
//     }
// ).catch( err => console.log(err))



// converting to async await

// for async/await => need some function to await inside.


// so we call doWork, it calls makeSDRequest, now this function is async, so js goes around do other work
// until we get response ( our promise get resolved ) 

async function doWork() {

    try{
        const superheroAvatarResponse = await makeSDRequest(userImage)
        console.log("response received")
        const processedAvatarResponse = await processRequest(superheroAvatarResponse)
        console.log("Processing finished") 
        console.log(processedAvatarResponse)
    } catch (err) {
        console.log(err)
    }

}

doWork()


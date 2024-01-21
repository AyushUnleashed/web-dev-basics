// promise -> resolve or rejected

// we create a new promise object

// promise takes a function with 2 params as input
// we pass anonymous function

// the 2 params are resolve & reject
let p = new Promise( (resolve, reject ) =>{
    let a =1+2;

    if(a==2){
        resolve("Success",a)
    }else{
        reject("Failed",a)
    }
} )


// then is called when promise is resolved 
// catch is called when our promise is rejected

p.then( (message,num) => 
    {
        console.log("This is the then", message," ",num)
    }
).catch( (message) => 
    {
        console.log("this is catch",message)
    }  
)  

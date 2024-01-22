// fetch on resolve gives a response

// response doesn't have our data, we call response.json() -> which gives us another promise, which we resolve by using then to get our data

console.log("hello fetch api")


// fetch api using then 
fetch("https://reqres.in/api/users/23").then( (response) => {

    if(response.ok){
        return response.json()
    }
    else{
        console.log("not successful")
    }
}
).then( (data) =>{

    try{
        // console.log("Data:",data)
        avatar_array = data['data']
        const avatar_objects = []
        avatar_array.forEach(avatar => {
            const avatar_object = new Avatar(avatar.id,avatar.email,avatar.first_name,avatar.last_name,avatar.avatar)
            avatar_objects.push(avatar_object)
        });

        console.log(avatar_objects)
        // avatar = new Avatar
    } catch (err) {
        console.log(err)
    }

}).catch( err => console.log(err))



// class
class Avatar{
    constructor(id,email,first_name,last_name,avatar){
        this.id = id
        this.email = email
        this.first_name = first_name
        this.last_name = last_name
        this.avatar = avatar
    }
}


// fetch using async/awai , we can pass options object too, after url

// we need to pass json in body, so we do JSON.stringify({object})

// Headers -> tell the type of content we are sending. 
const myFunction = async () => {
    response = await fetch(
        "https://reqres.in/api/users",{

        //options object
        headers:{
            'Content-Type': 'application/json'
        },
        method:'POST',
        body: JSON.stringify({
            name: 'user 1'
        })
        }
)
    data = await response.json()
    console.log(data)
}

myFunction()

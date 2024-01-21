// fetch on resolve gives a response

// response doesn't have our data, we call response.json() -> which gives us another promise, which we resolve by using then to get our data

console.log("hello fetch api")



// console.log()
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


/*
fetch is a built-In functio used to access the data from API's.
It is also a Promise which has Success and failure State. 
*/

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=> { // used to data turn into a json
     
    if(response.ok){
        console.log("Successfully fetched");
        response.json()
    }

    else{
        console.log("Error");
    }
}     
)
.then((data)=>{             // the data in the form of json which is key and value pairs(like object).
    console.log(data);
})
.catch(reject=>console.log("Somthing went wrong.."))
// Using the Promise as return type:

function isEven(num){
    return new Promise((resolve, reject)=>{
        if(num % 2 ==0) resolve("Even Number");
        else reject("Odd Number");
    });
    
}

isEven(211)
.then((resolve)=>{
    console.log(resolve);
})
.catch((reject)=>{
    console.log(reject);
});

//======================================================================================

// Using Multiple Promises
let p1 = new Promise((resolve, reject)=>{
    resolve("Function1")
})

let p2 = new Promise((resolve, reject)=>{
    resolve("Function2")
})

let p3 = new Promise((resolve, reject)=>{
    resolve("Function3")
})

//Promise.all , Promise.any, Promise.race
Promise.any([p1, p2, p3]).then((messages)=>{
    console.log(messages)
})
// let prom = new Promise((resolve, reject)=>{
// let order=true;
// if(order){
//     resolve("order Successfully Placed");
// }

// });

// prom.then((result)=>{
//     console.log(result);
// })

function functionOne(num){
   return new Promise((resolve, reject)=>{
        if(num%2==0){
        resolve(num +" Is Even Number");
        }
        else{
            console.log("Odd Number");
        }
        
    }); 
}
functionOne(2)
.then((result)=>{
    console.log(result);
});

 
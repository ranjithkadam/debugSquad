// promise is a object used to handle the asynchronous operations in javascript.

// function fun(resolve, reject){
//     let operation=false;
//     if(operation){
//         resolve("The operation Done Successfull.");
//     }

//     else{
//         reject("Somthing went wrong, The operation fail")
//     }
// }

// let myPromise=new Promise(fun);

// myPromise.then((result)=>{
//    console.log(result);
// });

// myPromise.catch((result)=>{
//  console.log(result);
// })

let order= new Promise((success, fail)=>{
    let orderPlaced= false;

    if(orderPlaced){
        success("Order placed Successfull."); 
        }

    else{
        fail("Out of Stock, Order Unable to Place");
        
        }
});

 
order.then((result)=>{
    console.log(result);
});
  
order.catch((result)=>{
    console.log("Error:kwkwk "+result);
});
 
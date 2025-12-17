function orderPlaced(orderPacked){
    setTimeout(()=>{
        console.log("Order placed");
    orderPacked();
    },2000);
    
}

function orderPacked(delivered){
   setTimeout(() => {
     console.log("Orderpacked");
    delivered();
   }, 1500);
}

function delivered(timeout){
    setTimeout(() => {
        console.log("delivered");
    timeout();
    }, 1000);
     
}

orderPlaced(()=>{
    orderPacked(()=>{
        delivered(()=>{
            setTimeout(()=> {
                console.log("Thank for your Order !")
            },2000);
        });
       
    });
});
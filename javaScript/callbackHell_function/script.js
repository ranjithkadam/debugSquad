function orderPlaced(orderPacked){
    console.log("Order placed");
    orderPacked();
}

function orderPacked(delivered){
    console.log("Orderpacked");
    delivered();
}

function delivered(timeout){
    console.log("delivered");
    timeout();
     
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
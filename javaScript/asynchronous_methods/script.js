 function f1(f2){
    console.log("Order  Placed");
    f2(fun3);
 }

 function fun2(f3){
    console.log("Order Packed");
    f3();
 }

 function fun3(){
    console.log("Order Delivered");
    return;
 }

 f1(fun2);
 
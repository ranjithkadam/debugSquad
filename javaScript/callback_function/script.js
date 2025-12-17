function fun(function2 ,function3){
console.log("hello am Function1");
function2();
setTimeout(()=> console.log("Hello am timer Function"), 2000);
function3()
}

function fun2(){
    console.log("Hello am Function2");
}

function fun3(){
    console.log("Hello am Function 3");
}
fun(fun2, fun3);
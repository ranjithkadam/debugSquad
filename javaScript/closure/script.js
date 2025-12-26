// closure:  is defined as a function is written within another function and accessing 
//           the varialbles from outer function is called as Closure.
//           Closure is used to mainatain the state of a variables and usage.

function outterFunction(num1){
    console.log("Am Outer function");
    function innerFunction(){

        console.log("Am Inner Function."+num1);
    }
    innerFunction();
}
outterFunction(2);
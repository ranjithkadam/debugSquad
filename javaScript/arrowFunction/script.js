// arrow function is alternate way for Function Expression.
// It is written using "=>"  symbol. In arrow function the return was builtin.
// In arraow function if the function has only one parameter no need of using the ()'s.
// But No parameters or two or more parameters has the function then definatly use the ()'s.
// Examples:

const fun1=()=>  console.log("Hello am Arrow function with zero parameters");
 fun1();

const fun2= x => console.log("Hello am Arrow function with Single parameter "+x);
fun2(2);

const fun3 = (x, y) => {
    console.log("Hello am Arrow function with two parameters ");
    let sum = x+y;
    console.log("Sum of Two Numbers is: " + parseInt(sum));
}
fun3(2,3);

 
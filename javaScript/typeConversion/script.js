// Type Conversion: It is a process of converting one data type to another like(Number to string)
//                  (String to Number), (number to boolean), (Boolean to Number)...
// there are two types of type conversions: 1.implicit Type Conversion and 2.Explicit Type Conversion.

//              1. Implicit Type Conversion done by Search Engine. it automatically analyze and convert.

//              2. In Explicit Type Conversion Manually done by developer.
 //       Syntax: parseInt("2")  ---> in this "2" is astring type but "parseInt()" used to convert String data to Integer.

 let number='23';
 console.log("the number is ",number, "data type is ",typeof(number));

 number=parseInt(number); //Type-convertion
 console.log("After Type Conversion the data Type was ",typeof(number));

let floatNum=parseFloat(number);
console.log("After Type Conversion the data Type was ",floatNum,typeof(floatNum));


//===> "prompt("....")" is used to accept the input from user
let name=prompt("enter your Name: ");
console.log("Welcome ",name+"!!");

 


           

// Operator: operator is a symbol or text, used to do operations with operants.
//There are following operators in Js:

//1. Arthmetic operators(+, -, *, /(divider), % (modulus divider)).
// Arthmetic Operators

let num1=10;
let num2=20;
console.log("Addition ", num1+num2); // num1 and num2 are operants
console.log("Substraction ", num2-num1);
console.log("Multiplication ", num1*num2);
console.log("Division ", num1/num2);
console.log("modulus division ", num2%num1);

// 2. Comparision Operators
// Comparasion opertors are (<, >, ==(for value comparision), ===(datatype and value), <=, >=, !=, !==).
let num3=30;
let str="30";
console.log("less than ", num1<num2);
console.log("greater than ", num2>num1);
console.log("lessthan or euqls ", num1<=num2);
console.log("greater than equals ", num2<=num1);
console.log("equals by value", num3==str);
console.log("equals by datatype and value ",num3===str);
console.log("NOT ", num3!=str);
console.log("Not by value and datatype ", num1!==num2);

//3.Logical Operator
//Logical operators are ( &&, ||, !).
console.log("logical AND ", (num1==10) && (num2>=num1));
console.log("logical AND ", (num1==10) || (num2>=num1));
console.log("logical AND ", !(num1==10));

//4. Assignment Operators
// Assignment operators (=, +=, -=, *=, /=, %=).
a=10;
a+=10; // op: 20
a-=10; //op: 10
a/=10; //op: 1
a%=10; //op: 0

//5. Unary Operator
// Unary Operator (+value ,-value, ++,--)
//    ++ --> two types: ++value(Pre- increment) and value++ (Post-Increment)
//    -- --> two types: --value(pre- decrement) and value-- (post-decrement)
//    + --> +value: ex: +"5", then output is 5 (number type)
//    - --> -value : ex: -"5", then output is value -5(number) 


let x=10;
let y=15;
console.log(x); //10
console.log(++x); // 11
console.log(x++); // 11 but updated as 12 now a=12;
console.log(--x); // 11
console.log(x--); // 11 but updated as 10 now x=10
console.log(x); // 10
console.log("5"); // 5 string type
console.log(+"5");  // 5 number type
console.log(-"5");  // -5
console.log(-true); // -1
console.log(-false);    // -0


// 6. Ternary Operator: it is a shorthand way of writing an if-else statement.
// It takes 3 operants, thats why it called "ternary".
//Syntax: 
//        var=  condition ? expressionIfTrue : expressionIfFalse;

let marks=94;

let result = (marks==36 || marks<= 50) ? "Just pass" : (marks==51 || marks<=74) ? "first Class": (marks>=75 && marks<=100)? "Outstanding" : "Fail" ;
console.log(result);

// let res= (10>=11) ? "Yes True":       //It showing error because ternary operator must and should expect 3 operants.

a="2"-3;
 b=2+"3";
console.log(b);
console.log(a);






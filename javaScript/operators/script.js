// Operator: operator is a symbol or text, used to do operations with operants.
//There are following operators in Js:
//1. Arthmetic operators(+, -, *, /(divider), % (modulus divider)).
//2. Comparasion opertors(<, >, ==(for value comparision), ===(datatype and value), <=, >=, !=, !==).
//3. Logical operators ( &&, ||, !).
//4. Assignment operators (=, +=, -=, *=, /=, %=).


// 1. Arthmetic Operators

let num1=10;
let num2=20;
console.log("Addition ", num1+num2); // num1 and num2 are operants
console.log("Substraction ", num2-num1);
console.log("Multiplication ", num1*num2);
console.log("Division ", num1/num2);
console.log("modulus division ", num2%num1);

// 2. Comparision Operators
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

console.log("logical AND ", (num1==10) && (num2>=num1));
console.log("logical AND ", (num1==10) || (num2>=num1));
console.log("logical AND ", !(num1==10));

//4. Assignment Operators

a=10;
a+=10; // op: 20
a-=10; //op: 10
a/=10; //op: 1
a%=10; //op: 0





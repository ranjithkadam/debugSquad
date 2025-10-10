// "var" variable type
var num1=10;  //declaration and assigning
console.log(num1);

num1=20; //re-assigning
console.log(num1);

var num1=32; //re-declaration and re-assigning
console.log(num1);

{                   //block level
    num1=35;
    console.log(num1)
} 

console.log(num1); 
  


// 'let' variable type

let  num2=100;    //declaring and assigning value and let has block level scope.
console.log(num2);

num2=150;          //re-declaring not possible but re-assigning is possible.
console.log(num2);

{
    let num2=200;
    console.log(num2);
    {                       //the scope is only within this block i.e, o/p :250
       let num2=250;
        console.log(num2);
    }
    console.log(num2); //   o/p: 200
}

console.log(num2);

// "const" vriable type

const num3=300;       // in 'const' variable re-declartion and re-assigning is not possible.
console.log(num3);      // "const" meaning is constant (const) and it has block level scope.
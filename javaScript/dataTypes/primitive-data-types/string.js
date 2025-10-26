// ## String('' or ""): Srting is primitive data type used to store the any type text within 
//                  singlecotes(' ') or doublecotes(" ").

//## This datatype is used to store sequence of characters in single variable, Ex. str="ABCDxyz".
//## we can access the each from string by there index number(position).
// Example and String Methods:

let str="Hello World";

// printing string value
console.log(str);

//Finding Length of an String using ".length"
console.log(str.length);

//Converting All characters into Upper using ".toUpparCase()":
let upper=str.toUpperCase();
console.log(upper);

//Converting All Characters into Lower Case using ".toLowerCaase()":
console.log(str.toLowerCase());

//Finding The Index Positions using ".indexOf("characterName")":
// Indexing starts from zero(0), 
// H-0, e-1, l-2,l-3, o-4, -5, W-6, o-7, r-8, l-9, d-10
console.log(str.indexOf("l")); 

//Finding the Character Position using ".chatAt("position_Number")"
console.log(str.charAt(10));

//Converting another datatype to String using ".toString()"
let num=12345;
document.write(typeof(num)+"<br>");
document.write(typeof(num.toString())+"<br>");

//Removing the values form string
console.log(str.trim());



// Fletching One by one character from string and printing on  
let str1=''
for(let i=0; i<=str.length;i++){
   str1=str1+"\n"+str.charAt(i);
}
//document.write("<h1>"+str1)+"/h1";
// map(): this method used on arrays to access all elements from array perform an operation
//          with each element an array and written new Array.

const array=[10,20,30,40,50];

let result1=array.map((value)=>{
   return value*2;
});

// console.log(array1);
// console.log(result1);


const array2=[3, 5, 28, 10, 38];
let result2=array2.filter((value)=>{
   return value%2==0
});
console.log(result2);

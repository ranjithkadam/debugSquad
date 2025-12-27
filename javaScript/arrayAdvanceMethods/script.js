// map(): this method used on arrays to access all elements from array perform an operation
//          with each element an array and written new Array.and the input array length equals to output array.

const array=[10,20,30,40,50];

let result1=array.map((value)=>{
   return value*2;
});

// console.log(array1);
// console.log(result1);

//filter(): this method used to filter the elements from input and return new array. the input arraya length not equals to output array.
const array2=[3, 5, 28, 10, 38];
let result2=array2.filter((value)=>{
   return value%2==0
});
console.log(result2);


// reduce() : this method used to reduce the elements from an array and returns the value based on given datatype.
const array3=[10, 20, 30];

let result3= array3.reduce((total, num)=>{
  return total+=num;
})

console.log(result3);
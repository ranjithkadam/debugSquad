/*
Task 12: Edit Item in Cart
Objective: Replace an element using splice()
Instructions:
1. Display the new array.
Expected Output:Mouse, Gaming Keyboard, Monitor
*/

let items=["Mouse", "TV", "Monitor"];

console.log("Original Output: "+items);
items.splice(1,1,"Gaming Keyboard");
console.log("After splice: "+items);
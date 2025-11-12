/*
Task 11: Show Limited Products per Page
Objective: Display part of an array using slice()
Instructions:
1. Create an array products = ["TV", "Laptop", "Phone", "Watch", "Tablet"].
2. Show first 2 items as “Page 1” → use slice(0, 2)
3. Show next 2 as “Page 2” → use slice(2, 4)
Expected Output:Page 1 → TV, LaptopPage 2 → Phone, Watch
*/

let products = ["TV", "Laptop", "Phone", "Watch", "Tablet"];

console.log("Page 1 -> "+(products.slice(0,2)));
console.log("Page 2 -> "+(products.slice(2,4)));
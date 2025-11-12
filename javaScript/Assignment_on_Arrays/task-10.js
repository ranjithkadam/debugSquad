/**
 Task 10: Sort Products by Price
Objective: Sort numeric values using sort()
Instructions:
1. Create an array prices = [45000, 25000, 70000, 32000].
2. Sort them in ascending order using

prices.sort(function(a, b) {
 return a - b;
});

3. Display the sorted prices.
Expected Output:25000, 32000, 45000, 70000
 */


let prices = [45000, 25000, 70000, 32000];
console.log(prices.sort());
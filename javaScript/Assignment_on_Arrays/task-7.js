/*
Task 7: Check Availability
Objective: Check if a payment method exists using includes()
Instructions:
1. Create an array paymentMethods = ["UPI", "Card", "Cash"].
2. Take user input for the payment method.
3. If it exists → show “✅ Accepted”, otherwise “❌ Not Supported”.
Expected Output:Input = Card → ✅ AcceptedInput = PayPal → ❌ Not Supported
*/

let paymentMethods = ["UPI", "Card", "Cash"];
let userInput="Netbanking";
if(paymentMethods.includes(userInput)){
    console.log("Accepted");
}
else{
    console.log("Not Supported");
}
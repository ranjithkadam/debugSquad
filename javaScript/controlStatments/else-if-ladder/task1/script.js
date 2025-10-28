// Create a program that checks a user’s purchase amount and applies discounts
// based on the following criteria:

// * If the total is less than one thousand, display “No discount.”
// * If the total is between one thousand and two thousand, display “Ten percent
// discount.”
// * If the total is between two thousand and five thousand, display “Twenty
// percent discount.”
// * If the total is above five thousand, display “Thirty percent discount and
// free delivery.”

// The program should prompt the user for the purchase amount and print a final
// bill summary, including the discount applied (if any).

let purchaseAmount=parseInt(prompt("Enter the purchase amount "));

if(purchaseAmount< 1000){
    console.log("No Discount.");
    console.log("Total Bill is: "+purchaseAmount);
}

else if((purchaseAmount>=1000) && (purchaseAmount<2000)){
    console.log("Ten Percent(10%) Discount.");
    var totalAmount= purchaseAmount* (1- (10/100));
 }

else if((purchaseAmount>=2000) && (purchaseAmount<5000)){
    console.log("Twenty percent(20%) discount.");
    var totalAmount= purchaseAmount* (1- (20/100));
 }

else if(purchaseAmount>5000){
    console.log("Thirty percent discount(30%) and free delivery.");
    var totalAmount= purchaseAmount* (1- (30/100));
 }

else{
    console.log("Plaese check and Re-enter the Amount !!!");
}
console.log("After Adding Discount Your Total Bill is:" +totalAmount);

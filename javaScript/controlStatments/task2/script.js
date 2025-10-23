// Build a program to calculate cinema ticket prices based on age:
// * Children below twelve years get half price.
// * Adults between twelve and sixty years get full price.
// * Senior citizens above sixty get twenty percent off.
// The program should ask for the user's age and display the actual ticket price
// after applying the appropriate discount.

let age=parseInt(prompt("Enter Your Age: "));
let ticketPrice=250;
if(age<12){
    console.log("Your Age is "+age);
    let totalPrice= ticketPrice *(1- (50/100) );
    console.log("Actual Ticket Price is Rs.250/- .")
    console.log("After Discount You Need to pay " +totalPrice+ " only");
}

else if((age>=12) && (age<=60)){
    console.log("Your Age is "+age);
    console.log("Actual Ticket Price is Rs.250/- .");
    console.log("No Discount You Need to pay " +ticketPrice+ " only");
}

else if((age>60) && (age<110)){
    console.log("Your Age is "+age);
    console.log("Actual Ticket Price is Rs.250/- .");
    let totalPrice= ticketPrice*(1-(20/100))
    console.log("After Discount You Need to pay " +totalPrice+ " only");
}

else{
    console("Please Enter the Valid Age !!")
}
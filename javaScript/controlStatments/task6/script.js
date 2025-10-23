// Design a delivery fee logic for an online food delivery service:

// * If the user’s order value is less than two hundred, display “Delivery not
// available.”
// * If the order value is between two hundred and five hundred, charge fifty as
// delivery fee.
// * If the order value is between five hundred and one thousand, charge twentyfive.
// * If the order value is above one thousand, offer free delivery.

// Additionally, if the user is a premium member, delivery should always be free.
// This task requires nested `if-else` statements within the main conditions.

let orderValue = parseInt(prompt("Enter Total Order value: "));
let isPremium="Yes";    // In real application we have check whether the account Premium or Not

if(orderValue<200 && orderValue>0){
    if(isPremium== "Yes"){
        console.log("Delivery is Available");
    }
    else{
        console.log("Delivery is Not Available");
    }
}

else if(orderValue>=200 && orderValue<500){
    if(isPremium== "Yes"){
        console.log("Delivery is Available, Free Delivery");
    }
    else{
        console.log("Delivery charges Rs.50/-");
    }
}

else if(orderValue>=500 && orderValue<1000){
 if(isPremium == "Yes"){
        console.log("Delivery is Available, Free Delivery");
    }
    else{
        console.log("Delivery charges Rs.25/-");
    }
}
else if(orderValue>=1000){
    console.log("Free Delivery...Enjoy the Order");
}

else{
    console.log("Please Enter Valid Order Value !!!");
}

// Design a program to advise users on the best mobile data plan based on their
// monthly data usage in GB:

// * If the usage is less than five, suggest “Basic Plan.”
// * If the usage is between five and twenty, suggest “Standard Plan.”
// * If the usage is between twenty and fifty, suggest “Premium Plan.”
// * If the usage is above fifty, suggest “Unlimited Plan.”

// If the user's plan choice does not match their usage, show an alert message
// suggesting a better plan.

let usage=parseInt(prompt("Enter Your Usage: "))

if(usage<5 && usage>0){
console.log("Basic Plan.");
}

else if(usage>=5 && usage<20){
    console.log("Standard Plan.");
}

else if(usage>=20 && usage<50){
    console.log("Premium Plan.")
}

else if(usage>50){
console.log("Unlimited Plan.");
}

else{
    console.log("plan choice does not match their usage.\n Better to go with Standard Plan");
}
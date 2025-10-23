// Develop a program to schedule hospital appointments based on patient age and health issue type:

// * If the issue is “Emergency,” always print “Send to Emergency Room immediately.”
// * Else if the age is below ten, route to “Pediatric Section.”
// * Else if the age is between ten and sixty, route to “General Section.”
// * Else route to “Senior Citizen Section.”

// Students should combine both condition checks logically.

let issue=prompt("Enter Emergency or not , if Not then Enter Age: ");
// let condition= issue.toLowerCase;

if(issue == "emergency"){
    console.log("Send to Emergency Room immediately.");
}

else if(parseInt(issue)<10 && parseInt(issue)>1){
console.log("Pediatric Section.");
}

else if((parseInt(issue)>=10) && (parseInt(issue)<16)){
    console.log("General Section.");
}

else{
    console.log("Senior Citizen Section.");
}
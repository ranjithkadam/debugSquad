// Develop a program that calculates a student's grade based on their marks out of
// one hundred:

// * If the marks are above ninety, print “Excellent – Grade A.”
// * If the marks are between seventy-five and ninety, print “Good – Grade B.”
// * If the marks are between fifty and seventy-five, print “Average – Grade C.”
// * If the marks are below fifty, print “Failed – Needs Improvement.”

// The program should also print a motivational message along with the grade.

let marks=parseInt(prompt("Enter Your Marks: "));

if((marks>90) && (marks<=100)){
    console.log("Excellent – Grade A");
}

else if((marks<=90)&&(marks>=75)){
    console.log("Good – Grade B");
}

else if((marks<=75)&&(marks>=50)){
    console.log("Average – Grade C");
}

else if(marks<50 && marks>=0){
    console.log("Failed – Needs Improvement");
}

else{
    console.log("Please Enter Valid Marks");
}
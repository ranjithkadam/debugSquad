// $$ "else-if" ladder is a control statement used to control flow of execution of program by checking conditions.
// $$ The "else-if" ladder has used to checking multiple conditions where the conditions is True then That Block will Execute.
// $$ In this one "if" statement and multiple "else if" statements and last else Statement.



// checking the Grade
let marks=parseInt(prompt("Enter Your Marks: "));
if((marks>=36) && (marks<40)){
    console.log("Passed");
}

else if((marks>= 40) && (marks<65)){
    console.log(" Grade B ");
}

else if((marks>=66) && (marks<75)){
    console.log("Grade B+");
}

else if((marks>=75) && (marks<90)){
    console.log("Grade A");
}

else if((marks>=90) && (marks<100)){
 console.log(" Grade A+ #topper");
}

else if(marks>100){
    console.log("Sorry Marks are Invalid")
}

    else if(marks<0){
        console.log("Sorry Marks are Invalid");
    }


else{
    console.log("Fail..., All best for Next Exam")
}
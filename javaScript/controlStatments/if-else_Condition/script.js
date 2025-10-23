
// $$ "if-else" statement is a control statement used to control flow of execution of a program. 
// - by checking condition True or False.
  
// $$ "If() " block will execute only when the condition is True.
// $$ "else " block will Execute when the condition is False.
// $$ In "if-else" only one block will execute at same time not two Blocks.
// $$ In "else" there no condition Block Statement  
// Syntax: 
//      if(Condition)
//          { ....code... }

//      else{
//          ....code...   }



let num1=parseInt(prompt("Enter Number"));
if(num1 > 20){
    console.log("You enterd number was Greater then 20 i.e..,",num1);
}

else{
    console.log("You enterd number was 20 or Below 20 i.e.., ",num1);
}


// checking the Vote Eligibility

let age=parseInt(prompt("Enter the Age "))

if (age>= 18){
    console.log("Eyyy... Your Eligible For Voting !")
}

else{
    console.log("Sorry... Your Not Eligible for Voting")
}


// Checking Number is Even or not

let num=parseInt(prompt("Enter any Number"));
if(num % 2 == 0){
    console.log(num+" is Even");
}

else{
    console.log(num+" is Odd");
}


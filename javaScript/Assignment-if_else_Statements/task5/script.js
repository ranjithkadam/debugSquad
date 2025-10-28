// Design a program to check a user's eligibility for a bank loan based on their monthly income and age:

// * If the income is below twenty thousand, the user is not eligible.
// * If the income is between twenty thousand and fifty thousand, the user is eligible for a personal loan.
// * If the income is above fifty thousand, the user is eligible for both personal and home loans.

// The program should print an eligibility message accordingly.


let age=parseInt(prompt("Enter Your Age"));


if(age>18){ 
    let income=parseInt(prompt("Enter Your Income: "));
    
    if(income<20000){
        console.log("Your Not Eligible for Loan");
    }

    else if(income>=20000 && income<=50000){
        console.log("Your Eligible for Loan");
    }
    else{
      console.log("Your Eligible for both personal and home loans");  
    }

}
else{
    console.log("Your too Young.. So, Not Eligible For Loan");
}


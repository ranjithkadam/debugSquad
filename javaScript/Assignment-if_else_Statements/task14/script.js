// Inputs are employee rating, experience in years, and department:

// * If the rating is excellent and experience is above five years, give a twenty percent bonus.
// * If the rating is good and experience is above three years, give a ten percent bonus.
// * If the rating is average, give a five percent bonus.

// Additionally, if the department is “Sales,” add a two percent incentive. 
// Print the bonus percentage and remarks like “Outstanding,” “Good,” or “Needs Improvement.”

let emp_rating=prompt("Enter Employee Rating(excellent/good/average): ");
let experience=parseInt(prompt("Enter Employee Experience: "));
let department=prompt("Enter Department if sales enter 'sales': ");
let salary= 50000;

if(emp_rating=="excellent" && experience>5 ){
   let bonus= 20*(salary/100)
    if(department=="sales"){
        let incentive= 2*(salary/100);
        console.log("Wow You got Salary+Bonus+Incentives: "+(bonus+salary+incentive) + " Outstanding!!!")
    }
    else{
    console.log("20% Bonus: "+bonus+ "Total Amount is: "+(bonus+salary)+ " Outstanding!!!");
    }
}

else if(emp_rating=="excellent" && experience<=5){
//    let bonus= 20*(salary/100)
    if(department=="sales"){
        let incentive= 2*(salary/100);
        console.log("Wow You got Salary+Bonus+Incentives: "+(salary+incentive) + " Outstanding!!!")
    }
    else{ 
    console.log("No Bonus, Total Amount is: "+salary + " Outstanding!!!");
    }
}

else if(emp_rating=="good" && experience>3){
   let bonus= 10*(salary/100)
    if(department=="sales"){
        let incentive= 2*(salary/100);
        console.log("Wow You got Salary+Bonus+Incentives: "+(bonus+salary+incentive)+" Good")
    }

    else{
    
    console.log("20% Bonus: "+bonus+ "Total Amount is: "+(bonus+salary)+" Good");
    }
}

else if(emp_rating=="good" && experience<=3){
  // let bonus= 10*(salary/100)
    if(department=="sales"){
        let incentive= 2*(salary/100);
        console.log("Wow You got Salary+Bonus+Incentives: "+(salary+incentive)+" Good");
    }

    else{
    
    console.log("No Bonus Total Amount is: "+salary+" Good Try To Improve Performance");
    }
}


else if(emp_rating=="average"){
   let bonus= 5*(salary/100)
    if(department=="sales"){
        let incentive= 2*(salary/100);
        console.log("Wow You got Salary+Bonus+Incentives: "+(bonus+salary+incentive)+ " Need Improvement")
    }

    else{
    console.log("Bonus: "+bonus+" Total Amount is: "+salary+ " Good Improvement");
    }
}

// else if(emp_rating=="average" && experience<3){
//    let bonus= 5*(salary/100)
//     if(department=="sales"){
//         let incentive= 2*(salary/100);
//         console.log("Wow You got Salary+Bonus+Incentives: "+(bonus+salary+incentive)+ " Need Improvement")
//     }
    
//     else{
    
//     console.log("20% Bonus: "+bonus+ "Total Amount is: "+(bonus+salary)+ " Need Improvement");
//     }
// }

else{
    console.log("Please Correct The Input data: "+emp_rating+ " "+experience+" "+ department)
}



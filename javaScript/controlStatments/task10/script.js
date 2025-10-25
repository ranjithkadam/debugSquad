// Develop a program to evaluate the results of an online exam with three subjects:

// * If all subjects have marks above thirty-five, print “Passed.”
// * If one subject is below thirty-five, print “Supplementary.”
// * If more than one subject is below thirty-five, print “Failed.”

// Show the average marks and an overall performance remark based on the result.

let subject1=parseInt(prompt("Enter Subject1 Marks: "));
let subject2=parseInt(prompt("Enter Subject2 Marks: "));
let subject3=parseInt(prompt("Enter Subject3 Marks: "));

if(subject1>35 && subject2>35 && subject3>35){
    console.log("Passed");
    console.log("Average marks from All subjects: ", ((subject1+subject2+subject3)/3));
}

else if(subject1<=35 && subject2>35 && subject3>35){
    console.log("Supplementary.");
    console.log("Average marks from All subjects: ", ((subject1+subject2+subject3)/3));

}

else if(subject1>35 && subject2<=35 && subject3>35){
    console.log("Supplementary.");
    console.log("Average marks from All subjects: ", ((subject1+subject2+subject3)/3));

}

else if(subject1>35 && subject2>35 && subject3<=35){
    console.log("Supplementary.");
    console.log("Average marks from All subjects: ", ((subject1+subject2+subject3)/3));

}

else if(subject1<=35 && subject2<=35 && subject3>35){
console.log("Failed");
console.log("Average marks from All subjects: ", ((subject1+subject2+subject3)/3));

}

else if(subject1<=35 && subject2>35 && subject3<=35){
console.log("Failed");
console.log("Average marks from All subjects: ", ((subject1+subject2+subject3)/3));

}

else if(subject1>35 && subject2<=35 && subject3<=35){
console.log("Failed");
console.log("Average marks from All subjects: ", ((subject1+subject2+subject3)/3));
}

else if(subject1<=35 && subject2<=35 && subject3<=35){
console.log("Failed");
console.log("Average marks from All subjects: ", ((subject1+subject2+subject3)/3));
}

else{
    console.log("Invalid Marks or Result");
}



// Create a program to estimate electricity bills based on total units consumed:

// * If the units consumed are below one hundred, display “Minimum charge only.”
// * If the units consumed are between one hundred and three hundred, apply a rate for normal consumption.
// * If the units consumed are between three hundred and five hundred, apply a higher 
// rate and display energy-saving tips.

// * If the units consumed are above five hundred, display “High consumption alert” and add a penalty.

// Students must calculate the total payable amount and print it with appropriate messages.

let units=parseInt(prompt("Enter The Units: "));
let miniRate=25;
let rateNormal=50;
let rateHigh=100;
let rateHigher=150;
let penalty=250;

if(units<100 && units>0){
    console.log("Minimum charge only, You need to Pay Rs."+miniRate);
    
}

else if(units>=100 && units<300){
    console.log("Normal Consumption, You need to Pay Rs."+rateNormal);
}

else if(units>=300 && units<=500){
    console.log("Higher Consumption, You need to Pay Rs."+rateHigh);
    console.log("1. Switch OFF Fan's, TV's and Lights before Leaving Home \n2. Maintain the AC's at 24-22 Degrees \n3. Use Automatic IOT System at Home");
}

else if( units>500){
    console.log("High consumption alert!!!\nPay Penalty Rs."+ penalty+ " After Adding Penalty You Need to Pay ",(penalty+rateHigher));
}

else{
    console.log("Please Enter Valid Data..");
}
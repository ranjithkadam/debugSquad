// Create a program that provides weather condition alerts based on temperature:

// * If the temperature is below ten, display “It’s freezing cold, wear a jacket.”
// * If the temperature is between ten and twenty-five, display “Cool weather, perfect for outdoor activities.”
// * If the temperature is between twenty-five and thirty-five, display “Warm day, stay hydrated.”
// * If the temperature is above thirty-five, display “It’s too hot, avoid going out in the afternoon.”

let temperature=parseInt(prompt("Please Enter Temperature"));

if(temperature < 10){
console.log("It’s freezing cold, wear a jacket");
console.log("Because, Temperature is "+temperature+" Degrees");
}

else if(temperature<=25 && temperature>=10){
    console.log("Cool weather, perfect for outdoor activities");
    console.log("Because, Temperature is "+temperature+" Degrees");
}

else if(temperature<=35 && temperature>=25){
    console.log("Warm day, stay hydrated");
    console.log("Because, Temperature is "+temperature+" Degrees");
}

else if(temperature>35){
    console.log("It’s too hot, avoid going out in the afternoon");
    console.log("Because, Temperature is "+temperature+" Degrees");
}
//  Input vehicle type, speed, and road type:

// * If the speed exceeds the limit on a highway, show “Fine of one thousand.”
// * If in a city area, the fine is doubled.

// * If the vehicle is a heavy type such as a truck or bus, increase the fine by fifty percent.

// If none of the conditions match, show “Safe Driving – No Fine.” 
// Students must combine multiple layered `if-else if` conditions to calculate the total fine dynamically.

let vehicle_type=prompt("Enter the Vehicle Type(Truck/Car/Bus/Bike): ");
let speed=parseInt(prompt("Enter Speed: "));
let road_type=prompt("Enter the Road Type(highway/city road): ");
let normal_speed=45;
let fine=1000;

if(speed>normal_speed && road_type=="highway"){
    
    if(vehicle_type =="truck" || vehicle_type=="bus"){
        let fifty_percent= fine/2;
        console.log("Fine of Rs."+(fine+fifty_percent));
        console.log("Because Your Speed is Above 45KM/h. And Vehicle is Heavy, So 50% Extra Fine Added.")
    }

    else{
        console.log("Fine of Rs."+fine);
        console.log("Your Speed is Above 45KM/h on Highway.")
    }
}

else if(speed>normal_speed && road_type=="city road"){

   if(vehicle_type=="truck" || vehicle_type=="bus"){
    let fifty_percent=(fine*2)/2;
    console.log("Fine of Rs."+((fine*2)+fifty_percent));
    console.log("Because Your Speed is Above 45KM/h on City Road. And Vehicle is Heavy, So 50% Extra Fine Added.")
   }

   else{
        console.log("Fine of Rs."+(fine*2));
        console.log("Your Speed is Above 45KM/h on Highway.")
    }
}

else{
    console.log("Safe Driving – No Fine.");
}
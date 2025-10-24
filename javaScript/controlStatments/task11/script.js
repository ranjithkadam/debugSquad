// Students must calculate cab fare based on multiple conditions:

// * If the distance is less than five kilometers, charge a minimum fare.
// * If the distance is between five and fifteen kilometers, apply a mid-tier fare.

// * If the distance is above fifteen, apply a long-distance fare.

// Additionally, if the ride time is during night hours (e.g., after ten PM or
// before five AM), add a twenty percent night charge. If the user has a promo code, apply an extra discount.

let distance=parseInt(prompt("Enter Distance: "));
let rideTime=parseInt(prompt("Enter rideTime(5am - 22pm): "));

var minimumFare=100;
var mid_tire_fare=200;
var long_distance=300;

if(distance<5 && distance>1){
    if((rideTime<5 && rideTime>=0) || (rideTime>22 && rideTime<24))
        {
        let totalAmount= minimumFare+(minimumFare/5);
        console.log("Ride Charges are(Night Charges Added): "+ totalAmount);
    }
    else{
        console.log("Ride Charges are: "+ minimumFare);
    }
}

else if(distance>=5 && distance<15){
    //  if(rideTime<5 && rideTime>22){
    if((rideTime<5 && rideTime>=0) || (rideTime>22 && rideTime<24))
            {
        let totalAmount= mid_tire_fare+ (mid_tire_fare/5);
        console.log("Ride Charges are(Night Charges Added): "+ totalAmount);
    }
    else{
        console.log("Ride Charges are: "+ mid_tire_fare);
    }
}

else if(distance>=15){
    if((rideTime<5 && rideTime>=0) || (rideTime>22 && rideTime<24))
    {
        let totalAmount= long_distance+(long_distance/5);
        console.log("Ride Charges are(Night Charges Added): "+ totalAmount);
    }
    else{
        console.log("Ride Charges are: "+ long_distance);
    }
}

else{
    console.log("Invalid Details of Ride!!")
}
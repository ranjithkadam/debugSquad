// Input room type, number of nights, and customer rating:

// * If the room is “Standard,” the base cost is one thousand per night.
// * If the room is “Deluxe,” the cost is two thousand.
// * If the room is “Suite,” the cost is three thousand.

// Add a ten percent service charge if the rating is below four. 
// Add a discount of five percent for stays longer than five nights.

//  Students must calculate and print the total payable amount with messages. 

let room_type=prompt("Enter Room Type: ");
// let no_of_nights=parseInt(prompt("Enter Number of Nights: "));
let basePrice=1000;
let deluxe=2000;
let suite=3000;

if(room_type=="standard"){
     console.log("The Cost of Room was Rs."+basePrice);
     let no_of_nights=parseInt(prompt("Enter Number of Nights: "));
     let rating=parseInt(prompt("Enter Rating out 5: "));

     if(rating<4 && no_of_nights>=5){
        let charge= basePrice/10; //100
        // console.log("The cost of Room Including charges: "+(basePrice+charge));
        let discount= basePrice*(1-(5/100));
        console.log("The cost of Room After all Discount you Need Pay: "+ (discount+charge));
     }
     else if(rating>=4 && no_of_nights>=5){
        let discount= basePrice*(1-(5/100));
        console.log("The cost of Room After all Discount you Need Pay: "+ discount);
     }

     else if(rating<=4 && no_of_nights<5){
        let charge= basePrice/10; //100
        console.log("The cost of Room Including charges You Need to pay: "+(basePrice+charge));
     }

     else if(rating>=4 && no_of_nights<=5){
        console.log("You Need to Pay "+basePrice)
     }
     else{
        console.log("Somthing Went Wrong !!!");
     }
}


else if(room_type=="deluxe"){
     console.log("The Cost of Room was Rs."+deluxe);
     let no_of_nights=parseInt(prompt("Enter Number of Nights: "));
     let rating=parseInt(prompt("Enter Rating out 5: "));

     if(rating<4 && no_of_nights>=5){
        let charge= deluxe/10; //100
        // console.log("The cost of Room Including charges: "+(basePrice+charge));
        let discount= deluxe*(1-(5/100));
        console.log("The cost of Room After all Discount you Need Pay: "+ (discount+charge));
     }
     else if(rating>=4 && no_of_nights>=5){
        let discount= deluxe*(1-(5/100));
        console.log("The cost of Room After all Discount you Need Pay: "+ discount);
     }

     else if(rating<=4 && no_of_nights<5){
        let charge= deluxe/10; //100
        console.log("The cost of Room Including charges You Need to pay: "+(deluxe+charge));
     }

     else if(rating>=4 && no_of_nights<=5){
        console.log("You Need to Pay "+deluxe)
     }
     else{
        console.log("Somthing Went Wrong !!!");
     }
}

else if(room_type=="suite"){
     console.log("The Cost of Room was Rs."+suite);
     let no_of_nights=parseInt(prompt("Enter Number of Nights: "));
     let rating=parseInt(prompt("Enter Rating out 5: "));

     if(rating<4 && no_of_nights>=5){
        let charge= suite/10; //100
        // console.log("The cost of Room Including charges: "+(basePrice+charge));
        let discount= suite*(1-(5/100));
        console.log("The cost of Room After all Discount you Need Pay: "+ (discount+charge));
     }
     else if(rating>=4 && no_of_nights>=5){
        let discount= suite*(1-(5/100));
        console.log("The cost of Room After all Discount you Need Pay: "+ discount);
     }

     else if(rating<=4 && no_of_nights<5){
        let charge= suite/10; //100
        console.log("The cost of Room Including charges You Need to pay: "+(suite+charge));
     }

     else if(rating>=4 && no_of_nights<=5){
        console.log("You Need to Pay "+suite)
     }
     else{
        console.log("Somthing Went Wrong !!!");
     }
}

else{
    console.log("Please Select Valid Room Type !!!\n You Entered: "+room_type);
}
// Ask for the total cart amount, membership type (silver, gold, platinum), and
// coupon availability:

// * Silver members get five percent off.
// * Gold members get ten percent off.
// * Platinum members get fifteen percent off.

// If a coupon is also applied, stack an extra five percent off. Students must
// print the final payable amount after combining all conditions logically.

let amount=parseInt(prompt("Enter Card Amount: "));
let membership=prompt("Enter Membership Type: ");

if(membership == "silver" && amount>0){
    amount=amount*(1-(5/100));
    console.log("After Applying 5% Discount Card Amount is: ",amount)
    let coupon=prompt("Are Applying Coupon Yes/No: ");
    if(coupon=="yes"){
        var discountPrice= amount*(1-(5/100));
        console.log("After Applying 5% Discount and Coupon Discount Card Amount is: ",discountPrice)
    }
    else{
         console.log("After Applying only 5% Discount and Card Amount is: ",amount)
    }
}


else if(membership == "gold" && amount>0){
    amount=amount*(1-(10/100));
    console.log("After Applying 10% Discount Card Amount is: ",amount)
    let coupon=prompt("Are Applying Coupon Yes/No: ");
    if(coupon=="yes"){
        var discountPrice= amount*(1-(5/100));
        console.log("After Applying 10% Discount and Coupon Discount Card Amount is: ",discountPrice)
    }
    else{
         console.log("After Applying only 5% Discount and Card Amount is: ",amount)
    }
}

else if(membership == "platinum" && amount>0){
    amount=amount*(1-(15/100));
    console.log("After Applying 15% Discount Card Amount is: ",amount)
    let coupon=prompt("Are Applying Coupon Yes/No: ");
    if(coupon=="yes"){
        var discountPrice= amount*(1-(5/100));
        console.log("After Applying 15% Discount and Coupon Discount Card Amount is: ",discountPrice)
    }
    else{
         console.log("After Applying only 5% Discount and Card Amount is: ",amount)
    }
}

else{
    console.log("Invalid Card Amount or Membership Type..\n Please Check Amount: "+amount +". Membership Type: "+membership);
}
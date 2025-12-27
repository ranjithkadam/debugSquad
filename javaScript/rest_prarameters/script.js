//Rest parameters are the parameters of an function that used to pack the extra parameters in the form of an array.

function add(...nums){

    sum=nums.reduce((total, num)=>{
        total+=num;
         return total;
    },0);
    console.log("The sum of Numbers is: "+sum);
}
add(2,3,4,5);
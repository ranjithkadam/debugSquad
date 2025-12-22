/*
In Javascript Exception handling is the way handling Runtime Errors.
we can handle the run time errors using try, catch(), and finally methods.

1. try{ }:
This block is used to when the code gives an  run time exception, then that code place in this
try block.
** The try block must consist of catch or finally blocks.

2. catch(exception_Name){ }:
This block is used to catch the error which in try block.
** without try block catch block won't work.

3. finally{ }:
This block is basically optional, The code which is execute must that peace of code write in this block.
*/

function isEven(num){
    try{
        if(num == 0){
            // throw new Error("0 is Not divisible by any Number.");
            console.log(("0 is Not divisible by any Number."));
        }

        else if(num%2==0){
            console.log(num+" is Even Number");
        }

        else{
            console.log(num+" is Odd Number");
        }
    } 
    
    catch(error){
        console.log(error);
    }
}

isEven(2);
isEven(1);
isEven(0);
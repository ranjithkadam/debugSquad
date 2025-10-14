////Data Types: it defines which type of data stored in variable or memory, to check dataType "typeof(varName)" used.
//In JavaScript there are two types of data types:

// 2.Non-primitive data type:

// Non-Primitive Data types: The non-primitive data type is an mutable/ changable data.
//It will store multiple value at the same time/ same place.
//There are majorly 3 types:

//1.Arrays: it defines the elements stored in a sequece orders using single variable name. wheather it is 
            //same or different kind of data( number, string, bool, null, insted array,ect..)
            //Syntax: varType varName=[element1, element2..];

            let arr=[22,3,4,3,4,"ranjith",true,[54,65,70]];
            console.log(arr);
            console.log(arr[7][1]);
            

//2. Object: it defines the block of key-value paired elements.
    //syntax: {key1:value1, key2:value2.....}       
    
    let obj={
        name:"Ranith Kumar",
        roll:"6622",
        branch:"aiml"
    };
    console.log(obj);
    console.log(obj['branch']);
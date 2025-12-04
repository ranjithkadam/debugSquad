// var a=10;
console.log();

var abb={
    a:20
}

var details1={
    name:"ranjith",
    rollNo:"6622",
    greet: function(){
        console.log("Hello "+this.name + " your Rollno is: "+this.rollNo);
    }
};

var details2={
    name:"rajkumar",
    rollNo:"6542",
    greet: details1.greet
    
};
 
details1.greet();
details2.greet();

add=()=>console.log("Hello Arrow Function");


// var a=50;
 
(function(a){
    // var a=80;
    console.log("I am Self Invoking Function "+a)     //Error
}) (12);

add();
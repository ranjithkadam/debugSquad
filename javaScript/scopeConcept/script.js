
// In Js Scope is a concept used check visibility, accessibily of an variable with the vody of the code.
// Scopes is three types 1.Global Scope, 2.Functional Scope, 3.Bolck-level Scope.

//----Global Scope-----

var name="Ram";//global level
const id=20;    //global level
let company="Google";//global level

console.log(name,id, company);
function person(){
    var name="Sita" //functional level
console.log(name,id, company)

} person();

//--------------------------------------------------------------------------------------------------

//----Functional or Local Level

function add(){
    var num1=10;
    const num2=20;
    let num3=30;

    console.log(num1+num2);
    function sub(){         //Nested Function
        console.log(num3-num1);
    } sub();
}
add();

//-----------------------------------------------------------------------------------------------------

//-----Block level Scope------

var n1=100;
let n2=200;
const n3=300;
console.log(n1);

{
    let n2=202;     //block level scope
    var n4=204;     //block level scope

    console.log(n3);
    console.log(n4);
    console.log(n1);

}
console.log(n2);
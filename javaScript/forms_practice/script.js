let password = document.getElementById("password");
let username = document.getElementById("username");
let btn = document.getElementById("submit-btn");
let msg = document.getElementById("worning-msg");
let form = document.getElementById("form");
 username.addEventListener("keydown",function(){
    if((username.value).length<10){
    msg.innerText=`${(username.value+1).length}/100`;   
    }
    else{
        alert("name is too long")
    } 
});
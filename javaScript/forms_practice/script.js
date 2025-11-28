let password = document.getElementById("password");
let username = document.getElementById("username");
let btn = document.getElementById("submit-btn");
let msg = document.getElementById("worning-msg");
let form = document.getElementById("form");
 // let letters=['a','b','c','d','e','f',g,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
username.addEventListener("keydown",function(){
    if((username.value).length<10){
    msg.innerText=`${(username.value+1).length}/100`;   
    }
    else{
        alert("name is too long")
    } 
});
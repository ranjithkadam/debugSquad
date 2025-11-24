/*
DOM Opertaions 
*/ 
// DOM Selectors
// 1. getElementByID("IDName")
// let title= document.getElementById("title");
// title.style.backgroundColor="red";
// title.style.color="white";

//2. getElementsByClassName("Classname")

// let title=document.getElementsByClassName("title-2");

// for(let i=0; i<title.length; i++){
// title[i].style.backgroundColor="green";
// }

// title[0].style.backgroundColor="pink";

//3.getElementsByTagName("tagname")
// let title=document.getElementsByTagName("h1");
// title[0].style.backgroundColor="pink";

// 4.querySelector():

    // let title=document.querySelector("#title");
    // title.style.backgroundColor="red";

// 5.querySelectorAll():

    let title=document.querySelectorAll(".title-2");
    title.style.backgroundColor="green";

//DOM Manupulation

//1.createElement

// let title=document.createElement("h2");
// title.innerText="Hello World I from JS";
// document.body.appendChild(title);
// document.body.remove(title);



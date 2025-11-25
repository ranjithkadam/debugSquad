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

    // let title=document.querySelectorAll(".title-2");
    // title[1].style.backgroundColor="green";

//DOM Manupulation

//1.createElement

// let title=document.createElement("div");
// title.innerText="Hello World I from JS";
// document.body.appendChild(title);

// 2. remove()
//  document.body.remove(title);


//DOM Atrributes

// getAttribute("attributeName")
let title=document.getElementById("img");
console.log(title.getAttribute("src"));

//  setAttribute("attribte", "values")
console.log(title.setAttribute("alt","img"));

// hasAttribute("attributeName")       returns true or false values
console.log(title.hasAttribute("src"));

// DOM ClassList
// .classList.add("className")
title.classList.add("image");

// .classList.remove("className")
title.classList.remove("image");

// .classList.toggle(image2)

title.classList.toggle("image");

let body = document.getElementById("body");
function theme(){
// body.classList.toggle(body.style.background="white");
body.classList.toggle("bg-white");
body.classList.toggle("bg-black");

// body.classList.toggle(body.style.background="white");

}
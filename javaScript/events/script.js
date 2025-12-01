/*
WHat is EVents:
Events in JS are actions or occurences that happens in the browser or user interface which the JS can respond to.

Why do we use events:
1. To make web pages interactive.
2. form handling
3. Dynamic content updates

whys to apply events:
1. Inline Event Handlers
     Directlt inside the HTML element using the "on" attribute.
     synatx: <element onEvent="JavaScript code">

     advantages:
        1. Simple to implement for small tasks.
        disadvantages:
        1. Mixes HTML and JS, making code harder to maintain.
        2. Limited to one event handler per event per element.

    best for: small projects or simple tasks.
    not best for: large applications or complex interactions.

2. Event properties:
        Assigning a function to an element's event property in JS.
        syntax: element.event = function;
        advantages:
        1. Keeps HTML and JS separate.
        2. Allows multiple event handlers for different events on the same element.
        disadvantages:
        1. Still limited to one handler per event per element.
        best for: moderate complexity tasks.
        not best for: scenarios requiring multiple handlers for the same event.
    
3. addEventListener method:
        Using the addEventListener method to attach event handlers.
        syntax: element.addEventListener("event", function);
        advantages:
        1. Allows multiple event handlers for the same event on the same element.
        2. Provides more control over event propagation and options.
        disadvantages:
        1. Slightly more complex syntax.
        best for: complex applications and interactions.
        not best for: very simple tasks where inline handlers might suffice.

types of EVents:
1. Mouse Events: click, dblclick, mouseover, mouseout, mousemove
2. Keyboard Events: keydown, keyup, keypress
3. Form Events: submit, change, focus, blur
4. Window Events: load, resize, scroll, unload
5. clipboard Events: copy, cut, paste
6. touch Events: touchstart, touchmove, touchend(mobile)

*/

function add(){
alert("Function called..");
}


// event proprties

let btn = document.getElementById("btn");



// btn.onclick=function(){
//     console.log("event properties")
// };

// btn.ondblclick=function(){
//     alert("Double Clicked..");
// }

// btn.onkeydown=function(){
//     console.log("Key down Function")
// }

// btn.onkeypress=function(){
//     console.log("Key down Function")
// }

btn.onkeyup=function(){
    alert("Key down Function")
}
btn.onkeyup=function(){
    alert("Key down Function2")
}

// addEventListener 

// btn.addEventListener("click", function(){
//     alert("addEventLister clicked");
// })

// btn.addEventListener("click", function(){
//     alert("addEventLister clicked 2");
// })

btn.addEventListener("click",function(){
    document.getElementById("btn").style.backgroundColor="red";
})

btn.addEventListener("mouseout",function(){
    document.getElementById("btn").style.backgroundColor="";
})

btn.addEventListener("mouseover",function(){
    document.getElementById("btn").style.backgroundColor="green";
    document.getElementById("btn").style.padding="5px";
})

text=document.getElementById("text");
text.addEventListener("focus",function(){
     text.style.backgroundColor="green";
})

text.addEventListener("blur",function(){
    text.style.backgroundColor="";
})
text.addEventListener("keydown",function(event){
    event.preventDefault();
    alert("key presses: "+event.key)
})
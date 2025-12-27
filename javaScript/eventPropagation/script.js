document.getElementById("gf").addEventListener("click", ()=>{
    console.log("Grand farther called");
});

document.getElementById("parent").addEventListener("click", ()=>{
    
    console.log("parent div clicked");
    event.stopPropagation();
});

document.getElementById("child").addEventListener("click", ()=>{
   
    console.log("child div clicked");
     event.stopPropagation();
}, true)
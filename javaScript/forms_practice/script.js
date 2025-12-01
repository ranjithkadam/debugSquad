 
 let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    event.preventDefault();
    if (username != "" && password != "" ) {
        // msg.innerText = `${(username.value + 1).length}/100`;
        alert("submitted");
        
    }
    else{
        alert("not submitted");
    }
     
});

document.getElementById("link").addEventListener("click",
    function(event){
        event.preventDefault();
    }
);

 
 function register() {
  let username = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;

  if(!username || !password){
   alert("Fill the Fields..");
   return;
  }
    
    localStorage.setItem("name", username.trim());
    localStorage.setItem("email", email.trim());
    localStorage.setItem("password", password.trim());
    alert("Registered Successfully");
}

var count=0;
var name=" ";
function login() {
  let username = document.getElementById("name").value;
 //let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if(count<3){
   count++;
  if (username === localStorage.getItem("name") && password === localStorage.getItem("password")) {
    alert("LogIn Successfully.."); 
    // window.location.href = "./index.html";
    document.getElementById("greet").submit(); 
    
  }

  else {
    alert("Invalid username or Password !");
  }
   
}
else {
    alert("Your Blocked !");
    localStorage.setItem("name","Guest");
    localStorage.setItem("password",null);
  }

  // else {
  //   alert("Invalid username or Password !");
  // }
};

 
 
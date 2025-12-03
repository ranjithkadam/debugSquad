function register() {
  let username = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  let tel = document.getElementById("tel").value;

  let usernamePattern=/^[a-zA-Z]+_*$/;
  let passwordPattern=/^[a-zA-Z0-9@-_]+$/;
  let emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
  let telPattern=/^[6-9]\d{9}$/;

// document.getElementById("username-para").innerText=`Valid`; 
  if (!username || !password) {
    // alert("Fill the Fields..");
    document.getElementById("para").innerText=`Fill all the fields`;
    document.getElementById("para").style.color="red";
    return;
  }

  if(usernamePattern.test(username)){
  localStorage.setItem("name", username.trim());
  document.getElementById("username-para").innerText=`Valid`;
  document.getElementById("username-para").style.color="green";
  }
  else {
    document.getElementById("username-para").innerText=`Not valid username`;
    document.getElementById("username-para").style.color="red";
  }

  if(passwordPattern.test(password)){
  localStorage.setItem("password", password.trim());
  document.getElementById("password-para").innerText=`Valid`;
  document.getElementById("password-para").style.color="green";
  }
  else {
    document.getElementById("password-para").innerText=`Not valid password`;
    document.getElementById("password-para").style.color="red";
  }

if(emailPattern.test(email)){
  localStorage.setItem("email", email.trim());
  document.getElementById("email-para").innerText=`Valid`;
  document.getElementById("email-para").style.color="green";
  }
  else {
    document.getElementById("email-para").innerText=`Not valid password`;
    document.getElementById("email-para").style.color="red";
  }

  if(telPattern.test(tel)){
  localStorage.setItem("tel", tel.trim());
  document.getElementById("tel-para").innerText=`Valid`;
  document.getElementById("tel-para").style.color="green";
  }
  else {
    document.getElementById("tel-para").innerText=`Not valid Phone Number`;
    document.getElementById("tel-para").style.color="red";
  }
  
  // alert("Registered Successfully");
  if(telPattern.test(tel) && emailPattern.test(email) && passwordPattern.test(password) && usernamePattern.test(username)){
  document.getElementById("para").innerText=`Registered successfully`;
  document.getElementById("para").style.color="green"
  }
  else{
  document.getElementById("para").innerText=`Invalid data`;
  document.getElementById("para").style.color="red"
  }
}

var count = 0;
var name = " ";
function login() {
  let username = document.getElementById("name").value;
  //let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (!username || !password) {
    alert("Fill the Fields..");
    return;
  }
  if (count < 3) {
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
    localStorage.setItem("name", "Guest");
    localStorage.setItem("password", null);
  }

  // else {
  //   alert("Invalid username or Password !");
  // }
};



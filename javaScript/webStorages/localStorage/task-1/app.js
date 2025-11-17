function registraion() {
  let username = document.getElementById("name").value;
  let password = document.getElementById("password").value;

  localStorage.setItem("name", JSON.stringify(username));
  localStorage.setItem("password", JSON.stringify(password));
  alert("Registered Successfully");

}

function login() {
  let username = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  if (username === (JSON.parse(localStorage.getItem("name"))) && password === (JSON.parse(localStorage.getItem("password")))) {
    alert("LogIn Successfully..");
  }

  else {
    alert("Invalid username or Password !");
  }
};
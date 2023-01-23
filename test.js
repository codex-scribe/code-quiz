var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var x;

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  console.log(x);
  x = 1;
  console.log(x);
  x = 2;
  console.log(x);
  x = 3;
  console.log(x);
  x = 4;
  console.log(x);
  x = 5;
  console.log(x);
  // create user object from submission
  // var user = {
  //   firstName: firstNameInput.value.trim(),
  //   email: emailInput.value.trim(),
  // };

  // // set new submission to local storage 
  // localStorage.setItem("user", JSON.stringify(user));
  
  // console.log(typeof(user));
});
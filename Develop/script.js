var generateBtn = document.querySelector("#generate");
var copyPasswordBtn = document.querySelector("#copyPasswordBtn");

for (var i=0; i<passwordLength; i++) 
{
  console.log('This is your number',i);
}


function userChoices() {
  console.log("askUser() was called");
  var passwordLength = prompt(
    "Pick a password consisting of 8 to 128 characters!"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You did it wrong!");
  }
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt(
      "Pick a password consisting of 8 to 128 characters!"
    );
    if (passwordLength < 8 || passwordLength > 128) {
      alert("You did it wrong!");
    }
  }
  var upperCase = confirm(
    "Would you like uppercase letters? Ok = yes cancel = no."
  );
  var lowerCase = confirm(
    "Would you like lowercase letters? Ok = yes cancel = no."
  );
  var isNumeric = confirm(
    "Would you like numeric characters? Ok = yes cancel = no."
  );
  var isSpecial = confirm(
    "Would you like special characters? Ok = yes cancel = no."
  );
  if (!upperCase && !lowerCase && !isNumeric && !isSpecial) {
    alert("You did it wrong!");
  }
  while (!upperCase && !lowerCase && !isNumeric && !isSpecial) {
    upperCase = confirm(
      "Would you like uppercase letters? Ok = yes cancel = no."
    );
    lowerCase = confirm(
      "Would you like lowercase letters? Ok = yes cancel = no."
    );
    isNumeric = confirm(
      "Would you like numeric characters? Ok = yes cancel = no."
    );
    isSpecial = confirm(
      "Would you like special characters? Ok = yes cancel = no."
    );
    if (!upperCase && !lowerCase && !isNumeric && !isSpecial) {
      alert("You did it wrong!");
    }
  console.log("askUser() is returning");
  console.log(passwordLength, upperCase, lowerCase, isNumeric, isSpecial);
  return [passwordLength, upperCase, lowerCase, isNumeric, isSpecial];
  }
}

function generatePassword(userChoices) {
  var index = Math.floor(Math.random() * passwordLength);
  var userChoices = options[index];
  document.getElementById("message").innerHTML=copyPasswordBtn;
  // if then all are true then else if uppercase is true add to a variable, if lowercase is true add to a variable, if numeric is true add to a variable, if special is true add to a variable
  //then we have a variable with all the chosen characters
  //then we...
  if(userChoices==="quit") {
  return "quit";
}
}
var passwordLength = userChoices[0];
var upperCase = userChoices[1];
var lowerCase = userChoices[2];
var isNumeric = userChoices[3];
var isSpecial = userChoices[4];
console.log("genereatePassword()was called");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var isnumeric = "1234567890";
var isspecial = "!@#$%^&*()_+{}:,./';[";


//    don't touch the below code...
//-----------------------------------------
// Write password to the #password input
function writePassword() {
  var password = generatePassword(userChoices());
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
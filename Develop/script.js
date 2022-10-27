var generateBtn = document.querySelector("#generate");

var upperCaseAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseAlpha = "abcdefghijklmnopqrstuvwxyz";
var numericCharacters = "1234567890";
var specialCharters = "!@#$%^&";

function userChoices() {
  var passwordLength = prompt(
    "How many characters long is your password pick between 8 and 128"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You did it wrong!");
  }
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt(
      "How many characters long is your password pick between 8 and 128"
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
  }
  return [passwordLength, upperCase, lowerCase, isNumeric, isSpecial];
}

function generatePassword(userChoices) {
  // if then all are true then else if uppercase is true add to a variable, if lowercase is true add to a variable, if numeric is true add to a variable, if special is true add to a variable
  //then we have a variable with all the chosen characters
  //then we...
  return userChoices;
}
//    don't touch the below code...already done
//-----------------------------------------
// Write password to the #password input
function writePassword() {
  var password = generatePassword(userChoices());
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
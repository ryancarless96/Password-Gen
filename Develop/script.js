// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min,max) {
  if(!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1-rand) + rand*max)
}

  function getRandomItem(list) {
    return list[randomInt(list.length)]
  } function generatePassword() {


    while(true) {
      var userInput = window.prompt("Pick a password consisting of 8 to 128 characters!")
      if(userInput===null) {
        return;
      }
      var passwordLength = parseInt(userInput)

      if(isNaN(passwordLength)) {
        window.alert("You did it wrong!")
      } else if (passwordLength < 8 || passwordLength >128) {
      } else {
        break
      }
      }var upperCase = confirm(
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

      var upperCaseAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var lowerCaseAlpha = "abcdefghijklmnopqrstuvwxyz";
      var numericCharacters = "1234567890";
      var specialCharacters = "!@#$%^&*()_+{}:,./';[";

      var optionsCart = []

      for(var i = 0; i < lowerCase.length; i ++) {
        upperCase[i] = lowerCaseList [i].toUpperCase()
      } if (isNumeric===true) {
        optionsCart.push(numericCharacters)
      }if (isSpecial===true) {
        optionsCart.push(specialCharacters)
      }if (lowerCase===true) {
        optionsCart.push(lowerCaseAlpha)
      } if (upperCase===true){
        optionsCart.push(upperCaseAlpha)
      }
      var genereatedPassword = ""

      for(var i=0;i < passwordLength; i ++) {
        var randomList = getRandomItem(optionsCart)
        var randomChar = getRandomItem(randomList)
        genereatedPassword += randomChar
      }
      return genereatedPassword
    }


  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if(password) {
  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

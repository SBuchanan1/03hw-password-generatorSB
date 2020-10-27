// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = ""

// Write password to the #password input
function writePassword() {
  var passwordLengthPrompt = prompt("Please enter your desired password. It must be between 12 and 128 characters")
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

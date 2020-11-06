// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = ""

// Write password to the #password input
function writePassword() {
  var passwordLengthPrompt = prompt("Please enter your desired password. It must be between 12 and 128 characters")
  var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", ".", "+", "-", "_"]
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  // var passwordText = document.querySelector("#password");
  if (ifLowerCase) {

  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

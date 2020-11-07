// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = ""

// Write password to the #password input
function writePassword() {
  var newPassword = "";
  do {
    var passwordLength = prompt("Please enter your desired password. It must be between 8 and 128 characters");
    passwordLength = parseInt(passwordLength);
  }
  while (8 > passwordLength || passwordLength > 128);

  // character sets
  var newCharSet = "";
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", ".", "+", "-", "_"]


  // var passwordText = document.querySelector("#password");
  do {
    var lowerCase = confirm("Include lowercase letters");
    if (lowerCase) {
      newCharSet += lowerCase;
    }
    var upperCase = confirm("Include uppercase letters");
    if (upperCase) {
      newCharSet += upperCase;
    }
    var numArr = confirm("Include numbers 0-9");
    if (numArr) {
      newCharSet += numArr;
    }
    var specialChar = confirm("Include special characters");
    if (specialChar) {
      specialChar += specialChar;
    }
  }
  while (newCharSet === "");

  // for loop for character set and selects a random character to generate the password
  for (var i = 0, n = newCharSet.length; i < passwordLength; i++) {
    newPassword += newCharSet.charAt(Math.floor(Math.random() * n));
  }
  return newPassword;
  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

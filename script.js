// This variable is the assignment 
var generateBTn = document.querySelector("generate");

// Add event listener for button click
generateBTn.addEventListener("click", writePassword);

// Function to write password
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("password");

    passwordText.val = password;
}
function generatePassword() {
    var passwordLength = "numCharacters";
    var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    var characters = "!@#$%^&*()";
    var numbers = "0123456789";
    // var confirmedSelection = "";

    // Function to write password 
    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("password");

        passwordText.value = password;
    }

    // Event Listeners
    generateBTn.addEventListener("click", writePassword);

    function generatePassword() {

    }
    passwordLength = prompt("Pick a character count between 8 and 128 for your password:")

    var lowercaseLetters = confirm("Would you like lowercase letters?");
    var uppercaseLetters = confirm("Would you like uppercase letters?");
    var characters = confirm("Would you like to include characters?");
    var numbers = confirm("Would you like to include numbers?");

    if (passwordLength < 8 || passwordLength > 128) {
        prompt("Please enter a password between 8 and 128 characters:")
    }
    // console.log("Password character length: ", passwordLength)
    if (lowercaseLetters === true) {
        confirmedSelection += lowercaseLetters;
    }
    if (uppercaseLetters === true) {
        confirmedSelection += uppercaseLetters;

    }
    if (characters === true) {
        confirmedSelection += characters;
    }
    if (numbers === true) {
        confirmedSelection += numbers;
    }
    if (confirmedSelection == "") {
        alert("Please choose at least one character type");
    }
}
var yourPassword = "";
for (var i = 0, n = confirmedSelection.length; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * n);
}
return yourPassword;


// Return user's password 


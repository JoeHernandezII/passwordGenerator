// Assignment Code
var generateBtn = document.querySelector("#generate");
//
var passwordLength = prompt("How long do you want the password to be?");
console.log(passwordLength);
var lowerCase = confirm("Would you like lowercase letters?");
console.log(lowerCase);
var upperCase = confirm("Would you like uppercase letters?");
console.log(upperCase);
var numericPass = confirm("Does the password need to have numbers?");
console.log(numericPass);
var specialCharacters = confirm("Does the password need special characters?");
console.log(specialCharacters);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

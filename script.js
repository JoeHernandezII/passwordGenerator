var length = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

var upperCase = confirm("Would you like to use uppercase letters?");
var lowerCase = confirm("Would you like to use lowercase letters?");
var numeric = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use special characters?");

while (!upperCase && !lowerCase && !numeric && !symbols) {
  alert("You must select at least one character type!");
  upperCase = confirm("Would you like to use uppercase letters?");
  lowerCase = confirm("Would you like to use lowercase letters?");
  numeric = confirm("Would you like to use numbers?");
  symbols = confirm("Would you like to use special characters?");
}

window.addEventListener('load', function() {
  generateNewPassword();
});

function generateNewPassword() {
  var password = "";

  var allowed = {};
  if (upperCase) password += rando(allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM");
  if (lowerCase) password += rando(allowed.lowers = "qwertyuiopasdfghjklzxcvbnm");
  if (numeric) password += rando(allowed.numbers = "1234567890");
  if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");

  for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

  document.getElementById("password").value = randoSequence(password).join("");
}
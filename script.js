// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Randomly generate the secure password
function generatePassword() {
  let output = "";
  let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=\|}]{[:;?/><";

  let passwordLen = prompt("Enter a length between 8 and 128 characters: ");
  while(passwordLen < 8 || passwordLen > 128) {
    alert("Try again...");
    passwordLen = prompt("Enter a length between 8 and 128 characters: ");
  }

  let lower = confirm("Would you like lowercase characters?");
  let upper = confirm("Would you like uppercase characters?");
  let numeric = confirm("Would you like numeric characters?");
  let special = confirm("Would you like special characters?");

  while(lower === false && upper === false && numeric === false && special === false) {
    alert("You must have one character type chosen, Try again...");
    lower = confirm("Would you like lowercase characters?");
    upper = confirm("Would you like uppercase characters?");
    numeric = confirm("Would you like numeric characters?");
    special = confirm("Would you like special characters?");
  }
  
  for(let i = 0; i < passwordLen; i++) {
    output += charSet.charAt(Math.floor(Math.random() * charSet.length));    
  }

  return output;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

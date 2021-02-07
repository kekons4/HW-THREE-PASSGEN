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
  // what will be returned
  let output = "";
  
  // used to generate the random password 
  let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=\|}]{[:;?/><";

  // prompts user to enter the desired length for password
  let passwordLen = prompt("Enter a length between 8 and 128 characters: ");

  // This checks whether the user entered a valid value, if not try again.
  while(passwordLen < 8 || passwordLen > 128) {
    alert("Try again...");
    passwordLen = prompt("Enter a length between 8 and 128 characters: ");
  }

  // Asks user if they want lowercase, uppercase, numeric, and special characters
  let lower = confirm("Would you like lowercase characters?");
  let upper = confirm("Would you like uppercase characters?");
  let numeric = confirm("Would you like numeric characters?");
  let special = confirm("Would you like special characters?");

  // checks whether the user picked at least of the choices, if not alerts them to try again
  while(lower === false && upper === false && numeric === false && special === false) {
    alert("You must have one character type chosen, Try again...");
    lower = confirm("Would you like lowercase characters?");
    upper = confirm("Would you like uppercase characters?");
    numeric = confirm("Would you like numeric characters?");
    special = confirm("Would you like special characters?");
  }
  
  // depending on the length of password the for loop will iterate.
  for(let i = 0; i < passwordLen; i++) {
    
    // add a random character to output 
    output += charSet.charAt(Math.floor(Math.random() * charSet.length));    
  
  }

  // return ouput
  return output;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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
  let lowerSet = "abcdefghijklmnopqrstuvwxyz";
  let upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numSet = "0123456789";
  let specialSet = "!@#$%^&*()_-+=\|}]{[:;?/><";

  // prompts user to enter the desired length for password
  let passwordLen = Number(prompt("Enter a length between 8 and 128 characters: "));

  // This checks whether the user entered a valid value, if not try again.
  
  while(Number.isInteger(passwordLen) === false || passwordLen < 8 || passwordLen > 128) {
    alert("Try again...");
    passwordLen = Number(prompt("Enter a length between 8 and 128 characters: "));
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

    // Logic table that goes through all possible outcomes of what the user can choose
    
    // Lowercase: false | uppercase: false | numbers: false | special characters: true
    if(lower === false && upper === false && numeric === false && special === true) {
      output += specialSet.charAt(Math.floor(Math.random() * specialSet.length));
    } 
    // Lowercase: false | uppercase: false | numbers: true | special characters: false
    else if(lower === false && upper === false && numeric === true && special === false) {
      output += numSet.charAt(Math.floor(Math.random() * numSet.length));
    }
    // Lowercase: false | uppercase: false | numbers: true | special characters: true
    else if(lower === false && upper === false && numeric === true && special === true) {
      let random = Math.floor(Math.random() * 2);
      if(random === 0) {
        output += specialSet.charAt(Math.floor(Math.random() * specialSet.length));
      } else {
        output += numSet.charAt(Math.floor(Math.random() * numSet.length));
      } 
    } 
    // Lowercase: false | uppercase: true | numbers: false | special characters: false
    else if(lower === false && upper === true && numeric === false && special === false) {
      output += upperSet.charAt(Math.floor(Math.random() * upperSet.length));
    } 
    // Lowercase: false | uppercase: true | numbers: false | special characters: true
    else if(lower === false && upper === true && numeric === false && special === true) {
      let random = Math.floor(Math.random() * 2);
      if(random === 0) {
        output += specialSet.charAt(Math.floor(Math.random() * specialSet.length));
      } else {
        output += upperSet.charAt(Math.floor(Math.random() * upperSet.length));
      } 
    } 
    // Lowercase: false | uppercase: true | numbers: true | special characters: false
    else if(lower === false && upper === true && numeric === true && special === false) {
      let random = Math.floor(Math.random() * 2);
      if(random === 0) {
        output += numSet.charAt(Math.floor(Math.random() * numSet.length));
      } else {
        output += upperSet.charAt(Math.floor(Math.random() * upperSet.length));
      } 
    } 
    // Lowercase: false | uppercase: true | numbers: true | special characters: true
    else if(lower === false && upper === true && numeric === true && special === true) {
      let random = Math.floor(Math.random() * 3);
      if(random === 0) {
        output += specialSet.charAt(Math.floor(Math.random() * specialSet.length));
      } else if(random === 1) {
        output += numSet.charAt(Math.floor(Math.random() * numSet.length));
      } else {
        output += upperSet.charAt(Math.floor(Math.random() * upperSet.length));
      }
    } 
    // Lowercase: true | uppercase: true | numbers: true | special characters: false
    else if(lower === true && upper === false && numeric === false && special === false) {
      output += lowerSet.charAt(Math.floor(Math.random() * lowerSet.length));
    } 
    // Lowercase: true | uppercase: false | numbers: false | special characters: true
    else if(lower === true && upper === false && numeric === false && special === true) {
      let random = Math.floor(Math.random() * 2);
      if(random === 0) {
        output += specialSet.charAt(Math.floor(Math.random() * specialSet.length));
      } else {
        output += lowerSet.charAt(Math.floor(Math.random() * lowerSet.length));
      } 
    } 
    // Lowercase: true | uppercase: false | numbers: true | special characters: false
    else if(lower === true && upper === false && numeric === true && special === false) {
      let random = Math.floor(Math.random() * 2);
      if(random === 0) {
        output += numSet.charAt(Math.floor(Math.random() * numSet.length));
      } else {
        output += lowerSet.charAt(Math.floor(Math.random() * lowerSet.length));
      } 
    } 
    // Lowercase: true | uppercase: false | numbers: true | special characters: true
    else if(lower === true && upper === false && numeric === true && special === true) {
      let random = Math.floor(Math.random() * 3);
      if(random === 0) {
        output += specialSet.charAt(Math.floor(Math.random() * specialSet.length));
      } else if(random === 1) {
        output += numSet.charAt(Math.floor(Math.random() * numSet.length));
      } else {
        output += lowerSet.charAt(Math.floor(Math.random() * lowerSet.length));
      }
    } 
    // Lowercase: true | uppercase: true | numbers: true | special characters: true
    else if(lower === true && upper === true && numeric === false && special === false) {
      let random = Math.floor(Math.random() * 2);
      if(random === 0) {
        output += upperSet.charAt(Math.floor(Math.random() * upperSet.length));
      } else {
        output += lowerSet.charAt(Math.floor(Math.random() * lowerSet.length));
      } 
    } 
    // Lowercase: true | uppercase: true | numbers: false | special characters: true
    else if(lower === true && upper === true && numeric === false && special === true) {
      let random = Math.floor(Math.random() * 3);
      if(random === 0) {
        output += specialSet.charAt(Math.floor(Math.random() * specialSet.length));
      } else if(random === 1) {
        output += upperSet.charAt(Math.floor(Math.random() * upperSet.length));
      } else {
        output += lowerSet.charAt(Math.floor(Math.random() * lowerSet.length));
      }
    } 
    // Lowercase: true | uppercase: true | numbers: true | special characters: true
    else if(lower === true && upper === true && numeric === true && special === true) {
      let random = Math.floor(Math.random() * 4);
      if(random === 0) {
        output += specialSet.charAt(Math.floor(Math.random() * specialSet.length));
      } else if(random === 1) {
        output += numSet.charAt(Math.floor(Math.random() * numSet.length));
      } else if(random === 2) {
        output += upperSet.charAt(Math.floor(Math.random() * upperSet.length));
      } else {
        output += lowerSet.charAt(Math.floor(Math.random() * lowerSet.length));
      }
    }   
  }

  // return ouput
  return output;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

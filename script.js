// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Characters stored in an array for generation of password
var completePassword = [];
var lowercase = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`,];
var uppercase = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`,];
var special = [`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `-`, `=`, `,`, `.`, `?`, `:`, `-`, `~`];
var number = [`0`,`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`,];
var createdPassword = ``;

// To Write the Password
function writePassword() {

  // To Generate the password
  function generatePassword() {

    // To convert the string inside the arrays into Integers
    passwordLength = parseInt(window.prompt(`Input Password Length`));  
  
    // Prompt the length of the password from 8 to 128 characters
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert(`Must choose a length of at least 8 characters and no more than 128 characters`)
      return;
    } 

    // Length of password must be an integer not a letter
    if (!passwordLength) {
      window.alert(`Must input a number`)
      return; 
    } 
  
    // If statement asking what type of characters will be included for the password and storing it to Var
    var lowercaseChoice = confirm(`Include lowercase characters?`); {
    } 

    if (lowercaseChoice) {
      completePassword = completePassword.concat(lowercase);
    } 
    
    var uppercaseChoice = confirm(`Include uppercase characters?`); {
    } 
    
    if (uppercaseChoice) {
      completePassword = completePassword.concat(uppercase);
    } 

    var specialCharChoice = confirm(`Include special characters?`); {
    } 

    if (specialCharChoice) {
      completePassword = completePassword.concat(special);
    } 

    var numberChoice = confirm(`Include numbers?`); {
    } 

    if (numberChoice) {
      completePassword = completePassword.concat(number);
    } 
   
    if (!lowercaseChoice && !uppercaseChoice && !specialCharChoice && !numberChoice) {
      window.alert(`At least one character type should be selected`)
      return;
    }

    // Generates the password from information stored
    for (var i = 0; i < passwordLength; i++) {
      var passwordRandom = Math.floor(Math.random() * completePassword.length);
      createdPassword += completePassword.slice(passwordRandom, passwordRandom + 1); 
    }
    
    console.log(passwordLength);
    console.log(completePassword);
    console.log(createdPassword);
  } 

  // Write password to the #password input
  var writePassword = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = createdPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
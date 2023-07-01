
// Creates variable named generateBtn that references #generate (generate button id)
var generateBtn = document.querySelector("#generate");

// Creates Global Variables
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","w","y","z"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers = ["1","2","3","4","5","6","7","8","9","0"]
var specialCharacters = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","^","_","`","{","|","}","~"]

// Write password to the #password input
function writePassword() { // creates function "writePassword"
    var password = generatePassword();   // creates variable "password" with function called generatePasswork()
    var passwordText = document.querySelector("#password");   // creates variable "passworkText" with function grabbing "id=password" in html
    passwordText.value = password;   //setting value to password
  }

// Creates function generatePassword that asks for the number of characters desired, returns alert message if it does not fulfill requirements and generates password string
function generatePassword() {
  var password = ''   //Create password variable that is an empty string
  var characterPool = []
  var passLengthString = prompt("How many characters on the password?")
  var passLength = parseInt(passLengthString, 10) // converts length from string to integer
      console.log(passLength)
      if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
        alert("Password length must be a number between 8 and 128 characters. Try again.");
        return
      }

        // concatenates the arrays of only variables that confirmed yes/true, and return to the beginning if all variables confirmed no/false
        var hasLower = confirm("Include lowercase?")
          if (hasLower === true) {
            characterPool = characterPool.concat(lowerCase)
          }

        var hasUpper = confirm("Include uppercase?")
          if (hasUpper === true)  {
            characterPool = characterPool.concat(upperCase)
          }       

        var hasNumbers = confirm("Include numbers?")
          if (hasNumbers === true)  {
            characterPool = characterPool.concat(numbers)
          }  

        var hasSpecialCharacters = confirm("Include special characters?")
          if (hasSpecialCharacters === true)     {
            characterPool = characterPool.concat(specialCharacters)
          }     

          if (hasLower === false && hasUpper === false && hasNumbers === false && hasSpecialCharacters === false) {
            alert("Select at least one type of character.");
            return;
          }

  // Create a foorloop that runs passLength number of times, selecting a single random character from the array
  for (var i=0; i < passLength ; i++) {
    var randomIndex = Math.floor(Math.random()*characterPool.length);
    var randomValue = characterPool[randomIndex];
    password = password + randomValue // append generated character to the previous generated character
  }

// calls the function password
return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
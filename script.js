
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
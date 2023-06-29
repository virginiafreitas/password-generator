/* WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/

// Get references to the #generate element
// creates variable that references the generate button with the variable name generateBtn
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// creates function "writePassword"
function writePassword() {
// creates variable "password" with function called generatePasswork()
  var password = generatePassword();
// creates variable "passworkText" with function grabbing "id=password" in html
  var passwordText = document.querySelector("#password");
//setting value to password
  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);



/* Pseudo coding instructions from class
Phase 1
Creating variable and getting the info we need
What do we need to do
must PROMPT use for length of the work (8-128)(use prompt)
Confirm user for upper/lower case (yes/no - use CONFIRM)
Confirm user if theyd like to use numbers
Create a pool of available characters (lowercase/uppercase/numbers/special charachters)

var availablechars = ["a", "b", "c",...,"z","A","B",...,"Z",1,2,3,4,5,6,7,8,9,0, etc] 

All are yes/no except for length
Think about edfe cases for bad length inputs**

Phase 2
What values doe we need to track
Create passwork variable that is an EMPTY STRING
Create a foorloop that runs length number of times
In for loop we need to generate a single random character and uppend this character to our password

FOR LOOP STEPS
Create a random number between 0 and length of our available pool character types array depending on what user choses
Select 1 element from array of availablechars at index raandom number we generate
var newChar = availablechars[randomNum]
Append this new element to password variable
RETURN passwork we just created


*/

function.generatePasswod(){
//generate prompts to ask what kind of passwork
  //include number? using a prompt
  //include lowercase letters? using confirm
  //include uppercase letters? using confirm
  //include special characters? using confirm
//create passwork
return completePassword
}


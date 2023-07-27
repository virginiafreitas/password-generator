# Password Generator

  [![GitHub License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

The project aims to develop a password generation program tailored for business or personal purposes, wherein users can define specific requirements. By eliminating the need for creative thinking in generating new passwords, the program enhances convenience, efficiency, and security. This project served to me as a valuable learning experience, expanding my knowledge of JavaScript and enhancing my skills in the language.

## Installation

1. Create variable named generateBtn that references #generate (generate button id).
2. Create Global Variables
3. Write password to the #password input
4. Create function generatePassword that asks for the number of characters desired, returns alert message if it does not fulfill requirements and generates password string
5. Create password variable that is an empty string
6. Convert length from string to integer
7. Concatenate the arrays of only variables that confirmed yes/true, and return to the beginning if all variables confirmed no/false
8. Create a foorloop that runs passLength number of times, selecting a single random character from the array
9. Append generated character to the previous generated character
10. Call the function password
11. Add event listener to generate button

## Usage

1. Open the following URL in the browser: https://virginiafreitas.github.io/password-generator/
2. Click on the "Generate Password" button.
3. Select how many characters you'd like in the password. Password needs to be within 8 and 128 characters, so if you type a number outside of that range you'll have to start over.
4. Select OK if you'd like to use lowercases, or select Cancel if you don't.
5. Select OK if you'd like to use uppercases, or select Cancel if you don't.
6. Select OK if you'd like to use numbers, or select Cancel if you don't.
7. Select OK if you'd like to use special characters, or select Cancel if you don't.
8. If you select Cancel to all these options, you'll have to start over.
9. After all 5 questions are selected, the password will be generated and displayed in the dashed box.

   ![screenshot1](https://github.com/virginiafreitas/password-generator/assets/137131281/7a0cd560-4435-4ae5-b64c-32472279378f)

   ![screenshot2](https://github.com/virginiafreitas/password-generator/assets/137131281/fb1464db-a2e1-4ac3-b613-114ee7a8d611)

   ![screenshot3](https://github.com/virginiafreitas/password-generator/assets/137131281/e017f421-29eb-452a-bf6d-ddc2cb043504)

   ![screenshot4](https://github.com/virginiafreitas/password-generator/assets/137131281/33a91048-4e37-465d-b6ce-98dab9c82244)

   ![screenshot5](https://github.com/virginiafreitas/password-generator/assets/137131281/289b1a6c-d373-4357-8c60-142accdeae5f)



## Credits

I have received advice from the UC Berkeley Extension tutors Jeremy Jones and Ashton Foston.
I also reached out to the Mozilla Developer webpage to learn how to use some of the functions. ( https://developer.mozilla.org/en-US/ )

## License

MIT License

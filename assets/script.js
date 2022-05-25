var generateBtn = document.querySelector("#genrate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("password");
    
    passwordText.value = password;
 
var lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz'
var randomNum = getRandomInt(lowerCaseChar.length + 1);
console.log('random char is: ', lowerCaseChar[randomNum]);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
}
generateBtn.addEventListener("click", writePassword);
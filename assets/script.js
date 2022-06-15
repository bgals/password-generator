var generateBtn = document.querySelector("#generate");

function genPassword() {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890?.!@#$%^&*()";
  var passwordLength = 15;
  var password = "";

for (var i = 0; i <= passwordLength; i++) {
 var randomNumber = Math.floor(Math.random() * chars.length);
 password += chars.substring(randomNumber, randomNumber +1);
}

document.getElementById("password").value = password;
}

generateBtn.addEventListener("click", genPassword);
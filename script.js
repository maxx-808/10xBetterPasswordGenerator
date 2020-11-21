// variables for the password, all the types of characters
const uppCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specCharac = "`~!@#$%^&*()_+-=[]{}\|:'<>?,./;";

// the variables for what is selected and what is the password
let userSelect = [];
let userPass = [];

// Write password to the #password input
function writePassword() {
  userPass = [];
  
  let length = prompt("Choose between 8 and 128 digits for your password");
  if(length < 8 || length > 128 ) {
    alert("Sorry but your password must be between 8 and 128 digits. Also make sure you are typing in numbers only.");
    return;
  };
  console.log("length of your password will be: " + length);

  let upper = confirm("Would you like upper case letters in your password?");
  if(upper) {
    userSelect.push(...uppCase);
  };
  console.log("all possible characters after choosing the first group are: " + userSelect);

  let lower = confirm("Would you like lower case letters in your password?");
  if(lower) {
    userSelect.push(...lowCase);
  };
  console.log("all possible characters after choosing the 2 groups are: " + userSelect);

  let digits = confirm("Would you like numbers in your password?");
  if(digits) {
    userSelect.push(...numbers);
  };
  console.log("all possible characters after choosing the 3 groups are: " + userSelect);

  let special = confirm("Would you like special characters in your password?");
  if(special) {
    userSelect.push(...specCharac);
  };
  console.log("all possible characters after choosing the 4 groups are: " + userSelect);

  if (upper === false && lower === false && digits === false && special === false) {
    alert("Sorry, you need to have at least one of the different character types in your password.");
    return;
  };

  if(upper) {
    var upMessage = (" and upper case characters");
  }  else {
    var upMessage = ("");
  };

  if(lower) {
    var lowMessage = (" and lower case characters");
  }  else {
    var lowMessage = ("");
  };

  if(digits) {
    var digMessage = (" and digits");
  } else {
    var digMessage = ("");
  };

  if(special) {
    var specMessage = (" and special characters");
  } else {
    var specMessage = ("");
  };

  alert("Your password is " + length + " characters long," + upMessage + lowMessage + digMessage + specMessage + ".")


  for ( let i = 0; i < length; i++) {
    userPass.push(userSelect[Math.floor(Math.random() * userSelect.length)]);
    var password = userPass.join('');
  };
  
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log("the randomized password is: " + userPass);
};

//generating password
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


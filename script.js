// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var wantsUppercase;
var wantsLowercase;
var wantsNumbers;
var wantsSpecialCharacters;
var userChoice;

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var characters = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "[",
  "\\",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  passwordLength = window.prompt(
    "How many total characters would you like?  Please enter a number from 8-128"
  );
  var parsedpasswordLength = parseInt(passwordLength);

  if (isNaN(parsedpasswordLength)) {
    return null;
  } else {
    if (parsedpasswordLength < 8 || parsedpasswordLength > 128) {
      window.alert("Please enter a number from 8-128");
      return null;
    }
  }

  wantsUppercase = window.confirm(
    "Do you want uppercase letters in your password?"
  );
  wantsLowercase = window.confirm(
    "Do you want lowercase letters in your password?"
  );
  wantsNumbers = window.confirm("Do you want numbers in your password?");
  wantsSpecialCharacters = window.confirm(
    "Do you want special characters in your password?"
  );

  if (
    !wantsUppercase &&
    !wantsLowercase &&
    !wantsNumbers &&
    !wantsSpecialCharacters
  ) {
    userChoice = alert("Please choose at least one criteria");
  } else if (wantsLowercase && wantsNumbers && wantsSpecialCharacters) {
    userChoice = lowerCase.concat(upperCase, numbers, characters);
    console.log(userChoice);
  } else if (wantsLowercase && wantsUppercase && wantsNumbers) {
    userChoice = lowerCase.concat(upperCase, numbers);
    console.log(userChoice);
  } else if (wantsLowercase && wantsUppercase && wantsSpecialCharacters) {
    userChoice = lowerCase.concat(upperCase, characters);
    console.log(userChoice);
  } else if (wantsLowercase && wantsNumbers && wantsSpecialCharacters) {
    userChoice = lowerCase.concat(numbers, characters);
    console.log(userChoice);
  } else if (wantsUppercase && wantsNumbers && wantsSpecialCharacters) {
    userChoice = upperCase.concat(numbers, characters);
    console.log(userChoice);
  } else if (wantsLowercase && wantsUppercase) {
    userChoice = lowerCase.concat(upperCase);
    console.log(userChoice);
  } else if (wantsLowercase && wantsNumbers) {
    userChoice = lowerCase.concat(numbers);
    console.log(userChoice);
  } else if (wantsLowercase && wantsSpecialCharacters) {
    userChoice = lowerCase.concat(characters);
    console.log(userChoice);
  } else if (wantsUppercase && wantsNumbers) {
    userChoice = upperCase.concat(numbers);
    console.log(userChoice);
  } else if (wantsUppercase && wantsSpecialCharacters) {
    userChoice = upperCase.concat(characters);
    console.log(userChoice);
  } else if (wantsNumbers && wantsSpecialCharacters) {
    userChoice = numbers.concat(characters);
    console.log(userChoice);
  } else if (wantsLowercase) {
    userChoice = lowerCase;
    console.log(userChoice);
  } else if (wantsUppercase) {
    userChoice = upperCase.concat(upperCase);
    console.log(userChoice);
  } else if (wantsNumbers) {
    userChoice = numbers;
    console.log(userChoice);
  } else if (wantsSpecialCharacters) {
    userChoice = characters;
    console.log(userChoice);
  }

  var passwordBlank = [];

  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoice[Math.floor(Math.random() * userChoice.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
}

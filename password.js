const { stringify } = require('querystring');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Welcome to the password validator tool! What password would you like to validate?", function(input){
  tokens = input.split(' ');

let password = tokens[0]
//let number = Number(tokens[0])
//let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
//let numbers = [0-9]

if (password.length >= 10){
    console.log("Success! Your password is valid.")
} else {
    console.log("Sorry, that password is not long enough.")
}

  reader.close()

})
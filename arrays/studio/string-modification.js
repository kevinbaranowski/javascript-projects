const input = require('readline-sync');
let str = "LaunchCode";
let firstThreeChars = str.slice(0, 3)
let str2 = str.slice(2);
let str3 = str2.concat(firstThreeChars)
console.log(str3)
console.log(`${str} in Pig Latin is ${str3}`);

let answer = input.question('How many letter to relocate?')
if (answer <= str.length) {
    answer = 3;
    console.log("Amount of letters to relocated can not be larger than the word's length")
} else {
    console.log('Correct')
}
//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

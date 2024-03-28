let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
let splitStr1 = str.split('');
console.log(splitStr1);
let splitStr2 = str.split(' ');
console.log(splitStr2);
let splitStr3 = str.split('  ');
console.log(splitStr3);
//2) Use the join method on the array to identify the purpose of the parameter inside the ().
let joinedArr = arr.join(' ');
console.log(joinedArr);
joinedArr = arr.join('kevin');
console.log(joinedArr);
joinedArr = arr.join('_');
console.log(joinedArr);
//3) Do split or join change the original string/array?

// NO!

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
let arr2 = cargoHold.split(',');
console.log(arr2);
arr2.sort();
console.log(arr2);
const newStr = arr2.join(' ');
console.log(newStr);
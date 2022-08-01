let firstName = 'Sunday Opeyemi'; // Always use this (primitive) method 
let name = new String('Sunday Opeyemi'); // not advisable to use
let qoute = "\"If you don\'t have a goal  \\ you are not better than a goat\"";
console.log(qoute);
// document.getElementById('string').innerHTML = `Welcome to OIC Hub ${firstName}`;

// String Methods And properties
console.log(firstName.length)

// Methods to extract parts of string 
// slice, substring substr

// str.slice(start, end)

// let removestring = firstName.slice(0, firstName.length-2);
// let removestring = firstName.slice(0, -1);
// console.log(removestring)
/*  
substring
*/
let removestring = firstName.substring(0, 6);
console.log(removestring)
/*
 SubStr
 string.substr(start, lenght)
*/

console.log(firstName.substr(2));
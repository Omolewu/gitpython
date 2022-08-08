// Always use this (primitive) method 
// let name = new String('Sunday Opeyemi'); // not advisable to use
// let qoute = "\"If you don\'t have a goal  \\ you are not better than a goat\"";
// console.log(qoute);
// document.getElementById('string').innerHTML = `Welcome to OIC Hub ${firstName}`;

// String Methods And properties
// console.log(firstName.length)

// Methods to extract parts of string 
// slice, substring substr
// str.slice(start, end)
// let removestring = firstName.slice(0, firstName.length-2);
// let removestring = firstName.slice(0, -1);
// console.log(removestring)
/*  
substring
*/
// let removestring = firstName.substring(0, 6);
// console.log(removestring)
/*
 SubStr
 string.substr(start, lenght)
*/
// console.log(firstName.substr(2));
let firstName = 'Sunday Opeyemi';
// console.log(firstName.indexOf('y', 6))
// console.log(firstName.lastIndexOf('y'))
// console.log(firstName.search('y', 6))

let phone = "08102519926";
console.log(phone.includes('081'));
// console.log(firstName.search(/O/));
let text = "Hello world Hello world Hello world Hello world Hello world Hello world Hello world";
// console.log(text.match(/Ld/ig))
let a = 234;
console.log(a.toString(10)) // number to string function 
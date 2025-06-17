"use strict"; // treat all JS code as newer version

// alert(2 + 2); // shows "4" in the browser, not in nodeJS

console.log(2 + 2); 
console.log("Hello World"); 
// Keep good Cde readability
console.log("Hello", "World"); // Multiple arguments in console.log

// Data Types in JavaScript
// 1. Primitive Data Types
//    - Number
let age = 25; // Number
//    - String
let firstName = "Tushar"; // String
//    - Boolean
let isStudent = true; // Boolean
//    - Undefined
let lastName; // Undefined
//    - Null
let middleName = null; // Null
//    - Symbol (ES6 feature, not commonly used)
let uniqueId = Symbol("id"); // Symbol
//    - BigInt (ES11 feature, for large integers)
let bigNumber = BigInt(123456789012345678901234567890); // BigInt


// 2. Non-Primitive Data Types
//    - Object
let person = {
    name: "Tushar",
    age: 25,
    isStudent: true
}; // Object  

console.log(typeof age); // "number"
console.log(typeof firstName); // "string"
console.log(typeof isStudent); // "boolean"
console.log(typeof lastName); // "undefined"
console.log(typeof middleName); // "object" (null is considered an object in JS)
let score = "88"

console.log(typeof score); 

let ValueInNumber = Number(score); // Convert to Number
let ValueInString = String(score); // Convert to String
let ValueInBoolean = Boolean(score); // Convert to Boolean
console.log(typeof ValueInNumber); // "number"  
console.log(typeof ValueInString); // "string"
console.log(typeof ValueInBoolean); // "boolean" (true, since non-empty string is truthy)
console.log(ValueInNumber); // 88
console.log(ValueInString); // "88"     
console.log(ValueInBoolean); // true (non-empty string is truthy)

// Note: Converting a string to a number will result in NaN (Not a Number) if the string is not a valid number
// Example of NaN
let invalidNumber = Number("abc"); // NaN
console.log(invalidNumber); // NaN
console.log(typeof invalidNumber); // "number" (but it's NaN, which is a special value in JS)   


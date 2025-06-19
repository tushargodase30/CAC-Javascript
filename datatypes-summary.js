//  Primitive
// 7 types :  String, Number, Boolean, Null, undefined, Symbol, BigInt

// Reference (Non Primitive)
// Array, Objects, Functions


const id = Symbol('123') // Symbol is for uniqueness
const anotherID = Symbol('123')
console.log(anotherID==id)

const heros = ["Shaktiman","Chota bheem", "Power Rangers"];

let myObj = {
    naem : "Tushar",
    age : 23
}

const myFunction = function(){
    console.log("Hello Man")
}

// null -> datatype is object 
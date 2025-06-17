const accountID = 8923 //Cannot be reassigned
let accountEmail = "tushargodase30@gmail.com" //Can be reassigned
var accountPassword = "34523" //Can be reassigned
accountCity = "Akole" //Can be reassigned
let accountState;
accountEmail = "tushargodase30@gmail.co" // reassigned

/* Prefer not to use var - because of issue in block scope & functional scope*/

console.log(accountEmail);
console.table([accountID,accountEmail,accountPassword,accountCity,accountState])

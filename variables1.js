const accountId = 144223
let accountEmail = "Manas@gmail.com"
var accountPassword = "Manas@123"
accountCity = "Pune"

// accountId = 554 not allowed as const value cannot be changed

console.log(accountId);

accountEmail = "msd@gmail.com"
accountPassword = "msd@123"
accountCity = "Mumbai"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
var lets you redeclare the same name and leaks out of { } blocks, which causes sneaky bugs.

let blocks redeclaring and stays inside its block, but you can still change its value.

Use let for values that change (and const for ones that don't), and avoid var in new code.

*/
let accountState;


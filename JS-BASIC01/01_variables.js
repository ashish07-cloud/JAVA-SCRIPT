const accountId = 1444553
let accountEmail = "ashish2google.com"
var accountPaassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 => not allowed because of const

accountEmail = "hc@hc.com"
accountPaassword = "3234234"
accountCity = "Bengluru"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail ,accountPaassword, accountCity, accountState])

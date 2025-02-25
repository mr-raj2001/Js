const accountId = 144567
let accountEmail = "rishav@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

//accountId = 2 (not allowed)

console.log(accountId);

accountEmail = "rishav@yahoo.com"
accountPassword = "292000000"
accountCity = "motihari"  //yeh tarika acha nahi he

console.log(accountState);



//let helps us to solve scope problem in js whereas var has problem of scope(block and functional scope)




console.table([accountEmail,accountId,accountPassword,accountCity])

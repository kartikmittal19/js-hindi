const accountId = 15543
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "jaipur"//not preferable
let accountState

//accountId = 2//not allowed
console.log(accountId);

accountEmail ="kartik@google.com"
accountPassword = "7878"
accountCity = "alwar"

console.table([accountEmail,accountPassword,accountCity,accountState])

//var mein scope ki problem aati thi isliye apan let ka use krte h variable ko declare krne ke liye

/* prefer not to use var because of issue in block and functional scope*/
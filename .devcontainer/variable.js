const account_Id = 123455
let accountEmail = "neetu977@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// account_Id = 2 not allowed
accountEmail = "nas@,com"
accountPassword = "56789"
accountCity = "japan"
console.log(account_Id);
console.table([accountEmail, accountPassword, accountCity, accountState])

// { is called scope}
/*
Prefer not  to use var
because of issue in block scope and function scope
*/
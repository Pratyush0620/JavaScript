const accountId=14422
let accountEmail="prysdhfychhb@gmail.com"
var accountpassword="12345"
accountCity="Bhubhaneswar"
let accountState;  //If it is declared but not initialized then it will store undefined in it....

// accountId=2  (not allowed -> const varibales can't be reassigned to another value) 
accountEmail="hc@gamil.com"
console.log(accountEmail)
console.log(accountId)



console.log(a); // undefined (hoisted)
var a = 10;

function test() {
  var x = 5;
  if (true) {
    var x = 20; // same variable, not block-scoped
    console.log(x); // 20
  }
  console.log(x); // 20 (changed!)
}


console.log(b); // ❌ ReferenceError (TDZ)
let b = 10;

function test() {
  let y = 5;
  if (true) {
    let y = 20; // different variable (block-scoped)
    console.log(y); // 20
  }
  console.log(y); // 5 (not affected)
}

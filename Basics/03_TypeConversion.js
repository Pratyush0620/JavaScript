let score = null

console.log(typeof score)
console.log(typeof(score))

let isvalidNumber=Number(score)

console.log(typeof isvalidNumber) //Number 
console.log(isvalidNumber)  //NaN is a special type in javaScript

// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

let isLoggedIn= 12

let booleanIsLoggedIn =Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true
// 0 => false
// 12 => true or any number it is true
// "" => false
// "vc" => true
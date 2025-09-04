let score = null

// console.log(typeof score)
// console.log(typeof(score))

let isvalidNumber=Number(score)

// console.log(typeof isvalidNumber) //Number 
// console.log(isvalidNumber)  //NaN is a special type in javaScript

// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

let isLoggedIn= 12

let booleanIsLoggedIn =Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 => true
// 0 => false
// 12 => true or any number it is true
// "" => false
// "vc" => true

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);  //12
// console.log(1 + "2");  //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32 here first the addition done and then the string concat done

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let a=10
let b=a

let c=["abs"]
let d=c

a=12
console.log(a)
console.log(b)

c[0]="dvb"
console.log(c)
console.log(d)
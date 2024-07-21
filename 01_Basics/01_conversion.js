let a="Sush";
let b="33"
console.log(typeof a);

// let valueInNumber = Number(a)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);
let valueInNumber = Number(b)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


let isLoggedIn = "sush"

let booleanIsLoggedIn = Boolean(isLoggedIn) // coersion--convert without really coverting
 console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


//-----------------operations--------------------------

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " sushmitha"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
console.table([num1,num2,num3])

let gameCounter = 100
++gameCounter;
console.log(gameCounter);


// falsy truthy values
// let x=0//this will be coerced to false value in below if condtion
// let x=""
// let x="hello"
// let x=-1
// let x=[]
let x=undefined
if (x){
    console.log("truth");
}
else{
    console.log("false");
}

// negative and positive values considered as truthy values
// empty string-false, non-emoty string-true
// null,undefined,NaN-false
// {},[] and all other objects-true


console.log("3"-3);

console.log(3-"3");
console.log("3"*3);


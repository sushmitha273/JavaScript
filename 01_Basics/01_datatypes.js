// JavaScript has 8 Datatypes
// String-"hi","name"
// Number-2,7.6
// Bigint-JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.

// Boolean-true,false
// Undefined-default value of uninitialized variable
// Null-never assumed by default ,we can assign this as  a value if we want to reset/clear  a var
// Symbol-defines unique hidden identifier that no other code can accidently access. 
// Object-

// NaN ("Not a Number") is a special kind of number value that's typically encountered when the result of an arithmetic operation cannot be expressed as a number. It is also the only value in JavaScript that is not equal to itself.

// we can use typeof to check the type of data stored in var

let name="Sushmitha";
let b=856
let c=2.5
let d;
let e=null;
let f=BigInt("123456789012345678901234567890");
let g=true;
console.table([name,b,c,d,e,f.g]);
console.log(typeof (name));
console.log(typeof(c));
console.log(typeof d);//the typeof undefined is always undefined type
console.log(typeof e);// the typeof null is always object type
console.log(typeof f);
console.log(typeof g);
console.log(typeof(NaN));// the typeof NaN is always number type

// if calculation is invalid then it return NaN
console.log(2*"hi");

//All primitive types, except null and undefined, have their corresponding object wrapper types, which provide useful methods for working with the primitive values. For example, the Number object provides methods like toExponential(). When a property is accessed on a primitive value, JavaScript automatically wraps the value into the corresponding wrapper object and accesses the property on the object instead. However, accessing a property on null or undefined throws a TypeError exception


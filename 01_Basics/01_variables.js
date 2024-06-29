// variables are data containers
// we can change the data stored in the variable
// variables are case sensitive
// reserved words can't be used as a variable name, $,_,digits are allowed but name should not start with digits.
// variables are not tied to datatypes in js
// to delcare variable we use 3 keywords var,let,const
// const---can't be redelared or upadated, block scope
// let---cant be redeclared in same scope,but can be upadated, block scope
// var--can be redeclared in same scope and can be upadated, global scope and function scope. prefer not use var 
const id=12
let name="sush"
var city="Bengaluru"
username="sushmitha"
let mail; //uninitialized variables in js will not throw error instead it outputs undefined.

// id=13
name="Suman"
city="Mumbai"
username="Ravi"

console.table([name,city,username,mail])


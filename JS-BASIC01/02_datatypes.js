"use strict" // treat all js code as newer version

//alert(4+5) //=> we are using nodejs, not browser

// let name ="ashish"
// let age = 23
// let isLoggedIn = false
// let state = null

// DATA-TYPES
//number => range is from 2 to power of 53
//bigint => is used for very large numbers like trading websites
//string =>""
//boolean => true/false
//null => standalone value
// indefined =>
//symbol => unique - to clarify any object unique

// console.log(typeof state);
// console.log(typeof null); // object
// console.log(typeof undefined);// undefined

//primitive

// 7 types - String, Number , Boolean , Null , undefined
// BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null // => data type - object
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId); // false 


//Referance(Non-Primitive): arrays, object , functions

//arrays
const heros = ["shaktiman", "naagraj", "doga"];

//objects
let myObj = {
    name: "Ashish",
    age:22,
}

//functions

const myFunction = function(){
    console.log("Hello world")
}
myFunction();

// use "typeOf" to find the type of data 

//++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive ), Heap(Non-Primitive)

// let myYoutubename = "hiteshchoudhry"

// let anothername = myYoutubename
// anothername ="time-pass"

// console.log(myYoutubename);
// console.log(time-pass);

let userOne = {
    email: "user@google.com",

}
let userTwo = userOne

userTwo.email = "fefwefasdefds"

console.log(userOne.email);
console.log(userTwo.email);




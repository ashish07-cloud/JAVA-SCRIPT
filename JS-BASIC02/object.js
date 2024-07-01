//singleton
//object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Ashish",
    age: 23,
    location: "Jaik",
    [mySym]: "mykey1",
    email: "Ashish@fmao",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "username@google.com"// to change any value 
// console.log(JsUser.email);

// to freeze any value

//Object.freeze(JsUser)
JsUser.email = "faltuka@.com"
// console.log(JsUser.email);

//function 
//greetings
JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingtwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());





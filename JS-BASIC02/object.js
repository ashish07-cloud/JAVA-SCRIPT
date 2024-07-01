
//object literals

// const mySym = Symbol("key1")

// const JsUser = {
//     name: "Ashish",
//     age: 23,
//     location: "Jaik",
//     [mySym]: "mykey1",
//     email: "Ashish@fmao",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

// JsUser.email = "username@google.com"// to change any value 
// console.log(JsUser.email);

// to freeze any value

//Object.freeze(JsUser)
// JsUser.email = "faltuka@.com"
// console.log(JsUser.email);

//function 
//greetings
// JsUser.greeting = function(){
//     console.log("Hello JS User");
// }

// JsUser.greetingtwo = function(){
//     console.log(`Hello JS User, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingtwo());

//singleton
//object.create

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "ashish"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstnsme: "ashish",
            lastname: "rai"
        }
    }
}
// console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

//const obj3 = {obj1, obj2} => result is not what we want it will keep the objects in object

const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Ashish"
}
const{courseInstructor} = course
console.log(courseInstructor);



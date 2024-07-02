const user ={
    username: "ashish",
    price: 3432,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "abhi"
// user.welcomeMessage()
// console.log(this)

// const chai = function(){
// let username = "ashish"
// console.log(this);
// }

//arrow function 

const chai = () => {
    let username = "ashish"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 +num2 

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "ashish"})

console.log(addTwo(3,4))
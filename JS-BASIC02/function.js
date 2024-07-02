// functions

// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1 , number2){
    // let result = number1 + number2
    // return result
    //or
    return number1 + number2
}
const result = addTwoNumbers(3, 5)

// console.log("Result:", result);

function loginUserMessage(username) {
    if (username === undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in `
    
}

// console.log(loginUserMessage("ashish"));
// console.log(loginUserMessage());

//rest and spread operator 
//...=> variable name => rest operator 

function calculateCarPrice(...num1){
    return num1
}

// console.log(calculateCarPrice(200,300,400));

const user = {
    username: "ashish",
    price: 200
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is $
    {anyobject.price} `);
}
handleObject(user)


//function into array

const myNewArray = [200, 300, 400, 500]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
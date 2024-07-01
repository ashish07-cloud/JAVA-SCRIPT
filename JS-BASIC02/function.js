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

console.log("Result:", result);

function loginUserMessage(username) {
    if (username === undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in `
    
}

// console.log(loginUserMessage("ashish"));
console.log(loginUserMessage());
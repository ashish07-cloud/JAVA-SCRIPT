const name = "ashish"
const repoCount = 50

console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hiteshhc')

console.log(gameName[2]);
console.log(gameName.__proto__);

// console.log(gameName.fontcolor);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(1, 5)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    ashiosh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ashish.com/ashish20%rai"

console.log(url.replace('20%', '_'));

console.log(url.includes('rai'));

console.log(gameName.split('_'))

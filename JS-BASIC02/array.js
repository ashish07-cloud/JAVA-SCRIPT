//   ARRAY

const myArr = [0,1,2,3,4,5,6]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

// ARRAY METHODS

// myArr.push(8)
// console.log(myArr);
// myArr.pop()
// console.log(myArr)

// myArr.unshift(9);
// console.log(myArr)
// myArr.shift(9);
// console.log(myArr)
// const newArr = myArr.join()
// console.log(newArr)


// slice , splice

// console.log("A" , myArr);
// const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1,3)
// console.log("C", myArr)
// console.log(myn2)

// MORE ABOUT ARRAYS 

const marvel_heros = ["shaktiman", "padman" , "dapman"]
const dc_heros = ["teaman", "coffeman", "chaiman"]

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread => seperate all the elements of the given araray
//console.log(all_new_heros);

const another_array = [1,2,3, [4,5,6], [7,8], [9]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



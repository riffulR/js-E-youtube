// array= array object, as with arrays in other programming languages, 
// enables storing a collection of multiple items under a single variable
//  name, and has members for performing common array operations

const myArr = [0, 1, 2, 3, 4, 5]
const myArr2 = ["hero","superman"]
const myArr3 = new Array (1, 2, 3, 4)
// console.log(myArr[1]);

//Array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(8)
// myArr.shift()
// console.log(myArr);


// console.log((myArr.includes(9)));
// console.log(myArr.indexOf(4));

//  const newArr = myArr.join()
// console.log(myArr);
//  console.log(newArr);
//   console.log(typeof newArr);

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 4)
console.log("B ", myArr );
console.log(myn1);


console.log("        ");


console.log("C ", myArr );
const myn2 = myArr.splice(1, 4)
console.log("D ", myArr);

console.log(myn2);




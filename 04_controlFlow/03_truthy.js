// **truthy value

const userEmail = []
if (userEmail){
    console.log("Got the user Email");
    
}else{
    console.log("Don't have the user email");
    
}

//**falsy value  */
 //flase, 0, -0, BigInt, 0n, "", null, undefined

 

 //**truthy value
//  "0", 'false', " ", [], {}, function(){}


// if (userEmail.length===0){
// console.log("Array is empty");

// }

const emptyObj = {}

if (Object.keys(emptyObj).length===0){
    console.log("Object is empty");
    
}

//Nullish coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1);


let val2;
val2 = null ?? 10 ?? 30
console.log(val2);



let val3;
val3 = undefined ?? 10
console.log(val3);


//Terniary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80");




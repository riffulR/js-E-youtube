// Primitive

// 7 types:- String, Number, Boolean, null, undefined, symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('243')
const anotherId = Symbol('243')

// console.log (id === anotherId);

// const bigNumber = 534334536363235325n





// *Reference (Non primitive)

// Array, Objects, Functions 

const heros = ["abc", "xyz", "efg"]
    {
    name: "Rahul"
    age: 84
}

const myFunction = function(){
     console.log("Hello World");
    
}

// console.log(typeof heros);





// *****************************************************************************************
 // Stack (Primitive), Heap (Non-Primitive)

 let youtubeName = "rahulchaudhary"
 
 let anotherYoutubeName = youtubeName;
 anotherYoutubeName = "chaiaurcode"

//  console.log(youtubeName); 
//  console.log(anotherYoutubeName);


 let userOne = {
     
    email: "rahul@google.com"
    //   upi: "rahul@ybl"
   }

   let userTwo = userOne
   userTwo.email = "user@google.com"
    console.log(userOne);   
   console.log(userTwo);
   
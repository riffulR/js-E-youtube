//* singleton


//object literals

const mySym = Symbol("myKey1")

const jsUser ={
    name: "Rahul",
    "fullName": "Rahul Singh",
    age: 19,
    [mySym]: "Mykey1",
    email: "rahul@system.com",
    location: "noida",
    isLoggedIn: false,
    lastloginDays: ["Monday", "Thursday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullName"]);
// console.log(jsUser[mySym]);

jsUser.email = "rahul@google.com"
// Object.freeze(jsUser)
jsUser.email = "rahul@micro.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
   
}

jsUser.greeting2 = function(){
    console.log(`hello js user ${this.name}`);
    
}

console.log(jsUser.greeting);

console.log(jsUser.greeting2);


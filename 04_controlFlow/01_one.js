// const temperature = 41

// if(temperature > 50){
//     console.log("temp. is less then 50")
// }
// else{
//     console.log("Temp. is more than 50")
// }


// const score = 200
//  if (score>100){
//     const power = "Fly"
//     console.log(`User Power ${power}`);
    
//  }
//  console.log(`User Power ${power}`);
    
// const balance = 1000

//  if (balance<500){
//     console.log("amt less than 500");
    
//  }else if (balance<750){
//     console.log("amt less than 750");
//  }
// else if (balance<1000){
//     console.log("amt less than 1000");
//  }else {
//     console.log(" amt is less then 1200");
//  }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmali = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy course");
    
}
if (loggedInFromEmali || loggedInFromGoogle){
    console.log("User Logged In");
    
}
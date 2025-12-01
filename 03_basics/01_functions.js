// console.log("R");
// console.log("a");
// console.log("h");
// console.log("u");
// console.log("l");

function sayMyName() {
       console.log("R");
       console.log("a");
       console.log("h");
       console.log("u");
       console.log("l");

}
    // sayMyName()


    // function addTwoNumbers(number1, number2) {
    //     console.log(number1 + number2);
       

    // }
    
    // addTwoNumbers(2, 34)


    
    // function addTwoNumbers(number1, number2) {
    //    let result = number1 + number2
    //    return result

    // }
    //         const result = addTwoNumbers(33, 32)
    //     console.log("Result: ", result);
        
    

//     function addTwoNumbers(number1, number2) {
//     //    let result = number1 + number2
//     //    return result
//            return number1 + number2 
//     }
//             const result = addTwoNumbers(33, 32)
//         console.log("Result: ", result
        
    

function loginUser(userName){
        if(!userName){
               console.log("Please enter a userName");
              return
        }
        
       return `${userName} just logged in`
}

       //  console.log(loginUser());
        

       function calculateCartPrice(val1, val2, ...num1){
              return num1
       }
       //  console.log(calculateCartPrice(200, 400, 600, 800));
        

const user = {
       userName: "Rahul",
       price: 999
}

function handleObject(anyobject){
     console.log(`username is ${anyobject.userName} and the price is ${anyobject.price}`);
     
}
//  handleObject(user)
handleObject({
       userName: "Rahul",
       price: 888
})


const myNewArray = [200, 300, 400, 5000]
 
function returnvalue(getArray){
       console.log(getArray[1]);
       
}

returnvalue(myNewArray)
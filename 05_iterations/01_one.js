//for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


for(let i = 0; i <=10; i++){
    const element = i;
    if(element == 4){
        // console.log("4 is the best number");
        
    }
    // console.log(element);
    
}
 
for (let i = 0; i <= 10; i++) {
       console.log(`outer loop value: ${i}`);
    
    for (let j = 1; j <=10; j++) {
            console.log(`Inner loop value: ${j} and inner loop ${i}`);  
        console.log(i + '*' + j + ' = ' + i*j);
        
    }
 }


let myArr = ["flash", "batman", "superman"]

console.log(myArr.length);

 for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(myArr[index]);
    
 }


//  ** break and continue 

//  for (let i = 1; i <= 20; i++) {
//     if (i == 5){
//         console.log(`Detected ${i}`);
//         break
//     }
//      console.log(`value of i is ${i}`);
//   }




//  for (let i = 1; i <= 20; i++) {
//     if (i == 5){
//         console.log(`Detected ${i}`);
//         continue
//     }
//      console.log(`value of i is ${i}`);
//   }

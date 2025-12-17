const myNums = [1, 2, 3, 18, 4, 5]

// const initialValue = 0

// const sumWithinitial = myNums.reduce((acc, curr) => acc + curr, initialValue)

// console.log(sumWithinitial);




// const sumWithinitial = myNums.reduce((accumulator, currentValue) => {
//     // console.log(`acc: ${accumulator} and currVal ${currentValue}`)
//     return accumulator + currentValue}, initialValue )
    
// console.log(sumWithinitial);


const maxNums = myNums.reduce((num, num2) => {
    if (num > num2){
        return num
    } else {
        return num2;
    }
});

    console.log(maxNums);
    

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },

    
    {
        itemName: "python course",
        price: 2499
    },

    {
        itemName: "C++ course",
        price: 1499
    },

    {
        itemName: "mobile dev course",
        price: 12999
    },

    {
        itemName: "data science course",
        price: 9999
    }
]
const startVal = 0
const myTotal = shoppingCart.reduce((acc, curr) => acc + curr.price, startVal )

// console.log(myTotal);

 
// const coding = ["JSssss", "ruby", "Java", "python"]

// const value = coding.forEach ( (item) => {
//     console.log(item);

// })
//     console.log(value);
    

// const myNums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
// const newNums = myNums.filter((num) => (num<4))
// console.log(newNums);

// const myNumss =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
// const newNumss = myNumss.filter((num) => {
//     return num>3
// })
// console.log(newNumss);

// const myNums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums= []
// myNums.forEach((num)=>{
//     if (num>3) {
//        newNums.push(num)
//     }
// })
//      console.log(newNums);


     const books =
     [
        {
            title: 'Book One', genre: 'Fiction', publish: 1999, edition: 2016
        },

        {
            title: 'Book Two', genre: 'Non-Fiction', publish: 1989, edition: 2021
        },

        {
            title: 'Book Three', genre: 'History', publish: 1995, edition: 2013
        },

        {
            title: 'Book Four', genre: 'Non-Fiction', publish: 1978, edition: 2011
        },

        {
            title: 'Book Five', genre: 'Science', publish: 2001, edition: 20023
        },

        {
            title: 'Book Six', genre: 'Fiction', publish: 1984, edition: 2006
        },

        {
            title: 'Book Seven', genre: 'History', publish: 2001, edition: 2008
        },

        {
            title: 'Book Eight', genre: 'Science', publish: 1987, edition: 2005
        },

        {
            title: 'Book Nine', genre: 'Non-Fiction', publish: 2002, edition: 2015
        },
    ]


        //   const userBooks = books.filter((bk) => bk.genre === 'History')
           
        //   console.log(userBooks);
          

const userBooks2 = books.filter((bk)=> {
    return bk.publish >= 2000 && bk.genre === "History"

} )     
console.log(userBooks2);
   
    
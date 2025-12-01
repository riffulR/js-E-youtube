const coding = ["JSssss", "ruby", "Java", "python"]

// coding.forEach( function(val){
//     console.log(val);
    
// })

// coding.forEach( (item) => {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)


// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
    
// } )

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "JS"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]
myCoding.forEach( (val) => {
    console.log(val.languageName);
    
})
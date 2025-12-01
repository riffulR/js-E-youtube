const tinderUser = new Object()
// const tinderUser = {}

tinderUser.id = "abc123",
tinderUser.name= "Rahul",
tinderUser.isLoggedIn= false

// console.log(tinderUser);

const regularUser = {
     email: "rahul@google.com",
     fullname: {
        username: {
            firstname: "rahul",
            lastname: "Singh"

        }
    }
}
//    console.log(regularUser.fullname);
   
//     console.log(regularUser.fullname.username);
   
//    console.log(regularUser.fullname.username.firstname);
   
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}
 
// const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);

// const obj5 = {...obj1, ...obj2, ...obj3}
// console.log(obj5);


const user = [
    {
        id: 1,
        email: "r@gmail.com"
    },

    {
        id: 1,
        email: "v@gmail.com"
    },
      {
        id: 1,
        email: "v@gmail.com"
    }
]
//  console.log( user[0].email);
 
//  console.log((Object.keys(tinderUser)));
//  console.log((Object.values(tinderUser)));
//  console.log((Object.entries(tinderUser)));
 
//  console.log(tinderUser.hasOwnProperty('isLoggedIN'));

 const course = {
          
    price: 999,
    couse: "JS",
    courseInstructor: "Rahul"
 }

//  console.log(course.courseInstructor);
 
const {courseInstructor: instructor} = course

console.log(instructor);

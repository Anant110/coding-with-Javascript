// const student={
//     name:"Anant Pratap Singh",
//     age:12,
//     roll_no:12345,
//     course:"B.Tech"
// }

// // console.log(student["course"]);

// //if we wangt to change any value inside the object
// student["age"]=student["age"]+4;
// console.log(student["age"]);

// let str=`the name is ${student.name} and course is ${student.course}`; //template literals in javascript
// console.log(str);


// var obj1 = { 
//     x:  43, 
//     y:  "Hello world!", 
//     z: function(){ 
//        return this.x; 
//     } 
//  } 

// const output=obj1.z();
// console.log(output);


//with the introduction of ES6 we can not assign the function name like the above
var obj1 = { 
   x:  43, 
   y:  "Hello world!", 
   z(){ 
      return this.x; 
   } 
} 
const output=obj1.z();
console.log(output);
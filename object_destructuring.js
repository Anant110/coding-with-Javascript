
//Before ES6
// const details={
//     name:"Anant",
//     message:"Hello",
//     roll_no:90
// }

// const first=details.name;
// const second=details.message;
// console.log(first+" "+second);

//After ES6
// const details={
//     name:"Anant",
//     message:"Hello",
//     roll_no:90
// }
// const {name:name1,message:message1,roll_no:roll_no1}=details;
// console.log(name1);
// console.log(message1);
// console.log(roll_no1);

//if we want to use the same name as the property of object then you can remove the semicolon
const details={
    name:"Anant",
    message:"Hello",
    roll_no:90
}
const {name,message,roll_no}=details;
console.log(name);
console.log(message);
console.log(roll_no);
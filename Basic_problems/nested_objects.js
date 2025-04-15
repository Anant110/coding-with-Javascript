// const user={
//     info:{
//         name:"Anant",
//         dept:"B.Tech"
//     }
// }

// const {info:{name,dept}}=user; //when not assign the properties
// console.log(name);
// console.log(dept);

const user={
    info:{
        name:"Anant",
        dept:"B.Tech"
    }
}

const {info:{name:Username,dept:department}}=user; //when assign the properties
console.log(Username);
console.log(department);


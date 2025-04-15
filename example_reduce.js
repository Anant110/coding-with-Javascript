const users=[
    {FirstName:"Anant",LastName:"Singh",age:90},
    {FirstName:"Anuchar",LastName:"Khatri",age:89},
    {FirstName:"Anmol",LastName:"Ratan",age:70},
    {FirstName:"Tini",LastName:"Babu",age:70},
    {FirstName:"Maharaj",LastName:"Singh",age:76}
]

const output=users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }
    else{
        acc[curr.age]=1;
    }
    return acc;
},{});

console.log(output);

// Find out the names whose age is greater than 70
// const output1=users.reduce(function(acc,curr){
//     if(curr.age>70){
//         acc.push(curr.FirstName);
//     }
//     return acc;
// },[])
// console.log(output1);

const output1=users.filter((x)=>x.age>70).map((x)=>x.FirstName); //Use both filter as well as map
console.log(output1);

//concat method to merge arrays
// const arr1=[12,56,34,89,90];
// const arr2=[1,2,3,4,5,90];

// const final_arr=arr1.concat(arr2);
// const sortedarr=final_arr.sort(function(a,b){
//     return a-b;
// })
// console.log(sortedarr);


//merged arrays by using spread operator
const arr1=[12,56,34,89,90];
const arr2=[1,2,3,4,5,90];

const final_arr=[...arr1,...arr2];
const sortedarr=final_arr.sort(function(a,b){
    return a-b;
})
console.log(sortedarr);
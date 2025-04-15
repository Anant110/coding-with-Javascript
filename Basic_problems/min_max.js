//Find Maximum element
// const arr=[12,78,90,456,23];

// const find_max=arr.reduce(function (prev,curr) {
//     return prev>curr?prev:curr;
// })

// console.log(find_max);


//Find Smallest element
// const arr=[12,78,90,456,23];

// //reduce method
// const find_min=arr.reduce(function (prev,curr) {
//     return prev<curr?prev:curr;
// })

// console.log(find_min);

//Using the spread operator
// const arr=[12,78,90,34,67];
// const max_num=Math.max(...arr);
// const min_num=Math.min(...arr);
// console.log(max_num);
// console.log(min_num);


// Using apply method
const arr=[12,78,90,34,67];
const max_num=Math.max.apply(null,arr);
console.log(max_num);


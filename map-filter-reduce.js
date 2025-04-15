// const n=[2,5,1,9,5];

// // double=[4,10,1,18,10];
// // binary=['10', '101', '1', '1001', '101']

// const double=function(n){
//     return 2*n;
// }

// function binary(x){
//     return x.toString(2);
// }

// console.log(n.map(double));
// // console.log(n.map(binary));

// //Another method
// // const output=n.map(function binary(x){
// //     x.toString(2);
// // })

// // another method
// const output=n.map((x)=>x.toString(2));

// console.log(output);



//Filter function

// const arr=[4,5,8,9,10,11];

//store all odd values in array
// function isodd(x){
//     return x%2;
// }

// //store all values greater than 5
// function isgreater(m){
//     return m>5;
// }


// const output=arr.filter(isodd);
// console.log(output);

// const output1=arr.filter(isgreater);
// console.log(output1);


// Reduce function
const arr=[4,5,7,8,9,10];

// const output=function(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }

//Sum of all values in array using reduce function
// const output=arr.reduce(function(acc,nums){
//     acc+=nums;
//     return acc;
// },0)

// console.log(output);


//Find the max element inside the array
// const output1=function(element,arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>element){
//             element=arr[i];
//         }
//     }
//     return element;
// }
// console.log(output1(-1,arr));

//Using reduce function
// const output1=arr.reduce(function(ele,nums){
//     if(ele<nums){
//         ele=nums;
//     }
//     return ele;
// })
// console.log(output1);




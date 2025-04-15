//Example of spread
let array=[1,6,7,9];
console.log(...array);

//Copying an array
let array1=[12,67,45,89];
let array2=[...array1];
console.log(array2);

//Merging an array
let arr1=[23,67,34,12];
let arr2=[45,89,78,90];
let merge=[...arr1,...arr2];
console.log(merge);

//Passing multiple arguments to a function
let array7=[1,4,6,8,9,10];
sum(...array7);
function sum(a,b,c,d,e,f){
    console.log(a+b+c+d+e+f);
}



const arr1=[10,12,45,67,89];
const arr2=[45,89,90,10,12];

const arr_comp=arr1.length==arr2.length && 
//compares every element of arr1 present in arr2 or not
arr1.every((curr_ele)=>arr2.includes(curr_ele));

console.log(arr_comp);
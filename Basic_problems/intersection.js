const arr1=[10,12,45,89,89];
const arr2=[45,89,90,10,12];

let intersection=arr1.filter((num)=>{
    return arr2.includes(num);
})

console.log([...new Set(intersection)]);
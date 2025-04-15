const arr=[12,67,89,34,90,102];

const even=arr.filter((item)=>{
    return item%2===0;
})


console.log(even);

const odd=arr.filter((item)=>{
    return item%2!==0;
})

console.log(odd);